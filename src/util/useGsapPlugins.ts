import {useEffect} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useGsapPlugins() {
  useEffect(() => {
    console.log("Gsap initialized");
  }, []);

  return [];
}