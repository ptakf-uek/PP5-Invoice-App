import { type Tax } from '../enums/tax';
import { type Unit } from '../enums/unit';

export class Invoice {
  name: string = '';
  quantity: number = 0;
  unit?: Unit;
  netto?: number;
  brutto?: number;
  tax?: Tax;
}
