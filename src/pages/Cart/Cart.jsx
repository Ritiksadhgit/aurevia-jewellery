import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useContext(CartContext);


  // Total price calculate
  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );


  return (
    <div className="min-h-screen bg-[#FAF7F2] py-20 px-6">

      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center text-[#8B5E3C]">
        My Cart
      </h1>


      {/* Empty Cart */}
      {cart.length === 0 ? (

        <p className="text-center mt-10 text-gray-500">
          Your cart is empty
        </p>

      ) : (

        <div className="max-w-5xl mx-auto mt-10">

          {/* Products */}
          <div className="space-y-5">

            {cart.map((product) => (

              <div
                key={product.name}
                className="bg-white p-5 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center gap-6"
              >

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />


                {/* Product Information */}
                <div className="flex-1">

                  <h2 className="text-xl font-semibold text-[#8B5E3C]">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-gray-600">
                    ₹{product.price}
                  </p>


                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() => decreaseQuantity(product.name)}
                      className="w-8 h-8 border rounded hover:bg-gray-100"
                    >
                      -
                    </button>

                    <span className="font-semibold">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(product.name)}
                      className="w-8 h-8 border rounded hover:bg-gray-100"
                    >
                      +
                    </button>

                  </div>


                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(product.name)}
                    className="mt-3 text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>


                {/* Product Total */}
                <div className="text-lg font-semibold text-gray-700">

                  ₹{product.price * product.quantity}

                </div>

              </div>

            ))}

          </div>


          {/* Cart Summary */}
          <div className="mt-8 bg-white rounded-xl shadow-sm p-6">

            <div className="flex justify-between items-center">

              <h2 className="text-xl font-semibold text-gray-700">
                Total
              </h2>

              <p className="text-2xl font-bold text-[#8B5E3C]">
                ₹{totalPrice}
              </p>

            </div>


            {/* Checkout Button */}
            <Link
  to="/Checkout"
  className="mt-6 block w-full text-center bg-[#8B5E3C] text-white py-3 rounded-lg hover:bg-[#70482D] transition"
>
  Proceed to Checkout
</Link>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;