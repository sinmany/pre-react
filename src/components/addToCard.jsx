import { ShoppingBag } from "lucide-react";
import React from "react";

export default function AddToCard() {
  return (
    <div>
      <button
        type="submit"
        className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  "
      >
        <ShoppingBag className="w-4 h-4" />
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
}
