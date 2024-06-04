import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../hooks/useCart";

const stripePromise = loadStripe(
  "pk_test_51PNDgTGBB8O7eVnQQuFGuGMXYhwhSZiRfPVnz8vP8GNyfQDDHTCyHLH4yivHsNzxE97FT2focDLhm2Hvw4YLrrim002ER2suSK"
);
const Payment = () => {
  const [cart] = useCart();
  console.log(cart);
  //calculate prices
  const cartTotal = cart.reduce(
    (sum, book) => sum + book.price * book.quantity,
    0
  );

  const totalPrice = parseFloat(cartTotal.toFixed(2));

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-28">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} cart={cart} />
      </Elements>
    </div>
  );
};

export default Payment;
