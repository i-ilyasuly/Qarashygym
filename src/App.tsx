/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import { ThemeProvider, useTheme } from './theme/ThemeContext';
import { createTypography } from './styles/typography';
import HeroStatusCard from './components/HeroStatusCard';
import DayProgressCard from './components/DayProgressCard';
import TimelineLog from './components/TimelineLog';
import MenuSection from './components/MenuSection';
import StatsSection from './components/StatsSection';
import CameraSection from './components/CameraSection';
import GallerySection from './components/GallerySection';
import TabBar from './components/TabBar';
import LoginScreen from './components/LoginScreen';
import { Moon, Sun } from 'lucide-react';

function Dashboard() {
  const { colors, toggleTheme, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      {/* Header */}
      {activeTab === 'Home' && (
        <View style={[styles.topBar, { backgroundColor: colors.background, paddingBottom: 16 }]}>
          <View style={[styles.topBarContent, { justifyContent: 'space-between' }]}>
            <View>
              <Text style={[TYPOGRAPHY.label, { color: colors.textTertiary, textTransform: 'none', fontSize: 16, fontWeight: '500' }]}>Сәлем, Гүлнар</Text>
              <Text style={[TYPOGRAPHY.display, { fontSize: 28, marginTop: 4, letterSpacing: -0.5 }]}>Бүгінгі күн</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity onPress={toggleTheme} style={[styles.iconButton, { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border }]}>
                {theme === 'light' ? <Moon size={20} color={colors.textPrimary} /> : <Sun size={20} color={colors.textPrimary} />}
              </TouchableOpacity>
              <TouchableOpacity style={[styles.avatarButton, { backgroundColor: colors.success }]}>
                 <Text style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: '800', fontSize: 16, color: '#FFFFFF' }}>Г</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      <ScrollView 
        contentContainerStyle={[styles.scrollContent, { paddingTop: activeTab === 'Home' ? 24 : 8 }]} 
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'Home' && (
          <>
            <HeroStatusCard />
            <DayProgressCard />
            <TimelineLog />
          </>
        )}

        {activeTab === 'Food' && (
          <MenuSection />
        )}

        {activeTab === 'Camera' && (
          <CameraSection />
        )}

        {activeTab === 'Report' && (
          <StatsSection />
        )}

        {activeTab === 'Gallery' && (
          <GallerySection />
        )}

        {activeTab !== 'Home' && activeTab !== 'Food' && activeTab !== 'Camera' && activeTab !== 'Report' && activeTab !== 'Gallery' && (
          <View style={[styles.placeholderContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
             <Text style={TYPOGRAPHY.heading2}>{activeTab.toUpperCase()} БӨЛІМІ</Text>
             <Text style={[TYPOGRAPHY.body, { marginTop: 16, textAlign: 'center' }]}>
               Бұл бет әзірленуде. Дизайн келесі кезеңдерде қосылады.
             </Text>
          </View>
        )}
      </ScrollView>

      {/* Main Tab Navigation */}
      <TabBar activeTab={activeTab} onTabSelect={setActiveTab} />
    </SafeAreaView>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <LoginScreen onLogin={() => setIsAuthenticated(true)} />
      )}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topBar: {
    paddingTop: Platform.OS === 'web' ? 16 : 16,
    paddingHorizontal: 24,
  },
  topBarContent: {
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  scrollContent: {
    padding: 24,
    maxWidth: 600,
    width: '100%',
    alignSelf: 'center',
    flexGrow: 1,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    padding: 32,
    borderRadius: 24,
    borderWidth: 1,
    marginTop: 8,
  }
});
