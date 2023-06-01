import './Contador.css'
import { useState } from 'react';
const Contador = () => {

  let [contador, setContador] = useState(0)
  const incrementar = () => {
    setContador( contador + 1 )
    console.log(contador)
  }

  const reset = () => {
    setContador( 0 )
  }
  return (
    <main>
      <h2 style={{fontSize:'32px',fontFamily:'Verdana, sans-serif', color: 'white', textAlign: 'center'}}
      >Counter App</h2>
      <div className="container-contador">
      <h1 style={{ fontSize:'80px', fontWeight: '400', fontFamily:'Roboto, Helvetica, sans-serif', color: 'white' }}
      >{contador}</h1>   
      <div className='btn-group'>
      <div className='btn' onClick={() => setContador(contador - 1)}>-</div>
      <div className='btn' onClick={reset}>Reset</div>
      <div className='btn' onClick={incrementar}>+</div>
       </div>   
      </div>          
    </main>
  );
};
export default Contador;
