import React from 'react';
import AboutHero from './sections/AboutHero/AboutHero';
import OurStoryTimeline from './sections/OurStoryTimeline/OurStoryTimeline';
import MissionVisionValues from './sections/MissionVisionValues/MissionVisionValues';
import CraftsmanshipShowcase from './sections/CraftsmanshipShowcase/CraftsmanshipShowcase';
import StatsCounter from './sections/StatsCounter/StatsCounter';
import MeetTheTeam from './sections/MeetTheTeam/MeetTheTeam';
import SustainabilityPromise from './sections/SustainabilityPromise/SustainabilityPromise';
import AboutCTA from './sections/AboutCTA/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStoryTimeline />
      <MissionVisionValues />
      <CraftsmanshipShowcase />
      <StatsCounter />
      <MeetTheTeam />
      <SustainabilityPromise />
      <AboutCTA />
    </>
  );
}
