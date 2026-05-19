import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { LayoutDashboard, Utensils, BarChart3, Video, Image as ImageIcon } from 'lucide-react';

export const TABS = [
  { id: 'Home', label: 'БҮГІН', icon: LayoutDashboard },
  { id: 'Food', label: 'МӘЗІР', icon: Utensils },
  { id: 'Gallery', label: 'ГАЛЕРЕЯ', icon: ImageIcon },
  { id: 'Camera', label: 'КАМЕРА', icon: Video },
  { id: 'Report', label: 'СТАТИСТИКА', icon: BarChart3 },
];

interface TabBarProps {
  activeTab: string;
  onTabSelect: (id: string) => void;
}

export default function TabBar({ activeTab, onTabSelect }: TabBarProps) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderTopColor: colors.border }]}>
      <View style={styles.tabContainer}>
        {TABS.map(tab => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          const color = isActive ? colors.textPrimary : colors.textTertiary;
          
          return (
            <TouchableOpacity 
              key={tab.id} 
              style={styles.tabButton}
              onPress={() => onTabSelect(tab.id)}
            >
              <Icon size={24} color={color} strokeWidth={isActive ? 2.5 : 2} />
              <Text style={[styles.label, { color, fontWeight: isActive ? '700' : '600', marginTop: 4 }]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    paddingBottom: Platform.OS === 'web' ? 12 : 24, // For notch on physical devices
    paddingTop: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 56,
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  label: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 10,
    letterSpacing: 0.5,
  }
});
