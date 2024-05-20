import React, { useRef, useState, useEffect, memo, createRef, useMemo } from 'react';
import { Box, View, FlatList, Text, Center, NativeBaseProvider } from 'native-base';

const ITEM_HEIGHT = 37;

const List = ({ item, index }) => {
  return (
    <View p={'6px'} h={`${ITEM_HEIGHT}px`} key={index}>
      <Center>{item.label}</Center>
    </View>
  );
};

const SelectScroll = memo(function SelectScroll({ items, value, selected }) {
  const findIndex = useMemo(() => {
    return items.findIndex(item => item.value == value);
  }, [items, value]);

  const [selectedIndex, setSelectedIndex] = useState(findIndex >= 0 ? findIndex : 0);

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    selected(items[index]);
    setSelectedIndex(index);
  };

  return (
    <View w={'100%'} h={`${ITEM_HEIGHT * 3}px`} px={2}>
      <Box
        top={0}
        h={`${ITEM_HEIGHT}px`}
        right={0}
        left={0}
        position={'absolute'}
        borderColor={'dark.600'}
        borderBottomWidth={'1px'}
        zIndex={2}
        bg={{
          linearGradient: {
            colors: [
              'rgba( 250, 250, 250, 1 )',
              'rgba( 250, 250, 250, 0.9 )',
              'rgba( 250, 250, 250, 0.7 )',
              'rgba( 250, 250, 250, 0.2 )',
            ],
            start: [1, 0],
            end: [0, 0],
          },
        }}
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
        top={`${ITEM_HEIGHT * 2}px`}
        h={`${ITEM_HEIGHT}px`}
        right={0}
        left={0}
        bottom={0}
        position={'absolute'}
        borderColor={'dark.600'}
        borderTopWidth={'1px'}
        zIndex={2}
        bg={{
          linearGradient: {
            colors: [
              'rgba( 250, 250, 250, 0.2 )',
              'rgba( 250, 250, 250, 0.7 )',
              'rgba( 250, 250, 250, 0.9 )',
              'rgba( 250, 250, 250, 1 )',
            ],
            start: [0, 0],
            end: [0, 1],
          },
        }}
        pointerEvents="none"
      />
    </View>
  );
});

export default SelectScroll;
