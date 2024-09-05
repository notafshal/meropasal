"use client";

import { createContext, useState } from "react";

type CartContextType = {
  cartTotal: number;
};

const CartContext = createContext<CartContextType | null>(null);
