import fs from 'fs'
import compression from "compression";
import * as dotenv from "dotenv";
import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { pagination } from "typeorm-pagination";
import Routes from "./routes/Routes";
const helmet = require("helmet");
var cors = require('cors')
const cookieParser = require('cookie-parser');
const multer = require('multer')
const path = require('path');

try {

  dotenv.config();

  const PORT = process.env.PORT || 5001;

  const app = express();
  var bodyParser = require('body-parser');
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(helmet());
  app.use(cors(
    {
      origin: [
        "http://localhost:3001",
        "http://192.168.43.197:3001", // give correct IP
      ],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    }
  ))
  app.use(cookieParser());

  app.use(
    compression({
      threshold: 0,
      level: 6,
      filter: function () {
        return true;
      },
    })
  );
  app.use(pagination);

  app.use("/api", Routes);

  app.get("/health", (_, res) => {
    res.status(200).json({
      success: true,
      message: "API IS WORKING on 05/09/2023",
    });
  });

  createConnection()
    .then(async () => {
      app.listen(PORT, () => {
        console.log(`CONNECTED TO DB AND SERVER STARTED ON PORT  ${PORT}`);
      });
    })
    .catch((error: any) => console.log(error));

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      // const uniqueSuffix = Date.now()
      cb(null, `${file.originalname}`)
    }
  })

  const upload = multer({ storage: storage })

  app.post("/upload-image", upload.single("file"), async (req, res) => {
    console.log(req.body)
    res.send("Uploaded !")
  })

  // Serve uploaded images
  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

  // GET endpoint to retrieve uploaded  images
  app.get('/image/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = `./uploads/${imageName}`;

    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.status(404).send(err);
        return;
      }

      res.setHeader('Content-Type', 'image/jpeg');
      res.send(data);
    });
  });

  // DELETE endpoint to remove an image by filename
app.delete('/image/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  console.log(imageName)
  const imagePath = path.join(__dirname, '../uploads', imageName); // Full image path
  console.log(imagePath)
  console.log(__dirname)

  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
      return res.status(404).send('Image not found or already deleted.');
    }

    console.log(`Image ${imageName} deleted successfully.`);
    res.send('Image deleted successfully!');
  });
});

} catch (error) {

  const content = error.message + '\n'

  fs.writeFile('./test.txt', content, { flag: 'a+' }, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log('file written successfully');

  })
}

