import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Concept } from '../concept';
import { Advance } from '../advance';
import { AdvanceDetail } from '../advance-detail';
import { AdvanceService } from '../advance.service';
import { ConceptService } from '../concept.service';

@Component({
  selector: 'app-advance-detail',
  templateUrl: './advance-detail.component.html',
  styleUrls: ['./advance-detail.component.scss']
})
export class AdvanceDetailComponent implements OnInit {
  advance: Advance;
  concept: Concept;
  details: AdvanceDetail[];

  constructor(
    private route: ActivatedRoute,
    private advanceService: AdvanceService,
    private conceptService: ConceptService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const conceptId = +this.route.snapshot.paramMap.get('concept_id');
    this.getAdvance(id);
    this.getConcept(conceptId);
    this.getDetails(conceptId);
  }

  getAdvance(id: number): void {
    this.advanceService.getAdvance(id)
    .subscribe(advance => this.advance = advance);
  }

  getConcept(id: number): void {
    this.conceptService.getConcept(id)
    .subscribe(concept => this.concept = concept);
  }

  getDetails(id: number): void {
    this.advanceService.getDetails(id)
    .subscribe(details => this.details = details);
  }
}
