import Image from "next/image";
import { FaLinkedin, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <footer className="bg-[#2c5f4e] text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                       
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                <Image src="/logo.png" width={50} height={50} alt="Green Haven Farm Logo" />
                                <span className="text-lg sm:text-xl font-bold">Revolutionize Your Farm with Hydroponics</span>
                            </div>
                            <p className="text-white">Maximize Yields, Minimize Water Usage, and Grow Crops Year-Round</p>
                            <div>
                                <p className="font-medium mb-2">Follow us on</p>
                                <div className="flex space-x-4">
                                    <a href="#" className="hover:text-orange-400 transition-colors">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="#" className="hover:text-orange-400 transition-colors">
                                        <FaFacebook size={20} />
                                    </a>
                                    <a href="#" className="hover:text-orange-400 transition-colors">
                                        <FaTwitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Explore Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Explore</h4>
                            <ul className="space-y-2">
                                {['About', 'Services', 'Our Projects', 'Meet the Farmers', 'Latest News', 'Contacts'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-white hover:text-white hover:underline">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Information Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Information</h4>
                            <ul className="space-y-2">
                                {['Customer Service', 'Vegetables', 'Fruits', 'Organic Food', 'Privacy Policy', 'Contacts'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-white hover:text-white hover:underline">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <FaPhone className="mt-1 text-orange-400" />
                                    <span className="text-white">0803886362</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaEnvelope className="mt-1 text-orange-400" />
                                    <span className="text-white">greenhevenfarm@gmail.com</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaMapMarkerAlt className="mt-1 text-orange-400" />
                                    <span className="text-white">56 NTA Road, Choba, Port Harcourt.</span>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <div className="relative">
                                    <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full px-4 py-2 text-sm sm:text-base rounded-md bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                                <button className="absolute right-0 top-0 h-full px-3 sm:px-4 bg-orange-500 rounded-r-md hover:bg-orange-600 transition-colors text-sm sm:text-base">
                                    →
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="border-t border-gray-700 bg-[#0c3829]">
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm">
                        <p className="mb-2 sm:mb-0 text-center sm:text-left">© 2024 Green Haven Farm. All rights reserved.</p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                            <span className="hidden sm:inline">|</span>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}