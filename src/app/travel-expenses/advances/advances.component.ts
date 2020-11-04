import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Advance } from '../advance';
import { AdvanceService } from '../advance.service';
import { CostCenter } from 'src/app/cost-centers/cost-center';
import { CostCenterService } from 'src/app/cost-centers/cost-center.service';

@Component({
  selector: 'app-advances',
  templateUrl: './advances.component.html',
  styleUrls: ['./advances.component.scss']
})
export class AdvancesComponent implements OnInit {
  advances: Advance[];
  costCenters: CostCenter[];

  constructor(
    private advanceService: AdvanceService,
    private costCenterService: CostCenterService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getCostCenters();
    this.getAdvances();
  }

  getCostCenters(): void {
    this.costCenterService.getCostCenters()
    .subscribe(costCenters => this.costCenters = costCenters);
  }

  getAdvances(): void {
    this.advanceService.getAdvances()
    .subscribe(advances => this.advances = advances
      .map(advance => {
        advance.costCenter = this.costCenters
        .find(costCenter => costCenter.id === advance.costCenterId)
        return advance;
      }));
  }
}
