import { ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Feedback() {
  const teamMembers = [
    {
      name: "Sham Samuel",
      role: "Food Production",
      phone: "+234 803 886 3362",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Hassan Usman",
      role: "Food Production",
      phone: "+234 803 886 3362",
      image: "/placeholder.svg?height=120&width=12",
    },
    {
      name: "Faith Amen",
      role: "Food Production",
      phone: "+234 803 886 3362",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Sham Samuel",
      role: "Food Production",
      phone: "+234 8176 488 561",
      image: "/shams.png",
    },
  ]

  return (
    <div className="w-full">
      {/* Customer Feedback Section */}
      <section className="bg-gray-100 py-16 px-4 relative -mb-32 ">
        <div className="max-w-4xl mx-auto text-center">

          <div className="bg-[#f0f4f3] rounded-lg shadow-lg p-8 md:p-12 mx-4 relative z-10">
          <p className="text-sm text-[#2c5f4e] mb-2 tracking-wider">Customer Feedback</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">What Our Client Say</h2>
            <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              "Unique target efficient informediaries after robust resources. Seamlessly morph excellent human capital
              through functional value. Proactively drive orthogonal paradigms without clicks-and-mortar processes
              installed based network"
            </blockquote>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image
                  src="/amadi-faith.png"
                  alt="Amadi Faith"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-gray-900">Amadi Faith</h4>
              <p className="text-orange-500 text-sm">Customer</p>
            </div>
          <button className="absolute md:-left-5 top-1/2 -left-4 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2 transition-colors ">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute md:-right-5 -right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
          </div>

          {/* Navigation Arrows */}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 px-4 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-3/4">
          <Image
            src="/img 3.jpg"
            alt="Team Background"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="opacity-70 object-cover w-full h-full"
          />
          <div className="absolute opacity-50 inset-0 bg-gradient-to-b from-green-900/80 to-green-800/80 mix-blend-multiply" />
          <div className="absolute opacity-50 inset-0 bg-gradient-to-br from-green-700 to-green-900" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-10 md:mb-8 md:mt-20">
            <div>
              <p className="text-green-200 text-sm mb-2 tracking-wider">Trusted Partner</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                We Have Awesome
                <br />
                Team Members To Help
              </h2>
            </div>
            <Button className="bg-white text-green-800 hover:bg-gray-100 mt-6 lg:mt-0 self-start lg:self-auto">
              Get Started
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 md:pt-20">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gray-100">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                  <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
                    <Phone className="w-4 h-4 mr-2" />
                    {member.phone}
                  </div>
                  <button className="flex items-center justify-center text-green-700 hover:text-green-800 text-sm font-medium transition-colors mx-auto">
                    Explore More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
