import React, { createContext, PropsWithChildren, useContext, useState } from "react";

type DrawerContext = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleIsOpen: () => void;
};

const defaultContext: DrawerContext = {
  isOpen: false,
  setIsOpen: () => undefined,
  toggleIsOpen: () => undefined,
};

const DrawerContext = createContext<DrawerContext>(defaultContext);

export const DrawerProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(isOpen => !isOpen);

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen, toggleIsOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
