import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='mt-20'>
      <hr />
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14
      my-10 mt-20 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'> 
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, sint illo, nisi voluptate ipsam ullam fugit explicabo veritatis sunt tempora enim sit, accusamus ex delectus facere deserunt totam? Enim, sit.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-gray-600'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium text-gray-600 mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+234 813 403 8304</li>
                <li>agbamkingsley@foreveryou.com</li>
            </ul>
        </div>
        
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@forever.com - All Rights Reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
