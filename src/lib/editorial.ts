import type { ContentField, ContentList, ContentStatus, PublicLink } from "@/content/case-studies";

export function isPublicStatus(status: ContentStatus): boolean {
  return status === "confirmed" || status === "draft";
}

export function publicText(field: ContentField): string | undefined {
  return isPublicStatus(field.status) ? field.text : undefined;
}

export function publicItems(field: ContentList): readonly string[] {
  return isPublicStatus(field.status) ? field.items : [];
}

export function publicLinks(links: readonly PublicLink[]): readonly PublicLink[] {
  return links.filter((link) => isPublicStatus(link.status) && Boolean(link.href));
}
