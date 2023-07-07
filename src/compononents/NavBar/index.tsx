import { Link, Flex, Image, Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import React from "react";

export const NavBar = () => {
    return (
        <Flex justify={"space-around"} align={"center"} bg="blue.50" color={"blue.900"}>
            <Box>
                <Image src="https://cdn-icons-png.flaticon.com/512/744/744465.png" alt="logo" maxH={"100px"} />
            </Box>
                <Flex>
                    <Link marginInline={4}>Buy</Link>
                    <Link marginInline={4}>Sell</Link>
                    <Link marginInline={4}>News</Link>
                    <Link marginInline={4}>About</Link>
                </Flex>
                <ButtonGroup spacing={4} ml={6}>
                    <Button size="lg" >Register</Button>
                    <Button  size="lg" variant={"outline"}>Log in</Button>
                </ButtonGroup>
        </Flex>
    )
}