import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const IMG_SRC = "https://e1.pxfuel.com/desktop-wallpaper/167/904/desktop-wallpaper-renault-clio-v6-sport-1999-2001-clio-rs.jpg"


export const HomeImage = () => {
    return (
        <Flex w="100vw" justify={"center"} mt={5}>
            <Image src={IMG_SRC} fallbackSrc="https://via.placeholder.com/400" alt="home image" objectFit={"cover"}/>
        </Flex>
    )
}