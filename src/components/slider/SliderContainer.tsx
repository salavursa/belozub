import React, {ForwardedRef, forwardRef, ReactElement, useCallback, useImperativeHandle, useRef, Children} from "react";
import {Box, SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

export type Props = {
  sx?: SxProps<Theme>,
  gap?: number,
  children?: any
};

export type SliderInterface = {
  slideLeft: () => void;
  slideRight: () => void;
};

const SliderContainer = forwardRef<SliderInterface, Props>(({ gap = 0, children = [], sx = {} }, ref) => {
  const containerRef = useRef<HTMLDivElement>();

  useImperativeHandle(ref, () => ({
    slideLeft(): void {
      if (children?.length) {
        containerRef.current!.scrollTo({
          top: 0,
          left: containerRef.current!.scrollLeft - 370,
          behavior: 'smooth'
        });
      }
    },
    slideRight(): void {
      if (children?.length) {
        containerRef.current!.scrollTo({
          top: 0,
          left: containerRef.current!.scrollLeft + 370,
          behavior: 'smooth'
        });
      }
    }
  }));

  return (
    <Box
      ref={containerRef}
      sx={{
        alignItems: "center",
        display: "flex",
        width: "100%",
        gap: `${gap}px`,
        overflowX: "scroll",
        scrollSnapType: "x mandatory",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        ...sx
      }}
    >
      { children }
    </Box>
  )
});

SliderContainer.displayName = "SliderContainer";

export default SliderContainer;