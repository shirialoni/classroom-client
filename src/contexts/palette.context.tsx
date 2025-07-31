import { createContext, ReactNode, useContext } from "react";
import usePersistentState from "../hooks/use-persistent-state.hook";
import { PALETTE_TYPES, PALETTES } from "../constants/palette.const";
import { LOCAL_STORAGE_KEYS } from "../constants/local-storage.const";

interface IPaletteContext {
  palette: string;
  togglePalette: () => void;
  paletteType: PALETTE_TYPES;
}

const PaletteContext = createContext<IPaletteContext>({
  togglePalette: () => {},
  paletteType: PALETTE_TYPES.REGULAR,
  palette: PALETTES[PALETTE_TYPES.REGULAR],
});

export const usePaletteContext = () => useContext(PaletteContext);

interface IProviderProps {
  children: ReactNode;
}

const PaletteContextProvider: React.FC<IProviderProps> = ({ children }) => {
  const [paletteType, setPaletteType] = usePersistentState<PALETTE_TYPES>(
    LOCAL_STORAGE_KEYS.PALETTE_TYPE,
    PALETTE_TYPES.REGULAR
  );

  const togglePalette = () => {
    setPaletteType((type) =>
      type === PALETTE_TYPES.DARK ? PALETTE_TYPES.REGULAR : PALETTE_TYPES.DARK
    );
  };

  const palette = PALETTES[paletteType];

  return (
    <PaletteContext.Provider value={{ paletteType, palette, togglePalette }}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteContextProvider;
