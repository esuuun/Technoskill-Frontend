import HeroSection from './component/HeroSection'
import TeamSection from './component/TeamSection'

function LandingPage() {
  return (
      <div className='flex flex-col gap-20 overflow-hidden'>
          <HeroSection />
          <TeamSection/>
    </div>
  )
}

export default LandingPage