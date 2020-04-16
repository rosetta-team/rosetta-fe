import React from 'react';
import '../../styles/IntroCard.scss';

export const IntroCard = () => {
  return (
    <section className='intro-card'>
      <section className='intro-head'>
        <h3 className='intro-heading'>Welcome to Rosetta</h3>
      </section>
      <section className='intro-message'>
        <p className='intro-para'>Rosetta was designed to help those who are
        interested in learning a new coding language and want to know the basics.
        Rosetta surfs the web for you and finds your best results based
        on a relevancy rating. This takes the pain and stress out of sifting
        through multiple websites and forums to find a simple method conversion.
        Follow these steps to get started:
        </p>
        <ol className='ordered-list'>
          <li className='list-item'>Select your native language (language you know best)</li>
          <li className='list-item'>Select the method you would like to translate</li>
          <li className='list-item'>Select the language you are targeting (language you want to know)</li>
          <li className='list-item'>Click the translate button (Easy! We know!)</li>
        </ol>
      </section>
    </section>
  )
}

export default IntroCard;
