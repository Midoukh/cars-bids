import React, {useState} from "react";
import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Register: React.FC<any> = ({}) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
      };

  return (
    <Grid p={2}>
      <GridItem>
        <Flex direction={"column"}>
          <Text as="h1" fontSize={"25px"} fontWeight={"bold"}>
            S'inscrire
          </Text>
          <Text as="h4" fontSize={"16px"} opacity={".88"}>
            Créez un compte pour regarder les enchères, enchérir ou vendre.
          </Text>
          <FormControl>
            <FormLabel>Nom et Prénom</FormLabel>
            <Input type="text" />
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormLabel>Choisissez un nom d'utilisateur</FormLabel>
            <Input type="text" />
            <FormLabel>Mot de passe</FormLabel>
            <Input type="password" />
            <FormHelperText>Au moins 8 caractères.</FormHelperText>
            <Flex>
              <Checkbox mr={2} isChecked={isChecked} onChange={handleChange}/>
              <Text as="h4" fontSize={"16px"} opacity={".88"}>
                J'accepte{" "}
                <Link to="terms_and_conditions">les termes et conditions</Link>{" "}
                applicables
              </Text>
            </Flex>
          </FormControl>
        </Flex>
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
};
