import { useQuery } from '@tanstack/react-query';
import { getAugments } from '../api';
import { HStack, Tooltip, VStack, Text, Image } from '@chakra-ui/react';

interface IAugment {
  key: string;
  ingameKey: string;
  name: string;
  desc: string;
  imageUrl: string;
}

export default function Augment({ key, ingameKey, name, desc, imageUrl }: IAugment) {
  const { data: augmentsData } = useQuery({
    queryKey: ['augments'],
    queryFn: getAugments,
  });

  return (
    <Tooltip
      hasArrow
      placement="right"
      label={
        <VStack key={key} as={'b'} gap={3} alignItems={'flex-start'}>
          <Text>{name}</Text>
          {/* <Text>{desc}</Text> */}
          <Text color={'gray'} dangerouslySetInnerHTML={{ __html: desc.replace(/<br>/g, '<br />') }} />
        </VStack>
      }
      bg={'black'}
      rounded={'md'}
      p={3}
    >
      <Image src={imageUrl} alt={name} w={'30px'} h={'30px'} />
    </Tooltip>
  );
}
