import React from 'react';
import '../../styles/TranslationBlock.scss';
import SourceBlock from '../SourceBlock/SourceBlock';
import { getAllLanguages } from '../../queries'
import { useQuery } from "@apollo/react-hooks";
import { connect } from 'react-redux'
import { setSourceLanguage, setSourceMethod, setTargetLanguage } from '../../actions'

const TranslationBlock = (props) => {
  let { data, loading, error } = useQuery(getAllLanguages)
  if(loading) return <h1 style={{'fontSize': '5rem', 'marginTop': '5rem'}}>Loading...</h1>
  if(error) return console.log(error)
  if (data) {
    let languages = data.allLanguages.edges.map(language => (<option key={language.node.id} name={language.node.name}>{language.node.name}</option>))
    return (
      <section className='translation-block'>
          <section className='specified-lang-sect'>
            <section className='source-lang-name'>
              <label className='source-lang-lable'>Translate from:</label>
              <select className='select-lang' name='sourceLanguage' onChange={event => this.handleChange(event)}>
                <option value='select language'>--Select Language--</option>
                {languages}
              </select>
            </section>
          <span role='img' aria-label='icon' className='language-seperator'></span>
            <section className='target-lang-name'>
              <label className='target-lang-lable'>Translate to:</label>
            <select className='select-lang' name='targetLanguage' onChange={event => this.handleChange(event)}>
                <option value='select language'>--Select Language--</option>
              {languages}
              </select>
            </section>
          </section>
        <section className='source-target-wrapper'>
        <SourceBlock />
        </section>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  sourceLanguage: state.sourceLanguage,
  targetLanguage: state.targetLanguage,
  sourceMethod: state.sourceMethod
})

const mapDispatchToProps = dispatch => ({
  setSourceLanguage: language => dispatch(setSourceLanguage(language)),
  setTargetLanguage: language => dispatch(setTargetLanguage(language)),
  setSourceMethod: method => dispatch(setSourceMethod(method))
})

export default connect(mapStateToProps, mapDispatchToProps)(TranslationBlock);