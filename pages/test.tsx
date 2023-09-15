import {NextPageWithLayout} from "./_app";
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import {Box} from "@mui/material";
import StartSectionV2 from "@/components/section/startv2/StartSectionV2";
import useGsapPlugins from "@/util/useGsapPlugins";

const Page: NextPageWithLayout = () => {
  useGsapPlugins();

  return (
    <>
      {/*<StartSectionV2 />*/}
      <Box width="100%" height="500vh" ></Box>
    </>
  )
}

Page.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Page;
