import { HttpClient } from '@angular/common/http';
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

  // Good practice is initialization Api responses in LifeCycle Hood.
  constructor(private http:HttpClient) { }

  // Initialized Api response in LifeCycle Hood.
  ngOnInit(): void {
    this.http.get(this.urlApi).subscribe(response => {
      this.posts = response;
    });
  }

// --------------------------------------------------------------------------------------
//Create New post and api Propertises for single input field
  // createPost(inputTitle: HTMLInputElement){
  //   let post: any = { title: inputTitle.value};
  //   inputTitle.value = '';

  //   this.http.post(this.urlApi, JSON.stringify(post)).subscribe((response:any) => {
  //     console.log(response);

  //     post.id = response.id;
  //     this.posts.splice(0, 0, post);
  //   });
  // }
  // --------------------------------------------------------------------------------------


//Create New Body and api Propertises for multiple input field
  createPost(inputBody: HTMLInputElement, inputTitle: HTMLInputElement){
    let body: any = { body: inputBody.value, title: inputTitle.value};
    this.http.post(this.urlApi, JSON.stringify(body)).subscribe((response:any) => {
      console.log(response);
      body.id = response.id;
      this.posts.splice(0, 0, body);
    });
  }

  // This post will update A random value, prototype
  updatePost(list: any) {
    // in patch method we only use object selected properties or few properties which should be modified

    // in put method, entire object goes to server, it is most recomended method & widely supported
    this.http.put(this.urlApi + '/' + list.id, JSON.stringify(list)).subscribe((response: any) => {
      console.log(response);
      list.title = 'ksm';
    });
  }

  // will delete a perticular index of data
  deleteTitle(list: any){
    this.http.delete(this.urlApi + '/' + list.id).subscribe(response => {
      // we can now dlt our post, so that i have to find the index of the post.
      let index = this.posts.indexOf(list);
      // to delete post we use splice method, which index and how many object i've to delete
      this.posts.splice(index, 1);
    });
  }


}
