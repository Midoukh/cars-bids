import React from "react";
import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import milesIcon from "../../assets/Icons/medium.png";
import transmIcon from "../../assets/Icons/manual-transmission.png";
import colorIcon from "../../assets/Icons/paint-bucket.png";
import engineIcon from "../../assets/Icons/car-engine.png";
import lotIcon from "../../assets/Icons/hammer.png";
import userIcon from "../../assets/Icons/user.png";
import algeriaIcon from "../../assets/Icons/algeria.png";

type CarOverviewType = {
  miles: number;
  transmition: string;
  color: string;
  engine: string;
  VIN: string;
  address: string;

};

type cusImgType = {
  imgSrc: string;
  imgAlt: string;
};

type CusTextType = {
  txt: string | number;
  m?: number;
  op?: boolean;
};

export const CarOverview: React.FC<CarOverviewType> = ({
  miles,
  transmition,
  color,
  engine,
  VIN,
  address,
}) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} p={20}>
      <Flex direction={"column"} align={"flex-start"}>
        <Text as="h2" fontWeight={"bold"} fontSize={"3xl"} mb={3}>
          Aperçu de la voiture
        </Text>
        <Flex mb={2}>
          <CusImg imgSrc={milesIcon} imgAlt="miles" />
          <CusText txt={miles} op />
        </Flex>
        <Flex mb={2}>
          <CusImg imgSrc={transmIcon} imgAlt="transmission" />
          <CusText txt={transmition} op />
        </Flex>
        <Flex mb={2}>
          <CusImg imgSrc={colorIcon} imgAlt="color" />
          <CusText txt={color} op />
        </Flex>
        <Flex mb={2}>
          <CusImg imgSrc={engineIcon} imgAlt="engine" />
          <CusText txt={engine} op />
        </Flex>
        <Flex mb={2}>
          <CusText txt={"VIN"} m={2} />
          <CusText txt={VIN} op />
        </Flex>
      </Flex>
      <Flex direction={"column"} align={"flex-start"}>
        <Text as="h2" fontWeight={"bold"} fontSize={"3xl"} mb={3}>
          L'enchére
        </Text>
        <Flex mb={2}>
          <CusImg imgSrc={userIcon} imgAlt="lot" />
          <CusText txt={"Vente privé"} op />
        </Flex>
        <Flex mb={2}>
          <CusImg imgSrc={algeriaIcon} imgAlt="address" />
          <CusText txt={address} op />
        </Flex>
      </Flex>
      <Flex direction={"column"} align={"flex-start"}>
        <Text as="h2" fontWeight={"bold"} fontSize={"3xl"} mb={3}>
          Vendeur
        </Text>
        <Flex mb={2}>
          <CusImg imgSrc={userIcon} imgAlt="seller" />
          <CusText txt={"Vendeur"} op />
        </Flex>
      </Flex>
    </Grid>
  );
};
const CusImg: React.FC<cusImgType> = ({ imgSrc, imgAlt }) => {
  return (
    <Image
      src={imgSrc}
      alt={imgAlt}
      objectFit={"contain"}
      boxSize={"20px"}
      mr={2}
    />
  );
};

const CusText: React.FC<CusTextType> = ({ txt, m, op }) => {
  return (
    <Text
      as="h3"
      size="2xl"
      fontWeight={"black"}
      mr={m !== 0 ? m : 0}
      opacity={op ? ".7" : "1"}
    >
      {txt}
    </Text>
  );
};
