import { Component, OnInit } from '@angular/core';
import { SinhVienService } from '../SinhVien.service';

@Component({
  selector: 'app-SinhVien',
  templateUrl: './SinhVien.component.html',
  styleUrls: ['./SinhVien.component.css']
})
export class SinhVienComponent implements OnInit {
  sinhVienList: any[] = [];

  constructor(private sinhVienService: SinhVienService) { }

  ngOnInit() {
    this.getAllSinhVien();
  }

  getAllSinhVien() {
    this.sinhVienService.getAllSinhVien().subscribe(data => {
      this.sinhVienList = data;
    });
  }

  deleteSinhVien(id: string) {
    this.sinhVienService.deleteSinhVien(id).subscribe(() => {
      this.getAllSinhVien();
    });
  }
}
