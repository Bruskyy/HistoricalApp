/**
 * Mneme — fatia vertical do MVP (BACKLOG E4).
 * Navegação por estado simples (sem lib de navegação por enquanto):
 * Corredor → lições do nó → celebração → fecho → Corredor.
 * O agendamento de revisão vem do @mneme/learning-engine — o mesmo
 * motor testado pela suíte de cenários (ADR-4).
 */
import { StatusBar } from 'expo-status-bar';
import React, { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DEFAULT_PARAMS, onUnderstood } from '@mneme/learning-engine';
import { nodeById } from './src/content';
import { Thoth } from './src/components/Thoth';
import { CelebrationScreen } from './src/screens/CelebrationScreen';
import { CorridorScreen } from './src/screens/CorridorScreen';
import { Cta, LessonScreen } from './src/screens/LessonScreen';
import { serif, useTheme } from './src/theme';

type Route =
  | { name: 'corridor' }
  | { name: 'lesson'; lessonIndex: number }
  | { name: 'celebration' }
  | { name: 'sessionClose' };

const NODE_ID = 'democracia-ateniense';
const DAY_MS = 24 * 60 * 60 * 1000;

export default function App() {
  const node = useMemo(() => nodeById(NODE_ID), []);
  const t = useTheme(node.era);

  const [route, setRoute] = useState<Route>({ name: 'corridor' });
  const [xp, setXp] = useState(0);
  const [lessonsDone, setLessonsDone] = useState(0);
  const [nodeLit, setNodeLit] = useState(false);
  const [nextReviewDays, setNextReviewDays] = useState<number | null>(null);

  const finishLesson = (lessonIndex: number) => {
    const done = lessonIndex + 1;
    setLessonsDone(done);
    if (done < node.lessons.length) {
      setRoute({ name: 'lesson', lessonIndex: done });
      return;
    }
    // Nó compreendido: cada afirmação entra no agendador do motor.
    const now = Date.now();
    const firstDue = node.claims
      .map((c) => onUnderstood(c.id, node.id, now, DEFAULT_PARAMS).dueAt)
      .reduce((a, b) => Math.min(a, b));
    setNextReviewDays(Math.round((firstDue - now) / DAY_MS));
    setNodeLit(true);
    setRoute({ name: 'celebration' });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: t.paper }}>
      <StatusBar style={t.scheme === 'dark' ? 'light' : 'dark'} />
      <View style={header(t).bar}>
        <View>
          <Text style={header(t).brand}>Mneme</Text>
          <Text style={header(t).sub}>fatia vertical · {node.era}</Text>
        </View>
        {xp > 0 && <Text style={header(t).xp}>{xp} XP</Text>}
      </View>

      {route.name === 'corridor' && (
        <CorridorScreen
          node={node}
          nodeLit={nodeLit}
          lessonsDone={lessonsDone}
          nextReviewLabel={nextReviewDays !== null ? `revisão em ${nextReviewDays} dias` : null}
          onOpenNode={() => setRoute({ name: 'lesson', lessonIndex: lessonsDone })}
        />
      )}

      {route.name === 'lesson' && (
        <LessonScreen
          node={node}
          lesson={node.lessons[route.lessonIndex]!}
          lessonIndex={route.lessonIndex}
          onCorrectAnswer={() => setXp((v) => v + 10)}
          onFinish={() => finishLesson(route.lessonIndex)}
        />
      )}

      {route.name === 'celebration' && (
        <CelebrationScreen node={node} xp={xp} onClose={() => setRoute({ name: 'sessionClose' })} />
      )}

      {route.name === 'sessionClose' && (
        <SessionClose
          nextReviewDays={nextReviewDays ?? 3}
          onBack={() => setRoute({ name: 'corridor' })}
        />
      )}
    </SafeAreaView>
  );
}

function SessionClose({ nextReviewDays, onBack }: { nextReviewDays: number; onBack: () => void }) {
  const t = useTheme();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: t.paper }} contentContainerStyle={{ padding: 18, gap: 14 }}>
      <Text style={{ fontSize: 10.5, letterSpacing: 1.6, textTransform: 'uppercase', color: t.inkFaint }}>
        até amanhã, Guardião
      </Text>
      <View
        style={{
          backgroundColor: t.paperRaised,
          borderWidth: 1,
          borderColor: t.line,
          borderRadius: 14,
          padding: 18,
        }}
      >
        <Text style={{ ...serif, fontSize: 15.5, lineHeight: 25, color: t.ink }}>
          Amanhã: por que Roma copiou os gregos — e o que ela se recusou a copiar.
        </Text>
      </View>
      <Thoth
        say={`Vou guardar esta memória com cuidado. Em ${nextReviewDays} dias a chama vai querer vacilar — e eu te chamo para reacendê-la. É assim que ela vira sua para sempre.`}
      />
      <Cta label="voltar ao Corredor" onPress={onBack} />
    </ScrollView>
  );
}

const header = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    bar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: t.line,
    },
    brand: { ...serif, fontSize: 18, letterSpacing: 0.7, color: t.ink },
    sub: { fontSize: 10, letterSpacing: 1.4, textTransform: 'uppercase', color: t.inkFaint },
    xp: { fontSize: 12, color: t.inkSoft },
  });
