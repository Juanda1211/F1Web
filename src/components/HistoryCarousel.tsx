import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import historyData from '../data/history.json'; 

export default function CarouselOrientation() {
  return (
    <div className="justify-center mt-15 lg:px-6 lg:mx-42 sm:px-0 "> 
      <Carousel orientation="horizontal">
        <CarouselContent>
          {historyData.map((item, index) => (
            <CarouselItem key={index}>
              <section className="mx-auto mt-4 flex flex-col  rounded-2xl text-black mb-5 w-4/5 sm:w-full max-w-xs sm:max-w-none bg-cover bg-linear-to-b from-cyan-900 to-white">
                <div className="backdrop-blur-xs rounded-2xl">
                  <header className="text-center text-2xl sm:text-4xl font-bold font-sans mb-6 sm:mb-10 text-black px-2 sm:pl-5">
                    <strong>{item.period}</strong>
                  </header>
                  <div className="overflow-hidden p-2 sm:p-0"> 
                    <img 
                      src={item.image_url} 
                      alt={`${item.period} f1 car`} 
                      className="max-lg:float-none max-lg:w-full max-lg:block max-lg:mb-4 max-lg:mt-4 lg:float-end lg:w-2/5 lg:mb-4 lg:mr-6 border-2 border-black rounded-2xl h-auto bg-center mt-4" 
                    /> 
                    <p className="max-lg:w-full max-lg:mb-0 lg:w-2/4 text-xl sm:text-2xl font-bold font-sans text-justify leading-relaxed rounded-2xl p-3 sm:p-5">
                      {item.brief_history}
                    </p>
                    <div className="clear-both sm:hidden"></div> 
                  </div>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block" /> 
        <CarouselNext className="hidden sm:block" />
      </Carousel>
    </div>
  );
}
