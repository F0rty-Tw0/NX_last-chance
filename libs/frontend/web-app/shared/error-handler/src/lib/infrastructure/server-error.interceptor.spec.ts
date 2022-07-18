import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { take } from 'rxjs';

import { ServerErrorInterceptor } from './server-error.interceptor';

describe('AuthInterceptor', () => {
  let serverErrorInterceptor: ServerErrorInterceptor;
  let httpTestController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ServerErrorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerErrorInterceptor,
          multi: true,
        },
      ],
    });
  });

  beforeEach(() => {
    // ACT
    httpClient = TestBed.inject(HttpClient);
    serverErrorInterceptor = TestBed.inject(ServerErrorInterceptor);
    httpTestController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(serverErrorInterceptor).toBeTruthy();
  });

  it('should have intercept throw newError', () => {
    // ARRANGE
    let errResponse: unknown;
    const data = 'test error';

    // ACT
    httpClient
      .get('/test')
      .pipe()
      .subscribe({
        error: (err: unknown) => {
          errResponse = err;
        },
      });

    // ASSERT
    const req = httpTestController.expectOne('/test');
    req.flush(data, {
      status: 401,
      statusText: 'Unauthorized',
    });
    expect(errResponse).not.toBeUndefined();
  });

  it('should have intercept delay newError', fakeAsync(() => {
    // ARRANGE
    let errResponse: unknown;
    const data = 'test error';

    // ACT
    httpClient
      .get('/test')
      .pipe(take(1))
      .subscribe({
        error: (err: unknown) => {
          errResponse = err;
        },
      });

    // ASSERT
    const retryCount = 3;
    for (let i = 0; i < retryCount; i += 1) {
      const req = httpTestController.expectOne('/test');
      req.flush(data, {
        status: 500,
        statusText: 'Internal Server Error',
      });
      tick(2000);
    }

    expect(errResponse).not.toBeUndefined();
  }));
});
