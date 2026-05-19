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
  const { colors } = useTheme();
  const TYPOGRAPHY = createTypography(colors);

  return (
    <View style={styles.container}>
      <Text style={[TYPOGRAPHY.label, { color: colors.textTertiary, marginBottom: 20, fontSize: 14 }]}>
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
                <View style={[styles.dot, { backgroundColor: iconColor }]} />
                {!isLast && <View style={[styles.connectingLine, { backgroundColor: colors.border }]} />}
              </View>

              {/* Content Column */}
              <View style={styles.contentCol}>
                <View style={styles.headerRow}>
                  <View style={styles.titleWithIcon}>
                    <Icon size={18} color={iconColor} strokeWidth={2.5} />
                    <Text style={[TYPOGRAPHY.heading3, { fontSize: 18 }]}>{log.title}</Text>
                  </View>
                  <Text style={[TYPOGRAPHY.bodySmall, { color: colors.textTertiary, fontFamily: 'Plus Jakarta Sans, sans-serif' }]}>{log.time}</Text>
                </View>
                <Text style={[TYPOGRAPHY.body, { color: colors.textSecondary, marginLeft: 26, marginTop: 4 }]}>
                  {log.subtitle}
                </Text>
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
    marginBottom: 20,
  },
  timelineContainer: {
    marginTop: 8,
  },
  logRow: {
    flexDirection: 'row',
  },
  lineCol: {
    width: 24,
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 6,
    zIndex: 1,
  },
  connectingLine: {
    flex: 1,
    width: 2,
    marginTop: 8,
    marginBottom: -4,
    zIndex: 0,
  },
  contentCol: {
    flex: 1,
    paddingBottom: 32,
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
