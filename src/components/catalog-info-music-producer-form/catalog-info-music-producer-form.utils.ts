export const toggleChip = (values: Array<string>, chip: string) => {
  if (values.includes(chip)) {
    return values.filter((selectedChip: string) => selectedChip !== chip);
  }
  return [...values, chip];
};
