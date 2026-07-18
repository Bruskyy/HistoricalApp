/**
 * Corredor do Tempo — tela central (GDD §4).
 * Eras seladas aparecem como promessa; o nó da missão do dia é o
 * caminho de menor esforço (GDD §2).
 */
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ContentNode } from '../content';
import { serif, useTheme } from '../theme';
import { Thoth } from '../components/Thoth';

interface Props {
  node: ContentNode;
  nodeLit: boolean;
  lessonsDone: number;
  nextReviewLabel: string | null;
  onOpenNode: () => void;
}

const SEALED_BEFORE = ['Pré-História', 'Mesopotâmia', 'Egito'];

export function CorridorScreen({ node, nodeLit, lessonsDone, nextReviewLabel, onOpenNode }: Props) {
  const t = useTheme(node.era);
  const s = styles(t);

  const status = nodeLit
    ? `Compreendido · chama acesa${nextReviewLabel ? ` · ${nextReviewLabel}` : ''}`
    : lessonsDone > 0
      ? `Lição ${lessonsDone + 1} de ${node.lessons.length} · continuar`
      : `Missão de hoje · lição 1 de ${node.lessons.length}`;

  return (
    <ScrollView style={s.root} contentContainerStyle={s.body}>
      <Thoth
        say={
          nodeLit
            ? 'Guardião… olhe. A Grécia está acesa. Nós fizemos isso.'
            : 'Bem-vindo ao Corredor do Tempo, Guardião. Os salões estão apagados — mas encontrei uma porta aberta na Grécia. Vamos?'
        }
      />

      {SEALED_BEFORE.map((era) => (
        <EraRow key={era} name={era} state="sealed" />
      ))}

      <EraRow name="Grécia" state={nodeLit ? 'lit' : 'open'}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={node.name}
          style={[s.nodeCard, nodeLit && s.nodeCardLit]}
          onPress={nodeLit ? undefined : onOpenNode}
        >
          <View style={{ flex: 1 }}>
            <Text style={s.nodeName}>{node.name}</Text>
            <Text style={[s.nodeStatus, nodeLit && { color: t.flame }]}>{status}</Text>
          </View>
          <Text style={s.nodeFlame}>{nodeLit ? '🔥' : '🕯️'}</Text>
        </Pressable>
      </EraRow>

      <EraRow name="Roma" state="sealed">
        <Text style={s.sealedNote}>
          selada — “por que Roma copiou os gregos, e o que se recusou a copiar”
        </Text>
      </EraRow>
    </ScrollView>
  );
}

function EraRow({
  name,
  state,
  children,
}: {
  name: string;
  state: 'sealed' | 'open' | 'lit';
  children?: React.ReactNode;
}) {
  const t = useTheme();
  const s = styles(t);
  const dotColor = state === 'lit' ? t.flame : state === 'open' ? t.accent : t.line;
  return (
    <View style={s.eraRow}>
      <View style={s.rail}>
        <View style={[s.dot, { borderColor: dotColor }]}>
          <Text style={{ fontSize: 12, color: dotColor }}>
            {state === 'lit' ? '🔥' : state === 'open' ? '◈' : '·'}
          </Text>
        </View>
        <View style={s.seg} />
      </View>
      <View style={s.eraInfo}>
        <Text style={[s.eraName, state !== 'sealed' && { color: t.accent }]}>{name}</Text>
        {children}
      </View>
    </View>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    root: { flex: 1, backgroundColor: t.paper },
    body: { padding: 18, gap: 14 },
    eraRow: { flexDirection: 'row', gap: 14, minHeight: 64 },
    rail: { width: 34, alignItems: 'center' },
    dot: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderWidth: 2,
      backgroundColor: t.paperRaised,
      alignItems: 'center',
      justifyContent: 'center',
    },
    seg: { flex: 1, width: 3, backgroundColor: t.line },
    eraInfo: { flex: 1, paddingBottom: 18, gap: 6 },
    eraName: {
      fontSize: 12,
      letterSpacing: 1.4,
      textTransform: 'uppercase',
      color: t.inkFaint,
    },
    nodeCard: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      backgroundColor: t.paperRaised,
      borderWidth: 1,
      borderColor: t.line,
      borderRadius: 12,
      padding: 14,
    },
    nodeCardLit: { borderColor: t.flame },
    nodeName: { ...serif, fontSize: 15.5, color: t.ink },
    nodeStatus: { fontSize: 11, color: t.inkFaint, marginTop: 3 },
    nodeFlame: { fontSize: 22 },
    sealedNote: { fontSize: 13, fontStyle: 'italic', color: t.inkFaint, paddingTop: 4 },
  });
