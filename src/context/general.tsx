import React, { createContext, useContext, useState } from "react";

interface GeneralContextState {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const GeneralContext = createContext<GeneralContextState>(
  {} as GeneralContextState
);

export const useGeneralContext = () => useContext(GeneralContext);

export const GeneralProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [activePage, setActivePage] = useState("home");
  const contextValue = React.useMemo(
    () => ({ activePage, setActivePage }),
    [activePage, setActivePage]
  );

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  );
};
