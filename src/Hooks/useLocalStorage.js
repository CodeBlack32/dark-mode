import { useState } from "react";

export const useLocalStorage = (key, initialValue = "") => {
  const [storedValue, setStoredValue] = useState(() => {
    if (JSON.parse(window.localStorage.getItem(key))) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
    // const item = window.localStorage.getItem(key);
    // return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
