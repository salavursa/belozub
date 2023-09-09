import React, {ForwardedRef, forwardRef, ReactElement, useCallback, useImperativeHandle, useRef, Children} from "react";
import {Box, SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

export type Props = {
  sx?: SxProps<Theme>,
  children?: ReactElement[]
};

export type SliderInterface = {
  slideLeft: () => void;
  slideRight: () => void;
};

const SliderContainer = forwardRef<SliderInterface, Props>(({ children = [], sx = {} }, ref) => {
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
        overflowX: "scroll",
        scrollSnapType: "x mandatory",
        scrollPaddingLeft: {
          xs: "25px",
          sm: "30px"
        },
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