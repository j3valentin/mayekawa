import { Advance } from './advance';

export const ADVANCES: Advance[] = [
    { id: 0, costCenterId: 1, createdAt: new Date('2017-12-01'), travelTo: 'Lugar 0', object: 'Nuevo Proyecto 0', start: new Date('2018-01-01'), end: new Date('2018-02-28'), requested: 2000000, approved: 2000000, balance: 100, status: 'Legalizado' },
    { id: 1, costCenterId: 2, createdAt: new Date('2018-01-01'), travelTo: 'Lugar 1', object: 'Nuevo Proyecto 1', start: new Date('2018-03-01'), end: new Date('2018-05-30'), requested: 2000000, approved: 2000000, balance: 100, status: 'Pago' },
    { id: 2, costCenterId: 3, createdAt: new Date('2018-05-01'), travelTo: 'Lugar 2', object: 'Nuevo Proyecto 2', start: new Date('2018-06-01'), end: new Date('2018-08-30'), requested: 2000000, approved: 2000000, balance: 75, status: 'Autorizado' },
    { id: 3, costCenterId: 4, createdAt: new Date('2018-08-01'), travelTo: 'Lugar 3', object: 'Nuevo Proyecto 3', start: new Date('2018-09-01'), end: new Date('2018-12-31'), requested: 2000000, approved: 0, balance: 50, status: 'Revisado' },
    { id: 4, costCenterId: 3, createdAt: new Date('2018-12-01'), travelTo: 'Lugar 4', object: 'Nuevo Proyecto 4', start: new Date('2019-01-01'), end: new Date('2019-03-30'), requested: 2000000, approved: 0, balance: 25, status: 'Solicitado' },
    { id: 5, costCenterId: 2, createdAt: new Date('2019-03-01'), travelTo: 'Lugar 5', object: 'Nuevo Proyecto 5', start: new Date('2019-04-01'), end: new Date('2019-05-30'), requested: 2000000, approved: 0, balance: 0, status: 'Borrador' }
];
