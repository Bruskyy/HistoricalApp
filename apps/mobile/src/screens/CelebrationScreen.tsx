/**
 * Celebração de marco — ordem fixa do GDD §9:
 * nó acende → Thoth reage → conexões → XP por último.
 * A sequência é temporal (revelação em etapas), não uma tela estática.
 */
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ContentNode } from '../content';
import { serif, useTheme } from '../theme';
import { Thoth } from '../components/Thoth';
import { Cta } from './LessonScreen';

interface Props {
  node: ContentNode;
  xp: number;
  onClose: () => void;
}

const CONNECTION_LABELS: Record<string, string> = {
  'republica-romana': 'República Romana',
  iluminismo: 'Iluminismo',
  'constituicao-brasileira-1988': 'Constituição de 1988',
};

export function CelebrationScreen({ node, xp, onClose }: Props) {
  const t = useTheme(node.era);
  const s = styles(t);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const delays = [500, 1300, 2100, 3000];
    const timers = delays.map((ms, i) =>
      setTimeout(() => setStage(i + 1), ms),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <ScrollView style={s.root} contentContainerStyle={s.body}>
      <Text style={s.flame}>🔥</Text>
      <Text style={s.title}>{node.name}{'\n'}acendeu no Corredor</Text>

      {stage >= 1 && (
        <Thoth say="Nosso primeiro salão! Desenhei uma coluna grega no meu pergaminho. 🏛️" />
      )}

      {stage >= 2 && (
        <View style={s.card}>
          <Text style={s.eyebrow}>este conhecimento se conecta a</Text>
          {node.connections.map((c) => (
            <Text key={c.to} style={s.cx}>
              ✔ {CONNECTION_LABELS[c.to] ?? c.to}
            </Text>
          ))}
        </View>
      )}

      {stage >= 3 && <Text style={s.xp}>+{xp} XP</Text>}

      {stage >= 4 && <Cta label="fechar a sessão" onPress={onClose} />}
    </ScrollView>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    root: { flex: 1, backgroundColor: t.paper },
    body: { padding: 26, gap: 16, alignItems: 'center' },
    flame: { fontSize: 54 },
    title: {
      ...serif,
      fontSize: 24,
      lineHeight: 31,
      color: t.ink,
      fontWeight: '600',
      textAlign: 'center',
    },
    card: {
      alignSelf: 'stretch',
      backgroundColor: t.paperRaised,
      borderWidth: 1,
      borderColor: t.line,
      borderRadius: 14,
      padding: 18,
      gap: 8,
    },
    eyebrow: { fontSize: 10.5, letterSpacing: 1.6, textTransform: 'uppercase', color: t.inkFaint },
    cx: { fontSize: 15, color: t.ink },
    xp: { fontSize: 14, letterSpacing: 0.8, color: t.gold, fontWeight: '600' },
  });
