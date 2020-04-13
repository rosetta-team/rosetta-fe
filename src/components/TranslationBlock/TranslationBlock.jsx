import React, { Component } from 'react';
import '../../styles/TranslationBlock.scss';
import SourceBlock from '../SourceBlock/SourceBlock';
import { getAllLanguages } from '../../queries'
// import { useQuery } from "@apollo/react-hooks";
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import { setSourceLanguage, setSourceMethod, setTargetLanguage, setLanguages } from '../../actions'

class TranslationBlock extends Component {
  constructor() {
    super();
    this.state= {
      sourceLanguage: '',
      sourceMethods: [],
      targetLanguage: ''
    }
  }

  handleChange = (event,data) => {
    let methods = this.findMethods(event, data)
    this.setState({[event.target.name]: event.target.value, sourceMethods: methods})
  }
  
  findMethods = (event, data) => {
    return data.allLanguages.find(lang => lang.name === event.target.value ).methods
  }

  render() {
    return (
    <Query query={getAllLanguages}>
    {({ loading, error, data }) => {
      if(loading) return <h1 style={{'fontSize': '5rem', 'marginTop': '5rem'}}>Loading...</h1>
      if(error) return console.log(error)
      let languages = data.allLanguages.map(language => (<option key={language.id} name={language.name}>{language.name}</option>))
      return (
        <section className='translation-block'>
          <section className='specified-lang-sect'>
            <section className='source-lang-name'>
              <label className='source-lang-lable'>Translate from:</label>
              <select className='select-lang' name='sourceLanguage' onChange={(event) => this.handleChange(event, data)}>
                <option value='select language'>--Select Language--</option>
                {languages}
              </select>
            </section>
            <span role='img' aria-label='icon' className='language-seperator'></span>
              <section className='target-lang-name'>
                <label className='target-lang-lable'>Translate to:</label>
                <select className='select-lang' name='targetLanguage' >
                  <option value='select language'>--Select Language--</option>
                  {languages}
                </select>
              </section>
            </section>
            <section className='source-target-wrapper'>
              <SourceBlock methods={this.state.sourceMethods}/>
            </section>
          </section>
        )}
      }
    </Query>)
  }
}


const mapStateToProps = (state) => ({
  sourceLanguage: state.sourceLanguage,
  targetLanguage: state.targetLanguage,
  sourceMethod: state.sourceMethod,
  allLanguages: state.allLanguages
})

const mapDispatchToProps = dispatch => ({
  setSourceLanguage: language => dispatch(setSourceLanguage(language)),
  setTargetLanguage: language => dispatch(setTargetLanguage(language)),
  setSourceMethod: method => dispatch(setSourceMethod(method)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TranslationBlock);