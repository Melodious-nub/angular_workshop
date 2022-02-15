import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlApi = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  // passing on sevice component
  getPosts() {
    return this.http.get(this.urlApi);
  }

  createPost(body: any) {
    return this.http.post(this.urlApi, JSON.stringify(body));
  }

  updatePost(list: any) {
    return this.http.put(this.urlApi + '/' + list.id, JSON.stringify(list));
  }

  deletePost(list: any) {
    return this.http.delete(this.urlApi + '/' + list.id).
    // 
    pipe(catchError((error: Response) => {
      if (error.status ===404){
        return throwError(() => new NotFoundError());
      } else {
        return throwError(() => new AppError(error));
      }
    }));
  }

}

