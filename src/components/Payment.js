import React from 'react';

const PaymentForm = () => {
  return (
    <div className="container  px-2 sm:px-4 py-8 bg-white rounded-xl shadow-md mt-4">
      <div className="flex justify-between">
        <div className="w-full md:w-5/12 mr-4">
          <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
            {/* Payment Details */}
            <p className="mb-4 font-bold">Payment Details</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Visa_Logo.png" alt="Visa" className="w-24 h-16 mb-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="w-24 h-16 mb-4" />
            <input type="text" name="card_number" placeholder="Card Number" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="text" name="expiry_date" placeholder="Expiry Date (MM/YY)" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="text" name="cvv" placeholder="CVV" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="submit" value="Pay Now" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
          </form>
        </div>
        <div className="hidden md:block w-1/12 border-l border-gray-300"></div> {/* Separator */}
        <div className="w-full md:w-6/12">
          {/* Order Details */}
          <p className="mb-4 font-bold">Order Details</p>
          <p className="mb-2">Product: JavaScript Basics Course</p>
          <p className="mb-2">Price: $100</p>
          <p className="mb-2">Quantity: 1</p>
          <p className="mb-2">Total: $100</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;