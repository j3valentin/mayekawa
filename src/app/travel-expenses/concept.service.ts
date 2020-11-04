import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Concept } from './concept';
import { CONCEPTS } from './mock-concept';

@Injectable({ providedIn: 'root' })
export class ConceptService {
    getConcepts(): Observable<Concept[]> {
        return of(CONCEPTS);
    }

    getConcept(id: number): Observable<Concept> {
        return of(CONCEPTS.find(concept => concept.id === id));
    }
}
