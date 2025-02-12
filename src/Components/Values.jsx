import React from 'react'
import PaymentMethod from "../Assets/Images/Paymentmethod.png";
import ValueEveryday from "../Assets/Images/ValueEveryday.png";
import CustomerSatisfaction from "../Assets/Images/CustomerSatisfaction.png";
import Card from './Card';

export default function Values() {

    const values = [
        {
            image:ValueEveryday,
            text:"Items prices that fit your budget",
            heading:"Amazing Value Every Day"
        },
        {
            image:PaymentMethod,
            text:"Don't bother with payment details.",
            heading:"All Payment Methods"
        },
        {
            image:CustomerSatisfaction,
            text:"We work with a focus on 100% customer satisfaction.",
            heading:"Successful Customer Service"
        }
    ];


  return (
    <div className='block md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-5 w-[110%] md:w-full'> 
      {
        values?.map((value)=><Card image={value.image} heading={value.heading} text={value.text}/>)
      }
    </div>
  )
}
