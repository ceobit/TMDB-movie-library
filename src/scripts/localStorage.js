export const saveToLS = (filmData) => {
  let updatedFavoriteList = [];
  const currentFavoriteList = getFromLS();
  if (!findDuplicate(filmData.id)) {
    if (currentFavoriteList) updatedFavoriteList = [...currentFavoriteList, filmData];
    else updatedFavoriteList.push(filmData);

    localStorage.setItem('favoriteList', JSON.stringify(updatedFavoriteList));
  }
  console.log(getFromLS());
};

export const getFromLS = () => {
  return JSON.parse(localStorage.getItem('favoriteList'));
};

const deleteFromLS = () => {

};

const findDuplicate = (id) => {
  return getFromLS().filter((el) => el.id === id).length;
};
