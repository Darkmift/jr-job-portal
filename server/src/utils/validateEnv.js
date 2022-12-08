import { config } from 'dotenv';
import { cleanEnv, port, str } from 'envalid';

config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
  debug: process.env.MUTE_LOGS ? false : true,
  override: true,
});

export default function validateEnv () {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    LOG_FORMAT: str({
      choices: ['combined', 'common', 'dev', 'short', 'tiny'],
    }),
    LOG_DIR: str(),
  });
}