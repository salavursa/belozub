import dynamic from "next/dynamic" ;
import React from "react";

type Props = {
  children: React.ReactElement | React.ReactElement[]
}

const NonSSRWrapper = ({ children }: Props) => (
  <React.Fragment>{children}</React.Fragment>
)
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false
})