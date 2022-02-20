import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Here i implemented the data services for all re-uswable methods for crud operation on components
  // This the global data handle service, i created.

  constructor(private http: HttpClient, @Inject(String) private urlApi: string) { }

    // passing on sevice component
    getAll() {
      return this.http.get(this.urlApi)
      // mapping/transforming response object to array of javascript objects
      .pipe(map(response => response))
      // implemented error handler
      .pipe(catchError(this.handleError));
    }
  
    create(resource: any) {
      return this.http.post(this.urlApi, JSON.stringify(resource))
      // mapping/transforming response object to array of javascript objects
      .pipe(map(response => response))      
          // after rendering data from api, piped with errorHandler
      .pipe(catchError(this.handleError));
    }
  
    update(resource: any) {
      return this.http.put(this.urlApi + '/' + resource.id, JSON.stringify(resource))
      // mapping/transforming response object to array of javascript objects
      .pipe(map(response => response))      
      // after rendering data from api, piped with errorHandler
      // in this piped catchError we passed The handleError method-Reference
      .pipe(catchError(this.handleError));
    }
  
    delete(id: number) {
      return this.http.delete(this.urlApi + '/' + id)
      // mapping/transforming response object to array of javascript objects
      .pipe(map(response => response))      
      // after rendering data from api, piped with errorHandler
      // in this piped catchError we passed The handleError method-Reference
      .pipe(catchError(this.handleError));
    }
  
    // Re-useable error handling Methods Implementation
    private handleError(error: Response) {
      if (error.status === 404){
        // these are comming from common folder classes
        return throwError( () => new NotFoundError() );
        // implemented badInput error in this method
      } else if (error.status === 400) {
        return throwError( () => new BadInput(error.json()) );
      } else {
        return throwError( () => new AppError(error.json()) );
      }
          }

}
