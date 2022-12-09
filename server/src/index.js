import validateEnv from '#utils/validateEnv';
import config from '#config';
import logger from '#utils/logger';
validateEnv();

import app from './app';

const { PORT, NODE_ENV, MUTE_LOGS, LOG_LEVEL } = config;

const server = app.listen(PORT, () => {
    if (NODE_ENV === 'production') return;
    logger.info(`=================================`);
    logger.info(`⚡️[MUTE_LOGS]: ${MUTE_LOGS}`);
    logger.info(`⚡️[LOG_LEVEL]: ${LOG_LEVEL}`);
    logger.info(`======= ENV: ${NODE_ENV} =======`);
    logger.info(`🚀 [server]: Server is running at http://localhost:${PORT}`);
    logger.info(`=================================`);
});

const exitHandler = () => {
    // later will be decalred in async call post db and remote service initializations
    if (server) {
        server.close(() => {
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = error => {
    logger.error(error);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});
