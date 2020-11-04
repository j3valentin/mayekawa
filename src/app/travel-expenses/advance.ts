import { CostCenter } from '../cost-centers/cost-center';

export class Advance {
    id: number;
    costCenterId: number;
    createdAt: Date;
    travelTo: string;
    object: string;
    start: Date;
    end: Date;
    requested: number;
    approved: number;
    status: string;
    balance: number;
    costCenter?: CostCenter
}
