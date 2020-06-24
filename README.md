# CommUnity XP

CommUnity XP is an online platform for students to connect with each other and find resources about mental health. Our vision is to bridge the gap between students facing mental health issues and the resources available to them, and hopefully reduce the stigma surrounding mental illness.

UXP started as a social impact project by four University of Waterloo students and alumni. Dani founded the project in early 2020, and Ben soon joined to help with the site design. Mack and Lars came aboard later to help with the information architecture and fullstack development. We are super proud of the QTPOC representation on our team, and our diverse perspectives benefit the project.

#### Connect with us!
- Instagram: @community_xp
- Email: Contact Mack at ms2wilso@uwaterloo.ca
- Live site coming soon!


## Running and Developing

### Dependencies

- **React:** React v16.13.1, React-scripts v3.4.1, React-Router v5.2.0, React-Bootstrap v1.0.1. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- **Node:** v8.17.0
- **NPM:** v6.13.4

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode at [http://localhost:3000](http://localhost:3000). The linter will run, and there is hot-reload enabled.

- `npm run build`: Builds an optimized/minified bundle of React and the app, located in the the `build` folder. Ready for [deployment](https://facebook.github.io/create-react-app/docs/deployment)!

- `npm test`: Launches the test runner in the interactive watch mode. See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- `npm run eject`: Please don't use this. You probably wont need to, so don't. If you do, research it first. **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### File Structure

In `src` there are five folders and the `index.js` file. The folders are as follows:
- `assets`: For documents, images, and other static content to render.
- `css`: All the CSS files go here!
- `pages`: Despite React being a single page app, this is where large wrapper components that can be thought of as colloquial "pages" are located. For instance, the Home/Landing page. These components are usually used in only one location, which also qualifies them as pages (vs comps).
- `comps`: Smaller React components that belong to each of the pages and that will be used in multiple places.
- `test`: Test files and fixtures go here. Empty and useless at the moment.
