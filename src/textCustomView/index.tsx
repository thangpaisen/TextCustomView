import React, {ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';

type Props = {
  fontSize?: number;
  style?: TextStyle;
  color?: string;
  children?: ReactNode;
  bold?: boolean;
};

export const TextCustomView: any = ({
  fontSize,
  style,
  color,
  bold,
  children,
}: Props) => {
  return (
    <Text
      style={[
        {
          fontSize,
          color,
          fontWeight: bold ? '600' : '400',
          includeFontPadding: false,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
