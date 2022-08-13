import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessheadingDisplay:any[]=[]

  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.businessHeading().subscribe((result)=>{
      this.businessheadingDisplay=result.data;
    })
  }

}
