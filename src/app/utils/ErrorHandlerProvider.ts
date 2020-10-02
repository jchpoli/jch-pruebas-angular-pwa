import { ErrorHandler } from '@angular/core';
import * as Sentry from '@Sentry/browser';

export class ErrorHandlerProvider implements ErrorHandler {
  handleError(error: any): void{
    Sentry.captureException(error);
  }
}
