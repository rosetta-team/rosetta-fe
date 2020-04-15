import React from 'react';
import { connect } from 'react-redux'
import '../../styles/SourceBlock.scss';

const SourceBlock = ({ methods, handleSubmit, handleMethodChange, error, clearDropBoxes }, props) => {
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
      { error ?
      <section className='input-error'>
        <p className='error-message'>**You must fill out all inputs**</p>
      </section> : null
      }
      <section className='action-buttons-sect'>
        <button className='reset-button' onClick={() => clearDropBoxes()}>Reset</button>
        <button className='translate-button' onClick={() => handleSubmit()}>Translate</button>
      </section>
    </section>
  )
}

export const mapStateToProps = state => ({
  targetLanguage: state.targetLanguage,
  sourceMethod: state.sourceMethod,
  sourceLanguage: state.sourceLanguage
})

export default connect(mapStateToProps)(SourceBlock);