import { Component, OnInit } from '@angular/core';
import{ContactsService} from '../../../../services/contacts.service';

@Component({
  selector: 'app-dispcontme',
  templateUrl: './dispcontme.component.html',
  styleUrls: ['./dispcontme.component.css']
})
export class DispcontmeComponent implements OnInit {

  constructor(private displaycontacts: ContactsService) {

   }
listofcontacts:Object[];
  ngOnInit() {
    console.log("Inside ngOnIT");
//send response to service
this.displaycontacts.read()
.subscribe((loadcontact:any)=>{
  console.log(loadcontact);
  this.listofcontacts=loadcontact;

});
//receive the responce from service


  }

}
