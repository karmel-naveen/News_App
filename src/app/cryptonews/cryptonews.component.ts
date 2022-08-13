import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-cryptonews',
  templateUrl: './cryptonews.component.html',
  styleUrls: ['./cryptonews.component.css']
})
export class CryptonewsComponent implements OnInit {
  cryptoheadingDisplay:any[]=[]

  constructor(private service:NewsapiservicesService) { }

  ngOnInit(): void {
    this.service.cryptoHeading().subscribe((result)=>{
      this.cryptoheadingDisplay=result.data;
    })
  }

}
