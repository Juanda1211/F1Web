import Teams from "../data/team.json";
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
    <div className="flex p-0 sm:p-4 justify-center w-full overflow-x-hidden"> 
      <div className="w-screen sm:w-full max-w-full">
        <Carousel orientation="horizontal" className="w-full">
          <CarouselContent className="w-full max-w-full">
            {Teams.map((team) => {
          
              const gradientClass = teamGradients[team.name.toLowerCase().replace(/\s+/g, '_')] || 'bg-gray-800'; 
              
              return (
                <CarouselItem key={team.name} className="w-full max-w-full">
             
                  <div 
                    className={`w-full h-auto sm:h-[50vh] min-h-[40vh] ${gradientClass} shadow-lg rounded-xl border-none sm:border-2 sm:border-gray-200 p-2 sm:p-4 flex flex-col overflow-hidden max-w-full max-md:h-full sm:max-[940px]:h-auto sm:max-[940px]:min-h-[60vh] max-sm:ml-1`}
                  >
                    <div className="flex-1 flex flex-col sm:flex-row items-start justify-start h-full sm:max-[940px]:flex-col sm:max-[940px]:items-center min-[940px]:flex-row min-[940px]:gap-4">
                 
                   
                      <div className="w-full sm:w-2/3 p-1 sm:p-2 flex flex-col h-full justify-between self-center mt-5 sm:mt-10 max-w-full sm:max-[940px]:w-full sm:max-[940px]:items-center min-[940px]:w-1/2 min-[940px]:pr-4">
                      
                        <div className="flex flex-col w-full sm:max-[940px]:items-center sm:max-[940px]:text-center min-[940px]:items-start">
                          <p className="text-base sm:text-xl leading-tight text-black flex-1 mb-4 sm:max-[940px]:text-lg sm:max-[940px]:mb-6 sm:max-[940px]:px-4 min-[940px]:mb-6"> 
                            {team.brief_history} 
                          </p>
                          <div className="text-base sm:text-xl text-black leading-normal shrink-0 pb-4 space-y-1 mt-auto sm:max-[940px]:text-center sm:max-[940px]:space-y-2 sm:max-[940px]:mb-4 min-[940px]:text-left min-[940px]:space-y-2"> 
                            <p><strong>First appearance:</strong> {team.first_appearance}</p>
                            <p><strong>Engine supplier:</strong> {team.engine_supplier}</p>
                            <p><strong>Titles:</strong> {team.titles}</p> 
                            <p><strong>Wins:</strong> {team.wins}</p>
                          </div>
                        </div>
                      </div>

                      {/* Columna derecha: imagen (solo desktop >=940px) */}
                      <div className="w-full sm:w-auto flex items-center justify-center sm:max-[940px]:w-full min-[940px]:w-1/2 min-[940px]:h-full min-[940px]:justify-center min-[940px]:items-center">
                        <img 
                          src={team.image_url} 
                          alt={team.name} 
                          className="w-auto h-auto  sm:h-auto mx-auto sm:mx-0 object-cover ml-0 sm:ml-2 mt-5 sm:mt-12 max-w-full shrink-0 sm:max-[940px]:w-1/2 sm:max-[940px]:max-h-48 sm:max-[940px]:mx-auto sm:max-[940px]:mt-6 min-[940px]:mx-0 min-[940px]:mt-0 min-[940px]:w-1/2 min-[940px]:h-full" 
                        />
                      </div>
                      
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="max-sm:translate-y-14 max-sm:-translate-x-1 sm:-translate-x-6 "/>
          <CarouselNext  className="max-sm:translate-y-14 max-sm:translate-x-1 sm:translate-x-6"/>
        </Carousel>
      </div>
    </div>
  );
}
