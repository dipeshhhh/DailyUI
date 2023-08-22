import React from 'react';
import './CreditCardCheckout';

function CreditCardCheckout() {
  return(
    // Background should be something pointing to the bottom right from left side and something pointing to the top right i.e. to credit card box from the right side of the bill. This is to subconsiously guide the user to go through the bill first and then go to credit card box.
    <div className='credit-card-checkout-main'>
      <img src={require('../../Images/under_construction.png')} width='100vw' height='auto' />
      {/* A bill shaped box for showing the bill
            - need to make a react component for bill items and their cost
       */}
      <section className='credi-card-bill-box'>

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