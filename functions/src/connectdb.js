import { MongoClient } from"mongodb"
import { mongoUri } from "../visual-story.js";

const client = new MongoClient(mongoUri);

export const db = client.db("photos");