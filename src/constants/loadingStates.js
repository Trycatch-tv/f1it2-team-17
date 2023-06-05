import { useState } from "react";

export const useLoadingStates = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const validations = {
    startLoad: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
    },
    onError: (message) => {
      setErrorMsg(message);
      setLoading(false);
    },
  };

  return { validations, loading, errorMsg };
};
