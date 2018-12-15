import React from 'react';
import { Field } from 'redux-form';

import './form.css';
//validations
const required = (value) => (value ? undefined : 'Required');
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'invalid email address'
    : undefined;
const minLength8 = (value) =>
  value && value.length >= 8
    ? undefined
    : 'password must be atleast eight (8) long';

export default function Form(props) {
  const {
    pristine,
    submitting,
    handleSubmit,
    invalid,
    loading,
    failure,
    loader,
    dismiss,
    text,
  } = props;

  const failureStyle = {
    top: failure ? '0rem' : '-5rem',
  };
  const dismissStyle = {
    position: 'absolute',
    right: '2rem',
    fontSize: '22px',
    cursor: 'pointer',
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {loading && (
        <p className="loading">
          <img src={loader} alt="" />
        </p>
      )}
      <p style={failureStyle} className="server-error">
        {failure}
        <span
          style={dismissStyle}
          className="signup-failure_dismiss"
          onClick={() => dismiss()}>
          <i title="dismiss">x</i>
        </span>
      </p>
      <Field
        className="input"
        name="email"
        component={renderField}
        type="email"
        label="Email"
        placeholder="@"
        validate={[required, email]}
      />

      <Field
        className="input"
        name="password"
        component={renderField}
        type="password"
        label="Password"
        placeholder=""
        validate={[minLength8]}
      />

      <div className="field">
        <div className="control">
          <button
            type="submit"
            disabled={pristine || submitting || invalid}
            className="button is-link">
            {text}
          </button>
        </div>
      </div>
    </form>
  );
}
const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error },
}) => (
  <div className="field">
    <label className="label">{label}</label>
    <div className="control-container">
      <input {...input} placeholder={placeholder} type={type} />
    </div>
    {touched && (error && <p className="error">{error}</p>)}
  </div>
);
