import { results } from './results'
import { setResults } from '../actions'

const mockResults = [
        {
          id: 1234124,
          weightedRelevancyRating: 0.8812150487394769,
          method: {
            id: '36',
            name: 'Array#each',
            description: 'Calls the given block once for each element in self, passing\nthat element as a parameter.  Returns the array itself.\nIf no block is given, an Enumerator is\nreturned.\nproduces:\n',
            syntax: 'each {|item| block}    → ary\neach                   → Enumerator\n',
            snippet: 'a = [ "a", "b", "c" ]\na.each {|x| print x, " -- " }\n',
            docsUrl: 'https://ruby-doc.org/core-2.6/Array.html#method-i-each',
            __typename: 'MethodObject'
          },
          __typename: 'MethodResultObject'
        },
        {
          id: 1234124,
          weightedRelevancyRating: 0.879526740614683,
          method: {
            id: '12',
            name: 'Array#[]=',
            description: 'Element Assignment — Sets the element at index, or replaces a\nsubarray from the start index for length\nelements, or replaces a subarray specified by the range of\nindices.\nIf indices are greater than the current capacity of the array, the array\ngrows automatically.  Elements are inserted into the array at\nstart if length is zero.\nNegative indices will count backward from the end of the array.  For\nstart and range cases the starting index is just\nbefore an element.\nAn IndexError is raised if a negative index\npoints past the beginning of the array.\nSee also #push, and #unshift.\n',
            syntax: 'ary[index]         = obj                      →  obj\nary[start, length] = obj or other_ary or nil  →  obj or other_ary or nil\nary[range]         = obj or other_ary or nil  →  obj or other_ary or nil\n',
            snippet: 'a = Array.new\na[4] = "4";                 #=> [nil, nil, nil, nil, "4"]\na[0, 3] = [ \'a\', \'b\', \'c\' ] #=> ["a", "b", "c", nil, "4"]\na[1..2] = [ 1, 2 ]          #=> ["a", 1, 2, nil, "4"]\na[0, 2] = "?"               #=> ["?", 2, nil, "4"]\na[0..2] = "A"               #=> ["A", "4"]\na[-1]   = "Z"               #=> ["A", "Z"]\na[1..-1] = nil              #=> ["A", nil]\na[1..-1] = []               #=> ["A"]\na[0, 0] = [ 1, 2 ]          #=> [1, 2, "A"]\na[3, 0] = "B"               #=> [1, 2, "A", "B"]\n',
            docsUrl: 'https://ruby-doc.org/core-2.6/Array.html#method-i-5B-5D-3D',
            __typename: 'MethodObject'
          },
          __typename: 'MethodResultObject'
        },
        {
          id: 1234124,
          weightedRelevancyRating: 0.8784721486615596,
          method: {
            id: '55',
            name: 'Array#keep_if',
            description: 'Deletes every element of self for which the given block\nevaluates to false, and returns self.\nIf no block is given, an Enumerator is\nreturned instead.\nSee also #select!.\n',
            syntax: 'keep_if {|item| block}   → ary\nkeep_if                  → Enumerator\n',
            snippet: 'a = %w[ a b c d e f ]\na.keep_if {|v| v =~ /[aeiou]/ }    #=> ["a", "e"]\na                                  #=> ["a", "e"]\n',
            docsUrl: 'https://ruby-doc.org/core-2.6/Array.html#method-i-keep_if',
            __typename: 'MethodObject'
          },
          __typename: 'MethodResultObject'
        },
        {
          id: 1234124,
          weightedRelevancyRating: 0.8780229116438469,
          method: {
            id: '95',
            name: 'Array#take',
            description: 'Returns first n elements from the array.\nIf a negative number is given, raises an ArgumentError.\nSee also #drop\n',
            syntax: 'take(n)               → new_ary\n',
            snippet: 'a = [1, 2, 3, 4, 5, 0]\na.take(3)             #=> [1, 2, 3]\n',
            docsUrl: 'https://ruby-doc.org/core-2.6/Array.html#method-i-take',
            __typename: 'MethodObject'
          },
          __typename: 'MethodResultObject'
        },
        {
          id: 1234124,
          weightedRelevancyRating: 0.8774208180078882,
          method: {
            id: '45',
            name: 'Array#first',
            description: 'Returns the first element, or the first n elements, of the\narray. If the array is empty, the first form returns nil, and\nthe second form returns an empty array. See also #last for the opposite effect.\n',
            syntax: 'first     →   obj or nil\nfirst(n)  →   new_ary\n',
            snippet: 'a = [ "q", "r", "s", "t" ]\na.first     #=> "q"\na.first(2)  #=> ["q", "r"]\n',
            docsUrl: 'https://ruby-doc.org/core-2.6/Array.html#method-i-first',
            __typename: 'MethodObject'
          },
          __typename: 'MethodResultObject'
        }
      ]

describe('results reducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = results(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should add the results to the store if SET_RESULTS type', () => {
    const expected = mockResults;
    const initialState = [];

    const result = results(initialState, setResults(mockResults))

    expect(result).toEqual(expected);
  });
});
