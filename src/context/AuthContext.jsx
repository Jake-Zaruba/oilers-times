import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Context = createContext();

export function AuthContext({ children }) {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false);
      if (currentUser) {
        setUser(currentUser);
      } else setUser(null);
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const values = { user: user, setUser: setUser };

  return (
    <Context.Provider value={values}>{!isLoading && children}</Context.Provider>
  );
}
