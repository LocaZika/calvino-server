import express, { Application, Request, Response } from "express";
import path from "path";
import { connect } from 'mongoose';
import { headerRouter } from "./layout/header/header.router";
import { footerRouter } from "./layout/footer/footer.router";
import { serviceItemRouter } from "./service/serviceItem/serviceItem.router";
import { serviceRouter } from "./service/service.router";

const app: Application = express();

if (!process.env.PORT || !process.env.MONGODB_SERVER){
  process.exit(1);
}

const port: number = parseInt(process.env.PORT as string, 10) || 2207;

// Connect to MongoDB
connect(process.env.MONGODB_SERVER)
.then(() => console.log('Connect to mongoDB server successfully'))
.catch(err => console.log({
  error: "Connect to mongoDB server failed",
  detail: err,
}));

app.use(express.static(path.join(__dirname, "public")));

/**
 * DECLARE ROUTE
 */

// index
app.get('/', (req: Request, res: Response) => {
  res.sendFile('public/index.html', { root: __dirname });
});
//  Layout
///   Header
app.use('/header', headerRouter);
///   Footer
app.use('/footer', footerRouter);
//  Service
app.use('/service', serviceRouter);
///   service item
app.use('/serviceItem', serviceItemRouter);
//  Page
// app.use('/homePage', );

app.listen(port);