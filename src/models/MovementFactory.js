import { Deposit } from './Deposit';
import { Withdrawal } from './Withdrawal';
import { Transfer } from './Transfer';
import { Payment } from './Payment';
import { Fee } from './Fee';

class MovementFactory {
  static create(type, data) {
    // Este switch decide qué clase instanciar según 'type'.
    switch (type) {
      case 'deposit':
        return new Deposit(data);
      case 'withdrawal':
        return new Withdrawal(data);
      case 'transfer':
        return new Transfer(data);
      case 'payment':
        return new Payment(data);
        // Agregar un nuevo 'case' aquí permite extender el sistema sin tocar la UI.
      case 'fee':
        return new Fee(data);
      default:
        throw new Error(`Unknown movement type: ${type}`);
    }
  }
}

export default MovementFactory;
