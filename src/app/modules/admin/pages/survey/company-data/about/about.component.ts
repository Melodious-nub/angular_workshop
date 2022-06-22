import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // for country dropdown total 256 country
  myControl = new FormControl('');
  options: string[] = ["Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Netherlands Antilles","Angola","Antarctica","Argentina","American Samoa","Austria","Australia","Aruba","\u00c5land Islands","Azerbaijan","Bosnia and Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Saint Barthélemy","Bermuda","Brunei Darussalam","Bolivia, Plurinational State of","Caribbean Netherlands","Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos (Keeling) Islands","Congo, the Democratic Republic of the","Central African Republic","Congo","Switzerland","C\u00f4te d'Ivoire","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Cura\u00e7ao","Christmas Island","Cyprus","Czech Republic","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Europe","Finland","Fiji","Falkland Islands (Malvinas)","Micronesia, Federated States of","Faroe Islands","France","Gabon","England","Northern Ireland","Scotland","Wales","United Kingdom","Grenada","Georgia","French Guiana","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Guadeloupe","Equatorial Guinea","Greece","South Georgia and the South Sandwich Islands","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran, Islamic Republic of","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Cayman Islands","Kazakhstan","Lao People's Democratic Republic","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova, Republic of","Montenegro","Saint Martin","Madagascar","Marshall Islands","Macedonia, the former Yugoslav Republic of","Mali","Myanmar","Mongolia","Macao","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn","Puerto Rico","Palestine","Portugal","Palau","Paraguay","Qatar","Réunion","Romania","Serbia","Russian Federation","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","Saint Helena, Ascension and Tristan da Cunha","Slovenia","Svalbard and Jan Mayen Islands","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","South Sudan","Sao Tome and Principe","El Salvador","Sint Maarten (Dutch part)","Syrian Arab Republic","Swaziland","Turks and Caicos Islands","Chad","French Southern Territories","Togo","Thailand","Tajikistan","Tokelau","Timor-Leste","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad and Tobago","Tuvalu","Taiwan","Tanzania, United Republic of","Ukraine","Uganda","US Minor Outlying Islands","United States","Uruguay","Uzbekistan","Holy See (Vatican City State)","Saint Vincent and the Grenadines","Venezuela, Bolivarian Republic of","Virgin Islands, British","Virgin Islands, U.S.","Viet Nam","Vanuatu","Wallis and Futuna Islands","Kosovo","Samoa","Yemen","Mayotte","South Africa","Zambia","Zimbabwe"];

  // country filter storage
  filteredOptions: Observable<string[]>;
  // method for country filter
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor(private http: HttpClient, private api: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    // for filtering country
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

    // for files
    files: File[] = [];
    about = '{"companyVision": "string","companyMission": "string","companyHighlights": "string","companyName": "string","countryName": "string","district": "string","city": "string","street": "string", "contactNumber": "string","faxNo": "string","latitude": "string","longtitude": "string","belongingToGroupOfCompanies": "string"}';

    // for add files/pics
    onSelect(event) {
      // condition for max file limit
      console.log(event);
      if (event.addedFiles.length > 5) {
        this.toastr.warning('Max limit is 5 picture', 'Warning!');
      } else {
        this.files.push(...event.addedFiles);
      }
    }

    // for remove files/pics
    onRemove(event) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
    }

    // About Section will update here
    onaboutSubmit(aboutForm: NgForm){
      console.log(aboutForm.value, this.myControl.value);
      const formData = new FormData();

      formData.append('AboutData', this.about);
      // formData.append('country', this.myControl.value);
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
        this.toastr.warning('Max limit is 5 picture', 'Warning!');
      } else {
        for (let i = 0; i < this.files.length; i++) {
          formData.append('Files', this.files[i]);
        }
        this.api.aboutData(formData)
          .subscribe(res => {
              console.log('result :', res)
              if(res.success === true){
                this.toastr.success(res.message, 'Success');
              } else {
                // alert(res.message);
                this.toastr.warning(res.message, 'Warning!');
              }
            });
      }

    }


}
