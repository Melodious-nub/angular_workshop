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

// --------------------------------------------------------------------------------------
//Create New post and api Propertises for single input field
  // createPost(inputTitle: HTMLInputElement){
  //   let post: any = { title: inputTitle.value};
  //   inputTitle.value = '';

  //   this.http.post(this.urlApi, JSON.stringify(post)).subscribe((response:any) => {
  //     console.log(response);

  //     post.id = response.id;
  //     this.posts.splice(0, 0, post);
  //   })
  // }
  // --------------------------------------------------------------------------------------


//Create New Body and api Propertises for multiple input field
  createBody(inputBody: HTMLInputElement, inputTitle: HTMLInputElement){
    let body: any = { body: inputBody.value, title: inputTitle.value};
    this.http.post(this.urlApi, JSON.stringify(body)).subscribe((response:any) => {
      console.log(response);
      body.id = response.id;
      this.posts.splice(0, 0, body);
    })
  }

  updatePost(inputBody: HTMLInputElement, inputTitle: HTMLInputElement) {
    // in patch method we only use object selected properties or few properties which should be modified
    let updateBody: any = { body: inputBody.value, title: inputTitle.value}
    // this.http.patch(this.urlApi + '/' + updateBody.id, JSON.stringify({ isRead: true})).subscribe((response:any) => {
    //   console.log(response);
    //   updateBody.id = response.id;
    // })

    // in put method, entire object goes to server, it is most recomended method & widely supported
    this.http.put(this.urlApi + '/' + updateBody.id, JSON.stringify(updateBody)).subscribe((response: any) => {
      console.log(response);
    })
  }

  deleteTitle(inputTitle: HTMLInputElement){
    this.http.delete(this.urlApi + '/' + inputTitle.id).subscribe(response => {
      let index = this.posts.indexOf(inputTitle);
      this.posts.splice(index, 1);
    })
  }


}
