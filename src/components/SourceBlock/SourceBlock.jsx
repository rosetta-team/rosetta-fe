import React from 'react';
import '../../styles/SourceBlock.scss';

const SourceBlock = ({ methods }) => {
let sourceMethods = methods.map(method => <option key={method.id} id={method.id}>{method.name}</option>)
  return (
    <section className='source-block-sect'>
      <section className='method-dropdown-sect'>
        <p className='method-label'>Select a method:</p>
        <select className='select-method'>
          <option>--method--</option>
          {sourceMethods}
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