import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';
import { Smile, Zap, Utensils } from 'lucide-react';

export default function HeroStatusCard() {
  const { colors } = useTheme();
  const TYPOGRAPHY = createTypography(colors);

  return (
    <View style={styles.card}>
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.groupPill}>
            <Text style={styles.groupText}>"КҮНГЕЙ" ТОБЫ</Text>
          </View>
          <View style={styles.moodBox}>
            <Smile size={24} color="#1A1A1A" strokeWidth={2} />
            <Text style={styles.moodText}>ЖАҚСЫ</Text>
          </View>
        </View>
        
        <Text style={[TYPOGRAPHY.display, { fontSize: 36, color: '#1A1A1A', letterSpacing: -0.5, marginTop: 16 }]}>
          Айару
        </Text>

        <View style={styles.statusRow}>
          <View style={styles.statusDot} />
          <Text style={[TYPOGRAPHY.body, { color: '#1A1A1A', fontSize: 16, fontWeight: '500' }]}>
            Балабақшада · 08:47-ден бері
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.tagsContainer}>
          <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.4)' }]}>
            <Smile size={16} color="#059669" />
            <Text style={[styles.tagText, { color: '#1A1A1A' }]}>Жақсы</Text>
          </View>
          <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.4)' }]}>
            <Zap size={16} color="#3B82F6" />
            <Text style={[styles.tagText, { color: '#1A1A1A' }]}>Белсенді</Text>
          </View>
          <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.4)' }]}>
            <Utensils size={16} color="#4A4A4A" />
            <Text style={[styles.tagText, { color: '#1A1A1A' }]}>Жеді</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFD345',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.04)',
    right: -50,
    top: -50,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(0,0,0,0.04)',
    right: -100,
    bottom: -150,
  },
  content: {
    zIndex: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  groupPill: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  groupText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    color: '#1A1A1A',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  moodBox: {
    backgroundColor: 'rgba(0,0,0,0.08)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
    gap: 4,
  },
  moodText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    color: '#1A1A1A',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 12,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#059669',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.08)',
    marginVertical: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  tagText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 14,
    fontWeight: '600',
  },
});
