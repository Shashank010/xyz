import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetdataComponent } from './getdata/getdata.component';
import { ShowComponent } from './show/show.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'',redirectTo:'/getdata',pathMatch:'full'},
  {path:'getdata',component:GetdataComponent,pathMatch:'full'},
  {path:'show',component:ShowComponent,pathMatch:'full'},
  {path:'search',component:SearchComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/getdata',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  

export class AppRoutingModule { }
