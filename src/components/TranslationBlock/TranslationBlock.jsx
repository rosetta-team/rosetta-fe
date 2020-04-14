import React, { Component } from 'react';
import '../../styles/TranslationBlock.scss';
import SourceBlock from '../SourceBlock/SourceBlock';
import { GET_ALL_LANGUAGES } from '../../queries'
import { withApollo } from '@apollo/react-hoc'
import { GET_TRANSLATION } from '../../queries'
import { Query } from 'react-apollo'
import { connect } from 'react-redux'
import { setSourceLanguage, setSourceMethod, setTargetLanguage, setSourceId, setTargetId, setResults } from '../../actions'

class TranslationBlock extends Component {
  constructor(props) {
    super();
    this.state= {
      sourceMethods: []
    }
  }

  handleSourceChange = (event, data) => {
    let methods = this.findMethods(event, data)
    let langId = this.findLanguageId(event, data)
    this.props.setSourceLanguage(event.target.value)
    this.props.setSourceId(langId)
    this.setState({sourceMethods: methods})
  }

  handleTargetChange = (event, data) => {
    let langId = this.findLanguageId(event, data)
    this.props.setTargetId(langId)
    this.props.setTargetLanguage(event.target.value)
  }

  findLanguageId = (event, data) => {
    return data.allLanguages.find(lang => lang.name === event.target.value).id
  }

  findMethods = (event, data) => {
    return data.allLanguages.find(lang => lang.name === event.target.value ).methods
  }

  handleMethodChange = (event) => {
    let methodId = this.state.sourceMethods.find(method => method.name === event.target.value).id
    this.props.setSourceMethod(event.target.value, methodId)
  }


  handleSubmit = async (event) => {
    let targetId = Number(this.props.targetLanguage.id)
    let methodId = Number(this.props.sourceMethod.id)
    const { data } = await this.props.client.query({ query: GET_TRANSLATION, variables: { targetLanguageId: targetId, methodId: methodId}})
    this.props.setResults(data)
  }

  clearDropBoxes = () => {

  }

  render() {
    return (
    <Query query={GET_ALL_LANGUAGES}>
    {({ loading, error, data }) => {
      if(loading) return <h1 style={{'fontSize': '5rem', 'marginTop': '5rem'}}>Loading...</h1>
      if(error) return console.log(error)
      let languages = data.allLanguages.map(language => (<option key={language.id} id={language.id} name={language.name}>{language.name}</option>))
      return (
        <section className='translation-block'>
          <section className='specified-lang-sect'>
            <section className='source-lang-name'>
              <label className='source-lang-lable'>Translate from:</label>
              <select className='select-lang' name='sourceLanguage' onChange={(event) => this.handleSourceChange(event, data)}>
                <option value='select language'>--Select Language--</option>
                {languages}
              </select>
            </section>
            <span role='img' aria-label='icon' className='language-seperator'></span>
              <section className='target-lang-name'>
                <label className='target-lang-lable'>Translate to:</label>
                <select className='select-lang' name='targetLanguage' onChange={(event) => this.handleTargetChange(event, data)}>
                  <option value='select language'>--Select Language--</option>
                  {languages}
                </select>
              </section>
            </section>
            <section className='source-target-wrapper'>
              <SourceBlock methods={this.state.sourceMethods} handleSubmit={this.handleSubmit} handleMethodChange={this.handleMethodChange}/>
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
})

const mapDispatchToProps = dispatch => ({
  setSourceLanguage: language => dispatch(setSourceLanguage(language)),
  setTargetLanguage: language => dispatch(setTargetLanguage(language)),
  setSourceMethod: (method, id) => dispatch(setSourceMethod(method, id)),
  setSourceId: id => dispatch(setSourceId(id)),
  setTargetId: id => dispatch(setTargetId(id)),
  setResults: results => dispatch(setResults(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(TranslationBlock));
