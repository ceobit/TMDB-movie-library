export const saveToLS = (filmId) => {
  let updatedFavoriteList = [];
  const currentFavoriteList = getFromLS();
  if (!findDuplicate(filmId)) {
    if (currentFavoriteList) updatedFavoriteList = [...currentFavoriteList, filmId];
    else updatedFavoriteList.push(filmId);

    localStorage.setItem('favoriteList', JSON.stringify(updatedFavoriteList));
  }
  console.log(getFromLS());
};

export const getFromLS = () => {
  return JSON.parse(localStorage.getItem('favoriteList'));
};

const deleteFromLS = (filmId) => {

};

const clearLs = () => {
  localStorage.clear();
};

const findDuplicate = (id) => {
  return getFromLS().filter((el) => el.id === id).length;
};
