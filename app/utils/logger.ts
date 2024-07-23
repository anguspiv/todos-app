import { createConsola, LogLevels, LogType } from 'consola';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __APOLLO_STATE__: any;
    ENV: {
      [key: string]: string | number | boolean | undefined;
    };
  }
}

const DEFAULT_LEVEL = 'log';

let strLevel: LogType = DEFAULT_LEVEL;

if (process && process?.env?.LOG_LEVEL) {
  strLevel = (process?.env?.LOG_LEVEL as string).toLowerCase() as LogType;
}

if (typeof window !== 'undefined' && window?.ENV?.LOG_LEVEL) {
  strLevel = (window.ENV.LOG_LEVEL as string).toLowerCase() as LogType;
}

const level: number = LogLevels[strLevel] || 2;

export const logger = createConsola({ level });
