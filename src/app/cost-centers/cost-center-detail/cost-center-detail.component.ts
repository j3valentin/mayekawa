import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import { CostCenter } from '../cost-center';
import { CostCenterService } from '../cost-center.service';

@Component({
  selector: 'app-cost-center-detail',
  templateUrl: './cost-center-detail.component.html',
  styleUrls: ['./cost-center-detail.component.scss']
})
export class CostCenterDetailComponent implements OnInit {
  costCenter: CostCenter;
  budgets: Budget[];

  constructor(
    private route: ActivatedRoute,
    private costCenterService: CostCenterService,
    private budgetService: BudgetService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getCostCenter(id);
  }

  getCostCenter(id: number): void {
    this.costCenterService.getCostCenter(id)
    .subscribe(costCenter => this.costCenter = costCenter);
    this.getBudgets()
  }

  getBudgets(): void {
    this.budgetService.getBudgets()
    .subscribe(budgets => this.budgets = budgets);
  }

  goBack() {
    this.location.back();
  }
}
