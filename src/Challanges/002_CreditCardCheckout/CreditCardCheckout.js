import React from 'react';
import './CreditCardCheckout';

function CreditCardCheckout() {

  const bill = [
    {
      _id: '123ABC',
      item_name: 'Laptop',
      quantity: 1,
      costForOne: 50000,
    },
    {
      _id: '456DEF',
      item_name: 'Display port to HDMI adapter',
      quantity: 1,
      costForOne: 264,
    },
    {
      _id: '789GHI',
      item_name: 'USB Stick',
      quantity: 2,
      costForOne: 657,
    },
  ]

  return (
    // Background should be something pointing to the bottom right from left side and something pointing to the top right i.e. to credit card box from the right side of the bill. This is to subconsiously guide the user to go through the bill first and then go to credit card box.
    <div className='credit-card-checkout-main'>
      {/* A bill shaped box for showing the bill */}
      <section className='credit-card-bill-box'>
        <h2>Bill</h2>
        {bill ?
          (<table>
            <thead>
              <tr>
                <td>Item</td>
                <td>Qty.</td>
                <td>Price x Qty.</td>
              </tr>
            </thead>
            <tbody>
              {bill.map(item => (
                <tr key={item._id}>
                  <td>{item.item_name}</td>
                  <td>x{item.quantity}</td>
                  <td>{item.costForOne * item.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>Total</td>
                <td>{bill.reduce(((total, item) => total + item.costForOne * item.quantity), 0)}</td>
              </tr>
            </tfoot>
          </table>)
          :
          (<p>Loading...</p>)
        }
      </section>

      {/* A credit card shaped box for entering credit card info
            - position fixed to the top right section (i.e. stays there)
      */}
      <section className='credit-card-box'>

      </section>
    </div>
  )
}

export default CreditCardCheckout;