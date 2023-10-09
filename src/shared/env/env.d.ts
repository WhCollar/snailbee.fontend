interface IImportMetaEnv extends Readonly<Record<string, string>> {
    readonly BASE_API_URL: string
    readonly VITE_CORS: string
}
  
interface ImportMeta {
    readonly env: IImportMetaEnv
}