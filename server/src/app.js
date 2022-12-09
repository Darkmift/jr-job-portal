import express from 'express';
import config from '#config';
import morgan from '#utils/morgan';
import ApiError from '#utils/ApiError';
import { v4 as uuidv4 } from 'uuid';

const app = express();

if (config.NODE_ENV !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.all('*', (req, res, next) => {
    req.uuid = uuidv4();
    next();
});

app.get('/health', async (req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date(),
        sqlConnection: null,
        uuid: req.uuid,
    };
    res.status(200).send(data);
});

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(404, 'Not found'));
});

export default app;
