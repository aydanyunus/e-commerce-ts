import { ReactNode, createContext, useContext } from "react";

type ShoppingCartChildrenProps = {
  children: ReactNode;
};

const ShoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartChildrenProps) => {

  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
