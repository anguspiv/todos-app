import { createConsola, LogLevels, LogType } from 'consola';

declare global {
  interface Window {
    ENV: {
      [key: string]: string | number | boolean | undefined;
    };
  }
}

const DEFAULT_LEVEL = 'log';

const strLevel: LogType = (
  (window?.ENV?.LOG_LEVEL as string) || DEFAULT_LEVEL
).toLowerCase() as LogType;

const level: number = LogLevels[strLevel] || 2;

export const logger = createConsola({ level });
