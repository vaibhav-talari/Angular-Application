import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectdata: Object[];
  constructor() {
    this.projectdata = [
      { clm1: '1', clm2: 'Iron-Man Suits', clm3: 'Design of more that 30 Iron man suits which can be self guided and controlled only by 1 authorized person', clm4: 'Autonomous control of n Devices with one Parent control' },
      { clm1: '2', clm2: 'Bilateral Retrophasing Augamented reality', clm3: 'Augamented reality needs the employement of googles but with Bilateral Retrophasing Augamented reality micro projectors project HD images on already predefined colourless objects to give a real depth effect and naturality', clm4: 'Highly Useful in rendering 3-D model design of industries/automobile' },
      { clm1: '3', clm2: 'Nano-Technology Suit', clm3: 'Highly efficient suit that can fit in small or compact spaces without loosing functionality',clm4:'Employment in any industries equipment such as motors for higher efficiency and less maintainess' }
    ]
  }

  ngOnInit() {
  }
  private tabs:Array<any>=[];
  private Newtab: any={};
  Addtableelement(){
    this.tabs.push(this.Newtab);
    this.Newtab={};

  }
  onItemDeleted(index){
    if(index<100){
      this.projectdata.splice(index,1);
      
      }
      else{
    this.tabs.splice(index, 1);
    }
  }
}
