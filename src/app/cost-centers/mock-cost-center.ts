import { CostCenter } from "./cost-center";

export const COST_CENTERS: CostCenter[] = [
    { id: 1, name: 'Servicios', budget: 20000000, balance: 15000000, percent: 25, type: 'success' },
    { id: 2, name: 'Servicios2', budget: 20000000, balance: 10000000, percent: 50, type: 'info' },
    { id: 3, name: 'Proyectos', budget: 20000000, balance: 5000000, percent: 75, type: 'warning' },
    { id: 4, name: 'Comercial', budget: 20000000, balance: 0, percent: 100, type: 'danger' }
];
