import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Concept } from '../concept';
import { Advance } from '../advance';
import { AdvanceConcept } from '../advance-concept';
import { ConceptService } from '../concept.service';
import { AdvanceService } from '../advance.service';

@Component({
  selector: 'app-advance-concept',
  templateUrl: './advance-concept.component.html',
  styleUrls: ['./advance-concept.component.scss']
})
export class AdvanceConceptComponent implements OnInit {
  concepts: Concept[];
  advance: Advance;
  advanceConcepts: AdvanceConcept[];

  constructor(
    private route: ActivatedRoute,
    private conceptService: ConceptService,
    private advanceService: AdvanceService,
    public router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getAdvance(id);
    this.getConcepts();
  }

  getConcepts(): void {
    this.conceptService.getConcepts()
    .subscribe(concepts => this.concepts = concepts);
    this.advanceService.getConcepts()
    .subscribe(advanceConcepts => this.advanceConcepts = advanceConcepts
      .map(advanceConcept => {
        advanceConcept.concept = this.concepts
        .find(concept => concept.id === advanceConcept.concept_id);
        return advanceConcept;
      }));
  }

  getAdvance(id: number): void {
    this.advanceService.getAdvance(id)
    .subscribe(advance => this.advance = advance);
  }
}
