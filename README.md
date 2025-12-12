                                            Refactorización con Factory Method
                                                    1. Justificación técnica

La refactorización realizada elimina el acoplamiento directo entre la interfaz de usuario (UI) y las clases concretas del dominio (Deposit, Withdrawal, Transfer, Payment). Antes del cambio, la UI:

- Importaba clases específicas del dominio.

- Contenía un switch que decidía qué clase instanciar.

- Usaba new directamente, obligándola a conocer detalles internos de cada movimiento.

- Ese diseño mezclaba responsabilidades y volvía la UI sensible a cualquier cambio del dominio. Si se agregaba un nuevo tipo de movimiento, la UI debía modificarse, rompiendo el Principio Abierto/Cerrado (OCP) y aumentando el acoplamiento.

- Con la introducción del Factory Method, la creación de objetos se centraliza en un único componente (MovementFactory). La UI deja de conocer clases concretas y trabaja exclusivamente con la abstracción (Movement).

Con esto:
- Reduce acoplamiento

- La UI ya no depende de detalles internos ni de clases específicas; simplemente solicita un movimiento a través de la fábrica. Si el dominio cambia, la UI permanece intacta.

- Incrementa cohesión

- Ahora la UI muestra datos y recibe objetos ya construidos.

- La fábrica decide qué tipo de movimiento instanciar.



                                2. Pasos para agregar un nuevo tipo sin tocar la UI (OCP)

El sistema quedó preparado para extenderse sin modificar la UI. Para agregar un nuevo movimiento, por ejemplo Fee, los pasos son:

1. Crear la clase nueva en el dominio

 models/Fee.js

2. Registrar el nuevo tipo en la fábrica

En MovementFactory.js, importar la nueva clase e incluir un nuevo case en el switch:

import { Fee } from './Fee';

case 'fee':
  return new Fee(data);

  3.  Agregar datos en movements.js

Para verlo reflejado en pantalla, basta con agregar un objeto en la lista con type: 'fee'.


                                                        Instrucciones de ejecución

1. Instalar dependencias

npm install


2. Levantar el servidor de desarrollo

npm run dev


3. Abrir la aplicación en el navegador

generalmente http://localhost:5173/
