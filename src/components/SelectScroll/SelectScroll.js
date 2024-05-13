import React, { useRef, useState, useEffect, memo, createRef } from 'react';
import { Box, View, FlatList, Text, Center } from 'native-base';

const SelectScroll = ({ items, value, selected }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const ITEM_HEIGHT = 37;

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    selected(items[index]);
    setSelectedIndex(index);
  };

  const List = ({ item, index }) => {
    return (
      <Box p={2} h={37} key={index}>
        <Center>
          <Text>{item.label}</Text>
        </Center>
      </Box>
    );
  };

  useEffect(() => {
    if (value) {
      const findIndex = items.findIndex(item => item.value === value);
      console.log(findIndex);
      setSelectedIndex(findIndex);
    }
  }, [value]);

  return (
    <View w={'100%'} height={'111px'} px={2}>
      <Box
        top={ITEM_HEIGHT}
        height="47px"
        right={0}
        left={0}
        position={'absolute'}
        borderColor={'dark.400'}
        borderTopWidth={1}
        zIndex={2}
        pointerEvents="none"
      />
      <FlatList
        data={[{}, ...items, {}]}
        renderItem={({ item, index }) => <List item={item} index={index} />}
        initialScrollIndex={selectedIndex}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        w={'100%'}
      />
      <Box
        top={ITEM_HEIGHT * 2}
        height="1px"
        right={0}
        left={0}
        position={'absolute'}
        borderColor={'dark.400'}
        borderTopWidth={1}
        zIndex={2}
      />
    </View>
  );
};

export default SelectScroll;
