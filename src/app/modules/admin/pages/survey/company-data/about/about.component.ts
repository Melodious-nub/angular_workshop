import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private http: HttpClient, private api: DataService) { }

  ngOnInit(): void {
  }

    // About Section will update here
    onaboutSubmit(aboutForm: any){
      console.log(aboutForm.value);
    }

    // for files
    files: File[] = [];

    // for add files/pics
    onSelect(event) {
      console.log(event);
      this.files.push(...event.addedFiles);
    }

    // for remove files/pics
    onRemove(event) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
    }

    uploadFile() {
    const formData = new FormData();

    for (let i = 0; i < this.files.length; i++) {
      formData.append('file[]', this.files[i]);
    }

    this.api.aboutData(formData)
      .subscribe(res => {
          console.log('result :', res)
        });
  }


}
