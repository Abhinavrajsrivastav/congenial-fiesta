export const getUsers = () => async (dispatch) => {
  try {
    const response = await fetch('http://example.com/users');
    const parsedResponse = await response.json();
    dispatch({
      type: 'LIST_USERS',
      payload: parsedResponse,
    });
  } catch (e) {
    console.log(e);
  }
};

export const addUser = (payload) => async (dispatch) => {
  try {
    const response = await fetch('http://example.com/user', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch({
        type: 'ADD_USER',
        payload: parsedResponse.user, // Ensure that the response returns the added user
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateUser = (payload) => async (dispatch) => {
  try {
    const response = await fetch(`http://example.com/user/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch({
        type: 'UPDATE_USER',
        payload: parsedResponse.user,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://example.com/user/${id}`, {
      method: 'DELETE',
    });
    const parsedResponse = await response.json();
    if (parsedResponse.success) {
      dispatch({
        type: 'DELETE_USER',
        payload: id,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const setEditingUser = (user) => (dispatch) => {
  dispatch({
    type: 'SET_EDITING_USER',
    payload: user,
  });
};
