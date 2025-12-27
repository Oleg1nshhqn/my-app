import React, { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within BasketProvider');
  }
  return context;
};

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState(() => {
    const saved = localStorage.getItem('basket');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (product) => {
    setBasketItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromBasket = (productId) => {
    setBasketItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromBasket(productId);
      return;
    }
    setBasketItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  const getTotalPrice = () => {
    return basketItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return basketItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addToBasket,
        removeFromBasket,
        updateQuantity,
        clearBasket,
        getTotalPrice,
        getTotalItems
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
