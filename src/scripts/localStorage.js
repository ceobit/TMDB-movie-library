export const saveToLS = (filmId, name) => {
  let updatedFavoriteList = [];
  const currentFavoriteList = getFromLS(name);
  if (!findDuplicate(filmId)) {
    if (currentFavoriteList) updatedFavoriteList = [...currentFavoriteList, filmId];
    else updatedFavoriteList.push(filmId);

    localStorage.setItem(name, JSON.stringify(updatedFavoriteList));
  }
};

export const getFromLS = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const deleteFromLS = (filmId, name) => {
  const currentFavoriteList = getFromLS(name) || [];
  currentFavoriteList.splice(currentFavoriteList.indexOf(filmId), 1);
  console.log(currentFavoriteList);
  localStorage.setItem(name, JSON.stringify(currentFavoriteList));
};

export const clearLs = () => {
  localStorage.clear();
};

export const findDuplicate = (id, name) => {
  const currentFavoriteList = getFromLS(name);
  if (currentFavoriteList) {
    return getFromLS(name).filter((el) => el === id).length;
  } else return 0;
};
