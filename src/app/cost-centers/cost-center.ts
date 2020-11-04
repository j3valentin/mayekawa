export class CostCenter {
    id: number;
    name: string;
    budget: number;
    balance: number;
    percent: number;
    type: string;
    // percent() {
    //     const spent = this.budget - this.balance;
    //     return spent * 100 / this.budget;
    // }
}
