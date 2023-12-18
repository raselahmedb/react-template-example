import axios from 'axios';
import { useAuthToken } from './Auth';

const service  = axios.create({
  baseURL: "http://139.59.5.221:8000/api",
  timeout: 5000
});

const { getToken } = useAuthToken();

service .interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // console.log("response: ", response);
    
    const { data } = response;

    if (response.status !== 200) {
      console.log("Response Status: ", response.status);
      
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
      else if (response.status === 401) {
        console.log("refresh token");
        // TODO: handle refresh token
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

export default service ;
