import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  // Get Http Data From Api
  posts: any = [];
  private urlApi = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) {
    http.get(this.urlApi).subscribe(response => {
      this.posts = response;
    })
   }

  ngOnInit(): void {
  }

  createPost(inputTitle: HTMLInputElement){
    let post = { title: inputTitle.value }
    this.http.post(this.urlApi, JSON.stringify(post)).subscribe(response => {
      console.log(response);
    })
  }

}
