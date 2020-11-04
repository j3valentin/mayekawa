import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancesComponent } from './advances/advances.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AdvanceConceptComponent } from './advance-concept/advance-concept.component';
import { AdvanceDetailComponent } from './advance-detail/advance-detail.component';

const routes: Routes = [
  { path: 'concepts', component: ConceptsComponent },
  { path: 'advances', component: AdvancesComponent },
  { path: 'advance/:id', component: AdvanceConceptComponent },
  { path: 'advance/:id/details/:concept_id', component: AdvanceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelExpensesRoutingModule { }
