import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/styles/Footer.module.css';
import { currentYear } from '../lib/date';

export function Footer() {

  return (
    <footer className="bg-[#F8F8FF] dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Image
              priority={true}
              className="w-100 h-100 rounded-full mr-4"
              src="/images/logos/logo.webp"
              width={154}
              height={66}
              alt="Picture of barn and silo with The Farm Directory.com text"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-start">About</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="/about" className="hover:underline text-gray-900 dark:text-white">About Us</a>
                </li>  
                <li>
                  <a href="/email-list" className="hover:underline text-gray-900 dark:text-white">Join our email list</a>
                </li>              
                <li>
                  <a href="/contact-us" className="hover:underline text-gray-900 dark:text-white">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-start">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.instagram.com/thefarmdirectory/?igsh=M2F5dW1iaDA3Ym9u" className="hover:underline text-gray-900 dark:text-white h-8 w-8">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/thefarmdirectory" className="hover:underline text-gray-900 dark:text-white">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-start">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a href="/terms-conditions" className="hover:underline text-gray-900 dark:text-white">Terms & Conditions</a>
                </li>
                <li>
                  <a href="https://app.termly.io/document/privacy-policy/f960c6b4-e8b6-4a86-894a-0144bbe3b639" className="hover:underline text-gray-900 dark:text-white">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear()} Montana Agricola, LLC</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/thefarmdirectory" className="text-gray-500 hover:text-gray-900 dark:hover:text-white h-8 w-8">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/thefarmdirectory/?igsh=M2F5dW1iaDA3Ym9u" className="text-gray-500 hover:text-gray-900 dark:hover:text-white h-8 w-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                </path>
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
