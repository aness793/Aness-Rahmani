import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Output } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { EventEmitter } from 'stream';
import { RedirectorService } from '../redirector.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  seen=false
  isSmallScreen =false
  @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        this.isSmallScreen = window.innerWidth < 570;
    }
    appear(){
  this.seen = !this.seen 
  
}
gg:string='About'
redirect (sub:string){
  this.route.navigateByUrl('/'+sub)
  this.gg = sub
  this.redirector.changeValue(sub)
}
constructor(private elementRef: ElementRef , private redirector:RedirectorService , private route:Router) {}

// @Output() clickOutside = new EventEmitter();

// @HostListener('document:click', ['$event.target'])
// public onClick(targetElement: any): void {
//     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
//     if (!clickedInside) {
//         this.clickOutside.emit();
//     }
// }
}
