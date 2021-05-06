# @De-Formed / Node Validations (VanillaJS)

@De-Formed Validations offers a robust and unopinionated API to customize form and data validations. With only a handful of properties to learn, @de-formed maintains its own internal state with simple function calls so that you can design your architecture the way you want to.

## Why Use De-Formed?

1. Modular, Composable, and Scalable.
2. Unopinionated and Customizable.
3. Lightweight.
4. Easy to use and test.

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

## Documentation

Check out the [documentation](https://github.com/prescottbreeden/de-formed-validations-node/wiki/Docs).

## Examples

More [examples](https://github.com/prescottbreeden/de-formed-validations-node/wiki/Examples) and CodeSandboxes.

## Coverage

![coverage](https://github.com/prescottbreeden/de-formed-validations-node/blob/master/coverage.png?raw=true)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
