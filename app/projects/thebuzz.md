## Overview

This project was for the class Software Engineering, which was meant to mock an agile work environment. Team members took turns working on different aspects of the project each sprint. The roles included:

- Project Manager
- Web Developer
- Backend Engineer
- Mobile Developer
- Admin CLI Developer

## 🥞 The Stack

The project manager was responsible for checking in on other team members as well as setting up the Heroku environment. Bash scripts were setup to deploy changes directly to Heroku.

### Mobile App

The mobile app used the Flutter framework.

### Web

The React website was written in TypeScript, styled with Bootstrap, and built with webpack.

### Admin CLI

The Java admin CLI gave the administrators of the website direct access to the data bypassing the REST API by connecting directly to the PostgreSQL database.

### Backend

The REST API Backend used the Java Spark framework.

#### Database Tables

- `messages(message_id, msg, post_time, user_id)`
- `upvotes(message_id, user_id)`
- `downvotes(message_id, user_id)`
- `users(user_id, username, bio, email, join_date)`
- `comments(comment_id, comment, post_time, message_id, user_id)`

#### Resources

##### Message

A Message has an `int message_id` and `string msg` value. The upvotes and downvotes array contain the user ids of the people who have upvoted and downvoted the message.

```json
{
    "message_id": 12,
    "msg": "This is an example of a message.",
    "upvotes": [
        3, 4, 5 /* user_id values */
    ],
    "downvotes": [
        78, 2, 3 /* user_id values */
    ]
}
```

**Getting Messages**

Send a `[GET] /messages` request to get an array of all messages values.

**Posting a Message**

Send a `[POST] /messages` request with the message as json in the body to add a new message.

**Get Message**

Send a `[GET] /messages/:messageId` request to get an individual message.

**Edit Message**

Send a `[PUT] /messages/:messageId` request with the new message value as json in the body to edit an existing message.

**Delete Message**

Send a `[DELETE] /messages/:messageId` request to delete a message.

**Upvote Message**

Send a `[POST] /messages/:messageId/upvote/:userId` to upvote a message as the user with userId.

**Downvote Message**

Send a `[POST] /messages/:messageId/downvote/:userId` to downvote a message as the user with userId.

**Remove Message Vote**

Send a `[DELETE] /messages/:messageId/upvote/:userId` or `[DELETE] /messages/:messageId/downvote/:userId` to remove any existing upvotes or downvotes for that message with the userId.

**Get Users**

Send a `[GET]  /users` request to get all users.

**Get User**

Send a `[GET]  /users/:user_id` request to get an individual user.

**Edit User Info**

Send a `[PUT]  /users/:user_id` request to edit the information of a user.

**Delete User**

Send a `[DELETE]  /users/:user_id` request to delete a user.

**Get Message Comments**

Send a `[GET] /messages/:messageId/comments` request to get all the comments for a message.

**Create a new Comment on a Message**

Send a `[POST] /messages/:messageId/comments` request to add a comment to a message.

**Get Comment**

Send a `[GET] /comments/:comment_id` request to get an individual comment.

**Delete a Comment**

Send a `[DELETE] /comments/:comment_id` request to delete a comment.

**Authenticate User**

Send a `[GET] /auth` request to authenticate a user using Google Sign in.