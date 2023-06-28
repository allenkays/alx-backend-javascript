function getResponseFromAPI() {
  return new Promise ((resolve, reject)=> {
    setTimeout(()=> {
      const response = "Sample API response"
      resolve(response);
    }, 2000);
  });
}

export default getResponseFromAPI;
