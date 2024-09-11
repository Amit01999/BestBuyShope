import React from 'react';
import footerLogo from '../assest/logo1.png';
import paymentLogo from '../assest/payment.png';
import SocialIcons from './SocialIcons';
import { MdDeveloperMode } from 'react-icons/md';

const Footer = () => {
  const contactInfo = [
    { id: 1, text: 'PHONE: Toll Free (123) 456-7890' },
    { id: 2, text: 'EMAIL: mail@ecommerce.com' },
    { id: 4, text: 'ADDRESS: 123 Street Name, City, Egypt' },
    { id: 3, text: 'Mon - Sun / 9:00 AM - 8:00 PM ' },
  ];

  const myAccount = [
    { id: 1, text: 'About Us' },
    { id: 2, text: 'Returns' },
    { id: 4, text: 'Custom Service' },
    { id: 3, text: 'Terms & Condition' },
  ];
  return (
    <section className="bg-gray-800 text-gray-400 py-5 mt-12">
      <div className="container mx-auto">
        {/* Footer header */}
        <div className=" flex flex-wrap items-center justify-between py-5 text-center lg:text-left">
          <div className="mx-auto lg:ml-7 ">
            <img
              className="  w-full h-[100px] mb-4"
              src={footerLogo}
              alt="footer logo"
            />
          </div>
          <div className=" w-full lg:w-fit mx-auto">
            <h5 className="text-white text-lg tracking-wider mb-3">
              SUBSCRIBE TO OUR NEWSLETTER
            </h5>
            <p className="text-sm mb-3">
              Get all the latest information on Events, Sales and Offers.
            </p>
          </div>
          <div className=" w-full lg:w-fit mx-auto">
            <form onSubmit={e => e.preventDefault()} className="text-center">
              <input
                type="email"
                className="w-full lg:w-auto p-3 rounded-md bg-gray-700 text-white mb-4 lg:mb-0"
                placeholder="your email..."
              />
              <input
                type="submit"
                className="w-full lg:w-auto bg-[#14919A]  text-white uppercase p-3 rounded-md cursor-pointer ml-2"
                value="subscribe"
              />
            </form>
          </div>
        </div>

        {/* Footer content */}
        <div className="flex  flex-wrap">
          <div className="w-full lg:w-4/12 mx-auto mb-6 text-center lg:text-left">
            <h5 className="text-white mb-2">CONTACT INFO</h5>
            {contactInfo.map(item => (
              <p className="text-sm mb-3" key={item.id}>
                <span>{item.text}</span>
              </p>
            ))}
          </div>
          <div className="w-full lg:w-4/12 mx-auto mb-6 text-center lg:text-left">
            <h5 className="text-white mb-2">MY ACCOUNT</h5>
            {myAccount.map(item => (
              <p className="text-sm mb-3" key={item.id}>
                <span>{item.text}</span>
              </p>
            ))}
          </div>
          <div className=" mr-52 mb-6 text-center lg:text-right">
            <img
              src={paymentLogo}
              alt="payment methods"
              className="w-1/2 lg:w-full mx-auto"
            />
          </div>
        </div>

        {/* Footer rights and social icons */}
        <div className="flex flex-wrap items-center justify-between text-center py-5 border-t border-gray-700">
          <div className="w-full lg:w-auto mx-auto">
            <span className="text-sm">
              &copy; {new Date().getFullYear()}. All Rights Reserved.
            </span>
          </div>
          <div className="w-full lg:w-auto mx-auto">
            <p>Developed by ♥ Amit Kumar Bishwas</p>
          </div>
          <div className="w-full flex mx-auto lg:w-auto gap-5">
            <SocialIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
