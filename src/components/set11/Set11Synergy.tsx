import { Tooltip, Image, Text, VStack, HStack } from '@chakra-ui/react';
import ISynergy from '../types';
import { getSet11TraitBackgroundImageUrl } from '../../traitColors/set11/Set11TraitColors';

interface SynergyProps {
  trait: {
    name: string;
    num_units: number;
  };
  synergy: ISynergy | undefined;
}

const Set11Synergy = ({ trait, synergy }: SynergyProps) => {
  const backgroundImageUrl = getSet11TraitBackgroundImageUrl(trait.name, trait.num_units);

  if (!backgroundImageUrl || !synergy) return null;

  // 시너지 효과를 구성하는 함수
  const getSynergyEffects = (synergy: ISynergy, num_units: number) => {
    const effects = [];
    if (num_units >= synergy.style1_min && num_units <= synergy.style1_max) {
      effects.push({ text: synergy.stats1, isActive: true });
    } else {
      effects.push({ text: synergy.stats1, isActive: false });
    }
    if (num_units >= synergy.style2_min && num_units <= synergy.style2_max) {
      effects.push({ text: synergy.stats2, isActive: true });
    } else {
      effects.push({ text: synergy.stats2, isActive: false });
    }
    if (num_units >= synergy.style3_min && num_units <= synergy.style3_max) {
      effects.push({ text: synergy.stats3, isActive: true });
    } else {
      effects.push({ text: synergy.stats3, isActive: false });
    }
    if (num_units >= synergy.style4_min && num_units <= synergy.style4_min) {
      effects.push({ text: synergy.stats4, isActive: true });
    } else {
      effects.push({ text: synergy.stats4, isActive: false });
    }
    return effects;
  };

  const effects = getSynergyEffects(synergy, trait.num_units);

  return (
    <Tooltip
      hasArrow
      placement="right"
      minW={'400px'}
      label={
        <VStack align="start">
          <Text fontSize="md" fontWeight="bold">
            {synergy.name}
          </Text>
          <Text color={'gray'} dangerouslySetInnerHTML={{ __html: synergy.desc.replace(/<br>/g, '<br />') }} />
          <VStack align="start">
            {effects.map((effect, index) => (
              <Text
                key={index}
                fontSize="sm"
                color={effect.isActive ? 'green.300' : 'gray.400'}
                dangerouslySetInnerHTML={effect.text ? { __html: effect.text.replace(/<br>/g, '<br />') } : undefined}
              />
            ))}
          </VStack>
        </VStack>
      }
      bg={'black'}
      rounded={'md'}
      p={4}
    >
      <HStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Image src={backgroundImageUrl} w="26px" h="26px" />
        {synergy.blackImageUrl && (
          <Image position={'absolute'} src={synergy.blackImageUrl} alt={synergy.name} w="18px" h="18px" />
        )}
      </HStack>
    </Tooltip>
  );
};

export default Set11Synergy;
