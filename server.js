const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 80;
const dev = false; //process.env.NODE_ENV === 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.all("*", (req, res) => {
    return handle(req, res);
  });
  require("greenlock-express")
    .init({
      packageRoot: __dirname,
      // where to look for configuration
      configDir: "./greenlock.d",
      maintainerEmail: "mr.sanjiv05@gmail.com",
      // whether or not to run at cloudscale
      cluster: false,
    })
    .serve(server);
  // server.listen(port, (err) => {
  //   if (err) throw err;
  //   console.log(`> Ready on http://localhost:${port}`);
  // });
});
