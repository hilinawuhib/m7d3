export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const addToFavoriteAction = (jobToAdd) => ({
  type: ADD_TO_FAVORITE,
  payload: jobToAdd,
});

export const removeFromFavoriteAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: indexToRemove,
});
