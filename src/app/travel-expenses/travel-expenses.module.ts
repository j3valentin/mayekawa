import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { ConceptsComponent } from './concepts/concepts.component';
import { AdvancesComponent } from './advances/advances.component';
import { AdvanceConceptComponent } from './advance-concept/advance-concept.component';
import { AdvanceDetailComponent } from './advance-detail/advance-detail.component';
import { LegalizationComponent } from './legalization/legalization.component';

import { TravelExpensesRoutingModule } from './travel-expenses-routing.module';

@NgModule({
  declarations: [
    ConceptsComponent,
    AdvancesComponent,
    AdvanceConceptComponent,
    AdvanceDetailComponent,
    LegalizationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbProgressbarModule,
    TravelExpensesRoutingModule
  ]
})
export class TravelExpensesModule { }
