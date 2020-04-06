import React from 'react';
import './SourceBlock.scss';

const SourceBlock = () => {
  return (
    <section className='source-block-sect'>
      <p>Choose a method you'd like to translate</p>
      <select>
        <option>.map</option>
        <option>.split</option>
        <option>.each</option>
      </select>
    </section>
  )
}

export default SourceBlock;