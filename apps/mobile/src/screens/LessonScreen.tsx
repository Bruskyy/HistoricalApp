/**
 * Player de lição — anatomia do LDD §3, dirigido 100% pelo conteúdo
 * compilado: gancho → narrativa → interações → conexão.
 * O caminho do erro nunca custa nada (anotação calorosa + retentar).
 * Interpretações/debates nunca são cobrados como pergunta objetiva
 * (EDITORIAL_POLICY §3) — viram exploração de consenso.
 */
import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Claim, CompiledLesson, ContentNode, Interaction } from '../content';
import { serif, useTheme } from '../theme';

interface Props {
  node: ContentNode;
  lesson: CompiledLesson;
  lessonIndex: number;
  onCorrectAnswer: () => void;
  onFinish: () => void;
}

type Step =
  | { kind: 'hook' }
  | { kind: 'narrative'; paragraph: string }
  | { kind: 'interaction'; interaction: Interaction }
  | { kind: 'connection' };

export function LessonScreen({ node, lesson, lessonIndex, onCorrectAnswer, onFinish }: Props) {
  const t = useTheme(node.era);
  const s = styles(t);

  const steps = useMemo<Step[]>(
    () => [
      { kind: 'hook' },
      ...lesson.narrative.map((paragraph) => ({ kind: 'narrative', paragraph }) as Step),
      ...lesson.interactions.map((interaction) => ({ kind: 'interaction', interaction }) as Step),
      { kind: 'connection' },
    ],
    [lesson],
  );

  const [ix, setIx] = useState(0);
  const step = steps[ix]!;
  const next = () => (ix + 1 < steps.length ? setIx(ix + 1) : onFinish());

  return (
    <ScrollView style={s.root} contentContainerStyle={s.body}>
      <Text style={s.eyebrow}>
        {`Grécia · lição ${lessonIndex + 1} de ${node.lessons.length}`}
      </Text>

      {step.kind === 'hook' && (
        <>
          <Text style={s.title}>{lesson.title}</Text>
          <View style={s.card}>
            <Text style={s.narr}>{lesson.hook}</Text>
          </View>
          <Cta label="continuar" onPress={next} />
        </>
      )}

      {step.kind === 'narrative' && (
        <>
          <View style={s.card}>
            <Text style={s.narr}>{step.paragraph}</Text>
          </View>
          <Cta label="continuar" onPress={next} />
        </>
      )}

      {step.kind === 'interaction' && (
        <InteractionView
          key={step.interaction.id}
          interaction={step.interaction}
          claim={node.claims.find((c) => c.id === step.interaction.claimId)}
          onCorrect={onCorrectAnswer}
          onDone={next}
        />
      )}

      {step.kind === 'connection' && (
        <>
          <Text style={s.h2}>Agora você entende melhor:</Text>
          <View style={s.card}>
            <Text style={s.narr}>{lesson.connection.replace(/\s*✔\s*/g, '\n✔ ').trim()}</Text>
          </View>
          <Cta label={lessonIndex + 1 < node.lessons.length ? 'próxima lição' : 'concluir o nó'} onPress={next} gold />
        </>
      )}
    </ScrollView>
  );
}

/* ---------- interação ---------- */

function InteractionView({
  interaction,
  claim,
  onCorrect,
  onDone,
}: {
  interaction: Interaction;
  claim: Claim | undefined;
  onCorrect: () => void;
  onDone: () => void;
}) {
  const t = useTheme();
  const s = styles(t);
  const [picked, setPicked] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);
  const [showDebate, setShowDebate] = useState(false);

  // Exploração de debate: consenso + posições, nunca gabarito.
  if (!interaction.objective && claim?.debate) {
    return (
      <View style={s.card}>
        <Text style={s.chip}>Interpretação historiográfica</Text>
        <Text style={s.narr}>{claim.debate.question}</Text>
        <Text style={s.consensus}>
          Nível de consenso <Text style={s.pct}>{claim.consensusPct}%</Text>
        </Text>
        {!showDebate ? (
          <Pressable onPress={() => setShowDebate(true)} accessibilityRole="button">
            <Text style={s.debateLink}>Por que existe debate sobre este assunto?</Text>
          </Pressable>
        ) : (
          <View style={s.debatePanel}>
            {claim.debate.positions.map((p) => (
              <View key={p.view} style={{ gap: 2 }}>
                <Text style={s.position}>{p.view}</Text>
                <Text style={s.acceptance}>{p.acceptance}</Text>
              </View>
            ))}
            <Cta label="fascinante — seguir" onPress={onDone} />
          </View>
        )}
      </View>
    );
  }

  // Decisão situada: sem resposta errada; o errorPath é a nota universal.
  if (!interaction.objective) {
    return (
      <View style={s.card}>
        <Text style={s.prompt}>{interaction.prompt}</Text>
        {(interaction.options ?? []).map((o, i) => (
          <Option
            key={o}
            label={o}
            state={picked === i ? 'accent' : picked !== null ? 'disabled' : 'idle'}
            onPress={picked === null ? () => setPicked(i) : undefined}
          />
        ))}
        {picked !== null && (
          <>
            <Annotation text={interaction.errorPath} />
            <Cta label="continuar" onPress={onDone} />
          </>
        )}
      </View>
    );
  }

  // Pergunta objetiva com caminho do erro e nova tentativa livre.
  return (
    <View style={s.card}>
      <Text style={s.prompt}>{interaction.prompt}</Text>
      {(interaction.options ?? []).map((o, i) => (
        <Option
          key={o}
          label={o}
          state={
            solved && i === interaction.correct
              ? 'accent'
              : picked === i && i !== interaction.correct
                ? 'annotate'
                : solved
                  ? 'disabled'
                  : 'idle'
          }
          onPress={
            solved
              ? undefined
              : () => {
                  setPicked(i);
                  if (i === interaction.correct) {
                    setSolved(true);
                    onCorrect();
                  }
                }
          }
        />
      ))}
      {picked !== null && picked !== interaction.correct && !solved && (
        <Annotation text={`Ainda não — e aqui está o porquê: ${interaction.errorPath}`} />
      )}
      {solved && (
        <>
          <Text style={s.stamp}>+10</Text>
          <Cta label="continuar" onPress={onDone} />
        </>
      )}
    </View>
  );
}

