import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";

@Component({
  selector: 'app-daftar-baru',
  templateUrl: './daftar-baru.component.html',
  styleUrls: ['./daftar-baru.component.scss']
})
export class DaftarBaruComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  successSwal() {
    swal.fire({
      title: "Perdaftaran berjaya!",
      //text: "",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success"
    });
  }

}
