
import Image from "next/image";

export default function StandOut() {
    return (
        <section>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-32">
                    <div className="flex flex-col">
                        <Image src="/img 1.jpg" width={535} height={704} className="rounded-lg" alt="Green Haven Farm Logo" />
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-bold text-2xl text-black">What Makes Green Heaven Farm Stand Out?</h2>
                        <p className="text-black text-xs">Unique value preposition clearly define what sets green haven farm apart from others, such as sustainable practices, organic produce, or community involvement </p>
                        <div>
                            
                        </div>
                        <button className="bg-[#2c5f4e] text-white px-4 py-2 rounded-lg">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}