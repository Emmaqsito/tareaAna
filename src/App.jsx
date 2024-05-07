import React from 'react';
import './App.css';
import imagen1 from './img/chabelo.jpg';
import Testimonio from './components/Testimonio';
import estilos from './components/TestimonioDesign.module.scss';
import imagen2 from './img/alex.jpg';
import imagen3 from './img/gato.jpeg';

function App() {
  const arreglo = [{
    id: 1,
    nombre: 'Andresito',
    pais: 'Perukistan',
    imagen: imagen1,
    cargo: 'Ingeniero de software',
    empresa: 'Intel',
    testimonio: 'Moka-chan ga oshiete kureta ironna mita me ni nareru apurina ndatte dore dore... kawaii. ushoo neko-chan! Nya nya! Ushoo ...o hiigeda! Ho ho ho...',
  },
  {
    id: 2,
    nombre: 'Alex',
    pais: 'Oaxaca',
    imagen: imagen2,
    cargo: 'Ingeniero de software',
    empresa: 'Microsoft',
    testimonio: 'Moka-chan ga oshiete kureta ironna mita me ni nareru apurina ndatte dore dore... kawaii. ushoo neko-chan! Nya nya! Ushoo ...o hiigeda! Ho ho ho...',
  }
  ,{
    id: 3,
    nombre: 'Gato con trajesito',
    pais: 'Michigan',
    imagen: imagen3,
    cargo: 'Ingeniero de software',
    empresa: 'Intel',
    testimonio: 'Moka-chan ga oshiete kureta ironna mita me ni nareru apurina ndatte dore dore... kawaii. ushoo neko-chan! Nya nya! Ushoo ...o hiigeda! Ho ho ho...',
  }
];

  return (
    <>
      <div className={estilos.title}>
        <h1>Testimonios de gente 100% real</h1>
        {arreglo.map((props) => (
          <Testimonio
            key={props.id}
            nombre={props.nombre}
            pais={props.pais}
            imagen={props.imagen}
            cargo={props.cargo}
            empresa={props.empresa}
            testimonio={props.testimonio}
          />
        ))}
      </div>
    </>
  );
}

export default App;