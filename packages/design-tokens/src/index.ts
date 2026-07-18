/**
 * Design tokens — identidade Mneme (VISION §19).
 * Base pergaminho/tinta; dourado envelhecido para chama/progresso;
 * cada era da timeline tem um acento próprio ("viajar no tempo" visual).
 * O tema escuro é "o Arquivo à noite" — não uma inversão ingênua.
 */

export interface Palette {
  /** Fundo principal (pergaminho / noite do Arquivo) */
  paper: string;
  /** Superfícies elevadas (cards) */
  paperRaised: string;
  /** Fundo rebaixado (molduras, salas seladas) */
  paperDeep: string;
  /** Texto principal (azul-tinta / pergaminho) */
  ink: string;
  /** Texto secundário */
  inkSoft: string;
  /** Texto terciário/desabilitado */
  inkFaint: string;
  /** Dourado envelhecido — chama, XP, progresso */
  gold: string;
  goldSoft: string;
  /** Chama acesa dos nós */
  flame: string;
  /** Anotação do caminho do erro (nunca vermelho agressivo — GDD §9) */
  annotate: string;
  /** Linhas/bordas */
  line: string;
}

export const light: Palette = {
  paper: '#F2EBDC',
  paperRaised: '#FAF5EA',
  paperDeep: '#E7DDC8',
  ink: '#20293C',
  inkSoft: '#5A6273',
  inkFaint: '#8B90A0',
  gold: '#B8892F',
  goldSoft: '#D9C08A',
  flame: '#D98E2B',
  annotate: '#8A5A3B',
  line: '#D8CCB4',
};

export const dark: Palette = {
  paper: '#151A26',
  paperRaised: '#1E2534',
  paperDeep: '#10141E',
  ink: '#E9E2D0',
  inkSoft: '#A8AEBE',
  inkFaint: '#767C8C',
  gold: '#D4A64A',
  goldSoft: '#6B5626',
  flame: '#E9A23B',
  annotate: '#C89A6B',
  line: '#2C3446',
};

/** Acento por era: cada período tem uma cor de destaque própria. */
export interface EraAccent {
  accent: string;
  accentSoft: string;
  darkAccent: string;
  darkAccentSoft: string;
}

export const eras: Record<string, EraAccent> = {
  antiguidade: {
    accent: '#2E7D74', // verdete egeu
    accentSoft: '#BFD8D3',
    darkAccent: '#4FA396',
    darkAccentSoft: '#24443F',
  },
  // Próximas eras ganham acento quando o conteúdo chegar:
  // idade-media, moderna, revolucoes, seculo-xx, informacao...
};

/** Escala de espaçamento (px). */
export const space = { xs: 4, sm: 8, md: 14, lg: 18, xl: 26, xxl: 40 } as const;

/** Escala tipográfica (px) — serifada para narrativa, sans para chrome. */
export const type = {
  display: 24,
  title: 19,
  body: 15.5,
  support: 14.5,
  label: 12,
  eyebrow: 10.5,
} as const;

export const radius = { card: 14, control: 12, pill: 999 } as const;
