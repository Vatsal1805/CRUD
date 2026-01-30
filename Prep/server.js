const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./db/db.js');
const userRoutes=require('./Routes/user.route.js');

dotenv.config();
connectDB();
const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/users',userRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});