import validateEnv from '#utils/validateEnv';
import config from '#config';
import logger from '#utils/logger';
validateEnv();

import app from './app';

const server = app.listen(config.PORT, () => {
    logger.info(`Listening to port ${config.PORT}`);
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
