import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteTable } from './routes';

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(RouteTable)]
})

export class AppRoutingModule {}
