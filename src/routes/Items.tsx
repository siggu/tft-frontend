import { useQuery } from '@tanstack/react-query';
import { getItems } from '../api';
import { useParams } from 'react-router-dom';
import { FaFlask, FaCoins } from 'react-icons/fa';
import { Box, Container, HStack, Image, Text, Tooltip, VStack } from '@chakra-ui/react';
import IItems from '../components/types';

export default function Items() {
    // 아이템 가져오기
    const { data: itemsDate } = useQuery<IItems>({
        queryKey: ['item'],
        queryFn: getItems,
    });

    return (
        <VStack maxW="1120px" mt="20px" p="20px" minW="700px">
            {itemsDate?.map((itemsDate_ele) => (
                <VStack>
                    <Image src={itemsDate_ele.photos[0].file} />
                </VStack>
            ))}
        </VStack>
    );
}
