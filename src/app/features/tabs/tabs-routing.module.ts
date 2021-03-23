import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {path: '', component : TabsComponent,
    children: [
      {path:'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
      {path:'list', loadChildren:() => import('./list/list.module').then(m => m.ListModule)},
      {path:'search', loadChildren:() =>import('./search/search.module').then(m=> m.SearchModule)},
      {path:'setting', loadChildren:() =>import('./setting/setting.module').then(m=> m.SettingModule)},
      
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
