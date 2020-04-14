import React from 'react'
import { render } from '@testing-library/react'
import { IntroCard } from './IntroCard'

describe('IntroCard component', () => {
  it('can render', () => {
    const { getByText } = render(<IntroCard />);
    expect(getByText('Welcome to Rosetta')).toBeInTheDocument();
  });
});
