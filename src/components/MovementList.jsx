import MovementFactory from '../models/MovementFactory';
import MovementCard from './MovementCard';
import './MovementList.css';

function MovementList({ movementsData }) {
    // En vez de crear objetos aquí, delegamos todo a la Factory.
  // Así quitamos el switch y el acoplamiento de clases concretas.
  const movements = movementsData.map(data => MovementFactory.create(data.type, data));

  
  // La UI ahora solo usa la interfaz común (getNetAmount, etc.)
  const totalBalance = movements.reduce((sum, m) => sum + m.getNetAmount(), 0);


  const formatBalance = (amount) => {
    const isPositive = amount >= 0;
    const formatted = Math.abs(amount).toLocaleString('es-HN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return `${isPositive ? '+' : '-'} L ${formatted}`;
  };

  return (
    <div className="movement-list-container">
      <div className="balance-summary">
        <span className="balance-label">Balance Neto</span>
        <span className={`balance-amount ${totalBalance >= 0 ? 'positive' : 'negative'}`}>
          {formatBalance(totalBalance)}
        </span>
      </div>
      <div className="movement-list">
        {movements.map(movement => (
          <MovementCard key={movement.id} movement={movement} />
        ))}
      </div>
    </div>
  );
}

export default MovementList;
