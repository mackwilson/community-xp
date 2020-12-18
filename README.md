# CommUnity XP

CommUnity XP is an online platform for students to connect with each other and find resources about mental health. Our vision is to bridge the gap between students facing mental health issues and the resources available to them, and hopefully reduce the stigma surrounding mental illness.

#### Connect with us!
- Instagram: @community_xp
- Email: Contact Mack at mack@communityxp.ca
- Live site coming soon!


## Client

### Dependencies

- **React:** React v16.13.1, React-scripts v3.4.1, React-Router v5.2.0, React-Bootstrap v1.0.1. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- **Node:** v8.17.0
- **NPM:** v6.13.4

### Available Scripts

First `cd client`.

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



## Server

### Running Locally
First `cd server`.

**Using local Postgres DB:**
1. Install postgres and start local server
2. Create a `resources` db and table (tooling available in the `/db` subdirectory)
3. Use the connection settings in the `/db/resourceModel.js` pgPool
4. Start the server with `node app.js`, or simply use the provided npm script, `npm start`

**Using the AWS RDS dev DB:**
1. Get the required DB credentials from Mack 
2. Set the creds to the environment variables used in the following step in your bashrc or zshrc, like this (repeat for each): 
  ```
  echo 'export RESOURCE_DB_PWD=<pwd>' >> ~/.zshrc
  ```
3. Start the server locally with the necessary env variables with `npm run dev`, which passes the env vars as arguments, like this:
  ```
  RESOURCE_DB_HOST="$RESOURCE_DB_HOST" RESOURCE_DB_USER="RESOURCE_DB_USER" RESOURCE_DB_PWD="$RESOURCE_DB_PWD" node app.js
  ```

### API Endpoints

1. GET `/ping`: for healthcheck, should return 200
2. GET `/api/resources/all`: fetch JSON array of all the resources
3. GET `/api/resource/id?id=<#>`: fetch resource JSON with specific id
4. GET `/api/resource/name?name=<abcd>`: fetch resource JSON with specific name

No insert or update, can do those manually with psql queries for now.


### Authentication

Coming soon.