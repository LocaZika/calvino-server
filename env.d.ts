declare global{
  namespace NodeJS{
    interface ProcessEnv{
      PORT: number | string;
      MONGODB_SERVER: string;
    }
  }
}
export {}