import axios from 'axios';
import { push } from 'connected-react-router';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_LOADING = 'REGISTER_LOADING';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_LOADING = 'LOGIN_LOADING';

export const REGISTER_LOGIN = 'REGISTER_LOGIN';

export const ADD_WEBSITE_SUCCESS = 'ADD_WEBSITE_SUCCESS';
export const ADD_WEBSITE_FAILURE = 'ADD_WEBSITE_FAILURE';
export const ADD_WEBSITE_LOADING = 'ADD_WEBSITE_LOADING';

export const LIST_WEBSITE_SUCCESS = 'LIST_WEBSITE_SUCCESS';
export const LIST_WEBSITE_FAILURE = 'LIST_WEBSITE_FAILURE';
export const LIST_WEBSITE_LOADING = 'LIST_WEBSITE_LOADING';

export function listWebsiteLoading(state) {
  return {
    type: LIST_WEBSITE_LOADING,
    state,
  };
}
export function listWebsiteSuccess(data) {
  return {
    type: LIST_WEBSITE_SUCCESS,
    data,
    fetched: data.length,
  };
}

export function listWebsiteFailure(error) {
  return {
    type: LIST_WEBSITE_FAILURE,
    error,
  };
}

export function addwebsiteLoading(state) {
  return {
    type: ADD_WEBSITE_LOADING,
    state,
  };
}
export function addWebsiteSuccess(state) {
  return {
    type: ADD_WEBSITE_SUCCESS,
    state,
  };
}

export function addWebsiteFailure(error) {
  return {
    type: ADD_WEBSITE_FAILURE,
    error,
  };
}
export function registerLoading(state = false) {
  return {
    type: REGISTER_LOADING,
    state,
  };
}
export function registerSuccess(status) {
  return {
    type: REGISTER_SUCCESS,
    status,
  };
}

export function registerFailure(error) {
  return {
    type: REGISTER_FAILURE,
    error,
  };
}

export function loginLoading(state = false) {
  return {
    type: LOGIN_LOADING,
    state,
  };
}
export function loginSuccess(status) {
  return {
    type: LOGIN_SUCCESS,
    status,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export const fieldAction = (state) => {
  return {
    type: REGISTER_LOGIN,
    state,
  };
};

export const loginRequest = (data) => {
  return function(dispatch) {
    dispatch(loginLoading(true));

    axios
      .post('http://localhost:3000/user/login', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        dispatch(loginLoading(false));
        if (res.status >= 200 && res.status < 400) {
          const token = JSON.stringify(res.data.session);
          localStorage.setItem('token', token);
          dispatch(loginSuccess(true));
          dispatch(push('/'));
        } else {
          dispatch(loginFailure(res.data.error));
        }
      })
      .catch((err) => {
        dispatch(loginLoading(false));
        if (err.response) {
          if (err.response.status === 404) {
            dispatch(loginFailure(err.response.statusText));
          } else {
            dispatch(loginFailure(err.response.data.error));
          }
        } else {
          dispatch(loginFailure(err.message));
        }
      });
  };
};

export const registerRequest = (data) => {
  return function(dispatch) {
    dispatch(registerLoading(true));

    axios
      .post('http://localhost:3000/user/signup', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        dispatch(registerLoading(false));
        if (res && res.status < 400) {
          const token = JSON.stringify(res.data.session);
          localStorage.setItem('token', token);
          dispatch(registerSuccess(true));
          dispatch(push('/'));
        } else {
          dispatch(registerFailure(res.data.error));
        }
      })
      .catch((err) => {
        dispatch(registerLoading(false));
        if (err.response) {
          dispatch(registerFailure(err.response.data.error));
        } else {
          dispatch(registerFailure(err.message));
        }
      });
  };
};

export const addWebsiteRequest = (data) => {
  return function(dispatch) {
    dispatch(addwebsiteLoading(true));
    const token = JSON.parse(localStorage.getItem('token'));
    axios
      .post('http://localhost:3000/website', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(addwebsiteLoading(false));
        if (res.status >= 200 && res.status < 400) {
          dispatch(addWebsiteSuccess(true));
          window.location.reload();
        } else {
          dispatch(addWebsiteFailure(res.data.error));
        }
      })
      .catch((err) => {
        dispatch(addwebsiteLoading(false));
        if (err.response) {
          dispatch(addWebsiteFailure(err.response.data.error));
        } else {
          dispatch(addWebsiteFailure(err.message));
        }
      });
  };
};

export const listWebsiteRequest = (start) => {
  return function(dispatch) {
    dispatch(listWebsiteLoading(true));
    const token = JSON.parse(localStorage.getItem('token'));
    axios
      .get(`http://localhost:3000/website/${start}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(listWebsiteLoading(false));
        if (res.status >= 200 && res.status < 400) {
          dispatch(listWebsiteSuccess(res.data));
        } else {
          dispatch(listWebsiteFailure(res.data.error));
        }
      })
      .catch((err) => {
        dispatch(listWebsiteLoading(false));
        if (err.response) {
          if (err.response.status === 404) {
            dispatch(loginFailure(err.response.statusText));
          } else {
            dispatch(loginFailure(err.response.data.error));
          }
        } else {
          dispatch(listWebsiteFailure(err.message));
        }
      });
  };
};
