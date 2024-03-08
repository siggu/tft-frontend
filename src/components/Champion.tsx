import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import IChampion from "./types.d";

const Champion = ({ pk, name, cost, photos }: IChampion) => {
  console.log(pk, name, cost, photos);
  return (
    // <Link to={`/champions/${pk}`}>
    <VStack alignItems="center">
      <Box w="50px" h="50px">
        {photos ? (
          <Image
            src={photos[0].file}
            alt={name}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        ) : (
          <Box w="100%" h="100%" bg="green.400" />
        )}
      </Box>
      <Text>{name}</Text>
      <Text>{cost}</Text>
    </VStack>
    // </Link>
  );
};

export default Champion;
