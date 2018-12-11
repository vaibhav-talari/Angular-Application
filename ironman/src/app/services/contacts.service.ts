import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
//Http is object anf http is model in the above line

import{Observable} from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  constructor(private http: Http) { }
  //create
  create(contactdata){//receive the data from component
    console.log(contactdata);
    //send the data to REST API url
    return this.http.post("https://jsonplaceholder.typicode.com/users",contactdata)
    //receive responce from REST API
    .pipe(map(response => {
      console.log(response);
      return response.json();
      
        }
      ));
        //channelise it back to the component 'by using return keyword'
  }
  //read

  read(){
    //console.log("inside service");
    //send the request to the rest api url
    return this.http.get("https://jsonplaceholder.typicode.com/users/")
    //receive the response
    .pipe(map(response => {
      console.log(response);
      return response.json();
        }
      ));

    //channelise it back tot he component by return
  }

  //get contact details
  getsinglecontact(id){
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    .pipe(map(response => {
      console.log(response);
      return response.json();
        }
      ));
  }

  //update
  UpdateContact(wow){
    console.log(wow);
    //send data to rest api
    return this.http.put("https://jsonplaceholder.typicode.com/users/"+wow.id,wow)
    .pipe(map(response => {
      console.log(response);
      return response.json();
    }
  ));
    //process the responce
    //return the responce
  }
  //delete
  Delete(id){
      return this.http.delete("https://jsonplaceholder.typicode.com/users/"+id)
      .pipe(map(response => {
      console.log(response);
      return response.json();
    }
  ));
  }
}
