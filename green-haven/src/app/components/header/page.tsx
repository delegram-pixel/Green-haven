import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
export default function Header() {
    return (
        <header className="py-16 md:py-24">
            <div className="container mx-auto px-40">
                <div className="flex flex-col lg:flex-row  gap-12">
                    {/* Left Column - Content */}
                    <div className="w-full lg:w-1/2">

                        <nav className="flex items-center w-full">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    width={36}
                                    height={36}
                                    alt="logo"
                                    
                                />
                            </div>
                            <ul className="flex items-center gap-6 ml-8">
                                <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Explore</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Services</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Team</a></li>

                            </ul>
                        </nav>

                        <h1 className="text-[#2c5f4e] text-[64.69px] leading-[77.63px] font-extrabold mt-7 mb-6">Revolutionize Your Farm with Hydroponics</h1>

                        <p className="text-gray-600  max-w-lg text-[18px] leading-[28px] letter-spacing-[0%]">
                            Maximize Yields, Minimize Water Usage, and Grow Crops Year-Round. Showcase innovative Faming Methods and educate visitors about hydroponics. </p>



                        <div className="flex gap-4 mb-10">
                            <button className="mt-10 bg-[#2c5f4e] hover:bg-[#1f473b] text-white font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                                <a href="#footer"> Contact Us</a>
                            </button>

                            <button className="mt-10 border-[#2c5f4e] bg-white border-2 hover:bg-[#1f473b] hover:text-white text-[#2c5f4e] font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                                Learn More
                            </button>
                        </div>

                        <div className="relative overflow-hidden">
                        <Image
                            src="/img 2.jpg"
                            width={600}
                            height={800}
                            alt="Green Haven Farm"
                            className="w-full h-auto object-cover rounded-2xl"
                            priority
                        />
                        <div className="absolute top-0 right-0 ">
                            
                            <button className="px-6 py-4 mt-[-12] mr-[-4] bg-white flex items-center gap-4 rounded-lg text-gray-800">
                                <div className="h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center">
                                    <ArrowLeftIcon className="w-6 h-6 text-white" />
                                </div>

                                <div className="h-10 w-10 bg-gray-600 rounded-full flex items-center justify-center">
                                    <ArrowRightIcon className="w-6 h-6 text-white" />
                                </div>
                            </button>
                        </div>
                    </div>
                    </div> 

                    {/* Right Column - Image */}

                    <div className="relative" >
                        <Image
                            src="/img 1.jpg"
                            width={638}
                            height={1000} 
                            alt="Green Haven Farm"
                            className="h-[910px] object-cover rounded-2xl "
                            priority
                        />

                        <div className="absolute top-4 right-4 flex gap-2">
                            <button className="px-5 py-3 bg-white/20 backdrop-blur text-white rounded-4xl">
                              <a href="#">    Contact us</a>
                            </button>
                            <button className="px-5 py-3 bg-white text-gray-800 rounded-4xl">
                              <a href="#">Join us</a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}