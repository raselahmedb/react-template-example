import { login } from './../api/UserReq';
import { useAuthToken } from './../utils/Auth';

export default function getLogin(username: string, password: string) {
  const { setToken } = useAuthToken();
  login({ username: username.trim(), password: password })
    .then((response) => {
      const { data } = response;
      console.log(data?.data);
      setToken(data?.data?.token);
    })
    .catch((error) => {
      console.error(error);
    });
}
