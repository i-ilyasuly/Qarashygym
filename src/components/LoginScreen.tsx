import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createTypography } from '../styles/typography';
import { Lock, User, ChevronRight, Fingerprint } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const { colors, theme } = useTheme();
  const TYPOGRAPHY = createTypography(colors);
  const isDark = theme === 'dark';

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView 
      style={[styles.container, { backgroundColor: colors.background }]} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
           <Text style={[TYPOGRAPHY.display, { fontSize: 32, marginBottom: 8, textAlign: 'center' }]}>Қош келдіңіз</Text>
           <Text style={[TYPOGRAPHY.body, { color: colors.textSecondary, textAlign: 'center' }]}>Балаңыздың балабақшадағы күнін бақылаңыз</Text>
        </View>

        <View style={styles.form}>
           <View style={styles.inputGroup}>
             <Text style={[TYPOGRAPHY.label, { marginBottom: 8, color: colors.textSecondary }]}>ЖСН немесе Телефон</Text>
             <View style={[styles.inputContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <User size={20} color={colors.textTertiary} style={styles.inputIcon} />
                <TextInput 
                  style={[styles.input, { color: colors.textPrimary, fontFamily: 'Plus Jakarta Sans, sans-serif' }]}
                  placeholder="ЖСН немесе телефон нөмірі"
                  placeholderTextColor={colors.textTertiary}
                  value={identifier}
                  onChangeText={setIdentifier}
                  /* @ts-ignore: Web only */
                  outlineStyle="none"
                />
             </View>
           </View>

           <View style={styles.inputGroup}>
             <Text style={[TYPOGRAPHY.label, { marginBottom: 8, color: colors.textSecondary }]}>Құпия сөз</Text>
             <View style={[styles.inputContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                <Lock size={20} color={colors.textTertiary} style={styles.inputIcon} />
                <TextInput 
                  style={[styles.input, { color: colors.textPrimary, fontFamily: 'Plus Jakarta Sans, sans-serif' }]}
                  placeholder="Құпия сөзіңізді енгізіңіз"
                  placeholderTextColor={colors.textTertiary}
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  /* @ts-ignore: Web only */
                  outlineStyle="none"
                />
             </View>
           </View>

           <TouchableOpacity style={[styles.primaryButton, { backgroundColor: colors.accent }]} onPress={onLogin}>
             <Text style={styles.primaryButtonText}>Кіру</Text>
           </TouchableOpacity>

           <View style={styles.divider}>
             <View style={[styles.dividerLine, { backgroundColor: colors.border }]} />
             <Text style={[TYPOGRAPHY.bodySmall, { color: colors.textTertiary, paddingHorizontal: 16 }]}>немесе</Text>
             <View style={[styles.dividerLine, { backgroundColor: colors.border }]} />
           </View>

           <TouchableOpacity style={[styles.egovButton, { backgroundColor: isDark ? '#2C2C2E' : '#FFFFFF', borderColor: colors.border }]} onPress={onLogin}>
              <View style={styles.egovButtonContent}>
                <Fingerprint size={20} color={colors.textPrimary} />
                <Text style={[styles.egovButtonText, { color: colors.textPrimary }]}>Egov арқылы кіру</Text>
              </View>
              <ChevronRight size={20} color={colors.textTertiary} />
           </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    marginBottom: 48,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  primaryButton: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  egovButton: {
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  egovButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  egovButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  }
});
