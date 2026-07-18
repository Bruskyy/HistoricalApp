/**
 * Thoth, o escriba — companheiro (GDD §7).
 * Placeholder visual do MVP: pergaminho com pena; a evolução de
 * estágios chega com a arte final. Copy sempre sem culpa (GDD §7.2).
 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../theme';

export function Thoth({ say }: { say: string }) {
  const t = useTheme();
  const s = styles(t);
  return (
    <View style={s.row}>
      <View style={s.avatar}>
        <Text style={s.glyph}>📜</Text>
      </View>
      <Text style={s.say}>{say}</Text>
    </View>
  );
}

const styles = (t: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    row: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
    avatar: {
      width: 46,
      height: 46,
      borderRadius: 23,
      backgroundColor: t.accentSoft,
      borderWidth: 1.5,
      borderColor: t.accent,
      alignItems: 'center',
      justifyContent: 'center',
    },
    glyph: { fontSize: 22 },
    say: {
      flex: 1,
      fontSize: 14.5,
      lineHeight: 22,
      fontStyle: 'italic',
      color: t.inkSoft,
      paddingTop: 4,
    },
  });
