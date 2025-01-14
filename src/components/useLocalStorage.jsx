import { useState, useEffect } from "react";

function getLocalStorage(key, initialValue) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || initialValue;
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getLocalStorage(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
