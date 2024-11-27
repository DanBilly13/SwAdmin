/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  // Add other environment variables you use
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
