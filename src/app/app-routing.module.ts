import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecargaComponent } from './recarga/recarga.component';

const routes: Routes = [
  {path:"recarga", component: RecargaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
