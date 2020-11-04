import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostCenter } from '../cost-center';
import { CostCenterService } from '../cost-center.service';

@Component({
  selector: 'app-cost-center-list',
  templateUrl: './cost-center-list.component.html',
  styleUrls: ['./cost-center-list.component.scss']
})
export class CostCenterListComponent implements OnInit {
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
