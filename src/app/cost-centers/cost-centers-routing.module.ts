import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostCentersComponent } from './cost-centers/cost-centers.component';
import { CostCenterDetailComponent } from './cost-center-detail/cost-center-detail.component';

const routes: Routes = [
  { path: 'cost-centers', component: CostCentersComponent },
  { path: 'cost-center/:id', component: CostCenterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostCentersRoutingModule { }
