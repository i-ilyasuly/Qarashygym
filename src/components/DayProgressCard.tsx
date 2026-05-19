import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';

export default function DayProgressCard() {
  const { colors, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  const isDark = theme === 'dark';

  const stats = [
    { label: 'Ұйқы', value: 20, time: '2 сағ', color: '#A855F7' },
    { label: 'Белсенді', value: 30, time: '3 сағ', color: '#10B981' },
    { label: 'Тамақ', value: 10, time: '1 сағ', color: '#EAB308' },
    { label: 'Оқу', value: 15, time: '1.5 сағ', color: '#3B82F6' },
  ];

  return (
    <View style={styles.container}>
      <Text style={[TYPOGRAPHY.label, { color: colors.textTertiary, fontSize: 13, marginBottom: 12, letterSpacing: 0.5 }]}>
        БҮГІНГІ БЕЛСЕНДІЛІК
      </Text>

      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {/* Proportional Bar */}
        <View style={styles.barContainer}>
          {stats.map((stat, idx) => (
            <View 
              key={stat.label} 
              style={[
                styles.barSegment, 
                { 
                  flex: stat.value, 
                  backgroundColor: stat.color,
                  marginLeft: idx === 0 ? 0 : 4,
                }
              ]} 
            />
          ))}
        </View>

        {/* Legend */}
        <View style={styles.legendContainer}>
          {stats.map((stat) => (
            <View key={stat.label} style={styles.legendItem}>
              <View style={styles.legendHeaderRow}>
                <View style={[styles.legendDot, { backgroundColor: stat.color }]} />
                <Text style={[TYPOGRAPHY.bodySmall, { color: colors.textSecondary }]}>{stat.label}</Text>
              </View>
              <Text style={[TYPOGRAPHY.heading3, { marginTop: 8, fontSize: 16 }]}>{stat.time}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    padding: 20,
  },
  barContainer: {
    flexDirection: 'row',
    height: 8,
    marginBottom: 24,
  },
  barSegment: {
    borderRadius: 999, 
    height: '100%',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  legendItem: {
    width: '23%',
  },
  legendHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  }
});
