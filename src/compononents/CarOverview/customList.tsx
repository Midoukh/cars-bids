import React from "react";
import { Box, UnorderedList, ListItem, Text } from "@chakra-ui/react";
import { generateUniqueId } from "../../utils/generateUniqueId";

type CustomListType = {
  title: string;
  listArr: string[];
};

export const CustomList: React.FC<CustomListType> = ({ title, listArr }) => {
  return (
    <Box p={10}>
      <Text as="h2" fontSize="25px" fontWeight={"bold"} mb={2}>
        {title}
      </Text>
      <UnorderedList
        style={{
          listStyle: "none",
        }}
      >
        {listArr !== undefined &&
          listArr.map((item: string) => (
            <ListItem
            
              pos={"relative"}
              m="0 0 5px"
              p="0 0 0 20px"
              display={"list-item"}
              _before={{
                color: "blue.500",
                position: "absolute",
                content: '"\u25CF"',
                left: 0,
                top: 0,
                height: "25px",
              }}
              key={generateUniqueId()}
            >
              {item}
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};
