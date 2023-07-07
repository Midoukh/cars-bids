import React from "react";
import { Input, Box } from "@chakra-ui/react";

export const SearchCarsInput = () => {
    return (
        <Box p={4}>
            <Input type="search" placeholder="Search" w={"50%"} borderRadius={2}/>
        </Box>
    )
}