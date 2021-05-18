export const saveToLS = (filmId) => {
  let updatedFavoriteList = [];
  const currentFavoriteList = getFromLS();
  if (!findDuplicate(filmId)) {
    if (currentFavoriteList) updatedFavoriteList = [...currentFavoriteList, filmId];
    else updatedFavoriteList.push(filmId);

    localStorage.setItem('favoriteList', JSON.stringify(updatedFavoriteList));
  }
};

export const getFromLS = () => {
  return JSON.parse(localStorage.getItem('favoriteList'));
};

export const deleteFromLS = (filmId) => {
  let updatedFavoriteList = [];
  const currentFavoriteList = getFromLS();
  updatedFavoriteList = currentFavoriteList.splice(currentFavoriteList.indexOf(filmId), 1);
  localStorage.setItem('favoriteList', JSON.stringify(updatedFavoriteList));
};

export const clearLs = () => {
  localStorage.clear();
};


const findDuplicate = (id) => {
  const currentFavoriteList = getFromLS();
  if (currentFavoriteList) {
    return getFromLS().filter((el) => el === id).length;
  } else return 0;
};
