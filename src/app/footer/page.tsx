import Image from "next/image";
import { FaLinkedin, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <footer className="bg-[#2c5f4e] text-white w-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 w-full">
                        {/* Logo and About Section */}
                        <div className="space-y-4 max-w-md mx-auto sm:mx-0 w-full">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-3">
                                <div className="flex-shrink-0">
                                    <Image 
                                        src="/logo.png" 
                                        width={50} 
                                        height={50} 
                                        alt="Green Haven Farm Logo" 
                                        className="w-12 h-12 sm:w-14 sm:h-14"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold leading-tight">Revolutionize Your Farm with Hydroponics</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-200">Maximize Yields, Minimize Water Usage, and Grow Crops Year-Round</p>
                            <div className="pt-2">
                                <p className="font-medium text-sm sm:text-base mb-2">Follow us on</p>
                                <div className="flex justify-center sm:justify-start space-x-4">
                                    <a href="#" className="text-white hover:text-orange-400 transition-colors" aria-label="LinkedIn">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="#" className="text-white hover:text-orange-400 transition-colors" aria-label="Facebook">
                                        <FaFacebook size={20} />
                                    </a>
                                    <a href="#" className="text-white hover:text-orange-400 transition-colors" aria-label="Twitter">
                                        <FaTwitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Explore Links */}
                        <div className="text-center sm:text-left">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Explore</h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                                {['About', 'Services', 'Our Projects', 'Meet the Farmers', 'Latest News', 'Contacts'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm sm:text-base text-gray-200 hover:text-white hover:underline transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Information Links */}
                        <div className="text-center sm:text-left">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Information</h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                                {['Customer Service', 'Vegetables', 'Fruits', 'Organic Food', 'Privacy Policy', 'Contacts'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm sm:text-base text-gray-200 hover:text-white hover:underline transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center sm:text-left">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
                            <ul className="space-y-2 sm:space-y-3">
                                <li className="flex items-start justify-center sm:justify-start space-x-3">
                                    <FaPhone className="mt-0.5 sm:mt-1 text-orange-400 flex-shrink-0" />
                                    <a href="tel:0803886362" className="text-sm sm:text-base text-gray-200 hover:text-white transition-colors">
                                        0803886362
                                    </a>
                                </li>
                                <li className="flex items-start justify-center sm:justify-start space-x-3">
                                    <FaEnvelope className="mt-0.5 sm:mt-1 text-orange-400 flex-shrink-0" />
                                    <a href="mailto:greenhevenfarm@gmail.com" className="text-sm sm:text-base text-gray-200 hover:text-white transition-colors break-all">
                                        greenhevenfarm@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-start justify-center sm:justify-start space-x-3">
                                    <FaMapMarkerAlt className="mt-0.5 sm:mt-1 text-orange-400 flex-shrink-0" />
                                    <span className="text-sm sm:text-base text-gray-200">
                                        56 NTA Road, Choba, Port Harcourt.
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-4 max-w-xs mx-auto sm:mx-0">
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        aria-label="Subscribe to our newsletter"
                                    />
                                    <button 
                                        className="absolute right-0 top-0 h-full px-3 sm:px-4 bg-orange-500 hover:bg-orange-600 rounded-r-md transition-colors text-white"
                                        aria-label="Subscribe"
                                    >
                                        <span className="sr-only">Subscribe</span>
                                        <span aria-hidden="true">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="border-t border-gray-700 bg-[#0c3829] w-full">
                <div className="container mx-auto px-4 sm:px-6 py-4 w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-0 text-center sm:text-left">
                            © {new Date().getFullYear()} Green Haven Farm. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-1 sm:space-x-4">
                            <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm px-2 py-1">
                                Terms of Use
                            </a>
                            <span className="text-gray-600 hidden sm:inline">|</span>
                            <a href="#" className="hover:text-white transition-colors text-xs sm:text-sm px-2 py-1">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}