import React, { ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
import { gStyles } from '@/global-styles';
import { styles } from './TemplateSplitedViewScrollAndButtonFixedAtTheBottom.styles';

interface TemplateProps {
  children: ReactNode[];
  fixedTopViewStyles?: ViewStyle;
  fixedBottomViewStyles?: ViewStyle;
}

export const TemplateSplitedViewScrollAndButtonFixedAtTheBottom = ({
  children,
  fixedTopViewStyles,
  fixedBottomViewStyles,
}: TemplateProps) => {
  return (
    <>
      <ScrollView
        contentContainerStyle={[gStyles.gralMargin, fixedTopViewStyles]}>
        {children[0]}
      </ScrollView>
      <View
        style={
          fixedBottomViewStyles
            ? fixedBottomViewStyles
            : styles.defaultFixedBottomStyles
        }>
        {children[1]}
      </View>
    </>
  );
};
