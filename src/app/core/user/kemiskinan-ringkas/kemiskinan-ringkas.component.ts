import { Component, OnInit } from '@angular/core';
import swal from "sweetalert2";

@Component({
  selector: 'app-kemiskinan-ringkas',
  templateUrl: './kemiskinan-ringkas.component.html',
  styleUrls: ['./kemiskinan-ringkas.component.scss']
})
export class KemiskinanRingkasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  successSwal() {
    swal.fire({
      title: "Penghantaran Maklumat berjaya!",
      //text: "",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success"
    });
  }

}
