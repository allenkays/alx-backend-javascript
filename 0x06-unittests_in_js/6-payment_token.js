function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Returning a promise that never resolves
    return new Promise(() => {});
  }
}

module.exports = getPaymentTokenFromAPI;
