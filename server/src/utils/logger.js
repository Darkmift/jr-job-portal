import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import config from '#config';

const enumerateErrorFormat = winston.format(info => {
    if (info instanceof Error) {
        Object.assign(info, { message: info.stack });
    }
    return info;
});

const { colorize, uncolorize, combine, splat, printf } = winston.format;

const logger = winston.createLogger({
    level: config.NODE_ENV === 'development' ? 'debug' : 'info',
    format: combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        enumerateErrorFormat(),
        config.NODE_ENV === 'development' ? colorize() : uncolorize(),
        splat(),
        printf(
            ({ timestamp, level, message }) =>
                `${timestamp} -> ${level}: ${message}`
        )
    ),
    transports: [
        new winston.transports.Console({
            stderrLevels: ['error'],
        }),
        new winstonDaily({
            level: config.LOG_LEVEL || 'debug',
            datePattern: 'YYYY-MM-DD',
            dirname: config.LOG_DIR + '/debug', // log file /logs/debug/*.log in save
            filename: `%DATE%.log`,
            maxFiles: 30, // 30 Days saved
            json: false,
            zippedArchive: true,
        }),
        // error log setting
        new winstonDaily({
            level: config.LOG_LEVEL || 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: config.LOG_DIR + '/error', // log file /logs/error/*.log in save
            filename: `%DATE%.log`,
            maxFiles: 30, // 30 Days saved
            handleExceptions: true,
            json: false,
            zippedArchive: true,
        }),
    ],
});

export default logger;
