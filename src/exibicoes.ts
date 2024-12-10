type ExibicaoTuplaType = [string, string, string, Array<AnimaisTuplaType>];
export type AnimaisTuplaType = [string, string, number, boolean];
const EXIBICOES: Array<ExibicaoTuplaType> = [
  [
    "A1",
    "2024-12-06T08:00:00.000-03:00",
    "2024-12-06T12:00-03:00",
    [
      ["🦜", "Papagaio", 0.12, false],
      ["🦁", "Leão", 190.0, true],
    ],
],
[
    "B2",
    "2024-12-06T13:00:00.000-03:00",
    "2024-12-06T17:00-03:00",
    [
        ["🦒", "Girafa", 1200, true],
        ["🦓", "Zebra", 200, true],
    ],
  ],
];
export default EXIBICOES;