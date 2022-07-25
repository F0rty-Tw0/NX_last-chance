import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { take } from 'rxjs/operators';

import { environment } from '@last-chance/shared/utils';

import { WebApiService } from './web-api.service';

describe('WebApiService', () => {
  let service: WebApiService;
  let httpMock: HttpTestingController;
  const { apiUrl } = environment;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WebApiService],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(WebApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    // ASSERT
    expect(service).toBeTruthy();
  });

  it('should getLazy$ to return observable of type T', () => {
    // ARRANGE
    let initialData = '';

    // ACT
    service
      .getLazy$<string>('test')
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          initialData = data;
        },
      });

    // ASSERT
    const req = httpMock.expectOne(`${apiUrl}/test`);
    req.flush('test data');

    expect(initialData).toBe('test data');
  });
});
