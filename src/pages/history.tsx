import NavBar from "@/components/nav.tsx"
import HistoryCarousel from "../components/HistoryCarousel.tsx"
import Footer from "@/components/Footer.tsx"
export default function Info(){
   
   
    return ( 
        <>
        <NavBar/>
      <div >
       <div>
       <HistoryCarousel/>
        </div>
     
 <section className="flex flex-col border-0 text-black bg-linear-to-b from-cyan-900 to-white pl-0 w-full max-w-xs sm:max-w-none sm:w-4/5 mx-auto rounded-2xl -mt-2 mb-2 bg-cover bg-center">
  <div className="backdrop-blur-xs rounded-2xl">
    <header className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 text-black px-2 sm:px-4 lg:pl-5">
      <strong>F1 Last Champion</strong>
    </header>
    <div className="overflow-hidden p-2 sm:p-4 lg:p-0 relative">
      {/* Mobile/tablet: flex-col con imagen arriba; lg: float right */}
      <div className="flex flex-col lg:flex-row lg:gap-0 lg:items-start lg:justify-around md:gap-4 md:items-center">
        <img 
          src="src/assets/max-verstapen-2024.avif" 
          alt="Max Verstappen" 
          className="w-full md:w-3/5 lg:w-2/5 lg:float-end lg:mb-4 border-2 border-black rounded-2xl h-auto max-h-48 sm:max-h-56 md:max-h-64 lg:max-h-none bg-center mb-4 mt-4 lg:mt-0 order-first lg:order-last object-cover mx-auto md:mx-auto lg:mx-0"
        /> 
        <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-justify leading-relaxed rounded-2xl w-full md:w-full lg:w-2/4 p-3 sm:p-4 md:p-5 lg:p-5 mb-0">
          Max Verstappen had a historic 2024 season, winning his fourth consecutive Formula 1 world championship despite an increased challenge from rivals like McLaren. 
          The season started dominantly with wins in Bahrain and Saudi Arabia, extending his record for consecutive points. However, a mechanical failure in Australia ended his race streak, and a challenging period mid-season saw increased pressure, particularly after a difficult Monaco Grand Prix. 
          He ultimately secured the title at the Las Vegas Grand Prix, becoming the sixth driver to win four titles and the first to do so with a third-placed constructor.
        </p>
      </div>
      {/* Clearfix solo para lg floats */}
      <div className="lg:clear-both"></div>
    </div>
  </div>
</section>



    </div>
   <Footer/>
    </>
    )
}