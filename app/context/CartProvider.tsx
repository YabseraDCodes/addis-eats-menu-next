"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type CartContextType = {
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type CartProviderProps = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<number>(0);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}