import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{
// Every Method of PostService is coming from DataService. also passes apiUrl on data service from here.
// passed constructor data on DataService

  constructor(http: HttpClient) {
    super(http, 'https://jsonplaceholder.typicode.com/posts');
  }

}

