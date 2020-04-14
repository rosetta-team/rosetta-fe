import React from 'react'
import { render } from '@testing-library/react'
import { ResultCard } from './ResultCard'

const mockMethod = {
                      id: '36',
                      name: 'Array#each',
                      description: 'Calls the given block once for each element in self, passing\nthat element as a parameter.  Returns the array itself.\nIf no block is given, an Enumerator is\nreturned.\nproduces:\n',
                      syntax: 'each {|item| block}    → ary\neach                   → Enumerator\n',
                      snippet: 'a = [ "a", "b", "c" ]\na.each {|x| print x, " -- " }\n',
                      docsUrl: 'https://ruby-doc.org/core-2.6/Array.html#method-i-each'
                    }
const mockRating = 0.8812150487394769

describe('ResultCard component', () => {
  it('can render', () => {
    const { getByText } = render(<ResultCard method={mockMethod} rating={mockRating} />);
    expect(getByText(mockMethod.name)).toBeInTheDocument();
  });
});
