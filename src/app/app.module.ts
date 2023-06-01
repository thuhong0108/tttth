import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SinhVienComponent } from './SinhVien/SinhVien.component';
import { GiaoVienComponent } from './GiaoVien/GiaoVien.component';
import { LoginComponent } from './Login/Login.component';
import { HttpServiceService } from './Http.service';
import { GiaoVienService } from './GiaoVien.service';
import { GiaoVienDetailComponent } from './DetailGV/DetailGV.component';


@NgModule({
  declarations: [	
    AppComponent,
    SinhVienComponent,
    GiaoVienComponent,
    LoginComponent,
    GiaoVienDetailComponent
      
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpServiceService, GiaoVienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
