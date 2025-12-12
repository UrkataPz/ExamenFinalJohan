import { Movement } from './Movement';

export class Fee extends Movement {
  constructor(data) {
    super(data);
  }

  getNetAmount() {
    return -Math.abs(this.amount);
  }

  getColor() {
    return '#7f1d1d';
  }

  getIcon() {
    return '💸';
  }

  getTypeName() {
    return 'Comisión';
  }
}
