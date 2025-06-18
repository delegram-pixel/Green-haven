import Image from "next/image";
    export default function WhyChooseUs() {
    return (
        <section className="bg-[#f0f4f3] py-16 md:py-24">
         <div className="container mx-auto px-40">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Right Column - Content */}
                  <div className="w-full lg:w-1/2">
                  <h1 className="text-3xl md:text-[18px] font-bold text-[#2c5f4e] mb-6">Why Choose Us?</h1>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        Healthy Food For Your 
                        Good Growth
                        </h2>
                        <p className="text-gray-600 mb-10 max-w-lg">
                        Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits. Collaboration and idea-sharing
                        </p>

                     


                        <button className="mt-10 bg-[#2c5f4e] hover:bg-[#1f473b] text-white font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                           Get Started
                        </button>
                    </div>

                       {/* Right Column - Image */}
                                        
                                            <div className="relative overflow-hidden">
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
        </section>
    );
}