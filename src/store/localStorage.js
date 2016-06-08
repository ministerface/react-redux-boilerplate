export const loadState = (currentState) => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      console.log(currentState);
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
  } catch (e) {

  }
};
