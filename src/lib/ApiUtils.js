let ApiUtils = {
  checkStatus: function (response) {
    // console.log('apiutils checkstatus', response)
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  },
};

export { ApiUtils as default };
