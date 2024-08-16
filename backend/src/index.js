import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

import { app } from "./app.js";
import connectdb from "./models/index.js";
import { envVariables } from "./constants.js";

connectdb()
    .then(() => {
        app.listen(envVariables.port, () => {
            console.log(`Server is running at ${envVariables.port}`);
        });
    })
    .catch((err) => console.log(`Err.. connecting DB :: ${err}`));
