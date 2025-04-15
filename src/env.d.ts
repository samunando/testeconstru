/// <reference types="astro/client" />

interface ImportMeta {
  glob: (pattern: string, options?: any) => Record<string, unknown>;
}
