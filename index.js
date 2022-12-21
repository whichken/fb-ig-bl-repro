const express = require("express")
const qs = require("querystring")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  const link = "https://www.facebook.com/v15.0/dialog/oauth"
  const params = {
    client_id: "875708503068512",
    display: "page",
    extras: JSON.stringify({
      setup: {
        channel: "IG_API_ONBOARDING"
      }
    }),
    redirect_uri: "https://asset-management-api.bn.co/status",
    response_type: "token",
    scope: "instagram_basic,pages_show_list,pages_read_engagement"
  }
  const href = `${link}?${qs.stringify(params)}`

  res.send(`<a href="${href}" style="font-size:72px;">Login</a>`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
