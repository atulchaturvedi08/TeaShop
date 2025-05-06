import RazorpayCheckout from 'react-native-razorpay';

const processPayment = async (amount, orderId) => {
  const options = {
    description: 'TapriChai Payment',
    currency: 'INR',
    key: 'YOUR_RAZORPAY_KEY',
    amount: amount * 100,
    name: 'TapriChai',
    order_id: orderId,
    prefill: {
      email: 'customer@email.com',
      contact: '9191919191',
      name: 'Customer Name'
    }
  };

  RazorpayCheckout.open(options)
    .then(data => console.log('Success:', data))
    .catch(error => console.log('Error:', error));
};