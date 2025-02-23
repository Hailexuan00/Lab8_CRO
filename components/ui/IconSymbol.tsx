// This file provides a cross-platform icon component using SF Symbols on iOS and MaterialIcons on Android/Web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Symbol, SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle, Platform } from 'react-native';

// Mapping SF Symbols to MaterialIcons for Android and Web
const MAPPING: Record<string, React.ComponentProps<typeof MaterialIcons>['name']> = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'person.fill': 'person', // Profile icon
  'gearshape.fill': 'settings', // Settings icon
  'star.fill': 'star', // Example additional mapping
};

export type IconSymbolName = keyof typeof MAPPING;

/**
 * Cross-platform icon component that uses SF Symbols on iOS and MaterialIcons on Android/Web.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  // Use SF Symbols on iOS for a native look
  if (Platform.OS === 'ios') {
    return <Symbol name={name} size={size} color={color} style={style} weight={weight} />;
  }

  // Use MaterialIcons on Android and Web
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name] || 'help-outline'} // Fallback to 'help-outline' if not mapped
      style={style}
    />
  );
}
