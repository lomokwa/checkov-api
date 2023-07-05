import { FieldValue } from "firebase-admin/firestore";
import db from "./dbConnect.js";

const coll = db.collection("tasks")
//const toArray = (collection) => collection.docs.map(doc => ({ _id: doc.id, ...doc.data() }));

export async function getTasks(req, res) {
    const { uid } = req.params;

    const tasks = await coll.where("uid", "==", uid).get();

    const taskArray = tasks.docs.map(doc => { return({ id: doc.id, ...doc.data() });
 } )
    res.send(taskArray)

    //res.send(toArray(tasks))
}

export async function addTask(req, res) {
    const { title, uid } = req.body;

    if(!title || !uid) {
        res.status(401).send({ success: false, message: "Invalid request"})
        return;
    }

    const newTask = {
        title, 
        uid, 
        done: false, 
        createdAt: FieldValue.serverTimestamp(),
    }
    await coll.add(newTask);
    getTasks(req, res);
}
