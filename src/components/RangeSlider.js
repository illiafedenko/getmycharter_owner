import React, { useState, useRef } from 'react';
import { View, PanResponder, StyleSheet } from 'react-native';

const RangeSlider = ({ minValue, maxValue, initialMinValue, initialMaxValue, onValuesChange }) => {
  const [minValuePos, setMinValuePos] = useState(0);
  const [maxValuePos, setMaxValuePos] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  const minThumbRef = useRef(null);
  const maxThumbRef = useRef(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {},
      onPanResponderMove: (event, gestureState) => {
        const { dx } = gestureState;
        const range = maxValue - minValue;
        const pixelsPerValue = sliderWidth / range;

        const newMinValuePos = minValuePos + dx;
        const newMaxValuePos = maxValuePos + dx;

        if (newMinValuePos >= 0 && newMaxValuePos <= sliderWidth) {
          const newMinValue = Math.round(newMinValuePos / pixelsPerValue) + minValue;
          const newMaxValue = Math.round(newMaxValuePos / pixelsPerValue) + minValue;

          setMinValuePos(newMinValuePos);
          setMaxValuePos(newMaxValuePos);

          onValuesChange([newMinValue, newMaxValue]);
        }
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  const handleSliderLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setSliderWidth(width);

    const range = maxValue - minValue;
    const pixelsPerValue = width / range;

    const initialMinValuePos = (initialMinValue - minValue) * pixelsPerValue;
    const initialMaxValuePos = (initialMaxValue - minValue) * pixelsPerValue;

    setMinValuePos(initialMinValuePos);
    setMaxValuePos(initialMaxValuePos);
  };

  return (
    <View style={styles.sliderContainer} onLayout={handleSliderLayout}>
      <View
        style={[
          styles.sliderTrack,
          { width: sliderWidth, left: minValuePos, right: sliderWidth - maxValuePos },
        ]}
      />
      <View
        style={[styles.thumb, { left: minValuePos }]}
        {...panResponder.panHandlers}
        ref={minThumbRef}
      />
      <View
        style={[styles.thumb, { left: maxValuePos }]}
        {...panResponder.panHandlers}
        ref={maxThumbRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 40,
    justifyContent: 'center',
  },
  sliderTrack: {
    height: 4,
    backgroundColor: 'lightgray',
    position: 'absolute',
    top: 18,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    position: 'absolute',
    top: 10,
  },
});

export default RangeSlider;