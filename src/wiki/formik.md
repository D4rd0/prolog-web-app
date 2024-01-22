# FORMIK DOCUMENTATION FOR BLUECAR

## Introduction

Formik is a helpful assistant for dealing with forms on websites built with React. When we talk about "forms," we mean the spaces where you put in things like your name or password.

## Installation

To import all the needed dependencies type:

```bash
 npm i
```

before launching the project and all the dependencies will be installed.

## BASIC USAGE

## Import

In components where you need to use Formik, import the library:

```jsx
import { useFormik } from "formik";
```

## Form initialization

It's the process of setting things up so that your form works smoothly in your app. Imagine you're putting together a webpage with a signup form, and you've picked Formik to handle the form.

Here's a simple example:

```jsx
//In your form component, kick things off using `useFormik`

const MyFormComponent = () => {
  // Create a `formik` object using `useFormik`
  const formik = useFormik({
    // initialValues: Set up the starting values for your form
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    // onSubmit: Decide what to do when the form is submitted
    onSubmit: (values) => {
      // In this example, maybe you'd send these values to your server or do something else with them
      console.log("Form submitted with values:", values);
    },
  });
};
```

## Validation

Validating data is important in ensuring that the data entered in the form fields meets specific criteria before being submitted.

Formik typically uses a validation schema, often provided by a Yup library, to define and enforce validation rules. Here's a straightforward explanation using a simple login form example:

First you need to import de library:

```bash
import * as Yup from 'yup';
```

- We use Yup.object to define a validation schema.
- For each field (email and password), we specify validation rules using Yup's methods.
- Yup have a many type of validation, there are some of this types:
  - Required: The field cannot be empty.
  ```jsx
  Example: Yup.string().required("This field is required");
  ```
  - Minimum and Maximum Length: The field must have a minimum and/or maximum specified length.
  ```jsx
  Example: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters");
  ```
  - Email: The field must be a valid email address.
  ```jsx
  Example: Yup.string().email("Invalid email format");
  ```
  - Number: The field must be a positive number.
  ```jsx
  Example: Yup.number().positive("Must be a positive number");
  ```
  - Value Comparison: Used to compare two fields, such as passwords and their confirmation.
  ```jsx
  Example: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  );
  ```

```jsx
const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });
};
```

## Integrate in the input field

To integrate formik in the inputs, we have created a input component that implements the formik funcionality, so you need to import this component.

In the component we are using this functions for that the component does it automatically.

```jsx
let formikProps: any = {};
if (formik) {
  formikProps = {
    value: formik.values[name],
    onChange: formik.handleChange(name),
    error: !!(formik.touched[name] && formik.errors[name]),
  };
}
```

```jsx
import { Input } from "src/components/elements";
```

When you use this component, you need to pass the formik function as a parameter

```jsx
<Input
  name="email"
  type="text"
  fullWidth
  formik={Loginform}
  label="Email address"
/>
```

To submit the dates, it is neccesary to use the function implemented in formik, handleSubmit, like this:

```jsx
<Button
        sx={{ width: '100%' }}
        type="submit"
        variant="outlined"
        onClick={() => loginformik.handleSubmit()}
      >
```
