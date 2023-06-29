function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'Success' };
    })
    .catch(() => new Error {
    .finaly(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
