import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profl',
  templateUrl: './profl.component.html',
  styleUrls: ['./profl.component.css']
})
export class ProflComponent implements OnInit {

  arraydata: Object[];
  constructor() {
    this.arraydata = [{ value: 'Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics' },
     { value: 'A wealthy American business magnate' },
     {value:'Iron Man has been a founding member of the superhero team the Avengers and has been featured in several incarnations of his own various comic book series'},
    {value:'Designed Ironman suit from scratch'},
    {value:'Fought Aliens and risked own life by going into space to save man-kind'},
    {value:'Build Modulated Iron-Man Suit'},
    {value:'Fought Captain American and Winter solider Single handedly'},
    {value:'Took Fight to Thanose'},
    {value:'Survived fight with Thanose !!!'},
    {value:'Has technology so advanced 20th centurary seems like stone-age :P'}
    ]
  }

  ngOnInit() {
  }

  task: string;
  tasks = [];

  Adddata() {
    this.tasks.push({ name: this.task });
    this.task = '';
  }

  onItemDeleted(index) {
    if(index<100){
    this.arraydata.splice(index,1);
    }
    else{
  this.tasks.splice(index, 1);
  }
  }
}
