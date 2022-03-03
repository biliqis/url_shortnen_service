const { dbConnect } = require("./db");
const express = require("express");
const routes = require("./routes");
require("dotenv").config();
const bodyParser = require('body-parser')
const morgan = require('morgan')


const app = express();
app.use(express.json());

//app.use(routes);
app.use(morgan('dev'))

app.use(routes);

app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5000;
async function bootstrap() {
  try {
    await dbConnect();

    app.listen(port, () => {
      console.log(`now listening for requests on port ${port}...`);
    });
  } catch (e) {
    console.error("an error occurred while starting the server");
    console.error(e.message);
    process.exit(1);
  }
}

bootstrap();
