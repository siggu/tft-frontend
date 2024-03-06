import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IChampionProps {
  pk: number;
  name: string;
  cost: number;
  avatar: string | null;
}

const Champion = ({ pk, name, cost, avatar }: IChampionProps) => {
  console.log(pk, name, cost, avatar);
  return (
    <Link to={`/champions/${pk}`}>
      <VStack alignItems="center">
        <Box w="200px" h="200px">
          {avatar ? (
            <Image
              src={avatar}
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
    </Link>
  );
};

export default Champion;
