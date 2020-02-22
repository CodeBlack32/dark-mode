import { useLocalStorage } from "./useLocalStorage";

export default function useDarkMode() {
  const classes = useStyles();
  const [darkModeValue, setDarkModeValue] = useLocalStorage(key, initialValue);
}
