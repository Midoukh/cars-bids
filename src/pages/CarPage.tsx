import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import data from "../Data/cars.json";
import { CarType } from "../Types";
import backIcon from "../assets/Icons/left.png";
import heartIconOutline from "../assets/Icons/heart-outline.png";
import shareIcon from "../assets/Icons/share.png";
import bidIcon from "../assets/Icons/law.png";

import { NavBar } from "../compononents/NavBar";
import { formatMoney } from "../utils/formatMoney";

type CarPageType = object;
type carImgGall = {
  original: string;
  thumbnail: string;
};
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const CarPage: React.FC<CarPageType> = () => {
  const [car, setCar] = useState<any>({});
  const [carName, setCarName] = useState<string>("");
  const [carId, setCarId] = useState<string>("");
  const [carImagesGall, setCarImagesGallery] = useState<carImgGall[]>([]);
  const [currentBid, setCurrentBid] = useState<string>("");
  const [bids, setBids] = useState<number>(0);

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const carName = currentUrl.split("/")[2].replace("-", " ");
    const carId = currentUrl.split("/")[3];
    setCarName(carName);
    document.title = carName;
    setCarId(carId);
    getCar();
    getAndMakeImagesForRIG();
    console.log("In useEffect");
    console.log(data);
    console.log(car);
  }, [car, carId, currentBid, bids, carName]);

  const getCar = (): void => {
    console.log("Carid in geCar(): " + carId);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === carId) setCar(data[i]);
    }
  };

  //this function get car's images and make them work for react-image-gallery
  const getAndMakeImagesForRIG = () => {
    const imgs: carImgGall[] = [];

    if (Object.keys(car).length !== 0) {
      setCurrentBid(formatMoney(Number(car.lenchere[0].valeur)));
      setBids(Number(car.lenchere.length));
      for (let i = 0; i < car.EXTERIEURE.length; i++) {
        const currImg = {
          original: car.EXTERIEURE[i],
          thumbnail: car.EXTERIEURE[i],
        };
        imgs.push(currImg);
      }
      setCarImagesGallery(imgs);
    }
  };

  return (
    <Box minWidth="100vw" p={0} m={0}>
      <NavBar />
      <ImageGallery items={images} />
      <Flex justify={"space-evenly"} mt={"45px"} paddingInline={0}>
        <Link to="/">
          <Box _hover={{ cursor: "pointer" }}>
            <Image
              src={backIcon}
              objectFit={"contain"}
              boxSize={"20px"}
              alt="back to home page"
            />
          </Box>
        </Link>
        <Box>
          <Text as={"h2"} fontWeight={"bold"} fontSize={"lg"}>
            {currentBid !== "" ? currentBid + "DA" : "..."}
          </Text>
          <Text as={"h4"} opacity={".7"} fontSize={"sm"}>
            Enchére actuelle
          </Text>
        </Box>
        <Box>
          <Text as={"h2"} fontWeight={"bold"} fontSize={"lg"}>
            05:30:36
          </Text>
          <Text as={"h3"} opacity={".7"} fontSize={"sm"}>
            Aujourd'hui à 6:30pm
          </Text>
        </Box>
        <Box>
          <Text as={"h2"} fontWeight={"bold"} fontSize={"lg"}>
            {bids}
          </Text>
          <Text as={"h3"} opacity={".7"} fontSize={"sm"}>
            Enchéres
          </Text>
        </Box>
        <ButtonGroup gap="4">
          <Button>
            <Image
              src={heartIconOutline}
              objectFit={"contain"}
              boxSize={"15px"}
              alt="add to fav"
              mr={2}
            />
            <Text as="h4">Regardé</Text>
          </Button>
          <Button>
            <Image
              src={shareIcon}
              objectFit={"contain"}
              boxSize={"15px"}
              alt="share"
              mr={2}
            />
            <Text as="h4">Partagé</Text>
          </Button>
          <Button colorScheme="blue">
            <Image
              src={bidIcon}
              objectFit={"contain"}
              boxSize={"15px"}
              alt="bid"
              mr={2}
            />
            <Text as="h4">Placer</Text>
          </Button>
        </ButtonGroup>
      </Flex>
      <Flex mt={30} p={10}>
        <Box>
          <Text as="h1" size="4xl" fontWeight={"bold"}>{carName}</Text>
        </Box>
      </Flex>
    </Box>
  );
};
