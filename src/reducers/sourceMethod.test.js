import { sourceMethod } from './sourceMethod'
import { setSourceMethod } from '../actions'

describe('sourceMethod reducer', () => {
  it('should return initial state', () => {
    const expected = {};

    const result = sourceMethod(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should add method object to state if type is SET_METHOD', () => {
    const mockMethod = { name: 'Array#map',
                         id: 54,
                         description: 'A pretty great method',
                         syntax: 'array.map do |block_var| ... end',
                         snippet: 'puts "doing things with map"',
                         docsUrl: 'awebsite.com/map'
                       };
    const expected = { name: 'Array#map',
                       id: 54 }

    const result = sourceMethod({}, setSourceMethod(mockMethod.name, mockMethod.id));
    // const result = sourceMethod({}, setSourceMethod(mockMethod));

    expect(result).toEqual(expected);
    // expect(result).toEqual(mockMethod);
  });
});
