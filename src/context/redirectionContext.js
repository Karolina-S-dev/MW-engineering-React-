import { createContext, useContext, useState } from "react";

const RedirectionContext = createContext(null);

const RedirectionProvider = ({ children }) => {
  const [redirection, setRedirection] = useState(null);

  return (
    <RedirectionContext.Provider value={{ redirection, setRedirection }}>
      {children}
    </RedirectionContext.Provider>
  );
};

const useRedirectionContext = () => {
  const context = useContext(RedirectionContext);
  if (!context) {
    throw new Error(
      "useRedirectionContext must be used within RedirectionProvider",
    );
  }
  return context;
};

export { RedirectionProvider, useRedirectionContext };
