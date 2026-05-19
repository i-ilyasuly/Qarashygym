import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
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
            <Smile size={20} color="#1A1A1A" strokeWidth={2.5} />
            <Text style={styles.moodText}>ЖАҚСЫ</Text>
          </View>
        </View>
        
        <Text style={[TYPOGRAPHY.display, { fontSize: 40, color: '#1A1A1A', letterSpacing: -1, marginTop: 24 }]}>
          Айару
        </Text>

        <View style={styles.statusRow}>
          <View style={[styles.statusDot, { backgroundColor: '#059669' }]} />
          <Text style={[TYPOGRAPHY.body, { color: '#1A1A1A', fontSize: 16, fontWeight: '500' }]}>
            Балабақшада · 08:47-ден бері
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.tagsContainer}>
          <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.6)' }]}>
            <Smile size={16} color="#059669" />
            <Text style={[styles.tagText, { color: '#1A1A1A' }]}>Көңілді</Text>
          </View>
          <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.6)' }]}>
            <Zap size={16} color="#3B82F6" />
            <Text style={[styles.tagText, { color: '#1A1A1A' }]}>Белсенді</Text>
          </View>
          <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.6)' }]}>
            <Utensils size={16} color="#EAB308" />
            <Text style={[styles.tagText, { color: '#1A1A1A' }]}>Жақсы жеді</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFD345',
    borderRadius: 32,
    padding: 32,
    marginBottom: 32,
    overflow: 'hidden',
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#FFD345',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.3,
        shadowRadius: 24,
      },
      android: {
        elevation: 8,
      },
      web: {
        boxShadow: '0 20px 40px -12px rgba(255, 211, 69, 0.4)',
      }
    }),
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255,255,255,0.2)',
    right: -70,
    top: -70,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'rgba(255,255,255,0.1)',
    right: -150,
    bottom: -200,
  },
  content: {
    zIndex: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupPill: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },
  groupText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    color: '#1A1A1A',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
  moodBox: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  moodText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    color: '#1A1A1A',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  divider: {
    height: 2,
    backgroundColor: 'rgba(0,0,0,0.06)',
    marginVertical: 24,
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
  },
  tagText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 14,
    fontWeight: '700',
  },
});
