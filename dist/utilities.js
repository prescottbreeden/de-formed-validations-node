"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = exports.compose = exports.curry = void 0;
function curry(fn) {
    const arity = fn.length;
    return function $curry(...args) {
        if (args.length < arity) {
            return $curry.bind(null, ...args);
        }
        return fn.call(null, ...args);
    };
}
exports.curry = curry;
const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
exports.compose = compose;
exports.prop = curry((p, obj) => (obj ? obj[p] : undefined));
//# sourceMappingURL=utilities.js.map