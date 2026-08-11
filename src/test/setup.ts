import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

/**
 * O jsdom não monta o App Router; o mock mantém os hooks de navegação
 * previsíveis para componentes de layout renderizados nos testes.
 */
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));
