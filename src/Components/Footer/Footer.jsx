import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        
       
        <div className="col-span-1 lg:col-span-2">
          <h6 className="text-white text-lg font-bold mb-2">CS — Ticket System</h6>
          <p className="text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.
          </p>
        </div>

        
        <div>
          <h6 className="text-white font-semibold mb-2">Company</h6>
          <ul className="space-y-1">
            <li><a className="hover:text-white" href="https://github.com/anikasaida">About Us</a></li>
            <li><a className="hover:text-white" href="https://github.com/anikasaida">Our Mission</a></li>
            <li><a className="hover:text-white" href="https://github.com/anikasaida">Contact Sales</a></li>
          </ul>
        </div>

        
        <div>
          <h6 className="text-white font-semibold mb-2">Services</h6>
          <ul className="space-y-1">
            <li><a className="hover:text-white" href="https://github.com/anikasaida">Products & Services</a></li>
            <li><a className="hover:text-white" href="https://github.com/anikasaida">Customer Stories</a></li>
            <li><a className="hover:text-white" href="https://github.com/anikasaida">Download Apps</a></li>
          </ul>
        </div>

        
        <div>
          <h6 className="text-white font-semibold mb-2">Information</h6>
          <ul className="space-y-1">
            <li><a className="hover:text-white" href="https://github.com/anikasaida">Privacy Policy</a></li>
            <li><a className="hover:text-white" href="https://github.com/anikasaida">Terms & Conditions</a></li>
            <li><a className="hover:text-white" href="https://github.com/anikasaida">Join Us</a></li>
          </ul>
        </div>

        
        <div>
          <h6 className="text-white font-semibold mb-2">Social Links</h6>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <img src="https://i.ibb.co/fBfnMLf/Group-1.png" alt="X" className="w-4 h-4" />
              <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://i.ibb.co/39S0YRpD/Group-2.png" alt="LinkedIn" className="w-4 h-4" />
              <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://i.ibb.co/kj2pG87/fi-5968764.png" alt="Facebook" className="w-4 h-4" />
              <span>@CS — Ticket System</span>
            </li>
            <li className="flex items-center gap-2">
              <img src="https://i.ibb.co/B5X74BXF/fi-6244710.png" alt="Email" className="w-4 h-4" />
              <span>support@cst.com</span>
            </li>
          </ul>
        </div>
      </div>

     
      <hr className="my-8 border-gray-700 max-w-[1200px] mx-auto" />
      <div className="text-center text-sm text-gray-300">
        © CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
