import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';
import { TrendingUp, Clock, Activity, Utensils, Zap, Smile, Users, MessageSquare, Tags } from 'lucide-react';

export default function StatsSection() {
  const { colors, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  const isDark = theme === 'dark';

  const cardBg = colors.card;
  const cardBorder = colors.border;
  const mainTextColor = colors.textPrimary;
  const decimalTextColor = colors.textSecondary;

  const MOOD_SCORE = 8;
  const ACTIVITY_SCORE = 6;
  const SOCIAL_SCORE = 9;

  const renderProgressBar = (score: number, max: number, color: string) => {
    const percentage = (score / max) * 100;
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarBg, { backgroundColor: isDark ? '#3A3A3C' : '#E5E5EA' }]}>
          <View style={[styles.progressBarFill, { width: `${percentage}%`, backgroundColor: color }]} />
        </View>
        <Text style={[TYPOGRAPHY.label, { color: colors.textSecondary }]}>{score}/{max}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={[TYPOGRAPHY.display, { fontSize: 32, marginBottom: 4 }]}>Статистика</Text>
          <Text style={[TYPOGRAPHY.body, { color: colors.textTertiary, fontSize: 16 }]}>Ағымдағы ай және күн</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.textTertiary, marginTop: 12 }]}>ЖАЛПЫ АЙЛЫҚ КӨРСЕТКІШ</Text>

      {/* Proportional Asset Allocation Bar Pattern */}
      <View style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder }]}>
        <Text style={{ color: isDark ? '#888888' : '#71717A', fontSize: 13, fontWeight: '600', marginBottom: 8, fontFamily: 'Plus Jakarta Sans, sans-serif', textTransform: 'uppercase', letterSpacing: 0.5 }}>
          Орташа уақыт (күніне)
        </Text>
        <View style={styles.amountRow}>
          <Text style={{ color: mainTextColor, fontSize: 40, fontWeight: '800', letterSpacing: -1, lineHeight: 44, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>8</Text>
          <Text style={{ color: decimalTextColor, fontSize: 40, fontWeight: '800', letterSpacing: -1, lineHeight: 44, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>.5 сағ</Text>
          <View style={{ marginBottom: 6, marginLeft: 12, backgroundColor: 'rgba(16, 185, 129, 0.15)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 }}>
             <Text style={{ color: '#10B981', fontSize: 13, fontWeight: '700', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>+12% ↑</Text>
          </View>
        </View>

        <View style={styles.bar}>
          <View style={[styles.segment, { flex: 45, backgroundColor: '#8B5CF6' }]} />
          <View style={[styles.segment, { flex: 30, backgroundColor: '#3B82F6' }]} />
          <View style={[styles.segment, { flex: 25, backgroundColor: '#F59E0B' }]} />
        </View>

        <View style={styles.assetsRow}>
          <View>
            <Text style={[styles.assetSymbol, { color: '#8B5CF6' }]}>ОЙЫН</Text>
            <Text style={[styles.assetValue, { color: mainTextColor }]}>45%</Text>
          </View>
          <View style={styles.centerAsset}>
            <Text style={[styles.assetSymbol, { color: '#3B82F6' }]}>ОҚУ</Text>
            <Text style={[styles.assetValue, { color: mainTextColor }]}>30%</Text>
          </View>
          <View style={styles.rightAsset}>
            <Text style={[styles.assetSymbol, { color: '#F59E0B' }]}>ҰЙҚЫ/АС</Text>
            <Text style={[styles.assetValue, { color: mainTextColor }]}>25%</Text>
          </View>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder, marginTop: 16 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Text style={[TYPOGRAPHY.heading3, { color: mainTextColor }]}>Сабаққа қатысу</Text>
          <View style={{ backgroundColor: '#10B98115', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 }}>
            <Text style={{ color: '#10B981', fontSize: 13, fontWeight: '700', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>ҮЗДІК</Text>
          </View>
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
          <Text style={{ color: mainTextColor, fontSize: 36, fontWeight: '800', letterSpacing: -1 }}>18</Text>
          <Text style={{ color: decimalTextColor, fontSize: 18, fontWeight: '600', marginBottom: 6 }}>/ 20 күн</Text>
        </View>
        <Text style={[TYPOGRAPHY.bodySmall, { color: decimalTextColor, marginTop: 12, fontSize: 14 }]}>Осы айда 2 күн ғана себепті босатқан.</Text>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.textTertiary, marginTop: 40 }]}>КҮНДЕЛІК ЕСЕП (19 МАМЫР)</Text>

      {/* Grid Stats */}
      <View style={[styles.grid, { marginTop: 0 }]}>
        <View style={[styles.gridCard, { backgroundColor: cardBg, borderColor: cardBorder }]}>
          <View style={[styles.iconWrapper, { backgroundColor: 'rgba(16, 185, 129, 0.15)' }]}>
            <Utensils size={24} color="#10B981" />
          </View>
          <Text style={[styles.gridValue, { color: mainTextColor }]}>92%</Text>
          <Text style={[styles.gridLabel, { color: decimalTextColor }]}>Тамақтану</Text>
        </View>

        <View style={[styles.gridCard, { backgroundColor: cardBg, borderColor: cardBorder }]}>
          <View style={[styles.iconWrapper, { backgroundColor: 'rgba(245, 158, 11, 0.15)' }]}>
            <Activity size={24} color="#F59E0B" />
          </View>
          <Text style={[styles.gridValue, { color: mainTextColor }]}>Ментальді</Text>
          <Text style={[styles.gridLabel, { color: decimalTextColor }]}>Даму</Text>
        </View>
      </View>

      <View style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder, marginTop: 16 }]}>
        <View style={styles.sectionHeader}>
           <Smile size={22} color={colors.accent} />
           <Text style={[TYPOGRAPHY.heading3, { marginLeft: 12 }]}>Көңіл күйі</Text>
        </View>
        <Text style={[TYPOGRAPHY.body, { marginBottom: 16, color: colors.textSecondary }]}>Мен бүгін өте көңілді болдым</Text>
        {renderProgressBar(MOOD_SCORE, 10, colors.accent)}
      </View>

      <View style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder, marginTop: 16 }]}>
        <View style={styles.sectionHeader}>
           <Zap size={22} color={colors.warning} />
           <Text style={[TYPOGRAPHY.heading3, { marginLeft: 12 }]}>Белсенділік</Text>
        </View>
        <Text style={[TYPOGRAPHY.body, { marginBottom: 16, color: colors.textSecondary }]}>Сәл шаршаңқы, бірақ ойынға қатысты</Text>
        {renderProgressBar(ACTIVITY_SCORE, 10, colors.warning)}
      </View>

      <View style={[styles.card, { backgroundColor: cardBg, borderColor: cardBorder, marginTop: 16 }]}>
        <View style={styles.sectionHeader}>
           <Users size={22} color={colors.success} />
           <Text style={[TYPOGRAPHY.heading3, { marginLeft: 12 }]}>Қарым-қатынас</Text>
        </View>
        <Text style={[TYPOGRAPHY.body, { marginBottom: 16, color: colors.textSecondary }]}>Балалармен өте жақсы ойнады</Text>
        {renderProgressBar(SOCIAL_SCORE, 10, colors.success)}
      </View>

      <View style={[styles.highlightCard, { backgroundColor: isDark ? '#332D1A' : '#FFF8E1' }]}>
        <View style={styles.highlightHeader}>
          <View style={[styles.iconBox, { backgroundColor: '#FACC15' }]}>
            <MessageSquare size={20} color="#1A1A1A" />
          </View>
          <Text style={[TYPOGRAPHY.heading3, { color: isDark ? '#FFF8E1' : '#1A1A1A', fontSize: 18 }]}>Тәрбиешінің ескертпесі</Text>
        </View>
        <Text style={[TYPOGRAPHY.body, { color: isDark ? 'rgba(255,248,225,0.8)' : '#5C4710', lineHeight: 26 }]}>
          Айару бүгін сурет салуда өте белсенді болды. Ол гүлдерді әдемі етіп салып, басқа балаларға да көмектесті. Түскі асты жартылай жеді, бірақ ұйқысы жақсы болды.
        </Text>
      </View>

      <View style={{ marginTop: 40, marginBottom: 56 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <Tags size={20} color={colors.textTertiary} />
          <Text style={[styles.sectionTitle, { color: colors.textTertiary, marginLeft: 12, marginBottom: 0 }]}>БҮГІНГІ ТЕГТЕР</Text>
        </View>
        <View style={styles.tagsContainer}>
          {['Шығармашыл', 'Жігерлі', 'Мейірімді'].map((tag, idx) => (
            <View key={idx} style={[styles.tag, { backgroundColor: colors.surface, borderColor: colors.border }]}>
              <Text style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: colors.textSecondary, fontSize: 15, fontWeight: '600' }}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    marginBottom: 20,
    letterSpacing: 1,
  },
  card: {
    borderRadius: 24,
    borderWidth: 1,
    padding: 24,
    width: '100%',
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
  amountRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 4,
    marginBottom: 24,
  },
  bar: {
    flexDirection: 'row',
    gap: 6,
    height: 12,
    marginBottom: 20,
  },
  segment: {
    borderRadius: 8,
    height: 12,
  },
  assetsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerAsset: {
    alignItems: 'center',
  },
  rightAsset: {
    alignItems: 'flex-end',
  },
  assetSymbol: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  assetValue: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  grid: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  gridCard: {
    flex: 1,
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
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  gridValue: {
    fontSize: 28,
    fontWeight: '800',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  gridLabel: {
    fontSize: 14,
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  progressBarBg: {
    flex: 1,
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  highlightCard: {
    borderRadius: 24,
    padding: 28,
    marginTop: 20,
  },
  highlightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tag: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  }
});
