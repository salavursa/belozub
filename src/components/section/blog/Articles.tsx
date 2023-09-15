import React, {useRef, use, useState, useEffect} from "react";
import SliderContainer, {SliderInterface} from "@/components/slider/SliderContainer";
import {Box} from "@mui/material";
import OutlineButton from "@/components/input/OutlineButton";
import {ArticleType} from "../../../../pages/api/articles";
import Article from "@/components/section/blog/Article";

export default function Articles(): React.ReactElement {
  const [articles, setArticles] = useState<ArticleType[] | "loading" | "notLoaded">("notLoaded");

  useEffect(() => {
    if (articles !== "loading") {
      setArticles("loading");
      fetch('/api/articles').then((res: Response) => {
        res.json().then((obj: any) => setArticles(obj.articles))
      })
    }
  }, [])

  const sliderRef = useRef<SliderInterface>({
    slideRight: () => {},
    slideLeft: () => {}
  });

  return (
    <>
      <SliderContainer gap={30} ref={sliderRef}>
        {Array.isArray(articles) && articles.map(a => <Article gap={30} key={a.title} data={a}/>)}
      </SliderContainer>

      <Box
        display="flex"
        mt="20px"
        alignItems="center"
        justifyContent="center"
        gap={{ xs: "25px", sm: "34px" }}
        width="100%"
      >
        <OutlineButton onClick={() => sliderRef.current.slideLeft()} radius="xs" styleVariant="secondary" sx={{ width: "50px", height: "50px", p: 0 }}>
          {"<"}
        </OutlineButton>
        <OutlineButton
          sx={{
            minWidth: {
              md: "calc((100% - 30px * 2) / 2)",
              lg: "calc((100% - 30px * 2) / 2)",
              xl: "calc((100% - 30px * 3) / 3 + 10px)",
            }
          }}
          outlineDirection="t"
          styleVariant="secondary"
        >
          Все статьи
        </OutlineButton>
        <OutlineButton onClick={() => sliderRef.current.slideRight()} radius="xs" outlineDirection="tr" styleVariant="secondary" sx={{ width: "50px", height: "50px", p: 0 }}>
          {">"}
        </OutlineButton>
      </Box>
    </>
  )
}