const functions = require("firebase-functions");
const bodyParser = require("body-parser");
const ServerError = require("./utils/serverError");
const ErrorResponseBody = require("./utils/errorResp");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());

const user_router = require("./routes/UserRoute");
app.get("/", (req, res) => {
  res.json({
    title: "Roomie bill Backend",
  });
});

// routes
app.use("/user", user_router);

// swagger setup
const swagger_options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Roomie bill",
      version: "1.0.0",
      description: "Backend API for Roomie bill",
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "doc url",
      },
    ],
  },
  apis: ["./Routes/*.js"],
};
const swaggerSpec = swaggerJsDoc(swagger_options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//Error handler for invalid routes
app.all("*", (req, res, next) => {
  next(new ServerError(404, "Route Not Found"));
});

//General error handler function for any internal errors while performing db operations
app.use((err, req, res, next) => {
  console.log(err);
  let error;
  const { status, statusCode = 500, message = "Internal Server Error" } = err;
  error = new ErrorResponseBody(status, message, false);
  res.status(statusCode).json(error);
});

exports.app = functions.https.onRequest(app);
