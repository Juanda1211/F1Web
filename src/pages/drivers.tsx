import DriverCard from '@/components/DriversCarousel.jsx'
import Footer from '@/components/Footer'
import NavBar from '@/components/nav'
import TeamCard from '@/components/TeamsCarousel.jsx'

export default function drivers(){
	return( 
    <div className='flex flex-col'>
        <NavBar/>
        <div >
        <DriverCard/>
        </div>
        <div className='max-md:mt-4 max-md:mx-2 mb-2'>
        <TeamCard/>
        </div>
      <Footer/>
    </div>

    )
}