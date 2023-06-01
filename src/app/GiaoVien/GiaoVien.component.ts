import { Component, OnInit } from '@angular/core';
import { GiaoVien } from '../GiaoVien';
import { HttpClient } from '@angular/common/http';
import { GiaoVienService } from '../GiaoVien.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-GiaoVien',
  templateUrl: './GiaoVien.component.html',
  styleUrls: ['./GiaoVien.component.css']
})
export class GiaoVienComponent implements OnInit {
  maGV: string = '';
  tenGV: string = '';
  namSinh: number = 0;
  email: string = '';
  gioiTinh: string = '';
  sdt: string = '';
  diaChi: string = '';
  maMonHoc: string = '';

  giaoVienList: GiaoVien[] = [];

  constructor(private giaoVienService: GiaoVienService,private router: Router ) {}

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.giaoVienService.getTeachers().subscribe(
      (data: GiaoVien[]) => {
        this.giaoVienList = data;
      },
      (error) => {
        console.error('Lỗi khi lấy danh sách giáo viên:', error);
      }
    );
  }

  submitForm() {
    if (!this.isValidForm()) {
      return;
    }

    const giaoVien: GiaoVien = {
      maGV: this.maGV,
      tenGV: this.tenGV,
      namSinh: this.namSinh,
      email: this.email,
      gioiTinh: this.gioiTinh,
      sdt: this.sdt,
      diaChi: this.diaChi,
      maMonHoc: this.maMonHoc
    };

    this.giaoVienService.postTeacher(giaoVien).subscribe(
      (data: GiaoVien) => {
        console.log('Thêm giáo viên thành công!');
        this.giaoVienList.push(data);
        this.resetForm();
      },
      (error) => {
        console.error('Lỗi khi thêm giáo viên:', error);
      }
    );
  }

  isValidForm(): boolean {
    if (!this.maGV || !this.tenGV || !this.namSinh || !this.email || !this.gioiTinh || !this.sdt || !this.diaChi || !this.maMonHoc) {
      return false;
    }
    return true;
  }

  resetForm() {
    this.maGV = '';
    this.tenGV = '';
    this.namSinh = 0;
    this.email = '';
    this.gioiTinh = '';
    this.sdt = '';
    this.diaChi = '';
    this.maMonHoc = '';
  }

 removeTeacher(maGV: string) {
   const maGVNumber = Number(maGV); // Chuyển đổi maGV thành số
   if (isNaN(maGVNumber)) {
     console.error('Mã GV không hợp lệ:', maGV);
     return;
   }

   this.giaoVienService.deleteTeacher(maGVNumber).subscribe(
     () => {
       console.log('Xóa giáo viên thành công!');
       this.getTeachers(); // Cập nhật danh sách giáo viên sau khi xóa
     },
     (error) => {
       console.error('Lỗi khi xóa giáo viên:', error);
     }
   );
 }
 viewDetail(giaoVien: GiaoVien) {
  // Xử lý logic khi nhấp chuột vào nút "Detail"
  // Ví dụ: Hiển thị thông tin chi tiết giáo viên
  console.log('Thông tin chi tiết giáo viên:', giaoVien);
}

  handleDetail(giaoVien: GiaoVien) {
   this.router.navigateByUrl(`DetailGV/${giaoVien.maGV}`);
 }
}