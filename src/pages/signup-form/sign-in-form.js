import React from 'react';
import { reduxForm } from 'redux-form';
import { registerRequest, registerFailure } from '../../redux/actions';
import { connect } from 'react-redux';
import loader from '../../assets/icons/index.glowing-rotate-ring.svg';
import Form from '../../components/form/form';
import { SharedStyle } from '../../components/styles/shared';
import './signin.scss';

function Signin(props) {
  return (
    <SharedStyle className="Signin">
      <h3>Registration Form</h3>
      <Form {...props} text={'Register'} />
    </SharedStyle>
  );
}
let SignInForm = reduxForm({
  form: 'signup',
  onSubmit: submit,
})(Signin);
function submit(values, dispatch) {
  dispatch(registerFailure(''));
  dispatch(registerRequest(values));
}
const mapStatesWithProps = (states) => {
  return {
    loading: states.signup.loading,
    failure: states.signup.failure,
    success: states.signup.success,
    loader,
  };
};

const mapDispatchWithProps = (dispatch) => {
  return {
    dismiss: () => dispatch(registerFailure(false)),
  };
};
export default connect(
  mapStatesWithProps,
  mapDispatchWithProps,
)(SignInForm);
