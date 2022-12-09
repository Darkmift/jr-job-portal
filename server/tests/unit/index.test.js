import { describe, afterEach, beforeAll, expect, test } from '@jest/globals';
import supertest from 'supertest';

import logger from '#utils/logger';
import app from '#/app.js';
import config from '#/config/index.js';

const { MUTE_LOGS, NODE_ENV, PORT } = config;

const initServer = async () => {
    try {
        // rememeber to add inits for othe services like db
        app.listen(PORT, () => {
            if (MUTE_LOGS) return;
            logger.info(`========TESTING_MODE=========`);
            logger.info(`======= ENV: ${NODE_ENV} =======`);
            logger.info(
                `🚀 [server]: Server is running at https://localhost:${PORT}`
            );
            logger.info(`=================================`);
        });
        return app;
    } catch (error) {
        logger.error(error.message);
    }
};

describe('Server', () => {
    let request;
    let server;

    beforeAll(async () => {
        server = await initServer();
        request = supertest(server);
    });

    afterEach(async function () {
        // server && server.close();
    });

    test('should pass', async () => {
        const response = await request.get('/api/health');
        expect(response.status).toEqual(200);
    });
});
