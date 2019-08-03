export function setDate(title) {
  return (dispatch) => {
    return dispatch({
      type: 'SET_TITLE',
      title,
    });
  };
}
