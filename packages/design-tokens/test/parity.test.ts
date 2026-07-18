/**
 * Paridade de temas: todo token do claro existe no escuro (e vice-versa),
 * e toda era define os quatro acentos. Impede o bug clássico de "esqueci
 * o token no tema escuro".
 */
import { describe, expect, it } from 'vitest';
import { dark, eras, light } from '../src/index';

describe('paridade de tokens', () => {
  it('light e dark têm exatamente as mesmas chaves', () => {
    expect(Object.keys(dark).sort()).toEqual(Object.keys(light).sort());
  });

  it('todo token é um hex válido', () => {
    for (const palette of [light, dark]) {
      for (const [k, v] of Object.entries(palette)) {
        expect(v, k).toMatch(/^#[0-9A-Fa-f]{6}$/);
      }
    }
  });

  it('toda era define acento para os dois temas', () => {
    for (const [era, a] of Object.entries(eras)) {
      for (const key of ['accent', 'accentSoft', 'darkAccent', 'darkAccentSoft'] as const) {
        expect(a[key], `${era}.${key}`).toMatch(/^#[0-9A-Fa-f]{6}$/);
      }
    }
  });
});
