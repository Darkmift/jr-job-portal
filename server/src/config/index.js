import { config } from 'dotenv';

config({
    path: `.env.${process.env.NODE_ENV || 'development'}.local`,
    debug: false,
    override: true,
});

const {
    NODE_ENV,
    PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    SECRET_KEY,
    LOG_FORMAT,
    LOG_LEVEL,
    LOG_DIR,
    ORIGIN,
    MUTE_LOGS,
    TEST_MODE,
} = process.env;

export default {
    ...process.env,
    NODE_ENV,
    PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    SECRET_KEY,
    LOG_FORMAT,
    LOG_LEVEL,
    LOG_DIR,
    ORIGIN,
    MUTE_LOGS,
    TEST_MODE,
};
