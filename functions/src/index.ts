import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

const db = admin.firestore();


const sendResponse =
(response: functions.Response, statusCode: number, body: any) => {
  response.send({
    statusCode,
    body: JSON.stringify(body),
  });
};

export const addDataset = functions.https.onRequest(
    async (req: any, res: any) => {
      if (req.method !== "POST") {
        console.error("The method of this request is not POST", req);
        sendResponse(res, 405, {error: "Invalid Request"});
        return;
      } else {
        // console.log(defaultDataset);
        const dataset = req.body;
        for (const key of Object.keys(dataset)) {
          const data = dataset[key];
          await db.collection("question").doc(key).set(data);
        }
        sendResponse(res, 200, {error: "Added dataset"});
        console.log("Added dataset!");
        return;
      }
    }
);
