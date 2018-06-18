export const generateCategoryUrl = (apiUrl) => {
  //https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6
  const matches = apiUrl.match(/.*(\/.+\/.+)$/);
  return `/category/${matches[1]}`;
};