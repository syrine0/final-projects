// getting-started.js


const TaskSchema = new mongoose.Schema({
    id: Number,
    title: String,
    deadline: Date,
    isComplete: Boolean
});


