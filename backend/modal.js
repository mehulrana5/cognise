const mongoose=require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    passage: String,
    mcqdata: [
        { 
            question: String,
            options: [String],
            answer: Number
        }
    ]
});

const article = mongoose.model('article', articleSchema);
 
module.exports=article;