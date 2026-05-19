import { StyleSheet } from 'react-native';

export const createTypography = (colors: any) => StyleSheet.create({
  display: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 40,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: -1,
  },
  heading1: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.5,
  },
  heading2: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -0.3,
  },
  heading3: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  body: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  bodySmall: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  label: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 12,
    color: colors.textTertiary,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  numberMain: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 36,
    fontWeight: '700',
    color: colors.textPrimary,
    letterSpacing: -1,
  },
  numberDecimal: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontSize: 36,
    fontWeight: '700',
    color: colors.textTertiary,
    letterSpacing: -1,
  },
});
