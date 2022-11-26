// const {Deso} = require("deso.js")
// const express = require('express')

import express from "express"
import { Deso } from "deso.js/dist"
import cors from "cors"
const app = express()
const deso = new Deso({})

const USER_PUBLIC_KEY =
  "BC1YLhp9Zf6Yykr7V14zxqeoLS1AbsvExpkgMdVVuT3TDniEhD8htJ1";

interface ReqBody {
    pkey: string
}

app.use(cors({ origin: true, credentials: true}))
app.use(express.json())
app.post(`/api/profile`, async (req: express.Request<{}, {}, ReqBody>, res: express.Response) => {

  console.log(req.body)
  const pkey = req.body.pkey as string;
  if (!pkey) res.status(400).json({message: "include pee key"});

  let profile='';
  try {
      profile = await deso.getSingleProfile({
      publicKey: pkey,
    });
  } catch (err) {
    return res.status(500).json({message: err})
  }
  console.log("AAAAAAAAAAAAA", profile)

  res.status(200).json(profile);
})

app.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
})