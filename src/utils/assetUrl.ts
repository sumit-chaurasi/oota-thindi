const assetBase = import.meta.env.BASE_URL;

export function assetUrl(path: string): string {
  return `${assetBase}${path.replace(/^\/+/, "")}`;
}

export function assetSrcSet(srcSet: string): string {
  return srcSet
    .split(",")
    .map((candidate) => {
      const [path, ...descriptor] = candidate.trim().split(/\s+/);
      return `${assetUrl(path)} ${descriptor.join(" ")}`;
    })
    .join(", ");
}
