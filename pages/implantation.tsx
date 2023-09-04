import {NextPageWithLayout} from "./_app";
import React from "react";
import HeaderLayout from "@/components/layout/HeaderLayout";

const Page: NextPageWithLayout = () => {
  return (
    <>
      Implantation
    </>
  )
}

Page.getLayout = (page: React.ReactElement) => {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default Page;
