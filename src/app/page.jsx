import CompetitionForm from '@/components/sections/CompetitionForm';
import CompetitionStruct from '@/components/sections/CompetitionStruct';
import HeroSection from '@/components/sections/HeroSection';
import Introduction from '@/components/sections/Introduction';
import Prizes from '@/components/sections/Prizes';
import Retro from '@/components/sections/Retro';
import TimelineSection from '@/components/sections/TimelineSection';

function MainPage() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <Retro />
      <Prizes />
      <CompetitionStruct />
      <CompetitionForm />
      <TimelineSection />
    </>
  );
}

export default MainPage;
