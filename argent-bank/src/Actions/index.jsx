
import axios from 'axios';

/**
 * 
 * @param {*} user 
 * @const postLogin is the call of the api that allows to make a POST request for the login 
 * @const userProfil is the call of the api that allows to make a POST request for the user who is connected
 * @const editUserProfil is the call of the api that allows to make a PUT request to modify the data of the connected user 
 * @returns 
 */


export const postLogin = async (user) => {
      const BASE_URL_API = 'http://localhost:3001/api/v1/user/login';
      const data = await axios.post(BASE_URL_API, JSON.stringify(user), {
            headers: {
                  'Content-Type': 'application/json',
            },
      });
      if (data.status !== 400) {
            const newResultResponse = {
                  status: data.data?.status,
                  message: data.data?.message,
                  token: data.data?.body?.token,
            };

            return newResultResponse;
      }
};

export const userProfil = async (token) => {
      const BASE_URL_API = 'http://localhost:3001/api/v1/user/profile';

      const data = await axios.post(BASE_URL_API, JSON.stringify(), {
            headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + token,
            },
      });
      if (data?.data !== undefined) {
            console.log(data)
            const newResultResponse = {
                  status: data.status,
                  email: data?.data?.body?.email,
                  firstName: data?.data?.body?.firstName,
                  lastName: data?.data?.body?.lastName,
            };
            return newResultResponse;
      }
};


export const editUserProfil = async (token, user) => {
      const BASE_URL_API = 'http://localhost:3001/api/v1/user/profile';
      const data = await axios.put(BASE_URL_API, JSON.stringify(user), {
            headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + token,
            },
      });
      if (data?.body !== null) {
            const newResultResponse = {
                  status: data.status,
                  email: data?.data.body?.email,
                  firstName: data?.data.body?.firstName,
                  lastName: data?.data.body?.lastName,
            };
            return newResultResponse;
      }
};
