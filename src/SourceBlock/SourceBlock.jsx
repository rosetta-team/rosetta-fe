import React from 'react';
import './SourceBlock.scss';

//Probably going to change the name of this component or completely delete it
//What really needs to be in this section is the methods that 
// populate the source lang methods and the translate button that 
//Send the request to the backend. 

const SourceBlock = ({ methods }) => {
  return (
    <section className='source-block-sect'>
      <section className='method-dropdown-sect'>
        <p className='method-label'>Select a method:</p>
        <select className='select-method'>
          <option>--method--</option>
          {methods}
        </select>
      </section>
      <section className='action-buttons-sect'>
        <button className='reset-button'>Reset</button>
        <button className='translate-button'>Translate</button>
      </section>
    </section>
  )
}

export default SourceBlock;