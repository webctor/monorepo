import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent }     from './contact/contact.component'

const routes: Routes = [
  { path: 'my-contact', component: ContactComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
