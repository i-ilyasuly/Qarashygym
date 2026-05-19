import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';
import { Camera, Eye, MoreHorizontal, Search } from 'lucide-react';

const CAMERAS = [
  { id: '1', name: 'Ойын бөлмесі', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4' }, 
  { id: '2', name: 'Асхана', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }, 
  { id: '3', name: 'Ұйықтайтын', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { id: '4', name: 'Сыртқы алаң', videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' }, 
];

export default function CameraSection() {
  const { colors, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  const isDark = theme === 'dark';
  
  const [selectedCam, setSelectedCam] = useState('1');
  const [aiEnabled, setAiEnabled] = useState(true);

  const selectedCamData = CAMERAS.find(c => c.id === selectedCam);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={[TYPOGRAPHY.display, { fontSize: 32, marginBottom: 4 }]}>Камера</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <Text style={[TYPOGRAPHY.body, { color: colors.textTertiary, fontSize: 16 }]}>Тікелей трансляция • 08:00-18:00</Text>
            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>LIVE</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.camSelectorContainer}
      >
        {CAMERAS.map((cam) => {
          const isSelected = selectedCam === cam.id;
          return (
            <TouchableOpacity
              key={cam.id}
              onPress={() => setSelectedCam(cam.id)}
              style={[
                styles.camPill, 
                  { 
                    backgroundColor: isSelected ? colors.success : colors.card,
                  borderColor: isSelected ? 'transparent' : colors.border
                }
              ]}
            >
              <Text style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif', 
                fontSize: 14, 
                  color: isSelected ? '#FFFFFF' : colors.textSecondary,
                fontWeight: isSelected ? '700' : '600'
              }}>
                {cam.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Main Video View */}
      <View style={[styles.videoPlayer, { ...Platform.select({ web: { boxShadow: '0 10px 40px -10px rgba(0,0,0,0.2)' }, ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.2, shadowRadius: 20 } }) }]}>
        <View style={styles.videoHeader}>
          <View style={styles.liveBadgeVideo}>
            <View style={styles.liveDot} />
            <Text style={[styles.liveText, { color: '#FFFFFF' }]}>LIVE</Text>
          </View>
          <View style={styles.videoHeaderRight}>
            <TouchableOpacity style={styles.videoIconButton}>
              <Eye size={16} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.videoIconButton}>
              <MoreHorizontal size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {Platform.OS === 'web' && selectedCamData?.videoUrl && (
          <View style={[StyleSheet.absoluteFill, { zIndex: 1, pointerEvents: 'none', borderRadius: 24, overflow: 'hidden' }]}>
            {/* @ts-ignore */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              src={selectedCamData.videoUrl}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </View>
        )}

        <View style={[styles.videoCenterContent, { zIndex: 0 }]}>
          <Camera size={32} color="rgba(255,255,255,0.4)" style={{ marginBottom: 16 }} />
          <Text style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#FFFFFF', fontSize: 18, fontWeight: '600', marginBottom: 8 }}>{selectedCamData?.name}</Text>
          <Text style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Трансляция жүктелуде...</Text>
        </View>

        {/* Framing brackets */}
        <View style={[styles.bracket, styles.bracketBottomLeft]} />
        <View style={[styles.bracket, styles.bracketBottomRight]} />
      </View>

      {/* AI banner */}
      <View style={styles.sectionMargin}>
        <Text style={[styles.sectionTitle, { color: colors.textTertiary, letterSpacing: 1 }]}>АИ БАЛАНЫ ТАНУ</Text>
        <View style={[styles.aiBanner, { backgroundColor: isDark ? '#11221C' : '#E8F6F0' }]}>
          <View style={styles.aiBannerLeft}>
            <View style={[styles.searchIconBox, { backgroundColor: isDark ? '#052A1D' : '#C7ECDE' }]}>
              <Search size={20} color="#059669" />
            </View>
            <View>
              <Text style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 16, fontWeight: '800', color: isDark ? '#FFFFFF' : '#1A1A1A', marginBottom: 4 }}>Айаруды табу</Text>
              <Text style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 13, color: isDark ? '#A3A3A3' : '#71717A' }}>AI камерадан бала тануды іздейді</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={[styles.toggleSwitch, { backgroundColor: aiEnabled ? '#059669' : colors.border, alignItems: aiEnabled ? 'flex-end' : 'flex-start' }]}
            onPress={() => setAiEnabled(!aiEnabled)}
          >
            <View style={styles.toggleKnob} />
          </TouchableOpacity>
        </View>
      </View>

      {/* All cameras grid */}
      <View style={styles.sectionMargin}>
        <Text style={[styles.sectionTitle, { color: colors.textTertiary, letterSpacing: 1 }]}>БАРЛЫҚ КАМЕРАЛАР</Text>
        <View style={styles.grid}>
          {CAMERAS.map((cam) => {
            const isSelected = selectedCam === cam.id;
            return (
              <TouchableOpacity 
                key={cam.id}
                onPress={() => setSelectedCam(cam.id)}
                style={[
                  styles.gridItem, 
                  { 
                    backgroundColor: isSelected ? (isDark ? '#2A2A2A' : '#FFFFFF') : (isDark ? '#1C1C1E' : '#F4F4F5'),
                    borderColor: isSelected ? '#FACC15' : 'transparent',
                    borderWidth: 2,
                    ...Platform.select({
                      web: { boxShadow: isSelected ? '0 4px 12px rgba(250, 204, 21, 0.4)' : undefined },
                      ios: { shadowColor: '#FACC15', shadowOpacity: isSelected ? 0.3 : 0, shadowRadius: 8, shadowOffset: { width: 0, height: 4 } }
                    })
                  }
                ]}
              >
                <Camera size={24} color={isDark ? '#FFFFFF' : '#1A1A1A'} style={{ marginBottom: 12, opacity: isSelected ? 1 : 0.5 }} />
                <Text style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif', 
                  color: isDark ? '#FFFFFF' : '#1A1A1A', 
                  fontSize: 14, 
                  fontWeight: isSelected ? '700' : '600',
                  opacity: isSelected ? 1 : 0.6
                }}>
                  {cam.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EF4444',
  },
  liveText: {
    color: '#EF4444',
    fontSize: 11,
    fontWeight: '800',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  camSelectorContainer: {
    paddingBottom: 24,
    gap: 12,
  },
  camPill: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoPlayer: {
    backgroundColor: '#0F0F13', // Near black
    borderRadius: 24,
    height: 240,
    position: 'relative',
    overflow: 'hidden',
    padding: 16,
  },
  videoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  liveBadgeVideo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF4444',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  videoHeaderRight: {
    flexDirection: 'row',
    gap: 8,
  },
  videoIconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoCenterContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  bracket: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderColor: 'rgba(255,255,255,0.3)',
    borderWidth: 0,
  },
  bracketBottomLeft: {
    bottom: 24,
    left: 24,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
  },
  bracketBottomRight: {
    bottom: 24,
    right: 24,
    borderBottomWidth: 3,
    borderRightWidth: 3,
  },
  sectionMargin: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    marginBottom: 16,
  },
  aiBanner: {
    flexDirection: 'row',
    borderRadius: 24,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  aiBannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  searchIconBox: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleSwitch: {
    width: 56,
    height: 32,
    borderRadius: 16,
    padding: 2,
    justifyContent: 'center',
  },
  toggleKnob: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  gridItem: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
