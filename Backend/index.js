import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import adminRoute from "./routes/admin.route.js"
import queryRoute from "./routes/query.route.js"
import { connectdb } from './middlewares/connect.db.js';
import { seedAdmin } from './scripts/SeedingAdmin.js';

const app = express();
app.use(cors());
app.use(cookieParser())
app.use(express.json())


app.use("/api/vi/admin", adminRoute)
app.use("/api/vi/query", queryRoute)
seedAdmin().then()
const PORT = process.env.PORT || 5000;
connectdb().then(() => {

  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
})
