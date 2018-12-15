import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux';
import { SharedStyle } from '../../components/styles/shared';
import loader from '../../assets/icons/index.messenger-typing-preloader.svg';
import LoginStyle from './login.style';


const required = (value) => (value ? undefined : 'Required');
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'invalid email address'
    : undefined;
const minLength8 = (value) =>
  value && value.length >= 8
    ? undefined
    : 'password must be atleast eight (8) long';

    const renderField = ({
      input,
      label,
      placeholder,
      type,
      meta: { touched, error },
    }) => (
      <div className="field">
        <div className="control-container">
          <input {...input} className="input" placeholder={placeholder} type={type} />
        </div>
        {touched && (error && <p className="error">{error}</p>)}
      </div>
    );
    
function Login(props) {
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
  return (
    <SharedStyle className="Login">
      <LoginStyle>
          <h2 className="title">LINK<span>CARD</span></h2>
          <form className="form" onSubmit={handleSubmit}>
      {loading && (
        <p className="loading">
          <img src={loader} alt="" />
        </p>
      )}
      <Field
        className="input"
        name="email"
        component={renderField}
        type="email"
        label="Email"
        placeholder="Username"
        validate={[required]}
      />

      <Field
        className="input"
        name="password"
        component={renderField}
        type="password"
        label="Password"
        placeholder="Password"
        validate={[minLength8]}
      />

      <div className="field">
        <div className="control">
          <button
            type="submit"
            disabled={pristine || submitting || invalid}
            className="button is-link">
            LOGIN
          </button>
          <button
            type="submit"
            disabled={pristine || submitting || invalid}
            className="button is-link">
            SIGN UP 
          </button>
        </div>
      </div>
    </form>
      </LoginStyle>
    </SharedStyle>
  );
}
let LogInForm = reduxForm({
  form: 'login',
})(Login);

const mapStatesWithProps = (states) => {
  return {
    loader,
  };
};

const mapDispatchWithProps = (dispatch) => {
  return {
    onSubmit: (values) => {
    }
  };
};

export default connect(
  mapStatesWithProps,
  mapDispatchWithProps,
)(LogInForm);
