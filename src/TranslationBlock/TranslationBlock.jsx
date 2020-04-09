import React, { Component } from 'react';
import './TranslationBlock.scss';
import SourceBlock from '../SourceBlock/SourceBlock';
import TargetBlock from '../TargetBlock/TargetBlock';

class TranslationBlock extends Component {
  constructor() {
    super();
    this.state = {
      sourceLanguage: '',
      targetLanguage: '',
      languageOptions: ['Ruby', 'JavaScript'],
      sourceLangMethods: ['split', 'map', 'each', 'filter']
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  //thought process so far is that I have to make a function
  //that if the source and target match, there should be an alert 
  //and as soon as source is selected, there should be a query 
  //that grabs the methods for that language and populates them in 
  //the next method drop down. Method names: sourceCheck, => 
  // if source and target dont match, then query the methods 

  render() {
    let methods = this.state.sourceLangMethods.map(method => {
      return (<option>{method}</option>)
    })
    let languages = this.state.languageOptions.map(language => {
      return (<option>{language}</option>)
    })
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
        <SourceBlock methods={methods}/>
        </section>
      </section>
    )
  }
}

export default TranslationBlock;