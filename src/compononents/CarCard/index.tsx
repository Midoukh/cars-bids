import React, { useState } from "react";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import { CarType } from "../../Types";
import favIcon from "../../assets/Icons/wishlist.png";
import fuelIcon from "../../assets/Icons/fuel.png";
import dzIcon from "../../assets/Icons/algeria.png";
import swapIcon from "../../assets/Icons/swap.png";
import { Link } from "react-router-dom";

import { formatMoney } from "../../utils/formatMoney";
import { dinarToMillionCent } from "../../utils/dinar";
import { linkify } from "../../utils/linkify";

export const CarCard: React.FC<CarType> = ({
  name,
  year,
  imgSrc,
  latestBid,
  currency,
  timeLeft,
  numberOfBids,
  address,
  fuel,
  city,
  id
}) => {
  const numberOfBidsPr = numberOfBids > 1 ? "offres" : "offre";

  const [formCurrency, setFormCurr] = useState<number | string>(
    formatMoney(Number(latestBid))
  );
  const [curr, setCurr] = useState<string>(currency);

  const changeDinToCenOnClick = (): void => {
    if (curr === currency) {
      setFormCurr(dinarToMillionCent(Number(latestBid)));
      setCurr("");
    }
  };

  return (
    <Flex
      w="340px"
      h="auto-fit"
      bg="gray.50"
      p={3}
      pos="relative"
      direction={"column"}
      borderRadius={5}
    >
      <Link to={`/car-info/${linkify(name)}/${id}`}>
        <Image
          src={imgSrc}
          alt={`${name}-${year}`}
          boxSize={"100%"}
          objectFit={"cover"}
          borderRadius={4}
          _hover={{ cursor: "pointer" }}
        />
      </Link>
      <Flex direction={"row"} align={"center"} justify={"flex-end"}>
        <Heading
          as="h4"
          size="sm"
          p={2.5}
          paddingInline={10}
          bg="white"
          color="blue.900"
          borderLeftRadius={"35px"}
          border={"1px"}
          borderColor={"blue.100"}
        >
          {timeLeft}
        </Heading>
        <Flex align={"center"}>
          <Heading as="h4" size="sm" p={2.5} bg="black" color="white">
            {`${formCurrency}${curr}`}
          </Heading>

          <Image
            src={swapIcon}
            objectFit={"cover"}
            boxSize={"14px"}
            ml={2}
            _hover={{ cursor: "pointer" }}
            onClick={changeDinToCenOnClick}
          />
        </Flex>
      </Flex>
      <Flex align={"center"} justify={"space-between"} paddingBlock={2}>
        <Heading
          as="h5"
          size="sm"
          bg="gray.200"
          color="blue.900"
          w="30%"
          p={1.5}
          borderRadius={8}
        >{`${numberOfBids} ${numberOfBidsPr}`}</Heading>
        <Image
          src={favIcon}
          objectFit={"cover"}
          boxSize={"20px"}
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      <Link to={`/car-info/${linkify(name)}/${id}`}>
        <Heading
          as="h3"
          size={"lg"}
          marginBlock={3}
          _hover={{ cursor: "pointer" }}
        >
          {name}
        </Heading>
      </Link>
      <Flex justify={"space-between"}>
        <Flex align={"center"}>
          <Image
            src={fuelIcon}
            objectFit={"cover"}
            boxSize={"15px"}
            mr={1.5}
            opacity={".5"}
          />
          <Heading as="h5" size="sm" color="blue.700" opacity={".85"}>
            {fuel}
          </Heading>
        </Flex>
        <Flex align={"center"}>
          <Image
            src={dzIcon}
            alt="algeria flag"
            objectFit={"cover"}
            boxSize={"15px"}
            mr={1.5}
          />
          <Heading as="h5" size="sm" color="blue.700" opacity={".85"}>
            {city}
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};
