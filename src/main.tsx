import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { theme } from "./styles/theme.ts";
import { SnackbarProvider } from "notistack";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import { NOTISTACK_CONFIG } from "./constants/notistack.const.ts";
import PaletteContextProvider from "./contexts/palette.context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = document.getElementById("root");

createRoot(root!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <PaletteContextProvider>
        <ThemeProvider theme={theme}>
          <SnackbarProvider {...NOTISTACK_CONFIG}>
            <ErrorBoundary FallbackComponent={ErrorPage}>
              <App />
            </ErrorBoundary>
          </SnackbarProvider>
        </ThemeProvider>
      </PaletteContextProvider>
    </QueryClientProvider>
  </Provider>
);
