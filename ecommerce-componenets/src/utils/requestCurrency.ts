import axios from 'axios';

const api  = axios.create({
  baseURL: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies",//process.env.REACT_APP_BASE_service , // Adjust the environment variable for React
  timeout: 5000
});

api.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    // const token = getToken();

    // if (token) {
    //   config.headers['Authorization'] = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // console.log("response: ", response);
    
    const { data } = response;
    // console.log("response.data: ", response.data);
    // console.log("response.status: ", response.status);

    if (response.status !== 200) {
    //   Modal.error({
    //     title: 'Error',
    //     content: data.message || 'Error',
    //   });

      if ([500, 50012, 50014].includes(response.status)) {
        // Handle token-related errors
        // Modal.confirm({
        //   title: 'Confirm logout',
        //   content: 'You have been logged out, you can cancel to stay on this page, or log in again',
        //   onOk: () => {
        //     // Dispatch your Redux action to reset the token and handle logout
        //     // Example: dispatch(userActions.resetToken());
        //     // You may need to replace this with your actual Redux action
        //     // Reload the page or redirect the user to the login page
        //     // Example: window.location.reload();
        //   },
        // });
      }

      return Promise.reject(new Error(data.message || 'Error'));
    } else {
      return response;
    }
  },
  (error) => {
    console.error('Error:', error);

    // Modal.error({
    //   title: 'Error',
    //   content: error.message || 'Error',
    // });

    return Promise.reject(error);
  }
);

export default api ;
