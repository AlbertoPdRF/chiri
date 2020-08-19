export const getProducts = () => fetchApi('/products', { method: 'GET' });

const fetchApi = (path, fetchOptions = {}) => {
  return fetch(
    `/api/v1${path}`,
    Object.assign({}, fetchOptions, {
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Algo ha ido mal');
  });
};
