import * as express from 'express';
import { json, urlencoded, Router } from 'express';
import { RegisterRoutes } from '../build/routes';

export const app = <Router>express();

/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
