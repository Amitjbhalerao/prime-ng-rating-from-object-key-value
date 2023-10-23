import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
@Component({
  selector: 'rating-without-cancel-demo',
  templateUrl: './rating-without-cancel-demo.html',
})
export class RatingWithoutCancelDemo implements OnInit  {
  value: any;
  jsonObject = {
    'Sr #': '1',
    'Employee Number': '101069',
    Name: 'Ishaq',
    HTML: '3',
    CSS: '3',
    jQuery: '3',
    SQL: '2',
    Oracle: '3',
    MongoDB: '1',
    'C#': '2',
    'ASP.NET': '2',
    MVC: '3',
    WebAPI: '2',
    '.NET Core': '3',
    WCF: '2',
    Postman: '2',
    Swagger: '2',
    Blazor: '0',
    Angular: '2',
    ReactJS: '0',
    NodeJS: '0',
    VueJS: '3',
    Sitefinity: '5',
    AEM: '0',
    WordPress: '0',
    Drupal: '0',
    SiteCore: '0',
    Dockers: '0',
    Jenkins: '0',
    AWS: '1',
    Azure: '1',
    'Azure DevOps': '1',
    Python: '1',
    Cordova: '0',
    IONIC: '0',
    Flutter: '0',
    FlutterFlow: '0',
    'React Native': '0',
  };
  constructor ( ){}
  ngOnInit() {
    
  
    const keyValuePairs = [];

   for (const key in this.jsonObject) {
    const value = this.jsonObject[key];
    keyValuePairs.push({ key, value });
    }
   this.value=keyValuePairs;
   console.log(this.value)
  }
}
