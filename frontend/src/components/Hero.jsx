import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 rounded-tl-3xl rounded-br-3xl ">
      {/* Left side Hero */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
                </div>

                <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">LATEST ARRIVALS</h1>
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                </div>
            </div>
            
        </div>

        {/* Right side Hero */}
        <img src={assets.hero_img} className="w-full sm:w-1/2 rounded-br-3xl" alt="" />
    </div>
  )
}

export default Hero
