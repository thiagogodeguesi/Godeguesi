import React from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import {
  ContactSection,
  FeaturedProjectsSection,
  HeroSection,
  JourneySection,
  LatestPostsSection,
  PillarsSection,
  TechnologiesSection,
} from "@/components/home";

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <PillarsSection />
      <FeaturedProjectsSection />
      <JourneySection />
      <LatestPostsSection />
      <TechnologiesSection />
      <ContactSection />
    </SiteLayout>
  );
}
