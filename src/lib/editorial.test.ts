import { describe, expect, it } from "vitest";
import { publicItems, publicText } from "./editorial";

describe("editorial publication rules", () => {
  it("publishes confirmed and draft content", () => {
    expect(publicText({ status: "confirmed", text: "Publicável" })).toBe("Publicável");
    expect(publicItems({ status: "draft", items: ["Rascunho seguro"] })).toEqual(["Rascunho seguro"]);
  });

  it("omits pending and validation-required content", () => {
    expect(publicText({ status: "pending", text: "Não publicar" })).toBeUndefined();
    expect(publicItems({ status: "toBeValidated", items: ["Não publicar"] })).toEqual([]);
  });
});
