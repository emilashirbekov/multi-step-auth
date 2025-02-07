import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className='bg-black text-gray-300 py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold text-lg mb-4 text-white'>About Us</h3>
            <p className='text-sm'>
              We are a company dedicated to providing excellent services and
              products to our customers.
            </p>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4 text-white'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/products'
                  className='hover:text-white transition-colors'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to='/services'
                  className='hover:text-white transition-colors'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-white transition-colors'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4 text-white'>Contact Us</h3>
            <p className='text-sm'>
              123 Main Street
              <br />
              Anytown, USA 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@example.com
            </p>
          </div>
          <div>
            <h3 className='font-bold text-lg mb-4 text-white'>Follow Us</h3>
            <div className='flex space-x-4'>
              <Link
                to='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
              >
                <Facebook size={24} />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                to='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
              >
                <Twitter size={24} />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                to='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
              >
                <Instagram size={24} />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                to='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
              >
                <Github size={24} />
                <span className='sr-only'>GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-800 text-center'>
          <p className='text-sm'>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
