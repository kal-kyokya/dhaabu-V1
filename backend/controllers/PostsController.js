// This is a Script containing a class whose methods handle posts API routes
import dbClient from '../utils/db';
import { ObjectId } from 'mongodb';

export default class PostsController {
  // Add a new post
  static async addNewPost(req, res) {
    // Validate the post title
    const title = req.body ? req.body.title : null;
    if (!title) {
      res.status(400).send({ error: 'Missing post title' });
      return;
    }

    // Validate the post content
    const content = req.body ? req.body.content : null;
    if (!content) {
      res.status(400).send({ error: 'Missing post content' });
      return;
    }

    const ourDB = dbClient.client.db();
    const postCollection = ourDB.collection('posts');

    const { user } = req;

    try {
      // Save new post to MongoDB
      const newPost = await postCollection.insertOne({ userId: user._id, title, content });
      console.log(newPost);
      // Return an Object containing the post title and content
      res.status(200).send({ title, content });
    } catch(error) {
      console.log(error);
    }
  }

  static async viewPost(req, res) {
    const post_id = req.params.post_id;
    const ourDB = dbClient.client.db();
    const postsCollection = ourDB.collection('posts');
    const post = await postsCollection.findOne({ _id: ObjectId(post_id) });
    
    return res.status(200).send({ title: post.title, content: post.content });
  }

}
