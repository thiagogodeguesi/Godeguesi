import { describe, expect, it } from "vitest";
import { createPageMetadata, siteUrl } from "./metadata";

describe("metadata", () => {
  it("uses the official domain and consistent social metadata", () => {
    expect(siteUrl.origin).toBe("https://godeguesi.com.br");
    const metadata = createPageMetadata({
      title: "Página",
      description: "Descrição",
      path: "/pagina",
    });
    expect(metadata.alternates).toEqual({ canonical: "/pagina" });
    expect(metadata.openGraph).toMatchObject({
      title: "Página",
      description: "Descrição",
      url: "/pagina",
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary",
      title: "Página",
      description: "Descrição",
    });
  });
});
