import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/layout';
interface WrapperProps {
  children: ReactNode;
  
}

export const FlexRow: React.FC<WrapperProps> = ({ children }) => {
    return <Flex direction={"row"}>{children}</Flex>;
  };
  