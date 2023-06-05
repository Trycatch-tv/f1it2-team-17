import axios from "axios";
import { API_URL } from "../constants/apiURLs";

//TODO: OTHER HTTPCLIENT ACTIONS
const httpClient = {
  GET: () => {
    const response = axios.get(API_URL.get);
    return response;
  },
};

export const fetchData = async (validations, httpAction) => {
  const { onSuccess, onError } = validations;
  try {
    const { data } = await httpClient[httpAction]();
    onSuccess();
    return data;
  } catch (error) {
    onError(error);
  }
};
