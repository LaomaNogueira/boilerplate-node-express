import { app } from './config/app';
const port = process.env.NODE_PORT || 3000;

app.listen(port, async () => {
  console.log(`🚀 Service Name is running on port ${port}`);
});
