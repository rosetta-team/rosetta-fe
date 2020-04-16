import React from 'react';
import { connect } from 'react-redux';
import '../../styles/SourceMethod.scss';
import '../../styles/prism.css'
import Snippet from "../Snippet/Snippet.jsx"

export const SourceMethod = (props) => {
let { id, name, description, syntax, snippet, docsUrl} = props.sourceMethod
  return (
    <section key={id} className='method-top-sect'>
      <section className='source-method-name'>
        <h3 className='method-name'>{name} </h3>
      </section>
      <section className='method-mid-section'>
        <p><span>Description:</span> {description} </p>
          <div className='syntax-div'>
          <p><span>Syntax: </span> {syntax}</p>
          </div>
      </section>
      <section className='method-bottom-sect'>
        <div>
          <span>Snippet:</span>
            <section className='code-wrapper'>
               <Snippet
                code={snippet}
                language="js"
                plugins={[]}
              />
            </section>
        </div>
      </section>
    </section>
  )
}

export const mapStateToProps = state => ({
  sourceMethod: state.sourceMethod
})

export default connect(mapStateToProps)(SourceMethod);
