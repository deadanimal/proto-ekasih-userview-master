import { Routes } from '@angular/router';
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

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'pendaftaran',
                children: [
                    {
                        path: 'kemiskinan-ringkas',
                        component: KemiskinanRingkasComponent
                    },
                    {
                        path: 'kemiskinan-terperinci',
                        component: KemiskinanTerperinciComponent
                    },
                    {
                        path: 'pkt1',
                        component: Pkt1Component
                    },
                    {
                        path: 'pkt2',
                        component: Pkt2Component
                    },
                    {
                        path: 'pkt3',
                        component: Pkt3Component
                    },
                    {
                        path: 'pkt4',
                        component: Pkt4Component
                    },
                ]
            },
            // {
            //     path: 'kemaskini-maklumat-bantuan',
            //     component: KemaskiniMaklumatBantuanComponent
            // },
            {
                path: 'kemaskini-profil-KIR',
                children: [
                    {
                        path: 'semakan',
                        component: KemaskiniProfilKirSemakanComponent
                    },
                    {
                        path: 'laporan-dinamik',
                        component: KemaskiniProfilKirLaporanDinamikComponent
                    },
                    {
                        path: 'kemaskini-maklumat-bantuan',
                        component: KemaskiniMaklumatBantuanComponent
                    }
                ]
            },
            {
                path: 'profil-bantuan',
                children: [
                    {
                        path: 'daftar-baru',
                        component: DaftarBaruComponent
                    },
                    {
                        path: 'kemaskini-rekod',
                        component: KemaskiniRekodComponent
                    }
                ]
            },
        ]
    }
]