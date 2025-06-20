import Image from "next/image";
export default function WhyChooseUs() {
    return (
        <section className="bg-[#f0f4f3] py-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#2c5f4e] mb-3 sm:mb-6">Why Choose Us?</h1>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
                            Healthy Food For Your Good Growth
                        </h2>
                        <p className="text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base max-w-lg">
                            Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits. Collaboration and idea-sharing
                        </p>
                        <button className="mt-6 sm:mt-10 bg-[#2c5f4e] hover:bg-[#1f473b] text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base">
                            Get Started
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg">
                            <Image
                                src="/fresh-veg-sal.png"
                                width={600}
                                height={800}
                                alt="Green Haven Farm"
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}