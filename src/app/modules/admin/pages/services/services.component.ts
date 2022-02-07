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

//Create New post and api Propertises 
  createPost(inputTitle: HTMLInputElement){
    let post: any = { title: inputTitle.value};
    inputTitle.value = '';

    this.http.post(this.urlApi, JSON.stringify(post)).subscribe((response:any) => {
      console.log(response);

      post.id = response.id;
      this.posts.splice(0, 0, post);
    })
  }
//Create New Body and api Propertises
  createBody(inputBody: HTMLInputElement){
    let body: any = { body: inputBody.value};
    this.http.post(this.urlApi, JSON.stringify(body)).subscribe((response:any) => {
      console.log(response);
      body.id = response.id;
      this.posts.splice(0, 0, body);
    })
  }

}
