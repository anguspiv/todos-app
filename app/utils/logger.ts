import { createConsola, LogLevels, LogType } from 'consola';

const DEFAULT_LEVEL = 'log';

const strLevel: LogType = (window?.ENV?.LOG_LEVEL || DEFAULT_LEVEL).toLowerCase();

const level: number = LogLevels[strLevel] || 2;

export const logger = createConsola({ level });
