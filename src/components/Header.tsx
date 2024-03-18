import { HStack, Box, Text, Image, Container, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box p={10} mb={10}>
      <VStack>
        <Box mb={10}>
          <Link to={"/"}>
            <Image src="https://cdn.dak.gg/tft/images2/sets/set11/logo-title-ko.png" />
          </Link>
        </Box>
        <HStack gap={5}>
          {/* 조우자 */}
          <Box
            _hover={{
              bgGradient: "linear(#f6da75, #d1bc69, #a58735)",
            }}
            bgGradient={"linear(#d1bc69, #f6da75, #a58735)"}
            rounded={"5px"}
            paddingX={5}
            paddingY={3}
            fontSize={"14px"}
            border={"1px solid black"}
          >
            <Link to={"/encounters"}>
              <Text fontWeight={"600"} color={"white"}>
                조우자
              </Text>
            </Link>
          </Box>
          {/* 챔피언 */}
          <Box
            _hover={{
              bgGradient: "linear(#f6da75, #d1bc69, #a58735)",
            }}
            bgGradient={"linear(#d1bc69, #f6da75, #a58735)"}
            rounded={"5px"}
            paddingX={5}
            paddingY={3}
            fontSize={"14px"}
            border={"1px solid black"}
          >
            <Link to={"/champions/1"}>
              <Text fontWeight={"600"} color={"white"}>
                챔피언
              </Text>
            </Link>
          </Box>
          {/* 시너지 */}
          <Box
            _hover={{
              bgGradient: "linear(#f6da75, #d1bc69, #a58735)",
            }}
            bgGradient={"linear(#d1bc69, #f6da75, #a58735)"}
            rounded={"5px"}
            paddingX={5}
            paddingY={3}
            fontSize={"14px"}
            border={"1px solid black"}
          >
            <Link to={"/synergies"}>
              <Text fontWeight={"600"} color={"white"}>
                시너지
              </Text>
            </Link>
          </Box>
          {/* 아이템 */}
          <Box
            _hover={{
              bgGradient: "linear(#f6da75, #d1bc69, #a58735)",
            }}
            bgGradient={"linear(#d1bc69, #f6da75, #a58735)"}
            rounded={"5px"}
            paddingX={5}
            paddingY={3}
            fontSize={"14px"}
            border={"1px solid black"}
          >
            <Link to={"/items"}>
              <Text fontWeight={"600"} color={"white"}>
                아이템
              </Text>
            </Link>
          </Box>
          {/* 증강체 */}
          <Box
            _hover={{
              bgGradient: "linear(#f6da75, #d1bc69, #a58735)",
            }}
            bgGradient={"linear(#d1bc69, #f6da75, #a58735)"}
            rounded={"5px"}
            paddingX={5}
            paddingY={3}
            fontSize={"14px"}
            border={"1px solid black"}
          >
            <Link to={"/augments"}>
              <Text fontWeight={"600"} color={"white"}>
                증강체
              </Text>
            </Link>
          </Box>
          {/* 차원문 */}
          <Box
            _hover={{
              bgGradient: "linear(#f6da75, #d1bc69, #a58735)",
            }}
            bgGradient={"linear(#d1bc69, #f6da75, #a58735)"}
            rounded={"5px"}
            paddingX={5}
            paddingY={3}
            fontSize={"14px"}
            border={"1px solid black"}
          >
            <Link to={"/portals"}>
              <Text fontWeight={"600"} color={"white"}>
                차원문
              </Text>
            </Link>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}