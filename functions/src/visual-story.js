import { db } from "./connectdb.js";
//import { ObjectId } from "mongodb"; // ObjectId is a class/must a new ObjectId as in the bottom

const coll = db.collection("photos");

// CRUD GET
export async function getAllPhotos(req, res) {
  const evals = await coll.find({}).toArray();
  res.send(photos).status(200);
}

// CRUD: POST
export async function  addPhoto(req, res) {
  const newPhoto = req.body
  await coll.insertOne(newPhoto) // sending back json!
  res.status(201).send({message: "new photo added to visual-story"});
}