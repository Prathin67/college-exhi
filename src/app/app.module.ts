import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashbrdComponent } from './dashbrd/dashbrd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { SampleServiceService } from './sample-service.service';
import { MenuCmpComponent } from './menu-cmp/menu-cmp.component';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeadComponent } from './head/head.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { OndetailsComponent } from './ondetails/ondetails.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule  }  from '@angular/material/input';
import { MatSnackBarModule  }  from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { canActivate } from './canActive';
import { TopicsexhComponent } from './topics-exh/topicsexh.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ColorchngDirective } from './colorchng.directive';
import { BtnhighDirective } from './btnhigh.directive';
import {MatExpansionModule} from '@angular/material/expansion';
// import { MatButton } from '@angular/material/button';








@NgModule({
  declarations: [
    AppComponent,
    // DashbrdComponent,
    MenuCmpComponent,
    
    
    HeadComponent,
    AddComponent,
    CardComponent,
    LoginComponent,
    OndetailsComponent,
    StepperComponent,
    TopicsexhComponent,
    WishlistComponent,
    ColorchngDirective,
    BtnhighDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    // MatButton
    MatListModule,
    MatExpansionModule

    
    
    
    
  ],
  providers: [canActivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
