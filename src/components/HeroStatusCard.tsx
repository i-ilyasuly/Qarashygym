import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';
import { Smile, Zap, Utensils, Sparkles } from 'lucide-react';

export default function HeroStatusCard() {
  const { colors } = useTheme();
  const TYPOGRAPHY = createTypography(colors);

  return (
    <View style={styles.container}>
      {/* Main Hero Card with gradient-like background */}
      <View style={[styles.card, { backgroundColor: colors.primary }]}>
        <View style={styles.decorativeCircle1} />
        <View style={styles.decorativeCircle2} />
        
        <View style={styles.content}>
          {/* Top Row: Group & Mood */}
          <View style={styles.topRow}>
            <View style={[styles.groupPill, { backgroundColor: 'rgba(255,255,255,0.3)' }]}>
              <Text style={[styles.groupText, { color: '#FFFFFF' }]}>КҮНГЕЙ ТОБЫ</Text>
            </View>
            <View style={[styles.moodBox, { backgroundColor: 'rgba(255,255,255,0.3)' }]}>
              <Smile size={18} color="#FFFFFF" strokeWidth={2.5} />
              <Text style={[styles.moodText, { color: '#FFFFFF' }]}>ЖАҚСЫ</Text>
            </View>
          </View>

          {/* Child Name */}
          <Text style={[TYPOGRAPHY.display, { fontSize: 40, color: '#FFFFFF', letterSpacing: -1, marginTop: 24, fontWeight: '700' }]}>
            Айару
          </Text>

          {/* Status with live indicator */}
          <View style={styles.statusRow}>
            <View style={[styles.statusDot, { backgroundColor: colors.success }]} />
            <Text style={[TYPOGRAPHY.body, { color: '#FFFFFF', fontSize: 16, fontWeight: '500' }]}>
              Балабақшада · 08:45-тен бері
            </Text>
          </View>

          {/* Divider */}
          <View style={[styles.divider, { backgroundColor: 'rgba(255,255,255,0.2)' }]} />

          {/* AI Summary Section */}
          <View style={[styles.aiSummary, { backgroundColor: 'rgba(255,255,255,0.15)' }]}>
            <View style={styles.aiHeader}>
              <Sparkles size={16} color="#FFFFFF" strokeWidth={2.5} />
              <Text style={[styles.aiLabel, { color: 'rgba(255,255,255,0.9)' }]}>AI Қорытынды</Text>
            </View>
            <Text style={[styles.aiText, { color: '#FFFFFF' }]}>
              Айарудың бүгінгі көңіл-күйі керемет! Таңғы асын толық жеді, қазір достарымен сурет сабағында отыр.
            </Text>
          </View>

          {/* Status Tags */}
          <View style={styles.tagsContainer}>
            <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.25)' }]}>
              <Smile size={16} color="#FFFFFF" />
              <Text style={[styles.tagText, { color: '#FFFFFF' }]}>Көңілді</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.25)' }]}>
              <Zap size={16} color="#FFFFFF" />
              <Text style={[styles.tagText, { color: '#FFFFFF' }]}>Белсенді</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.25)' }]}>
              <Utensils size={16} color="#FFFFFF" />
              <Text style={[styles.tagText, { color: '#FFFFFF' }]}>Жақсы жеді</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  card: {
    borderRadius: 24,
    padding: 32,
    overflow: 'hidden',
    position: 'relative',
    ...Platform.select({
      ios: {
        shadowColor: '#FF9F1C',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: {
        elevation: 6,
      },
      web: {
        boxShadow: '0 12px 32px -8px rgba(255, 159, 28, 0.3)',
      }
    }),
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.15)',
    right: -60,
    top: -60,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255,255,255,0.08)',
    right: -120,
    bottom: -150,
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
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
  },
  groupText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  moodBox: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  moodText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 16,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  divider: {
    height: 1,
    marginVertical: 20,
  },
  aiSummary: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  aiLabel: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  aiText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  tagText: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 13,
    fontWeight: '600',
  },
});
