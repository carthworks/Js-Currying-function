console.log('Hello! Js Currying function');

const createURL = (baseURL) => {
  const protocol = 'https';
  return (path) => {
    return '${protocol}://${baseURL}/${path}';
  };
};

const createSiteURL = createURL('typicode.com');
console.log(createSiteURL('login'));

const loginURL = createSiteURL('login');
console.log(loginURL);
