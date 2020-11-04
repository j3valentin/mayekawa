import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostCenter } from '../cost-center';
import { CostCenterService } from '../cost-center.service';

@Component({
  selector: 'app-cost-centers',
  templateUrl: './cost-centers.component.html',
  styleUrls: ['./cost-centers.component.scss']
})
export class CostCentersComponent implements OnInit {
  costCenters: CostCenter[];

  constructor(
    private costCenterService: CostCenterService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getCostCenters();
  }

  getCostCenters(): void {
    this.costCenterService.getCostCenters()
    .subscribe(costCenters => this.costCenters = costCenters);
  }
}
