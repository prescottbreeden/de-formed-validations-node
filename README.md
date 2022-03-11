<p align="center">
  <img src="https://user-images.githubusercontent.com/35798153/157611790-96f35e8b-ee4f-44e4-b3c9-1864900a02f2.png" />
</p>

[![npm version](https://badge.fury.io/js/@de-formed%2Fnode-validations.svg)](https://badge.fury.io/js/@de-formed%2Fnode-validations)
[![Known Vulnerabilities](https://snyk.io/test/github/prescottbreeden/de-formed-validations-node/badge.svg)](https://snyk.io/test/github/prescottbreeden/de-formed-validations-node)
![example workflow](https://github.com/prescottbreeden/de-formed-validations-node/actions/workflows/main.yml/badge.svg)
[![codecov](https://codecov.io/gh/prescottbreeden/de-formed-validations-node/branch/main/graph/badge.svg?token=7MPA6NZZDD)](https://codecov.io/gh/prescottbreeden/de-formed-validations-node)
![size](https://img.shields.io/bundlephobia/minzip/@de-formed/node-validations)

@De-Formed Validations offers a robust and unopinionated API to customize form and data validations. With only a handful of properties to learn, @de-formed maintains its own internal state with simple function calls so that you can design your architecture the way you want to.

## Why Use De-Formed?

1. Modular, Composable, and Scalable
2. Unopinionated and Customizable to the Moon 🚀
3. Lightweight and Fast
4. Easy to Use, Easy to Test

## Install

```
yarn add @de-formed/node-validations
```

```
npm i @de-formed/node-validations
```

## Basic Usage

### Step 1: Create a file to define your validations.

Validation Schemas are created by defining an object with keys that hold an array of validation rules. Each validation rule consists of the error message to provide if the rule fails, and a function that returns true or false.

```js
// PersonValidation.js
import { Validation } from '@de-formed/node-validations';

export const PersonValidation = () => {
  return Validation({
    firstName: [
      {
        error: 'First Name is required.',
        validation: ({ firstName }) => firstName.length > 0,
      },
      {
        error: 'First Name cannot be longer than 20 characters.',
        validation: ({ firstName }) => firstName.length <= 20,
      },
    ],
    lastName: [
      {
        error: 'Last Name is required.',
        validation: ({ lastName }) => lastName.length > 0,
      },
      {
        error: 'Last Name cannot be longer than 20 characters.',
        validation: ({ lastName }) => lastName.length <= 20,
      },
      {
        error: 'Must be Ross if fist name is Bob.',
        validation: ({ firstName, lastName }) => {
          return firstName === 'Bob' ? lastName === 'Ross' : true;
        },
      },
    ],
  });
};
```

### Step 2: Use anywhere you like

```js
import { PersonValidation } from './PersonValidation';
import { Request, Response } from 'express';

const v = PersonValidation();

app.post('/person', (req: Request, res: Response) =>
  v.validateAll(req.body) ? res.status(201) : res.json(v.validationState),
);
```

---

## Getting Started

Visit our wiki to get a step by step [walkthrough](https://github.com/prescottbreeden/de-formed-validations-node/wiki/Getting-Started) of how to customize De-Formed to the moon 🚀

## Documentation

Check out the [documentation](https://github.com/prescottbreeden/de-formed-validations-node/wiki/Docs).

## Examples

More [examples](https://github.com/prescottbreeden/de-formed-validations-node/wiki/Examples) and CodeSandboxes.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
