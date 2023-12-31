import {NextPageWithLayout} from "./_app";
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import AboutSection from "@/components/section/about/AboutSection";
import TeamSection from "@/components/section/team/TeamSection";
import WorksSection from "@/components/section/works/WorksSection";
import GalleySection from "@/components/section/gallery/GalleySection";
import ReviewsSection from "@/components/section/reviews/ReviewsSection";
import ContactsSection from "@/components/section/contacts/ContactsSection";
import ServicesSection from "@/components/section/services/ServicesSection";
import ArticlesSection from "@/components/section/blog/ArticlesSection";
import WriteReviewSection from "@/components/section/reviews/WriteReviewSection";
import StartSectionV2 from "@/components/section/startv2/StartSectionV2";
import useGsapPlugins from "@/util/useGsapPlugins";

const Page: NextPageWithLayout = () => {
  useGsapPlugins();

  return (
    <>
      <StartSectionV2 />

      <AboutSection />

      <TeamSection />

      <WorksSection />

      <ServicesSection />

      <ArticlesSection />

      <ReviewsSection />
      <WriteReviewSection />

      {/*<GalleySection />*/}

      <ContactsSection />
    </>
  )
}

Page.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
