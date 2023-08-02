const express = require('express');
const router = express.Router();
const articlemodal = require('../modal')

router.get('/fetchAllArticlesIds', async (req, res) => {
    try {
        const ArticleIds = await articlemodal.find({}, '_id');
        const ids = ArticleIds.map(ArticleIds => ArticleIds._id);
        res.json(ids);
        console.log("executed /fetchAllArticlesIds");
        // console.log(req.body);   
    } catch (error) {
        console.log(error);
    }
})
router.get('/fetchArticleByIndex/:id', async (req, res) => {
    try {
        const articleId = req.params.id; // Get the ID from the request parameters
        // Find the article by its unique ID
        const article = await articlemodal.findById(articleId);
        if (article) {
            res.json(article);
        } else {
            res.status(404).json({ error: 'Article not found' });
        }
        console.log("executed /fetchArticleByIndex");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.post('/addArticle',async(req,res)=>{
    try {
        console.log("executed /addArticle");
        const doc=new articlemodal(req.body)
        console.log(doc);
        // await doc.save(); 
        res.json(doc);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router; 