const initialState = {
  users: [],
  editingUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        editingUser: null,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "SET_EDITING_USER":
      return {
        ...state,
        editingUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
