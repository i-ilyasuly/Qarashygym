import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';
import { Home, Utensils, Palette, Bed, Gamepad2 } from 'lucide-react';

const LOGS = [
  { time: '08:47', title: 'Балабақшаға келді', subtitle: 'Тәрбиеші: Айнұр апа', icon: Home, colorKey: 'success' },
  { time: '09:15', title: 'Таңғы ас', subtitle: 'Гречка ботқасы', icon: Utensils, colorKey: 'success' },
  { time: '10:30', title: 'Сурет сабағы', subtitle: 'Гүл суреті салды', icon: Palette, colorKey: 'accent' },
  { time: '13:00', title: 'Ұйқы уақыты', subtitle: '13:00 - 15:00', icon: Bed, colorKey: 'purple' },
  { time: '15:30', title: 'Ойын уақыты', subtitle: 'Алаңда', icon: Gamepad2, colorKey: 'warning' },
];

export default function TimelineLog() {
  const { colors, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  const isDark = theme === 'dark';

  return (
    <View style={styles.container}>
      <Text style={[TYPOGRAPHY.label, { color: colors.textTertiary, marginBottom: 24, fontSize: 13, letterSpacing: 1 }]}>
        БҮГІНГІ ХРОНОЛОГИЯ
      </Text>
      
      <View style={styles.timelineContainer}>
        {LOGS.map((log, index) => {
          const Icon = log.icon;
          const isLast = index === LOGS.length - 1;
          const iconColor = colors[log.colorKey as keyof typeof colors];

          return (
            <View key={index} style={styles.logRow}>
              {/* Dot & Line Column */}
              <View style={styles.lineCol}>
                <View style={[styles.dotWrapper, { backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' }]}>
                  <View style={[styles.dot, { backgroundColor: iconColor }]} />
                </View>
                {!isLast && <View style={[styles.connectingLine, { backgroundColor: colors.border }]} />}
              </View>

              {/* Content Column */}
              <View style={[styles.contentCol, { paddingBottom: isLast ? 0 : 36 }]}>
                <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
                  <View style={styles.headerRow}>
                    <View style={styles.titleWithIcon}>
                      <Icon size={18} color={iconColor} strokeWidth={2.5} />
                      <Text style={[TYPOGRAPHY.heading3, { fontSize: 17, color: colors.textPrimary }]}>{log.title}</Text>
                    </View>
                    <Text style={[TYPOGRAPHY.bodySmall, { color: colors.textTertiary, fontFamily: 'Plus Jakarta Sans, sans-serif' }]}>{log.time}</Text>
                  </View>
                  <Text style={[TYPOGRAPHY.body, { color: colors.textSecondary, marginLeft: 26, marginTop: 4 }]}>
                    {log.subtitle}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    marginBottom: 32,
  },
  timelineContainer: {
    marginTop: 8,
  },
  logRow: {
    flexDirection: 'row',
  },
  lineCol: {
    width: 32,
    alignItems: 'center',
    marginRight: 12,
  },
  dotWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  connectingLine: {
    flex: 1,
    width: 2,
    marginTop: -8,
    marginBottom: -8,
    zIndex: 1,
  },
  contentCol: {
    flex: 1,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
});
