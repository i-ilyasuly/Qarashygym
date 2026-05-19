import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';
import { Image as ImageIcon, Heart } from 'lucide-react';

const GALLERY_DATA = [
  { id: '1', date: 'Бүгін, 11:30', title: 'Сурет салу сабағы', type: 'large', imgUrl: 'https://images.unsplash.com/photo-1544604862-23ea2050f443?auto=format&fit=crop&q=80&w=800' },
  { id: '2', date: 'Кеше, 16:15', title: 'Сергу сәті', type: 'square', imgUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6caa6?auto=format&fit=crop&q=80&w=400' },
  { id: '3', date: 'Кеше, 12:00', title: 'Түскі ас', type: 'square', imgUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400' },
  { id: '4', date: '17 мамыр', title: 'Серуендеу', type: 'wide', imgUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800' },
  { id: '5', date: '16 мамыр', title: 'Музыка сабағы', type: 'square', imgUrl: 'https://images.unsplash.com/photo-1577903822180-87a3b378edbb?auto=format&fit=crop&q=80&w=400' },
  { id: '6', date: '15 мамыр', title: 'Ойын бөлмесі', type: 'square', imgUrl: 'https://images.unsplash.com/photo-1536733575936-a6fcff31d582?auto=format&fit=crop&q=80&w=400' },
  { id: '7', date: '14 мамыр', title: 'Би сабағы', type: 'large', imgUrl: 'https://images.unsplash.com/photo-1627557165846-5cd047f08c3d?auto=format&fit=crop&q=80&w=800' },
];

export default function GallerySection() {
  const { colors, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  const isDark = theme === 'dark';

  const rows = [];
  let index = 0;
  while (index < GALLERY_DATA.length) {
    const item = GALLERY_DATA[index];
    if (item.type === 'large' || item.type === 'wide') {
      rows.push([{ ...item }]);
      index++;
    } else if (item.type === 'square') {
      const nextItem = index + 1 < GALLERY_DATA.length && GALLERY_DATA[index + 1].type === 'square' 
        ? GALLERY_DATA[index + 1] 
        : null;
      if (nextItem) {
        rows.push([{ ...item }, { ...nextItem }]);
        index += 2;
      } else {
        rows.push([{ ...item }]);
        index++;
      }
    }
  }

  return (
    <View style={styles.container}>
      {/* Since parent ScrollView has paddingHorizontal: 24, we use negative margin to make this bleed out */}
      <View style={{ marginHorizontal: -24, paddingHorizontal: 24, backgroundColor: isDark ? '#050505' : '#F8FAFC', paddingBottom: 40 }}>
        
        <View style={styles.headerRow}>
          <View>
            <Text style={[TYPOGRAPHY.display, { fontSize: 32, marginBottom: 4, color: isDark ? '#FFFFFF' : '#0F172A' }]}>Галерея</Text>
            <Text style={[TYPOGRAPHY.body, { color: isDark ? '#A1A1AA' : '#64748B', fontSize: 16 }]}>Айарудың күнделікті сәттері</Text>
          </View>
        </View>

        <View style={styles.grid}>
          {rows.map((row, rowIdx) => {
            if (row.length === 1) {
              const item = row[0];
              const isLarge = item.type === 'large';
              return (
                <View key={`row-${rowIdx}`} style={[styles.row, { height: isLarge ? 320 : 200 }]}>
                  <TouchableOpacity style={[styles.photoCard, { backgroundColor: isDark ? '#2C2C2E' : '#FFFFFF', borderColor: isDark ? '#3A3A3C' : 'rgba(0,0,0,0.08)' }]}>
                    <View style={styles.imageContainer}>
                      <Image source={{ uri: item.imgUrl }} style={styles.image} />
                      <View style={styles.overlay}>
                        <View style={styles.overlayTop}>
                          <View style={styles.dateBadge}>
                            <Text style={styles.dateText}>{item.date}</Text>
                          </View>
                          <TouchableOpacity style={styles.heartButton}>
                            <Heart size={16} color="#FFFFFF" />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.overlayBottom}>
                          <Text style={styles.titleText}>{item.title}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            } else {
              // Two squares
              return (
                <View key={`row-${rowIdx}`} style={[styles.row, { height: 180 }]}>
                  {row.map((item, colIdx) => (
                    <TouchableOpacity key={item.id} style={[styles.photoCard, { flex: 1, marginLeft: colIdx > 0 ? 12 : 0, backgroundColor: isDark ? '#2C2C2E' : '#FFFFFF', borderColor: isDark ? '#3A3A3C' : 'rgba(0,0,0,0.08)' }]}>
                      <View style={styles.imageContainer}>
                        <Image source={{ uri: item.imgUrl }} style={styles.image} />
                        <View style={styles.overlay}>
                          <View style={styles.overlayTop}>
                             <View style={[styles.dateBadge, { paddingHorizontal: 8, paddingVertical: 4 }]}>
                               <Text style={[styles.dateText, { fontSize: 10 }]}>{item.date}</Text>
                             </View>
                          </View>
                          <View style={styles.overlayBottom}>
                            <Text style={[styles.titleText, { fontSize: 14 }]}>{item.title}</Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              );
            }
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 0,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
    marginTop: 16,
  },
  grid: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  photoCard: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#1E293B',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'space-between',
    padding: 16,
  },
  overlayTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  dateBadge: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(8px)', // Web only primarily, fallback is opacity
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  dateText: {
    color: '#FFFFFF',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  heartButton: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  overlayBottom: {
    justifyContent: 'flex-end',
  },
  titleText: {
    color: '#FFFFFF',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.5,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  }
});
