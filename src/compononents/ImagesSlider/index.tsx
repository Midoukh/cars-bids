import { Box, Flex, Image, Text } from "@chakra-ui/react";

import React from "react";

type ImagesSliderType = {
  title: string;
  imgsList: string[];
};

export const ImagesSlider: React.FC<ImagesSliderType> = ({
  title,
  imgsList,
}) => {
  return (
    <Box paddingInline={20} mb={10}>
      <Text as="h2" fontSize={"23px"} fontWeight={"black"}>
        {title}
        <Text as="h2" size={"13px"} opacity={".7"} display={"inline"} ml={2} mb={2}>
          ({imgsList !== undefined && imgsList.length})
        </Text>
      </Text>
      <Flex flexWrap={"nowrap"} overflow={"auto"}>
        {imgsList !== undefined &&
          imgsList.map((img: string) => (
            <Image
              src={img}
              alt={title}
              objectFit={"cover"}
              boxSize={"180px"}
              aspectRatio={"16/9"}
              mr={2}
            />
          ))}
      </Flex>
    </Box>
  );
};
