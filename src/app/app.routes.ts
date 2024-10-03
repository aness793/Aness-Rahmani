import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path:':link' , component:MainComponent},
    {path:'About' , component:MainComponent },
    {path:'Goals' , component:MainComponent},
    {path:'Skills' , component:MainComponent},
    {path:'Experience' , component:MainComponent},
    {path:'Resume' , component:MainComponent},
];
