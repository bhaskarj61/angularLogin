import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { LoginService } from './login.service';

const routes: Routes=[
  {
    path:"",
    component:FormComponent,  
    pathMatch:'full'
  },
  {
    path:'show-details',                
    component:ShowDetailComponent,
    pathMatch:'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowDetailComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }






