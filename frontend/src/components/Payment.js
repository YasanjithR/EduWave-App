import React from 'react';

const PaymentForm = () => {
  return (
    <div className="container  px-2 sm:px-4 py-8 bg-white rounded-xl shadow-md mt-4">
      <div className="flex justify-between">
        <div className="w-full md:w-5/12 mr-4">
          <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
            <input type="hidden" name="merchant_id" value="121XXXX" /> {/* Replace your Merchant ID */}
            <input type="hidden" name="return_url" value="http://sample.com/return" />
            <input type="hidden" name="cancel_url" value="http://sample.com/cancel" />
            <input type="hidden" name="notify_url" value="http://sample.com/notify" />
            <p className="mb-4">Item Details</p>
            <input type="text" name="order_id" placeholder="Order ID" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="text" name="items" placeholder="Items" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="text" name="currency" placeholder="Currency" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="text" name="amount" placeholder="Amount" className="mb-4 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
          </form>
        </div>
        <div className="hidden md:block w-1/12 border-l border-gray-300"></div> {/* Separator */}
        <div className="w-full md:w-6/12">
          <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
            <p className="mb-4">Customer Details</p>
            <input type="text" name="first_name" placeholder="First Name" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="text" name="last_name" placeholder="Last Name" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="text" name="email" placeholder="Email" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="hidden" name="country" value="Sri Lanka" />
            <input type="hidden" name="hash" value="098F6BCD4621D373CADE4E832627B4F6" /> {/* Replace with generated hash */}
            <input type="hidden" name="phone" value="0771234567" />
            <input type="text" name="address" placeholder="Address" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="text" name="city" placeholder="City" className="mb-2 w-full rounded border-gray-300 border focus:outline-none focus:border-indigo-500 px-3 py-2" />
            <input type="hidden" name="country" value="Sri Lanka" />
            <input type="hidden" name="hash" value="098F6BCD4621D373CADE4E832627B4F6" /> {/* Replace with generated hash */}
            <input type="submit" value="Buy Now" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
