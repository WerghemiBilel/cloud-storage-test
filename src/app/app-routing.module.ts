import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CrudListComponent } from './components/crud-list/crud-list.component'

const routes: Routes = [
  { path: 'app-crud-list', component: CrudListComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
