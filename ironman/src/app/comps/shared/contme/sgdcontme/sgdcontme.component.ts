import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router'

import{ContactsService} from '../../../../services/contacts.service';
declare var $:any;

@Component({
  selector: 'app-sgdcontme',
  templateUrl: './sgdcontme.component.html',
  styleUrls: ['./sgdcontme.component.css']
})
export class SgdcontmeComponent implements OnInit {
  contactobject:{};
  editcontactobject:{};
  
  contacid: number;
  isDeleted:boolean;
  Isupdated:boolean;
//dependency injection
  constructor(private contacservice:ContactsService,private route:ActivatedRoute,private router: Router) { 
this.route.params.subscribe(params=>{
  console.log(params);
  this.contacid=Number(params.id);
  console.log(this.contacid);
});
  }
  
  ngOnInit() {
    this.contacservice.getsinglecontact(this.contacid)
    .subscribe((alonecontact)=>{
      console.log(alonecontact);
this.contactobject=alonecontact;
    })
  }

  loadContact(){
    this.editcontactobject={
      id:this.contactobject['id'],
      name:this.contactobject['name'],
      email:this.contactobject['email'],
      phone:this.contactobject['phone'],
     remark:this.contactobject["company"]["catchPhrase"]
    }    
    $('#exampleModalCenter').modal('show');
  }

  updateContac(){
    console.log(this.editcontactobject);
    //send data to service
    this.contacservice.UpdateContact(this.editcontactobject)
    .subscribe((resp)=>{
      console.log(resp)
this.Isupdated=true;

      setTimeout(()=>{
        $('#exampleModalCenter').modal('hide');
        this.router.navigate(['7']);
        
            },3000);
    });
    //get responce
    //console.log("update");
    
  }

  deleteContact(id){
this.contacservice.Delete(id)
.subscribe((status)=>{
  console.log(status);
  this.isDeleted=true;
})
//console.log("delete");
  }

}
