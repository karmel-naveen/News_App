import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  topheadingDisplay:any[]=[];

  constructor(private services:NewsapiservicesService) { }

  ngOnInit(): void {

    this.services.topHeading().subscribe((result)=>{
      this.topheadingDisplay=result.data;
    })
  }

}
