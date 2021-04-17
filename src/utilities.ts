//  curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
export function curry(fn: any) {
  const arity = fn.length;

  return function $curry(...args: any[]): any {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }
    return fn.call(null, ...args);
  };
}

//  compose :: ((a -> b), (b -> c),  ..., (y -> z)) -> a -> z
export const compose = (...fns: any[]) => (...args: any[]) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

//  prop :: String -> {a} -> [a | Undefined]
export const prop = curry((p: string, obj: any) => (obj ? obj[p] : undefined));

