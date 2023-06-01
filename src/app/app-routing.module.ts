import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinhVienListComponent } from './SinhVienList/SinhVienList.component';
import { SinhVienDetailComponent } from './SinhVienDetail/SinhVienDetail.component';
import { GiaoVienComponent } from './GiaoVien/GiaoVien.component';
import { GiaoVienDetailComponent } from './DetailGV/DetailGV.component';
const routes: Routes = [
  { path: '', redirectTo: '/sinhvien', pathMatch: 'full' },
  { path: 'sinhvien', component: SinhVienListComponent },
  { path: 'sinhvien/:id', component: SinhVienDetailComponent },
  { path: 'GiaoVien', component: GiaoVienComponent },
  { path: 'DetailGV', component: GiaoVienDetailComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
