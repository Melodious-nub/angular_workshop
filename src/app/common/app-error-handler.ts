import { ErrorHandler } from "@angular/core";

// this is the global errorhandler for unexpected error

 export class AppErrorHandler implements ErrorHandler {
    handleError(error: any) {
        // instead of alert i will use tost in future
      alert('An unexpected error occurred.');
      // in real life project this log goes to db or the server
      console.log(error);
    }
  }