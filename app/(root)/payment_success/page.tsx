"use client"

import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import { useEffect } from "react";

const SuccessfulPayment = () => {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5">
      <p className="text-heading4-bold text-blue-500">Successful Payment !</p>
      <p>Đơn hàng sẽ được gửi đến bạn sớm nhất</p>
      <Link
        href="/"
        className="p-4 border text-base-bold hover:bg-black hover:text-white"
      >
        QUAY TRỞ LẠI SHOP
      </Link>
    </div>
  );
};

export default SuccessfulPayment;
