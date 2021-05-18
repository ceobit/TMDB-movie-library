export const getParameter = () => {
  return window.location.search
    .replace('?', '')
    .split('&')
    .reduce((p, e) => {
      let a = e.split('=');
      p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
      return p;
    }, {});
};