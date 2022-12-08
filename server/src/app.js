import express from 'express';
import logger from '#utils/logger';
import config from '#config';
import morgan from '#utils/morgan';
import ApiError from '#utils/ApiError';

const { PORT, LOG_FORMAT, NODE_ENV } = config;

const port = PORT || 5000;

const app = express();
// app.use(morgan(LOG_FORMAT, { stream }));

if (NODE_ENV !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(404, 'Not found'));
});

export default app;
