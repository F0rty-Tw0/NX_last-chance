import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';

describe('Error Handler Service', () => {
  let service: ErrorHandlerService;
  let err: Error;

  const httpError = new HttpErrorResponse({ statusText: 'Not Found' });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ErrorHandlerService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ErrorHandlerService);
    err = new Error('test error');
  });

  it('should have getClientMessage return No Internet Connection if no internet connection is available', () => {
    // ARRANGE
    const clientMessageSpy = jest.spyOn(service, 'getClientMessage');
    jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);

    // ACT
    service.getClientMessage(err);

    // ASSERT
    expect(clientMessageSpy.mock.results[0].value).toEqual('No Internet Connection');
  });
  it('should have getClientMessage return error.rejection if passed parameter is a promise', async () => {
    // ARRANGE
    let promiseError;

    const rejectionError = {
      rejection: true,
      promise: true,
      message: 'test promise error',
    };
    const promise = Promise.reject(rejectionError);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await promise.catch((error: any) => {
      promiseError = error;
    });

    // ACT
    const test = service.getClientMessage(promiseError);

    // ASSERT
    expect(test).toBe(true);
  });
  it('should have getClientMessage return error message', () => {
    // ARRANGE
    const clientMessageSpy = jest.spyOn(service, 'getClientMessage');

    // ACT
    service.getClientMessage(err);

    // ASSERT
    expect(clientMessageSpy.mock.results[0].value).toEqual('test error');
  });

  it('should have getClientMessage return error.toString if error message is undefined', () => {
    // ARRANGE
    const clientMessageSpy = jest.spyOn(service, 'getClientMessage');
    err = new Error(undefined);

    // ACT
    service.getClientMessage(err);

    // ASSERT
    expect(clientMessageSpy.mock.results[0].value).toEqual(err.toString());
  });

  it('should have getClientStack return error.stack', () => {
    // ARRANGE
    const clientStackSpy = jest.spyOn(service, 'getClientStack');

    // ACT
    service.getClientStack(err);

    // ASSERT
    expect(clientStackSpy.mock.results[0].value).toEqual(err.stack);
  });

  it('should have getServerMessage return error.message', () => {
    // ARRANGE
    const serverMessageSpy = jest.spyOn(service, 'getServerMessage');

    // ACT
    service.getServerMessage(httpError);

    // ASSERT
    expect(serverMessageSpy.mock.results[0].value).toEqual(httpError.message);
  });

  it('should have getServerStack return error.statusText', () => {
    // ARRANGE
    const serverStackSpy = jest.spyOn(service, 'getServerStack');

    // ACT
    service.getServerStack(httpError);

    // ASSERT
    expect(serverStackSpy.mock.results[0].value).toEqual('Not Found');
  });
});
