import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode() {
  const [darkModeValue, setDarkModeValue] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (darkModeValue) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkModeValue]);

  return [darkModeValue, setDarkModeValue];
}
