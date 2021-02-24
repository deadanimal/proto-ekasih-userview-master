export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/user/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-warning'
  },
  {
    path: '/user/pendaftaran',
    title: 'Pendaftaran',
    type: 'sub',
    icontype: 'fas fa-edit text-blue',
    collapse: 'pendaftaran',
    isCollapsed: true,
    children: [
      { path: 'kemiskinan-ringkas', title: 'Kemiskinan (Ringkas)', type: 'link' },
      { path: 'kemiskinan-terperinci', title: 'Kemiskinan (Terperinci)', type: 'link' },
    ]
  },
  // {
  //   path: '/user/kemaskini-maklumat-bantuan',
  //   title: 'Kemaskini Maklumat Bantuan',
  //   type: 'link',
  //   icontype: 'fas fa-info text-orange'
  // },
  {
    path: '/user/kemaskini-profil-KIR',
    title: 'Kemaskini Profil KIR',
    type: 'sub',
    icontype: 'fas fa-user-edit text-pink',
    collapse: 'kemaskini-profil-KIR',
    isCollapsed: true,
    children: [
      { path: 'semakan', title: 'Semakan', type: 'link' },
      { path: 'laporan-dinamik', title: 'Laporan Dinamik', type: 'link' },
      { path: 'kemaskini-maklumat-bantuan', title: 'Kemaskini Maklumat Bantuan', type: 'link' },
    ]
  },
  {
    path: '/user/profil-bantuan',
    title: 'Profil Bantuan',
    type: 'sub',
    icontype: 'fas fa-user-alt text-green',
    collapse: 'profil-bantuan',
    isCollapsed: true,
    children: [
      { path: 'daftar-baru', title: 'Daftar Rekod Baharu', type: 'link' },
      { path: 'kemaskini-rekod', title: 'Kemaskini Rekod', type: 'link' },
    ]
  },

  // {
  //   path: '/houses',
  //   title: 'Houses',
  //   type: 'link',
  //   icontype: 'fas fa-home text-purple'
  // },
  // {
  //   path: '/management',
  //   title: 'Management',
  //   type: 'link',
  //   icontype: 'fas fa-tasks text-red'
  // },
  // {
  //   path: '/report',
  //   title: 'Report',
  //   type: 'link',
  //   icontype: 'fas fa-chart-bar text-green'
  // },
  // {
  //   path: '/helpdesk',
  //   title: 'Helpdesk',
  //   type: 'link',
  //   icontype: 'fas fa-life-ring text-blue'
  // },
  // {
  //   path: '/audit',
  //   title: 'Audit Trail',
  //   type: 'link',
  //   icontype: 'fas fa-braille text-indigo'
  // }
  /*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];