/* ---------- peças ---------- */

function Option({
  label,
  state,
  onPress,
}: {
  label: string;
  state: 'idle' | 'accent' | 'annotate' | 'disabled';
  onPress?: () => void;
}) {
  const t = useTheme();
  const s = styles(t);
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[
        s.opt,
        state === 'accent' && { borderColor: t.accent, backgroundColor: t.accentSoft },
        state === 'annotate' && { borderColor: t.annotate },
        state === 'disabled' && { opacity: 0.55 },
      ]}
    >
      <Text style={s.optText}>{label}</Text>
    </Pressable>
  );
}

function Annotation({ text }: { text: string }) {
  const t = useTheme();
  const s = styles(t);
  return (
    <View style={s.annotation}>
      <Text style={s.annotationText}>{text}</Text>
    </View>
  );
}

export function Cta({ label, onPress, gold }: { label: string; onPress: () => void; gold?: boolean }) {
  const t = useTheme();
  const s = styles(t);
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[s.cta, gold && { backgroundColor: t.gold }]}
    >
      <Text style={[s.ctaText, gold && { color: '#FFFFFF' }]}>{label}</Text>
    </Pressable>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    root: { flex: 1, backgroundColor: t.paper },
    body: { padding: 18, gap: 14 },
    eyebrow: { fontSize: 10.5, letterSpacing: 1.6, textTransform: 'uppercase', color: t.inkFaint },
    title: { ...serif, fontSize: 24, lineHeight: 30, color: t.ink, fontWeight: '600' },
    h2: { ...serif, fontSize: 19, color: t.ink, fontWeight: '600' },
    card: {
      backgroundColor: t.paperRaised,
      borderWidth: 1,
      borderColor: t.line,
      borderRadius: 14,
      padding: 18,
      gap: 10,
    },
    narr: { ...serif, fontSize: 15.5, lineHeight: 25, color: t.ink },
    prompt: { fontSize: 15.5, lineHeight: 23, color: t.ink, fontWeight: '600' },
    opt: {
      backgroundColor: t.paper,
      borderWidth: 1.5,
      borderColor: t.line,
      borderRadius: 12,
      padding: 13,
    },
    optText: { fontSize: 15, lineHeight: 21, color: t.ink },
    annotation: {
      borderLeftWidth: 3,
      borderLeftColor: t.annotate,
      backgroundColor: t.paperDeep,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      padding: 12,
    },
    annotationText: { fontSize: 14.5, lineHeight: 22, color: t.inkSoft },
    stamp: { alignSelf: 'flex-end', fontSize: 12, letterSpacing: 0.8, color: t.gold },
    chip: {
      alignSelf: 'flex-start',
      fontSize: 11,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      color: t.inkSoft,
      borderWidth: 1,
      borderColor: t.line,
      borderRadius: 999,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    consensus: { fontSize: 13, color: t.inkSoft },
    pct: { fontSize: 15, fontWeight: '600', color: t.gold },
    debateLink: {
      fontSize: 14,
      color: t.accent,
      textDecorationLine: 'underline',
    },
    debatePanel: { gap: 10, borderTopWidth: 1, borderTopColor: t.line, paddingTop: 12 },
    position: { fontSize: 14, lineHeight: 21, color: t.ink },
    acceptance: { fontSize: 11.5, letterSpacing: 0.6, textTransform: 'uppercase', color: t.inkFaint },
    cta: {
      backgroundColor: t.ink,
      borderRadius: 12,
      padding: 15,
      alignItems: 'center',
    },
    ctaText: { fontSize: 15.5, fontWeight: '600', color: t.paper },
  });
