import functions from "firebase-functions"
import express from "express";
import cors from "cors";
import { getAllPhotos, addPhoto} from "./src/visual-story.js";

// const PORT = 3002;

const app = express();

app.use(cors());
app.use(express.json());


app.get("/story", getAllPhotos);
app.post("/story", addPhoto);


// app.listen(PORT, () => {
//   console.log(`Listening on http://localhost:${PORT}...`);
// });

export const api = functions.https.onRequest(app);
