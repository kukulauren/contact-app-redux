const initialState = {
  auth: false,
  data: null,
  error: null,
  loading: false,
};
export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case "process": {
      return (store = { loading: true, ...store });
    }
    case "login": {
      return (store = {
        auth: true,
        data: action.payload,
        error: null,
        loading: true,
      });
    }
    case "error": {
      return (store = { loading: false, error: action.payload, ...store });
    }
    case "logout": {
      return (store = { auth: false, data: null });
    }

    default: {
      return store;
    }
  }
};
