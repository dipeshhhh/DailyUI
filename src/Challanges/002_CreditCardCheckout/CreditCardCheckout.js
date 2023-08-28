import React from 'react';
import './CreditCardCheckout.css';

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
                <th>Item</th>
                <th>Qty.</th>
                <th>Price x Qty.</th>
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
        <form className='credit-card-input'>
          <section>
            <div id='credit-card-number-input-box'>
              <input
                id='credit-card-number-part-1'
                name='credit-card-number'
                type='number'
                size='4'
                maxLength='4'
                required
              />
              <input
                id='credit-card-number-part-2'
                name='credit-card-number'
                type='number'
                size='4'
                maxLength='4'
                required
              />
              <input
                id='credit-card-number-part-3'
                name='credit-card-number'
                type='number'
                size='4'
                maxLength='4'
                required
              />
              <input
                id='credit-card-number-part-4'
                name='credit-card-number'
                type='number'
                size='4'
                maxLength='4'
                required
              />
            </div>
            <div id='credit-card-expiry-date-input-box'>
              <label for='credit-card-expiry-date'>VALID THRU</label>
              <input
                id='credit-card-expiry-date'
                type='number'
                required
              />
            </div>
            <div id='credit-card-holder-name-input-box'>
              <label for='credit-card-holder-name'>CARD HOLDER's NAME</label>
              <input
                id='credit-card-holder-name'
                type='text'
                placeholder='CARD HOLDER NAME'
                required
              />
            </div>
            <div id='credit-card-cvv-input-box'>
              <label for='credit-card-cvv'>CVV</label>
              <input
                id='credit-card-cvv'
                type='number'
                placeholder='CVV'
                required
              />
            </div>
          </section>
          <button type='submit' > Pay </button>
        </form>
      </section>
    </div>
  )
}

export default CreditCardCheckout;