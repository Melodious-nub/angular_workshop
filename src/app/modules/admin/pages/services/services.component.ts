import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  // Get Http Data From Api
  posts: any = [];


  // Good practice is initialization Api responses in LifeCycle Hood.
  // Inject the PostService on the constructor and httpClient from PostService  
  constructor(private service: DataService) { }

  // Initialized Api response in LifeCycle Hood.
  // Now I'm getting the data from PostService.
  ngOnInit(): void {
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
      // Implementation of unexpected errors
  }

// --------------------------------------------------------------------------------------
//Create New post and api Propertises for single input field
  // create(inputTitle: HTMLInputElement){
  //   let post: any = { title: inputTitle.value};
  //   inputTitle.value = '';

  //   this.http.post(this.urlApi, JSON.stringify(post)).subscribe((response:any) => {
  //     console.log(response);

  //     post.id = response.id;
  //     this.posts.splice(0, 0, post);
  //   });
  // }
  // --------------------------------------------------------------------------------------


//Create New Body and api Propertises for multiple input field from PostService
  create(inputBody: HTMLInputElement, inputTitle: HTMLInputElement){
    let body: any = { body: inputBody.value, title: inputTitle.value};
    inputBody.value = '';
    inputTitle.value = '';
    this.service.create(body).subscribe((newPost:any) => {
      body.id = newPost.id;
      this.posts.splice(0, 0, body);
      // Implementation of unexpected errors(if api is nott valid throw error)
    });
  }

  // This post will update A random value, prototype from PostService
  update(list: any) {

    // in patch method we only use object selected properties or few properties which should be modified

    // in put method, entire object goes to server, it is most recomended method & widely supported
    this.service.update(list).subscribe((updatePost: any) => {
      list.title = 'ksm';
      console.log(updatePost);
      
      // Implementation of unexpected errors
    });
  }

  // will delete a perticular index of data from PostService
  delete(list: any){
    // body of response is empty object, so i h've used '()' this
    this.service.delete(list.id).subscribe(() => {
      // we can now dlt our post, so that i have to find the index of the post.
      let index = this.posts.indexOf(list);
      // to delete post we use splice method, which index and how many object i've to delete
      this.posts.splice(index, 1);
      // Implementation of unexpected errors
    });
  }


}
