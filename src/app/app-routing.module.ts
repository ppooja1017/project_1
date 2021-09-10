import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContainerComponent } from './view-container/view-container.component';


const routes: Routes = [
  { path: 'view', component: ViewContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
