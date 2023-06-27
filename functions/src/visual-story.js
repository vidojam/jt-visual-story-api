import { db } from "./connectdb.js";
import { ObjectId } from "mongodb"; // ObjectId is a class/must a new ObjectId as in the bottom

const coll = db.collection("story");

// CRUD GET
export async function getAllPhotos(req, res) {
  const story = await coll.find({}).toArray();
  res.status(200).send(story);
}

// CRUD: POST
export async function  addPhoto(req, res) {
  const newPhoto = req.body
  await coll.insertOne(newPhoto) // sending back json!
  res.status(201).send({message: "new photo added to visual-story"});
}