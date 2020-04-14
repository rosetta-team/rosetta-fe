import React from 'react'
import { render } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('NavBar component', () => {
  it('can render', () => {
    const { getByText } = render(<Navbar />);
    expect(getByText('Rosetta')).toBeInTheDocument();
  });
});
