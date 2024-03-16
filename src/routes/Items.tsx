import {useQuery} from '@tanstack/react-query';
import {getItems, getItemRecipies} from '../api';
import {useParams} from 'react-router-dom';
import {Box, Container, HStack, Image, Text, Tooltip, VStack} from '@chakra-ui/react';
import IItems from '../components/types';
import Item from '../components/Item';

export default function Items() {
  // 아이템 가져오기
  const {data: itemsDate} = useQuery<IItems>({
    queryKey: ['item'],
    queryFn: getItems,
  });
  // 아이템 레시피 가져오기
  const {data: itemRecipiesDate} = useQuery<IItems>({
    queryKey: ['itemRecipies'],
    queryFn: getItemRecipies,
  });

  return (
    <VStack maxW="1120px" mt="20px" p="20px" minW="700px">
      {itemsDate?.map((itemsDate_ele) => {
        if (itemsDate_ele.generableItem) {
          return itemRecipiesDate?.map((itemRecipiesDate_ele) => {
            if (itemRecipiesDate_ele.result_item.id === itemsDate_ele.id) {
              let element_item1_photo = '';
              let element_item2_photo = '';
              itemsDate?.map((itemsDate_ele_inner) => {
                if (itemsDate_ele_inner.id === itemRecipiesDate_ele.element_item1.id) {
                  element_item1_photo = itemsDate_ele_inner.photos[0].file;
                }
                if (itemsDate_ele_inner.id === itemRecipiesDate_ele.element_item2.id) {
                  element_item2_photo = itemsDate_ele_inner.photos[0].file;
                }
              });
              return (
                <VStack>
                  <Item
                    pk={itemsDate_ele.id}
                    photo={itemsDate_ele.photos[0].file}
                    name={itemsDate_ele.name}
                    description={itemsDate_ele.description}
                    effect={itemsDate_ele.effect}
                    generableItem={itemsDate_ele.generableItem}
                    element_item1={element_item1_photo}
                    element_item2={element_item2_photo}
                  />
                </VStack>
              );
            }
          });
        }
        return (
          <VStack>
            <Item
              pk={itemsDate_ele.id}
              photo={itemsDate_ele.photos[0].file}
              name={itemsDate_ele.name}
              description={itemsDate_ele.description}
              effect={itemsDate_ele.effect}
              generableItem={itemsDate_ele.generableItem}
              element_item1={itemsDate_ele}
              element_item2={itemsDate_ele}
            />
          </VStack>
        );
      })}
    </VStack>
  );
}
