import { Component, OnInit } from '@angular/core';
import { CONCEPTS } from '../mock-concept';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss']
})
export class ConceptsComponent implements OnInit {

  concepts = CONCEPTS;

  constructor() { }

  ngOnInit() {
  }

}
