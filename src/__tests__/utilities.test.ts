import {
  compose,
  curry,
  prop,
} from '../utilities';

describe('compose', () => {
  it('composes functions into one func', () => {
    const add = (a: number) => (b: number) => a + b;
    const add3 = compose(
      add(1),
      add(2),
    );
    expect(add3(1)).toBe(4);
  });
});
describe('curry', () => {
  it('allows params to be applied at once', () => {
    const add = curry((a: number, b: number) => a + b);
    expect(add(1, 2)).toBe(3);
  });
  it('allows partial application', () => {
    const add = curry((a: number, b: number) => a + b);
    const add2 = add(2);
    expect(add2(40)).toBe(42);
  });
});

describe('prop', () => {
  it('returns a property', () => {
    expect(prop('dingo', { dingo: 'balls' })).toBe('balls');
  });
  it('returns undefined if object is null or undefined', () => {
    expect(prop('dingo', null)).toBe(undefined);
    expect(prop('dingo', undefined)).toBe(undefined);
  });
});

