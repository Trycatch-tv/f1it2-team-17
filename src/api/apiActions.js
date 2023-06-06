import axios from "axios";
import { API_URL } from "../constants/apiURLs";

//TODO: OTHER HTTPCLIENT ACTIONS
const httpClient = {
  GET: () => {
    const response = axios.get(API_URL.get);
    return response;
  },
  GET_ID: (id) => {
    const response = axios.get(`${API_URL.get}/${id}`);
    return response;
  },
};

export const fetchData = async (validations, httpAction, id) => {
  const { onSuccess, onError } = validations;
  try {
    const { data } = await httpClient[httpAction](id);
    onSuccess();
    return data;
  } catch (error) {
    onError(error);
  }
};
