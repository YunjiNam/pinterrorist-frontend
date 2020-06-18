// action creator 하나

export const addPin = (pin) => {
  return {
    type: "ADD_PIN",
    payload: pin,
  };
};

export const deletePin = (pin) => {
  return {
    type: "DELETE_PIN",
    payload: pin,
  };
};

export const clearPin = (pin) => {
  return {
    type: "CLEAR_PIN",
    payload: pin,
  };
};
