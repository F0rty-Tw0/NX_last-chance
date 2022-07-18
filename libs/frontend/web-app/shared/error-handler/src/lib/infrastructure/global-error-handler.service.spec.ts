import { HttpErrorResponse } from '@angular/common/http';
import { Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { LoggerFacade } from '@last-chance/frontend/web-app/shared/logger';

import { ErrorHandlerFacade } from '../application/error-handler.facade';

import { GlobalErrorHandler } from './global-error-handler.service';

describe('GlobalErrorHandler', () => {
  let handler: GlobalErrorHandler;
  let loggerFacade: LoggerFacade;
  let injector: Injector;
  let errorHandlerFacade: ErrorHandlerFacade;

  const httpError = new HttpErrorResponse({ statusText: 'Not Found' });
  const error = new Error('test error');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        GlobalErrorHandler,
        Injector,

        {
          provide: ErrorHandlerFacade,
          useValue: {
            getServerMessage: jest.fn(),
            getServerStack: jest.fn(),
            getClientMessage: jest.fn(),
            getClientStack: jest.fn(),
          },
        },
        {
          provide: LoggerFacade,
          useValue: {
            error: jest.fn(),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    handler = TestBed.inject(GlobalErrorHandler);
    injector = TestBed.inject(Injector);
    loggerFacade = TestBed.inject(LoggerFacade);
    errorHandlerFacade = TestBed.inject(ErrorHandlerFacade);
  });

  it('should be created', () => {
    expect(handler).toBeTruthy();
  });

  it('should construct the injector', () => {
    expect(injector).toBeTruthy();
  });

  it('should have handleError call getServerMessage if error is type HttpError', () => {
    // ACT
    handler.handleError(httpError);

    // ASSERT
    expect(errorHandlerFacade.getServerMessage).toHaveBeenCalledWith(httpError);
  });

  it('should have handleError call getClientMessage if error is type HttpError', () => {
    // ACT
    handler.handleError(error);

    // ASSERT
    expect(errorHandlerFacade.getClientMessage).toHaveBeenCalledWith(error);
  });

  it('should have handleError call getServerStack if error is type HttpError', () => {
    // ACT
    handler.handleError(httpError);

    // ASSERT
    expect(errorHandlerFacade.getServerStack).toHaveBeenCalledWith(httpError);
  });

  it('should have handleError call getClientStack if error is type HttpError', () => {
    // ACT
    handler.handleError(error);

    // ASSERT
    expect(errorHandlerFacade.getClientStack).toHaveBeenCalledWith(error);
  });

  it('should have handleError call loggerService.error ', () => {
    // ACT
    handler.handleError(httpError);

    // ASSERT
    expect(loggerFacade.error).toHaveBeenCalled();
  });
});
