import React, { ReactNode } from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';
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
        contentContainerStyle={[styles.gralMargin, fixedTopViewStyles]}
        accessible={true}>
        {children[0]}
      </ScrollView>
      <View
        accessible={true}
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
