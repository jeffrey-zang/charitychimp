const {Deso} = require("deso.js")
const express = require('express')
const app = express()
const deso = new Deso({})

const USER_PUBLIC_KEY =
  "BC1YLhp9Zf6Yykr7V14zxqeoLS1AbsvExpkgMdVVuT3TDniEhD8htJ1";

interface ReqBody {
    pkey: string
}

app.get(`/api/profile`, async (req: express.Request, res: express.Response) => {
    
  const pkey = req.query.pkey as string;
  if (!pkey) throw new Error("pkey required");

  const profile = await deso.getSingleProfile({
    publicKey: pkey,
  });

  res.status(200).json(profile);
})
