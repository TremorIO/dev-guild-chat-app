const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username, secret } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        { username: username, secret: secret, first_name: username },
        { headers: {"private-key": "7ba5cb6a-aa19-4a98-bb08-8bb67af583ae"} }
    );
    console.log(res.status);
    return res.status(r.status).json(r.data);
  }catch(e){
    return res.status(e.response.status).json(e.response.data);
  }
  
});

app.listen(3001);