import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

function Checkout() {

  // Cart se data aur setCart le rahe hain
  const { cart, setCart } = useContext(CartContext);

  // Success / error message ke liye
  const [message, setMessage] = useState("");

  // Customer details store karne ke liye
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });


  // =========================
  // TOTAL PRICE
  // =========================

  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );


  // =========================
  // INPUT CHANGE
  // =========================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setCustomer({
      ...customer,
      [name]: value
    });

  };


  // =========================
  // PLACE ORDER
  // =========================

  const handlePlaceOrder = () => {

    // Check karo koi field empty hai ya nahi
    if (
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.address
    ) {

      setMessage("Please fill all customer details.");

      return;
    }


    // Order successfully placed
    setMessage("Order placed successfully! 🎉");

    // Cart empty kar do
    setCart([]);

    // Form empty kar do
    setCustomer({
      name: "",
      email: "",
      phone: "",
      address: ""
    });

  };


  return (

    <div className="min-h-screen bg-[#FAF7F2] py-16 px-6">

      {/* Page Heading */}

      <h1 className="text-4xl font-bold text-center text-[#8B5E3C]">
        Checkout
      </h1>


      {/* Success / Error Message */}

      {message && (

        <div className="max-w-5xl mx-auto mt-6">

          <p className="text-center bg-white shadow-sm rounded-lg p-4 text-[#8B5E3C] font-medium">
            {message}
          </p>

        </div>

      )}


      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-8">


        {/* ========================= */}
        {/* CUSTOMER DETAILS */}
        {/* ========================= */}

        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h2 className="text-2xl font-semibold text-[#8B5E3C]">
            Customer Details
          </h2>


          {/* Name */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={customer.name}
            onChange={handleChange}
            className="w-full mt-6 border p-3 rounded"
          />


          {/* Email */}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleChange}
            className="w-full mt-4 border p-3 rounded"
          />


          {/* Phone */}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={customer.phone}
            onChange={handleChange}
            className="w-full mt-4 border p-3 rounded"
          />


          {/* Address */}

          <textarea
            name="address"
            placeholder="Delivery Address"
            rows="4"
            value={customer.address}
            onChange={handleChange}
            className="w-full mt-4 border p-3 rounded"
          ></textarea>

        </div>


        {/* ========================= */}
        {/* ORDER SUMMARY */}
        {/* ========================= */}

        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h2 className="text-2xl font-semibold text-[#8B5E3C]">
            Order Summary
          </h2>


          {/* Products */}

          <div className="mt-6 space-y-4">

            {cart.length === 0 ? (

              <p className="text-gray-500">
                Your cart is empty.
              </p>

            ) : (

              cart.map((product) => (

                <div
                  key={product.name}
                  className="flex justify-between border-b pb-3"
                >

                  <div>

                    <p className="font-medium">
                      {product.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Quantity: {product.quantity}
                    </p>

                  </div>


                  <p className="font-semibold">
                    ₹{product.price * product.quantity}
                  </p>

                </div>

              ))

            )}

          </div>


          {/* Total */}

          <div className="flex justify-between mt-6 text-xl font-bold">

            <span>
              Total
            </span>

            <span className="text-[#8B5E3C]">
              ₹{totalPrice}
            </span>

          </div>


          {/* Place Order */}

          <button
            onClick={handlePlaceOrder}
            disabled={cart.length === 0}
            className="w-full mt-6 bg-[#8B5E3C] text-white py-3 rounded-lg hover:bg-[#70482D] transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>

  );
}

export default Checkout;