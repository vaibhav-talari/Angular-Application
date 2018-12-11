import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exps',
  templateUrl: './exps.component.html',
  styleUrls: ['./exps.component.css']
})
export class ExpsComponent implements OnInit {
experiencedata:Object[];

  constructor() { 
    this.experiencedata=[
      {head:'Combat Flight',body:'High level of solo flight'},
      {head:'Software/Voice assistance development',body:'Design of jarvis and ultron AI'},
      {head:'Special/martial arts',body:'Specilized in single-hand combat and strategtic situtationl planning'},
      {head:'User interface design',body:'Design of user interface for AI algorathims and dynamic data interpretation of data in live-time'}
    ]
  }

  ngOnInit() {
  }
  private items:Array<any>=[];
  private newattribute: any={};
  Addheadbody(){
  this.items.push(this.newattribute)
  this.newattribute={};
}
onItemDeleted(index) {
  //console.log(index);
  if(index<100){
  this.experiencedata.splice(index,1);
  
  }
  else{
this.items.splice(index, 1);
}
}
}
