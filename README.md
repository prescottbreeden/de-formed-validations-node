# @De-Formed Validations

@De-Formed Validations offers a robust and unopinionated API to customize form and data validations. With only a handful of properties to learn, @de-formed maintains its own internal state with simple function calls so that you can design your architecture the way you want to.

## Why Use De-Formed?

1. Modular, Composable, and Scalable.
2. Unopinionated and Customizable.
3. Lightweight (1.6 kb gzipped).
3. Easy to use and test.

## Install
```
yarn add @de-formed/node-validations
```
```
npm i @de-formed/node-validations
```
## Basic Usage

### Step 1: Create a file to define your validations.
```ts
// PersonValidation.ts
import { useValidation } from '@de-formed/react-validations';

export const PersonValidation = () => {
  return useValidation<Person>({
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

### Step 2: Plug in anywhere you like
```tsx
import { PersonValidation } from './PersonValidation';
import { Request, Response } from 'express';

const v = PersonValidation();

app.post('/user', (req: Request, res: Response) =>
  v.validate(req.body) ? res.status(200) : res.json(v.validationState));
```

***

## Schema Design for the FP folks
```ts
import { useValidation } from "@de-formed/node-validations";
import * as R from "ramda";
import { emailRegex } from "../constants";
import { PersonalInformation } from "../types";

const stringIsNotEmpty = R.compose(
  R.gt(R.__, 0),
  R.length,
  R.split(""),
  R.trim,
  R.ifElse(R.equals(undefined), R.defaultTo(""), R.identity)
);

export const PersonalInformationValidation = () => {
  return useValidation<PersonalInformation>({
    firstName: [
      {
        error: "First Name is required.",
        validation: R.compose(stringIsNotEmpty, R.prop("firstName")),
      },
    ],
    lastName: [
      {
        error: "Last Name is required.",
        validation: R.compose(stringIsNotEmpty, R.prop("lastName")),
      },
      {
        error: "Last Name must be Ross.",
        validation: R.ifElse(
          R.compose(
            R.equals("bob"),
            R.toLower,
            R.trim,
            R.defaultTo(""),
            R.prop<string, string>("firstName")
          ),
          R.compose(
            R.equals("ross"),
            R.toLower,
            R.trim,
            R.defaultTo(""),
            R.prop<string, string>("lastName")
          ),
          R.always(true)
        ),
      },
    ],
    phoneNumber: [
      {
        error: "Phone Number must be 10 digits.",
        validation: R.compose(
          R.ifElse(R.gt(R.__, 0), R.equals(10), R.always(true)),
          R.length,
          R.split(""),
          R.trim,
          R.defaultTo(""),
          R.prop<string, string>("phoneNumber")
        ),
      },
    ],
    email: [
      {
        error: "Email is required.",
        validation: R.compose(stringIsNotEmpty, R.prop("email")),
      },
      {
        error: "Must be a valid email.",
        validation: R.compose(R.test(emailRegex), R.prop("email")),
      },
    ],
  });
};
```

***

## A Different, Functional, Event Driven Approach
One of the biggest differences you will notice with @De-formed is it has no property or state for the concept of "touched". The problem with touched is most concisely put in that it obstructs event customization around validations. If you are building validations around the user's behavior, it also happens to be a completely useless property. The documentation for @De-formed guides you through setting up validations that only remove errors on change events but validate on blur and submit; however, you can customize the behavior any way you wish.

Importantly, all validations are de-coupled from your form architecture allowing them to be executed, reused, and composed together in any context necessary. Ditch the form tag, define as many functions as you want in your schema with as many nested schemas as you like and then compose them all into a single form control and execute them on whichever events you choose. This provides you with a function-based, modular approach to design validation patterns that meet your requirements without the hassle of managing the validation data yourself.

## Documentation

Check out the [documentation](https://github.com/prescottbreeden/de-formed-validations-react/wiki/Docs).

## Examples

More [examples](https://github.com/prescottbreeden/de-formed-validations-react/wiki/Examples) and CodeSandboxes.

## Coverage
![coverage](https://github.com/prescottbreeden/de-formed-validations-react/blob/master/coverage.png?raw=true)

## License

This project is licensed under the terms of the [MIT license](/LICENSE).