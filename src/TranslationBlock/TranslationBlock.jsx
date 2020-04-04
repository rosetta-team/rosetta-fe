import React from 'react';
import './TranslationBlock.scss';

const TranslationBlock = () => {
  return (
    <section className='translation-block'>
      <section className='specified-lang-sect'>
        <section className='source-lang-name'>
          <h2>Translate from:</h2>
          <select>
            <option value='select language'>select language</option>
            <option>Ruby</option>
            <option>JavaScript</option>
          </select>
        </section>
        <section className='target-lang-name'>
          <h2>Translate to:</h2>
          <select>
            <option value='select language'>select language</option>
            <option>Ruby</option>
            <option>JavaScript</option>
          </select>
        </section>
      </section>
    </section>
  )
}

export default TranslationBlock;