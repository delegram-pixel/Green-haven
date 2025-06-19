import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
export default function Header() {
    return (
        <header className="py-10 md:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-40">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Column - Content */}
                    <div className="w-full lg:w-1/2">
                        <nav className="flex items-center w-full mb-6 md:mb-8">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    width={36}
                                    height={36}
                                    alt="logo"
                                />
                            </div>
                            <ul className="hidden sm:flex items-center gap-4 md:gap-6 ml-4 md:ml-8">
                                <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm md:text-base">Home</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm md:text-base">Explore</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm md:text-base">Services</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-green-600 transition-colors text-sm md:text-base">Team</a></li>
                            </ul>
                        </nav>

                        <h1 className="text-[#2c5f4e] text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[64.69px] leading-tight md:leading-[60px] lg:leading-[77.63px] font-extrabold mt-6 md:mt-7 mb-4 md:mb-6">
                            Revolutionize Your Farm with Hydroponics
                        </h1>

                        <p className="text-gray-600 max-w-lg text-base md:text-[18px] leading-[26px] md:leading-[28px] mb-6">
                            Maximize Yields, Minimize Water Usage, and Grow Crops Year-Round. Showcase innovative Faming Methods and educate visitors about hydroponics.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-7 md:mb-10">
                            <button className="bg-[#2c5f4e] hover:bg-[#1f473b] text-white font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-base md:text-lg w-full sm:w-auto mt-2 sm:mt-10">
                                <a href="#footer">Contact Us</a>
                            </button>
                            <button className="border-[#2c5f4e] bg-white border-2 hover:bg-[#1f473b] hover:text-white text-[#2c5f4e] font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-base md:text-lg w-full sm:w-auto mt-2 sm:mt-10">
                                Learn More
                            </button>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl mb-6 md:mb-0">
                            <Image
                                src="/img 2.jpg"
                                width={600}
                                height={800}
                                alt="Green Haven Farm"
                                className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover rounded-2xl"
                                priority
                            />
                            <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                                <button className="px-3 py-2 sm:px-4 sm:py-3 bg-white flex items-center gap-2 rounded-lg text-gray-800 shadow hover:bg-gray-100 transition-colors">
                                    <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center">
                                        <ArrowLeftIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center">
                                        <ArrowRightIcon className="w-5 h-5 text-white" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative w-full lg:w-1/2 flex-1 min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[910px]">
                        <Image
                            src="/img 1.jpg"
                            width={638}
                            height={1000}
                            alt="Green Haven Farm"
                            className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[910px] object-cover rounded-2xl"
                            priority
                        />
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-2">
                            <button className="px-4 py-2 sm:px-5 sm:py-3 bg-white/20 backdrop-blur text-white rounded-4xl text-xs sm:text-base">
                                <a href="#">Contact us</a>
                            </button>
                            <button className="px-4 py-2 sm:px-5 sm:py-3 bg-white text-gray-800 rounded-4xl text-xs sm:text-base">
                                <a href="#">Join us</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}