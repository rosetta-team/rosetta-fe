import React from 'react';
import '../../styles/Navbar.scss';

const Navbar = () => {
  return (
    <section className='navbar-section'>
      <span role='img' aria-label='icon' className='icon'></span>
      <h1 className='navbar-heading'>Rosetta</h1>
    </section>
  )
}

export default Navbar;