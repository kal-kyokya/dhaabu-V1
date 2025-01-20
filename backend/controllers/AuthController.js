// File containing endpoints authenticating a user
import { v4 as uuidv4 } from 'uuid';
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

export default class AuthController {
  /**
   * Sign in a user by generating a new Auth Token
   * @param { Object } req - The request object
   * @param { Object } res - The response object
   */
  static async signingIn(req, res) {
    // Sign in a user using 'Basic Authentication'
    const header = req.headers.authorization;
    if (!header) {
      return res.status(401).send({ error: 'Unauthorized' });
    }

    // Extract user' information from the Authorization Header
    const decodedAuthToken = Buffer.from(header.split(' ')[1], 'base64').toString('utf-8');
    const email = decodedAuthToken.split(':')[0];

    // Ensure the DB contains a user with input email
    const user = await (await dbClient.client.db()).collection('users').findOne({ email });
    if (!user) {
      return res.status(401).send({ error: 'Unauthorized' });
    }

    // Generate an Auth Token and associate it to the user
    const token = uuidv4();
    const key = `auth_${token}`;
    await redisClient.set(key, user._id, 86400);
    return res.status(200).send({ 'x-token': token });
  }

  /**
   * Sign out a user based on an Auth Token
   * @param { Object } req - The request object
   * @param { Object } res - The response object
   */
  static async signingOut(req, res) {
    const key = req.key;
    await redisClient.del(key);
    return res.status(204).send({});
  }
}
