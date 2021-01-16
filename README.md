# CommUnity XP

CommUnity XP is an online platform for students to connect with each other and find resources about mental health. Our vision is to bridge the gap between students facing mental health issues and the resources available to them, and hopefully reduce the stigma surrounding mental illness.

#### Connect with us!
- Instagram: @community_xp
- Email: Contact Mack at mack@communityxp.ca
- Live site coming soon!


## Client

### Available Scripts

First `cd client && npm install`.

In the project directory, you can run:

- `npm start`: Runs the app in the development mode at [http://localhost:3000](http://localhost:3000). The linter will run, and there is hot-reload enabled.

- `npm run build`: Builds an optimized/minified bundle of React and the app, located in the the `build` folder. Ready for [deployment](https://facebook.github.io/create-react-app/docs/deployment)!


### File Structure

In `src` there are five folders and the `index.js` file. The folders are as follows:
- `assets`: For documents, images, and other static content to render.
- `css`: All the CSS files go here!
- `pages`: Despite React being a single page app, this is where large wrapper components that can be thought of as colloquial "pages" are located. For instance, the Home/Landing page. These components are usually used in only one location, which also qualifies them as pages (vs comps).
- `comps`: Smaller React components that belong to each of the pages and that will be used in multiple places.
- `test`: Test files and fixtures go here. Empty and useless at the moment.


### Dependencies

- **React:** React v16.13.1, React-scripts v3.4.1, React-Router v5.2.0, React-Bootstrap v1.0.1. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- **Node:** 8.17
- **NPM:** 6


## Server

### Install Dependencies
`cd server && npm install`

Runs on Node JS 12 with Express.

### Available Scripts
* `npm start`: Simply runs `node app.js` (no hot reload for now)
* `npm run deploy`: Runs the deploy script

### Environment Variables
The following environment variables are passed to the server on startup:
* `RESOURCE_DB_HOST`: defaults to localhost
* `RESOURCE_DB_USER`: defaults to `postgres`
* `RESOURCE_DB_PWD`: defaults to null, required if the DB has a password
* `RESOURCE_DB_PORT`: defaults to 5432, not required
* `RESOURCE_DB_NAME`: defaults to `resources`

In order to set these so `process.env` can find them, you can use fancy env plugins like dotenv, or you can just run the following to export them to your RC file:

```
echo 'export <VAR_NAME>=<val>' >> ~/.<rc_file>
```

### Running Locally
**Using local Postgres DB:**
1. Install [postgres](https://www.postgresql.org/download/) and start local server
2. Using a postgres [client](https://dbeaver.io/download/), create a `resources` db and table. Use the `/db/create_schema.sql` file to help you. 
3. Set the above environment variables if the defaults are not correct
4. Start the server with `npm start`

**Using the live dev DB:**
1. Get the required DB credentials from Mack. *Do not share these creds or commit them to code.*
2. Set the creds to the environment variables above
3. Start the server with `npm start`

### Deploying

This express server is deployed (currently only to development stage) using AWS Lambda, AWS API-Gateway, and the Serverless Framework. 

**How to deploy:**
1. Make your local changes to `app.local.js` and test that that works. *DO NOT edit the last 6 lines of this file, after the comment about this. DO NOT make changes to `app.js`, as they will be overridden by deploy.*
2. When ready to deploy, make sure you have globally installed the serverless framework: `npm -g install serverless`. Confirm by running `sls -v`. 
3. Run the deploy script with `npm run deploy` from the `/server` directory. That's it - serverless takes care of the rest.
4. The serverless deploy will print out an endpoint to your terminal. Use this to test - this is the live server! 

**Making Changes**
* `/scripts/deploy.sh` is the Bash file that prepares the file to deploy, and executes the serverless command
* `serverless.yml` in the top level handles the configuration of the serverless deployment to AWS Lambda
* AWS Console will have tools to make other changes such as permissions, API keys, roles, logs, etc. 


### API Endpoints

1. GET `/ping`: for healthcheck, should return 200
2. GET `/v1/resource/all`: fetch JSON array of all the resources
3. GET `/v1/resource/id/:id`: fetch resource JSON by integer `id`
4. GET `/v1/resource/name/:name`: fetch resource JSON by string `name`

No insert or update, can do those manually with psql queries for now.


### Authentication

Requires API Key provided by the UXP team. 
