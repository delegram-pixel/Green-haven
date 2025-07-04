
import Image from "next/image";

export default function StandOut() {
    return (
        <section className="bg-white px-12 py-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Column - Image */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/img 1.jpg"
                                width={600}
                                height={800}
                                alt="Green Haven Farm"
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                            What Makes Green Heaven Farm Stand Out?
                        </h2>
                        <p className="text-gray-600 mb-8 sm:mb-10 max-w-lg text-sm sm:text-base">
                            Unique value proposition clearly define what sets green haven farm apart from others, such as sustainable practices, organic produce, or community involvement.
                        </p>

                        {/* Features List */}
                        <div className="space-y-8">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Organic Food</h3>
                                    <p className="text-gray-600">
                                        We provide the highest quality organic food, grown with sustainable practices that benefit both you and the environment.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh & Healthy Products</h3>
                                    <p className="text-gray-600">
                                        Our products are always fresh, healthy, and packed with nutrients to support your well-being and active lifestyle.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Farmers</h3>
                                    <p className="text-gray-600">
                                        Our team of professional farmers brings years of experience and passion to grow the best organic produce for your family.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 sm:mt-10 bg-[#2c5f4e] hover:bg-[#1f473b] text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base">
                            Discover More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}