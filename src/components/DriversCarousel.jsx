import Drivers1 from '../data/drivers1.json';
import Drivers2 from '../data/drivers2.json';
import teamGradients from '../data/driversbg.json';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselOrientation() {
  return (
    <div className="flex flex-col p-2 sm:p-4 justify-center w-full overflow-x-hidden mt-15 ">
      <div className="w-screen sm:w-full max-w-full  ">
        <Carousel orientation="horizontal" className="w-full ">
          <CarouselContent className="w-full max-w-full ">
            {Drivers1.map((driver1, index) => {
              const driver2 = Drivers2[index];
              if (!driver2) return null;

             
              const gradientClass1 = teamGradients[driver1.team_id] || 'bg-gray-800';
              const gradientClass2 = teamGradients[driver2.team_id] || 'bg-gray-800';
              
              return (
                <CarouselItem key={driver1.id} className="w-full max-w-full ">
                 
                  <div className="flex flex-col max-[1400px]:flex-col min-[1400px]:flex-row mx-1 w-full h-auto min-h-[40vh] gap-2 sm:gap-4 max-w-full lg:-mb-4 ">
                   
                      <div 
                      className={`w-full min-[1400px]:w-1/2 h-auto ${gradientClass1} shadow-lg rounded-xl border-gray-200 p-2 sm:p-4 flex flex-col overflow-auto max-w-full lg:h-[40%]`}
                    >
                      <div className="flex-1 flex flex-col items-start justify-between h-full">
                        <div className="w-full p-1 sm:p-2 flex flex-col h-auto justify-start mt-5 sm:mt-10 max-w-full sm:pb-8 mb-4">
                        <header className='font-bold text-2xl text-start sm:text-4xl text-black leading-normal -mt-2'>{driver1.full_name}</header>
                        <div className='lg:flex-row lg:flex'>
                          <div className="text-base sm:text-xl text-black leading-normal"> 
                          <p className="text-base sm:text-xl leading-tight mb-5 sm:mb-10 mt-2 sm:mt-5 text-black flex-1"> 
                            {driver1.brief_bio}
                          </p>
                            <p className="mb-1"><strong>Nationality:</strong> {driver1.nationality}</p>
                            <p className="mb-1"><strong>Born:</strong> {driver1.date_of_birth}</p>
                            <p className="mb-1"><strong>Number:</strong> #{driver1.number}</p>
                          </div>
                        <img 
                          src={driver1.image_url} 
                          alt={driver1.full_name} 
                          className="w-full h-auto object-cover rounded-xl mask-b-from-60% max-w-full  lg:max-w-1/3"
                        />
                          
                        </div>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`w-full min-[1400px]:w-1/2 h-auto ${gradientClass2} shadow-lg rounded-xl border-gray-200 p-2 sm:p-4 flex flex-col overflow-auto max-w-full lg:h-[40%]`}
                    >
                      <div className="flex-1 flex flex-col items-start justify-between h-full">
                        <div className="w-full p-1 sm:p-2 flex flex-col h-auto justify-start mt-5 sm:mt-10 max-w-full sm:pb-8 mb-4">
                        <header className='font-bold text-2xl text-start sm:text-4xl text-black leading-normal -mt-2'>{driver2.full_name}</header>
                        <div className='lg:flex-row lg:flex'>
                          <div className="text-base sm:text-xl text-black leading-normal"> 
                          <p className="text-base sm:text-xl leading-tight mb-5 sm:mb-10 mt-2 sm:mt-5 text-black flex-1"> 
                            {driver2.brief_bio}
                          </p>
                            <p className="mb-1"><strong>Nationality:</strong> {driver2.nationality}</p>
                            <p className="mb-1"><strong>Born:</strong> {driver2.date_of_birth}</p>
                            <p className="mb-1"><strong>Number:</strong> #{driver2.number}</p>
                          </div>
                        <img 
                          src={driver2.image_url} 
                          alt={driver2.full_name} 
                          className="w-full h-auto object-cover rounded-xl mask-b-from-60%  max-w-full lg:max-w-1/3"
                        />
                          
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="sm:translate-y-6"/>
          <CarouselNext className="sm:translate-y-6" />
        </Carousel>
      </div>
    </div>
  );
}
