import express from "express";
import bodyParser from "body-parser";
import data from "../Data/data.js";

const postRouter = express.Router();

postRouter.use(bodyParser.json()); // to use body object in requests

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - body
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         userId:
 *           type: integer
 *           description: id of author
 *         title:
 *           type: string
 *           description: title of post
 *         body:
 *           type: string
 *           descripton: content of post
 *       example:
 *         id: 1
 *         userId: 1
 *         title: my title
 *         body: my article
 *
 */

/**
 * @swagger
 *  tags:
 *    name: Posts
 *    description: posts of users
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Returns all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

postRouter.get("/", (req, res) => {
  res.send(data);
});

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: gets posts by id
 *     tags: [Posts]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of post
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: posts by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       400:
 *         description: post can not be found
 */

postRouter.get("/:id", (req, res) => {
  const post = data.find((post) => post.id === +req.params.id);

  if (!post) {
    res.sendStatus(404);
  }

  res.send(post);
});

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */

postRouter.post("/", (req, res) => {
  try {
    const post = {
      ...req.body,
      id: data.length + 1,
    };

    data.push(post);

    res.send(post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

/**
 * @swagger
 *  /posts/{id}:
 *    delete:
 *      summary: removes post from array
 *      tags: [Posts]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: post id
 *          required: true
 *          schema:
 *            type: integer
 *      responses:
 *        200:
 *          description: The post was deleted
 *        404:
 *          description: The post was not found
 *
 */

postRouter.delete("/:id", (req, res) => {
  let post = data.find((post) => post.id === +req.params.id);
  const index = data.indexOf(post);

  if (post) {
    data.splice(index, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

export default postRouter;
