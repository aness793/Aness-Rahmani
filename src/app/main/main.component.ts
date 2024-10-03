import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RedirectorService } from '../redirector.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavigationComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
ngOnInit(): void {  
}
link!:Observable <string>
constructor (private activatedroute:ActivatedRoute , private router:Router , private redirector:RedirectorService ) {
this.redirector.currentValue.subscribe(a=>{
  this.s = a
  console.log(this.s)
})
}

projects=[
  {
    url:'https://aness793.github.io/Restaurent-menu/',
    img:'restaurent.jpg',
    title:'Restaurent menu'
  },
  {
    url:'https://aness793.github.io/BMI/',
    img:'bmi.jpg',
    title:'BMI Calculator'
  },
  {
    url:'https://aness793.github.io/coffee-shop/',
    img:'coffeeshop.jpg',
    title:'Coffee shop'
  },
  {
    url:'https://aness793.github.io/Blue-ID/',
    img:'blueid.jpg',
    title:'Blue ID'
  },
  {
    url:'https://aness793.github.io/A-message-for-you/',
    img:'amessageforyou.jpg',
    title:'A message for you'
  },
  {
    url:'https://aness793.github.io/Myportfolio/index.html',
    img:'myportfolio.jpg',
    title:'my first portfolio'
  },
]
i=0
next(){
  this.i++
  if(this.i===this.projects.length){
    this.i=0
  }
  console.log(this.i)
}
previous(){
  this.i--
  if(this.i<0){
    this.i= this.projects.length-1
  }
  console.log(this.i)
}
s!:string




}

