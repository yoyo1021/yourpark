import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Park} from './park';


@Injectable({
  providedIn: 'root'
})
export class ParkDataService {
    parks?:Park[];
  constructor(private http:HttpClient) { }

  load():Promise <Park[]> {
    if (this.parks) {
    return Promise.resolve(this.parks);
    }
    return (new Promise(resolve => {
    this.http.get('assets/data/data.json')
    .subscribe((data) => {
    this.parks = data as Park[];
    resolve(this.parks);
    });
    }));
  }
  getParks():Promise<Park[]>{
    return this.load().then(data => {
    return data as Park[];
    });
    }
    
    getPark(index:number):Promise<Park>{
    return this.load().then(data => {
    return data[index] as Park;
    });
    }
    getFilteredParks(queryString: string):Promise<Park[]>{
      return this.load().then(data => {
      const theFilteredParks: Park[] = [];
      for (let thePark of data as Park[]) {
      if
     (thePark.name.toLowerCase().indexOf(queryString.toLowerCase()) > -1) { //  the park name does not contain querystring
      theFilteredParks.push(thePark);
      }
      }
      return theFilteredParks as Park[];
      });
      }
     }

