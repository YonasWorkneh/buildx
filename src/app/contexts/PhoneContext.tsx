import React, { createContext, useContext, useState, useEffect } from "react";

// Define the shape of your context value
interface PhoneContextValue {
  isOpen: boolean;
  showContent: boolean;
  showIndicator: boolean;
  setIsOpen: (state: boolean) => void;
  setShowContent: (state: boolean) => void;
  setShowIndicator: (state: boolean) => void;
}

// Create the context
const PhoneContext = createContext<PhoneContextValue | undefined>(undefined);

// Create a provider component
export const PhoneContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [showIndicator, setShowIndicator] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <PhoneContext.Provider
      value={{
        isOpen,
        showContent,
        showIndicator,
        setIsOpen,
        setShowContent,
        setShowIndicator,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

// Custom hook to access the PhoneContext
export const usePhoneContext = (): PhoneContextValue => {
  const phoneContext = useContext(PhoneContext);

  if (!phoneContext) {
    throw new Error("usephoneContext must be used within a PhoneProvider");
  }

  return phoneContext;
};
