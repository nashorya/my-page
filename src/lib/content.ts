export function byOrder<T extends { data: { order: number } }>(a: T, b: T) {
  return a.data.order - b.data.order;
}

export function slugTail(id: string) {
  return id.split("/").at(-1) || id;
}

export function chapterPath(novelId: string, chapterSlug: string) {
  return `/novels/${novelId}/${chapterSlug}/`;
}

export function collectionPiecePath(collectionId: string, pieceSlug: string) {
  return `/collections/${collectionId}/${pieceSlug}/`;
}

export function countText(value: string) {
  return value.replace(/\s+/g, "").length;
}
