import React, {useEffect, useState} from "react";
import useScript from "@/util/useScript";
import {Box, BoxProps} from "@mui/material";

function init() {
  // @ts-ignore
  const { ymaps } = window;

  var myMap = new ymaps.Map("map", {
    center: [59.851716, 30.155489],
    zoom: 16,
    controls: ["zoomControl"]
  });


  // Создадим экземпляр элемента управления «поиск по карте»
  // с установленной опцией провайдера данных для поиска по организациям.
  var searchControl: any = new ymaps.control.SearchControl({
    options: {
      provider: 'yandex#search'
    }
  });

  myMap.controls.add(searchControl);

  searchControl.search('Belozub Clinic');

  searchControl.events.add('load', function () {
    setTimeout(() => {
      searchControl.hideResult();
    }, 1000);
  })
  // // Создаем кластеризатор.
  // let clusterer = new ymaps.Clusterer();
  // var placemarks = [
  //   new ymaps.Placemark([59.851716, 30.155489], {})
  // ];
  // clusterer = clusterer.add(placemarks);
  // myMap.geoObjects.add(clusterer);
}

type Props = {

} & BoxProps

export default function Map({ sx = {}, ...other }: Props ): React.ReactElement {
  const [loaded] = useScript("https://api-maps.yandex.ru/2.1/?apikey=bfa2e393-deab-4d28-b6fb-2b9566329720&lang=ru_RU");
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!mapLoaded && loaded) {
      const timeout = setTimeout(() => {
        // @ts-ignore
        const { ymaps } = window;

        if (ymaps) {
          console.log(ymaps);
          ymaps.ready(init);
          clearTimeout(timeout);
          setMapLoaded(true);
        }
      }, 1000);
    }
  }, [loaded, mapLoaded]);

  return (
    <Box
      id="map"
      sx={{
        overflow: "hidden",
        borderRadius: theme => theme.constants.borders.radius,
        ...sx
      }}
      {...other}
    />
  );
};