import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { CostCentersComponent } from './cost-centers/cost-centers.component';
import { CostCenterDetailComponent } from './cost-center-detail/cost-center-detail.component';

import { CostCentersRoutingModule } from './cost-centers-routing.module';

@NgModule({
  declarations: [
    CostCentersComponent,
    CostCenterDetailComponent
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule,
    CostCentersRoutingModule
  ]
})
export class CostCentersModule { }
