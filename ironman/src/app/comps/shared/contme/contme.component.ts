import { Component, OnInit } from '@angular/core';
import{ContactsService} from '../../../services/contacts.service';


@Component({
  selector: 'app-contme',
  templateUrl: './contme.component.html',
  styleUrls: ['./contme.component.css']
})
export class ContmeComponent implements OnInit {

//dependency injection
  constructor(private contmeService: ContactsService) { }

  ngOnInit() {
  }
  issaved:boolean=false;
  
addcontact: Object ={};
  AddContactdetails(){
console.log(this.addcontact);
//Send the data to service 
this.contmeService.create(this.addcontact)
//expect responce from service
.subscribe(
  (savedContactInfo:any)=>{
    console.log(savedContactInfo);
    this.issaved=true;
  }
);
}
}
