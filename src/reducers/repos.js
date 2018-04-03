const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_REPOS':
      return { ...state, repos: action.repos };
    default:
      return state;
  }
};
