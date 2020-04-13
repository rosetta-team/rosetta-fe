import React from 'react';
import { connect } from 'react-redux'
import '../../styles/SourceBlock.scss';

const SourceBlock = ({ methods, handleSubmit, handleMethodChange }, props) => {
let sourceMethods = methods.map(method => <option key={method.id} id={method.id}>{method.name}</option>)
return (
  <section className='source-block-sect'>
      <section className='method-dropdown-sect'>
        <p className='method-label'>Select a method:</p>
        <select className='select-method' onChange={(event) => handleMethodChange(event)}>
          <option>--method--</option>
          {sourceMethods}
        </select>
      </section>
      <section className='action-buttons-sect'>
        <button className='reset-button'>Reset</button>
        <button className='translate-button' onClick={() => handleSubmit()}>Translate</button>
      </section>
    </section>
  )
}

export const mapStateToProps = state => ({
  targetLanguage: state.targetLanguage,
  sourceMethods: state.sourceMethod
})

export default connect(mapStateToProps)(SourceBlock);