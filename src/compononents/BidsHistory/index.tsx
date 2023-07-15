import React from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import { BidType } from "../../Types"

type BidsHistoryType = {
    bids: BidType[]
}

export const BidsHistory : React.FC<BidsHistoryType> = ({}) => {
    return (
        <Box>
            <Text as="h1" fontSize={"25px"} fontWeight={"bold"}></Text>
            <Flex>

            </Flex>
        </Box>
    )
}