import express from 'express';
import {postRoute} from "./routes/post-route";
import {userRoute} from "./routes/user-route";

const app = express();
const port: number = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(postRoute);
app.use(userRoute);

app.listen(port, () => {
    console.log(`Server running on port 127.0.0.1:${port}`);
});