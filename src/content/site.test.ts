import { describe, expect, it } from "vitest";
import { siteConfig } from "./site";

describe("public site configuration", () => {
  it("centralizes the approved domain and professional contact channels", () => {
    expect(siteConfig.url).toBe("https://godeguesi.com.br");
    expect(siteConfig.contacts).toEqual({
      email: "thiagogodeguesi@gmail.com",
      linkedin: "https://www.linkedin.com/in/thiagogodeguesi",
      github: "https://github.com/thiagogodeguesi",
    });
  });
});
