import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.delete(this.urlApi + '/' + list.id);
  }

}

