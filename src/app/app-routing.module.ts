import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from './canActive';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
// import { DashbrdComponent } from './dashbrd/dashbrd.component';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { StepperComponent } from './stepper/stepper.component';
import { TopicsexhComponent } from './topics-exh/topicsexh.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  
   {path:'menu-cmp',component:MenuCmpComponent,canActivate:[canActivate]},
   {path:'card/:id',component:CardComponent},
   {path:'',component:LoginComponent},
   {path:'login',component:LoginComponent},
   {path:'stepper',component:StepperComponent},
   {path:'topics-exh',component:TopicsexhComponent,canActivate:[canActivate],
   children:[
    {path:'paper',component:TopicsexhComponent,canActivate:[canActivate]},
    {path:'Science',component:TopicsexhComponent,canActivate:[canActivate]},
    {path:'political',component:TopicsexhComponent,canActivate:[canActivate]},
   ]
  },
  //  {path:'paper',component:TopicsexhComponent,canActivate:[canActivate]},
  //  {path:'Science',component:TopicsexhComponent,canActivate:[canActivate]},
  //  {path:'political',component:TopicsexhComponent,canActivate:[canActivate]},
   {path:'wishlist',component:WishlistComponent,canActivate:[canActivate]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
