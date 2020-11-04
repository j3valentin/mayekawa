import { Component, OnInit } from '@angular/core';

import { Advance } from '../advance';
import { AdvanceService } from '../advance.service';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {
  advances: Advance[];

  constructor(private advanceService: AdvanceService) { }

  ngOnInit() {
    this.getAdvances();
  }

  getAdvances(): void {
    this.advanceService.getAdvances()
    .subscribe(advances => this.advances = advances);
  }
}
