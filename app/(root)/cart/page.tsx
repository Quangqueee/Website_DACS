"use client";

import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );

  const totalFormatted = total.toLocaleString("vi-VN", {
    minimumFractionDigits: 0,
  });

  const totalRounded = parseFloat(total.toFixed(2));

  // Tính tổng số lượng sản phẩm
  const totalQuantity = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  console.log(user);

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
        console.log(data);
      }
    } catch (err) {
      console.log("[checkout_POST]", err);
    }
  };

  return (
    <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
      <div className="w-2/3 max-lg:w-full">
        <p className="text-heading3-bold">Giỏ Hàng </p>
        <hr className="my-6" />

        {cart.cartItems.length === 0 ? (
          <p className="text-body-bold">Không có sản phẩm trong giỏ hàng</p>
        ) : (
          <div>
            {cart.cartItems.map((cartItem) => (
              <div className="w-full grid grid-cols-12 gap-4 items-center hover:bg-grey-1 px-4 py-3">
                <div className="col-span-7 flex items-center">
                  <Image
                    src={cartItem.item.media[0]}
                    width={100}
                    height={100}
                    className="rounded-lg w-32 h-32 object-cover"
                    alt="product"
                  />
                  <div className="flex flex-col gap-3 ml-4">
                    <p className="text-body-bold truncate max-w-[150px]">
                      {cartItem.item.title}
                    </p>
                    {cartItem.color && (
                      <p className="text-small-medium">{cartItem.color}</p>
                    )}
                    {cartItem.size && (
                      <p className="text-small-medium">{cartItem.size}</p>
                    )}
                    <p className="text-small-medium">
                      {cartItem.item.price.toLocaleString("vi-VN", {
                        minimumFractionDigits: 0,
                      })}đ
                    </p>
                  </div>
                </div>

                <div className="col-span-3 flex justify-center items-center gap-2">
                  <MinusCircle
                    className="hover:text-gray-400 cursor-pointer"
                    onClick={() =>
                      cartItem.quantity > 1 &&
                      cart.decreaseQuantity(cartItem.item._id)
                    }
                  />

                  <p className="text-body-bold w-8 text-center">
                    {cartItem.quantity}
                  </p>
                  <PlusCircle
                    className="hover:text-gray-400 cursor-pointer"
                    onClick={() => cart.increaseQuantity(cartItem.item._id)}
                  />
                </div>

                <div className="col-span-2 flex justify-end">
                  <Trash
                    className="hover:text-red-1 cursor-pointer"
                    onClick={() => cart.removeItem(cartItem.item._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
        <p className="text-heading4-bold pb-4">
          Số lượng{" "}
          <span>{`(${totalQuantity} ${
            totalQuantity > 1 ? "sản phẩm" : "sản phẩm"
          })`}</span>
        </p>
        <div className="flex justify-between text-body-semibold">
          <span>Tổng tiền:</span>
          <span>{totalFormatted} đ</span>
        </div>
        <button
          className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white"
          onClick={handleCheckout}
        >
          Thanh Toán
        </button>
      </div>
    </div>
  );
};

export default Cart;
