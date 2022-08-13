import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) { }



  // apikey="af713338e6e5fcbfee55bc6e310a5617";
  businessUrl="http://api.mediastack.com/v1/news?access_key=af713338e6e5fcbfee55bc6e310a5617&categories=business&countries=in"
  newsApiUrl="http://api.mediastack.com/v1/news?access_key=af713338e6e5fcbfee55bc6e310a5617&countries=in"
  cryptoUrl="http://api.mediastack.com/v1/news?access_key=af713338e6e5fcbfee55bc6e310a5617&keywords=crypto&countries=in"

  cryptoHeading():Observable<any>{
    return this.http.get(this.cryptoUrl)

  }

  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl)
  }

  businessHeading():Observable<any>{
    return this.http.get(this.businessUrl)
  }
}
