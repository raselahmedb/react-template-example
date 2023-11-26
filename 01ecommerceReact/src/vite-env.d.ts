/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // more env variables...
    NODE_ENV: 'development' | 'production' | 'staging';
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }