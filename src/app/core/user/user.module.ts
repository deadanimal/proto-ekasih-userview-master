import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
//import { CdkStepperModule } from '@angular/cdk/stepper';
//import { StepperModule } from 'ng-stepper';
import { CdkStepperModule } from "@angular/cdk/stepper";
import { MatStepperModule } from "@angular/material/stepper";

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KemiskinanRingkasComponent } from './kemiskinan-ringkas/kemiskinan-ringkas.component';
import { KemiskinanTerperinciComponent } from './kemiskinan-terperinci/kemiskinan-terperinci.component';
import { KemaskiniMaklumatBantuanComponent } from './kemaskini-maklumat-bantuan/kemaskini-maklumat-bantuan.component';
import { KemaskiniProfilKirComponent } from './kemaskini-profil-kir/kemaskini-profil-kir.component';
import { KemaskiniProfilKirSemakanComponent } from './kemaskini-profil-kir-semakan/kemaskini-profil-kir-semakan.component';
import { KemaskiniProfilKirLaporanDinamikComponent } from './kemaskini-profil-kir-laporan-dinamik/kemaskini-profil-kir-laporan-dinamik.component';
import { DaftarBaruComponent } from './daftar-baru/daftar-baru.component';
import { KemaskiniRekodComponent } from './kemaskini-rekod/kemaskini-rekod.component';
import { Pkt1Component } from './pkt1/pkt1.component';
import { Pkt2Component } from './pkt2/pkt2.component';
import { Pkt3Component } from './pkt3/pkt3.component';
import { Pkt4Component } from './pkt4/pkt4.component';

@NgModule({
  declarations: [DashboardComponent, KemiskinanRingkasComponent, KemiskinanTerperinciComponent, KemaskiniMaklumatBantuanComponent, KemaskiniProfilKirComponent, KemaskiniProfilKirSemakanComponent, KemaskiniProfilKirLaporanDinamikComponent, DaftarBaruComponent, KemaskiniRekodComponent, Pkt1Component, Pkt2Component, Pkt3Component, Pkt4Component],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    CdkStepperModule,
    MatStepperModule
    //NgStepperModule
  ]
})
export class UserModule { }
