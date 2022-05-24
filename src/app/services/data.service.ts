import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Here i implemented the data services for all re-uswable methods for crud operation on components
  // This the global data handle service, i created.

  urlApi = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

    // passing on sevice component
    getAll() {
      return this.http.get<any>(this.urlApi)
      // mapping/transforming response object to array of javascript objects
      .pipe(map(response => response))
    }
  
    create(resource: any) {
      return this.http.post(this.urlApi, JSON.stringify(resource))
      // mapping/transforming response object to array of javascript objects
      .pipe(map(response => response))      
    }
  
    update(resource: any) {
      return this.http.put(this.urlApi + '/' + resource.id, JSON.stringify(resource))
      // mapping/transforming response object to array of javascript objects
      .pipe(map(response => response))      
    }
  
    delete(id: number) {
      return this.http.delete(this.urlApi + '/' + id)
      // mapping/transforming response object to array of javascript objects
      .pipe(map(response => response))      
    }
  

}
