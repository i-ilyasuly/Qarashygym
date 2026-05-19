import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
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
    status: 'Жеді',
    statusType: 'success_pill',
    bgColorLight: '#F5BE18',
    bgColorDark: '#9A7606',
    textColorLight: '#1A1A1A',
    textColorDark: '#FDFDFD',
    imgUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    time: '10:00',
    title: 'Екінші таңғы',
    items: ['Алма', 'Кефир'],
    status: 'Жеді',
    statusType: 'success_text',
    bgColorLight: '#E8F5E9',
    bgColorDark: '#172E1C',
    textColorLight: '#1A1A1A',
    textColorDark: '#E8F5E9',
    imgUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6caa6?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    time: '12:30',
    title: 'Түскі ас',
    items: ['Борщ', 'Котлет + картоп пюре', 'Компот'],
    status: 'Жарты',
    statusType: 'warning_text',
    bgColorLight: '#FFF8E1',
    bgColorDark: '#332D1A',
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
    bgColorLight: '#FFEBEE',
    bgColorDark: '#331B1E',
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
                    backgroundColor: isSelected ? (isDark ? '#FACC15' : '#1A1A1A') : colors.card,
                    borderColor: isSelected ? 'transparent' : colors.border
                  }
                ]}
              >
                <Text style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif', 
                  fontSize: 12, 
                  color: isSelected ? (isDark ? '#1A1A1A' : '#FFFFFF') : colors.textSecondary,
                  fontWeight: '500'
                }}>
                  {day.dayName}
                </Text>
                <Text style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif', 
                  fontWeight: '700', 
                  fontSize: 16, 
                  color: isSelected ? (isDark ? '#1A1A1A' : '#FFFFFF') : colors.textPrimary,
                  marginTop: 2
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
              <View style={[styles.statusPill, { backgroundColor: isDark ? '#FFFFFF' : '#FFFFFF' }]}>
                <Text style={{ color: '#059669', fontWeight: '600', fontSize: 13, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{meal.status}</Text>
              </View>
            );
          } else if (meal.statusType === 'success_text') {
            statusElement = <Text style={{ color: '#059669', fontWeight: '600', fontSize: 14, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{meal.status}</Text>;
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
                       <Text style={[TYPOGRAPHY.bodySmall, { color: mutedTextColor, fontWeight: '500' }]}>{meal.time}</Text>
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
    paddingBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  weekButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    gap: 8,
    marginTop: 8,
  },
  weekSelectorContainer: {
    paddingBottom: 20,
    gap: 8,
  },
  dayPill: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginRight: 8,
    minWidth: 48,
  },
  listContainer: {
    gap: 16,
  },
  card: {
    borderRadius: 20,
    padding: 24,
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
    width: 96,
    height: 96,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.4)',
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
    marginTop: 6,
  },
  statusContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    minWidth: 60,
  },
  statusPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  }
});
