# Description
This is the backend of the **todo app module**. It can be launched by `npm run dev` or `npm run start`. And we have the URL `http://localhost:5000`.

## Database
We need to specify the database URI in the `.env` file and modify the variable `MONGODB_URI_DEV`.

There is only one model powered by MongoDB using Mongoose schema like :
```javascript
{    
    done: {type: Boolean, default: false},
    title: {type: String, required: [true, "A title is needed"]},
    description: {type: String},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
}
```
We know by default that by a task newly created is not done, so we only need only the attribue `task` without `done`.

Every document in the database has an `_id` which can be used later with the API.

## API
* `GET /api/tasks` which returns all the tasks in the database
* `POST /api/tasks/add` to add a task in the database by sending a HTTP wiht the body : `{"task": "My task to do"}`
* `PUT /api/tasks/:_id/check` to mark a task as done
* `PUT /api/tasks/:_id/uncheck` to mark a task as not done
* `PUT /api/tasks/:_id` to update the title and the description of a task
* `DELETE /api/tasks/:_id` to delete a task