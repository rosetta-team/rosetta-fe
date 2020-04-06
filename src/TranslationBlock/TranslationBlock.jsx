import React from 'react';
import './TranslationBlock.scss';
import SourceBlock from '../SourceBlock/SourceBlock';
import TargetBlock from '../TargetBlock/TargetBlock';

const TranslationBlock = () => {
  return (
    <section className='translation-block'>
      <section className='specified-lang-sect'>
        <section className='source-lang-name'>
          <h2 className='source-lang-lable'>Translate from:</h2>
          <select>
            <option value='select language'>Select Language</option>
            <option>Ruby</option>
            <option>JavaScript</option>
          </select>
        </section>
        <section className='target-lang-name'>
          <h2 className='target-lang-lable'>Translate to:</h2>
          <select>
            <option value='select language'>Select Language</option>
            <option>Ruby</option>
            <option>JavaScript</option>
          </select>
        </section>
      </section>
      <section className='source-target-wrapper'>
      <SourceBlock />
      <TargetBlock />
      </section>
    </section>
  )
}

export default TranslationBlock;