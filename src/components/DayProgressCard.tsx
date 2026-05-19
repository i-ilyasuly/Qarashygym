import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';

export default function DayProgressCard() {
  const { colors, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  const isDark = theme === 'dark';

  const stats = [
    { label: 'Ұйқы', value: 20, time: '2 сағ', color: '#A855F7' },
    { label: 'Ойын', value: 30, time: '3 сағ', color: '#10B981' },
    { label: 'Тамақ', value: 10, time: '1 сағ', color: '#FACC15' },
    { label: 'Оқу', value: 15, time: '1.5 сағ', color: '#3B82F6' },
  ];

  return (
    <View style={styles.container}>
      <Text style={[TYPOGRAPHY.label, { color: colors.textTertiary, fontSize: 12, marginBottom: 16, letterSpacing: 1 }]}>
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
                  marginHorizontal: idx !== 0 && idx !== stats.length - 1 ? 2 : 0,
                  borderTopLeftRadius: idx === 0 ? 12 : 4,
                  borderBottomLeftRadius: idx === 0 ? 12 : 4,
                  borderTopRightRadius: idx === stats.length - 1 ? 12 : 4,
                  borderBottomRightRadius: idx === stats.length - 1 ? 12 : 4,
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
              <Text style={[TYPOGRAPHY.heading3, { marginTop: 6, fontSize: 16, color: colors.textPrimary }]}>{stat.time}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 12,
      },
      android: {
        elevation: 2,
      },
      web: {
        boxShadow: '0 4px 20px -8px rgba(0,0,0,0.05)',
      }
    }),
  },
  barContainer: {
    flexDirection: 'row',
    height: 12,
    marginBottom: 28,
  },
  barSegment: {
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
    gap: 8,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  }
});
