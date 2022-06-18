import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

    // for files
    files: File[] = [];
    about = '{"companyVision": "string","companyMission": "string","companyHighlights": "string","companyName": "string","countryName": "string","district": "string","city": "string","street": "string", "contactNumber": "string","faxNo": "string","latitude": "string","longtitude": "string","belongingToGroupOfCompanies": "string"}';

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

    // About Section will update here
    onaboutSubmit(aboutForm: NgForm){
      console.log(aboutForm.value);
      const formData = new FormData();

      formData.append('AboutData', this.about);
      // formData.append('companyMission', aboutForm.controls['companyMission'].value);
      // formData.append('companyHighlights', aboutForm.controls['companyHighlights'].value);
      // formData.append('companyName', aboutForm.controls['companyName'].value);
      // formData.append('countryName', aboutForm.controls['countryName'].value);
      // formData.append('district', aboutForm.controls['district'].value);
      // formData.append('city', aboutForm.controls['city'].value);
      // formData.append('street', aboutForm.controls['street'].value);
      // formData.append('contactNumber', aboutForm.controls['contactNumber'].value);
      // formData.append('faxNo', aboutForm.controls['faxNo'].value);
      // formData.append('latitude', aboutForm.controls['latitude'].value);
      // formData.append('longtitude', aboutForm.controls['longtitude'].value);
      // formData.append('belongingToGroupOfCompanies', aboutForm.controls['belongingToGroupOfCompanies'].value);
      if (this.files.length > 5) {
        console.log('not  more than five'); 
      } else {
        for (let i = 0; i < this.files.length; i++) {
          formData.append('Files', this.files[i]);
        }
  
        this.api.aboutData(formData)
          .subscribe(res => {
              console.log('result :', res)
            });
      }

    }





    uploadFile() {
    // const formData = new FormData();

    // for (let i = 0; i < this.files.length; i++) {
    //   formData.append('file[]', this.files[i]);
    // }

    // this.api.aboutData(formData)
    //   .subscribe(res => {
    //       console.log('result :', res)
    //     });
  }


}
