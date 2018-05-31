
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/Auth') },
      { path: 'home', component: () => import('pages/Home')},
      { path: 'offers', component: () => import('pages/TripsList')},
      { path: 'map-details', component: () => import('pages/MapDetails')}
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
