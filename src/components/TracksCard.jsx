import { useState } from "react";
import Tracks from "../data/tracks.json";

export default function FlipCard() {
  const [flippedStates, setFlippedStates] = useState({});
  return (
    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-lg:grid-cols-2 mt-18 max-sm:mx-4 max-lg:mx-4 ">
      {Tracks && Tracks.map((track) => (
        <div
          key={track.name}
          className="relative cursor-pointer perspective-[1000px] h-80  border-b-black border-l-red-600 border-t-blue-800 border-r-yellow-400 border-4 rounded-2xl m-2 bg-linear-to-br from-slate-800 to-slate-300 max-sm:p-8 max-sm:m-0 max-lg:p-6 max-lg:m-0 "
          onClick={() => setFlippedStates(prev => ({ ...prev, [track.name]: !prev[track.name] }))}
        >
          <div
            className={`duration-500 relative w-full h-full transition-transform transform ${
              flippedStates[track.name] ? "transform-[rotateY(-180deg)]" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/*FRONT SECTION*/}
            <div className="absolute w-full h-full rounded-xl overflow-hidden  flex flex-col items-center justify-center backface-hidden">
              <img
                src={track.image_url}
                alt={track.name}
                className="w-auto h-full rounded-2xl mt-0 object-cover p-10 -mb-6 "
              />
              <h3 className="text-lg font-semibold mb-2">{track.name}</h3>
            </div>
            {/*BACK SECTION*/}
            <div className="absolute w-full text-sm h-full rounded-xl p-5 text-center transform-[rotateY(180deg)] backface-hidden flex flex-col justify-center">
              <p><strong>Track Location:</strong> {track.location}</p>
              <p >{track.history}</p>
              <p><strong>First appearance:</strong> {track.first_year}</p>
              <p><strong>Length:</strong> {track.length_km}</p>
              <p><strong>Corners:</strong> {track.corners}</p>
              <p><strong>Laps:</strong> {track.laps}</p>
              <p><strong>Most winners:</strong> {track.most_winners}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
