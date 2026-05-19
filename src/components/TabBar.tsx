import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { LayoutDashboard, Utensils, BarChart3, Video, Image as ImageIcon } from 'lucide-react';

export const TABS = [
  { id: 'Home', label: 'БҮГІН', icon: LayoutDashboard },
  { id: 'Food', label: 'МӘЗІР', icon: Utensils },
  { id: 'Gallery', label: 'ГАЛЕРЕЯ', icon: ImageIcon },
  { id: 'Camera', label: 'КАМЕРА', icon: Video },
  { id: 'Report', label: 'СТАТИСТИК', icon: BarChart3 },
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
          const color = isActive ? '#059669' : colors.textTertiary;
          
          return (
            <TouchableOpacity 
              key={tab.id} 
              style={styles.tabButton}
              onPress={() => onTabSelect(tab.id)}
            >
              <View style={[styles.iconWrapper, isActive && { backgroundColor: 'rgba(5, 150, 105, 0.1)' }]}>
                <Icon size={22} color={color} strokeWidth={isActive ? 2.5 : 2} />
              </View>
              <Text style={[styles.label, { color: isActive ? '#059669' : colors.textTertiary, fontWeight: isActive ? '700' : '600' }]}>{tab.label}</Text>
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
    paddingBottom: Platform.OS === 'web' ? 16 : 24, // For notch on physical devices
    paddingTop: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
      web: {
        boxShadow: '0 -4px 20px -8px rgba(0,0,0,0.05)',
      }
    }),
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
    gap: 4,
  },
  iconWrapper: {
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 10,
    letterSpacing: 0.5,
  }
});
