/**
 * Tema do app a partir dos design tokens (@mneme/design-tokens).
 * O tema escuro é "o Arquivo à noite"; a era ativa colore o acento.
 */
import { dark, eras, light, type Palette } from '@mneme/design-tokens';
import { useColorScheme } from 'react-native';

export interface Theme extends Palette {
  scheme: 'light' | 'dark';
  accent: string;
  accentSoft: string;
}

export function useTheme(era: string = 'antiguidade'): Theme {
  const scheme = useColorScheme() === 'dark' ? 'dark' : 'light';
  const palette = scheme === 'dark' ? dark : light;
  const eraAccent = eras[era] ?? eras['antiguidade']!;
  return {
    ...palette,
    scheme,
    accent: scheme === 'dark' ? eraAccent.darkAccent : eraAccent.accent,
    accentSoft: scheme === 'dark' ? eraAccent.darkAccentSoft : eraAccent.accentSoft,
  };
}

export const serif = { fontFamily: 'Georgia' } as const;
