import { StyleSheet } from "../types/style-sheet.type";

export function createStyles<T extends StyleSheet>(properties: T): T {
  return properties;
}
