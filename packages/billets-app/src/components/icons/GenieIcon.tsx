import React, {memo} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const GenieIcon = (props: SvgProps) => {
  return (
    <Svg {...props} viewBox="0 0 24 24">
      <Path
        fill={props.fill}
        d="M11.5 1A3.5 3.5 0 0 0 8 4.5 3.5 3.5 0 0 0 11.5 8 3.5 3.5 0 0 0 15 4.5 3.5 3.5 0 0 0 11.5 1zM7 9c-1.654 0-3 1.346-3 3v4h3.23c1.182 3.877 4.267 6 8.77 6 .96 0 2.361-.063 3.447-.605l2.051-1.026-2.146-.806c-2.497-.936-3.132-2.482-3.28-3.563H19v-4c0-1.654-1.346-3-3-3H7z"
      />
    </Svg>
  );
};
export default memo(GenieIcon);
