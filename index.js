const { dbConnect } = require("./db");
const express = require("express");
const routes = require("./routes");
require("dotenv").config();
const bodyParser = require('body-parser')


const app = express();
app.use(express.json());

//app.use(routes);
app.use('/', async (req,res) => {
  res.status(200).send('welcome to our url-shortener!, please go to https://documenter.getpostman.com/view/16600205/UVktoYPZ to view our amazing documentation')
})
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
