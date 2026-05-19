import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const WEEK_DAYS = [
  { id: '1', dayName: 'Дс', date: '16' },
  { id: '2', dayName: 'Сс', date: '17' },
  { id: '3', dayName: 'Ср', date: '18' },
  { id: '4', dayName: 'Бс', date: '19' },
  { id: '5', dayName: 'Жм', date: '20' },
];

const MENU_DATA = [
  {
    id: 1,
    time: '07:30',
    title: 'Таңғы ас',
    items: ['Гречка ботқасы', 'Нан + сары май', 'Какао'],
    status: 'Толық жеді',
    statusType: 'success_pill',
    bgColorLight: '#FFFBF0',
    bgColorDark: '#3A3215',
    textColorLight: '#1A1A1A',
    textColorDark: '#FDFDFD',
    imgUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    time: '10:00',
    title: 'Екінші таңғы',
    items: ['Алма', 'Айран'],
    status: 'Жеді',
    statusType: 'success_text',
    bgColorLight: '#F2FBF6',
    bgColorDark: '#173620',
    textColorLight: '#1A1A1A',
    textColorDark: '#E8F5E9',
    imgUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6caa6?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    time: '12:30',
    title: 'Түскі ас',
    items: ['Борщ', 'Котлет + картоп пюре', 'Компот'],
    status: 'Жартылай жеді',
    statusType: 'warning_text',
    bgColorLight: '#FFF8F2',
    bgColorDark: '#362315',
    textColorLight: '#1A1A1A',
    textColorDark: '#FFF8E1',
    imgUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    time: '15:00',
    title: 'Бесінді',
    items: ['Печенье', 'Шай'],
    status: 'Жемеді',
    statusType: 'danger_text',
    bgColorLight: '#FFF3F4',
    bgColorDark: '#3A1C21',
    textColorLight: '#1A1A1A',
    textColorDark: '#FFEBEE',
    imgUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=300&q=80',
  }
];

export default function MenuSection() {
  const { colors, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  const isDark = theme === 'dark';
  
  const [selectedDay, setSelectedDay] = useState('4');

  const selectedDayFull = WEEK_DAYS.find(d => d.id === selectedDay);
  const fullDateText = `${selectedDayFull?.dayName === 'Бс' ? 'Бейсенбі' : selectedDayFull?.dayName === 'Дс' ? 'Дүйсенбі' : selectedDayFull?.dayName === 'Сс' ? 'Сейсенбі' : selectedDayFull?.dayName === 'Ср' ? 'Сәрсенбі' : 'Жұма'}, ${selectedDayFull?.date} мамыр`;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View>
          <Text style={[TYPOGRAPHY.display, { fontSize: 32, marginBottom: 4 }]}>Тамақ</Text>
          <Text style={[TYPOGRAPHY.body, { color: colors.textTertiary, fontSize: 16 }]}>{fullDateText}</Text>
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.weekSelectorContainer}
      >
        {WEEK_DAYS.map((day) => {
            const isSelected = selectedDay === day.id;
            return (
              <TouchableOpacity
                key={day.id}
                onPress={() => setSelectedDay(day.id)}
                style={[
                  styles.dayPill, 
                  { 
                    backgroundColor: isSelected ? colors.success : colors.card,
                    borderColor: isSelected ? 'transparent' : colors.border
                  }
                ]}
              >
                <Text style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif', 
                  fontSize: 12, 
                  color: isSelected ? '#FFFFFF' : colors.textSecondary,
                  fontWeight: '600'
                }}>
                  {day.dayName}
                </Text>
                <Text style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif', 
                  fontWeight: '700', 
                  fontSize: 18, 
                  color: isSelected ? '#FFFFFF' : colors.textPrimary,
                  marginTop: 4
                }}>
                  {day.date}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

      <View style={styles.listContainer}>
        {MENU_DATA.map((meal) => {
          const bgColor = isDark ? meal.bgColorDark : meal.bgColorLight;
          const textColor = isDark ? meal.textColorDark : meal.textColorLight;
          const mutedTextColor = isDark ? textColor + 'CC' : textColor + '99';
          
          let statusElement;
          
          if (meal.statusType === 'success_pill') {
            statusElement = (
              <View style={[styles.statusPill, { backgroundColor: colors.success + '15' }]}>
                <Text style={{ color: colors.success, fontWeight: '700', fontSize: 13, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{meal.status}</Text>
              </View>
            );
          } else if (meal.statusType === 'success_text') {
            statusElement = <Text style={{ color: colors.success, fontWeight: '600', fontSize: 14, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{meal.status}</Text>;
          } else if (meal.statusType === 'warning_text') {
            statusElement = <Text style={{ color: '#D97706', fontWeight: '600', fontSize: 14, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{meal.status}</Text>;
          } else {
            statusElement = <Text style={{ color: '#DC2626', fontWeight: '600', fontSize: 14, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{meal.status}</Text>;
          }

          return (
            <View key={meal.id} style={[styles.card, { backgroundColor: bgColor }]}>
              <View style={styles.cardHeader}>
                <View style={styles.titleWithIcon}>
                  <View style={styles.imageBox}>
                    <Image source={{ uri: meal.imgUrl }} style={styles.image} />
                  </View>
                  <View style={styles.contentBox}>
                     <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                       <Text style={[TYPOGRAPHY.heading3, { color: textColor, fontSize: 18 }]}>{meal.title}</Text>
                       <Text style={[TYPOGRAPHY.bodySmall, { color: mutedTextColor, fontWeight: '600' }]}>{meal.time}</Text>
                     </View>
                     <View style={styles.itemsWrapper}>
                       {meal.items.map((item, idx) => (
                         <Text key={idx} style={[TYPOGRAPHY.body, { color: mutedTextColor, marginTop: 4 }]}>
                           · {item}
                         </Text>
                       ))}
                     </View>
                  </View>
                </View>
                
                <View style={styles.statusContainer}>
                  {statusElement}
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
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  weekSelectorContainer: {
    paddingBottom: 24,
    gap: 8,
  },
  dayPill: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 8,
    minWidth: 64,
  },
  listContainer: {
    gap: 16,
  },
  card: {
    borderRadius: 24,
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleWithIcon: {
    flexDirection: 'row',
    gap: 20,
    flex: 1,
  },
  imageBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.05)',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentBox: {
    flex: 1,
    justifyContent: 'center',
  },
  itemsWrapper: {
    marginTop: 8,
  },
  statusContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    minWidth: 80,
  },
  statusPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  }
});
