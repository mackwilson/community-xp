import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import pageText from '../assets/text/pageText.json';
import model from '../models/uxpServerModel.js';
import '../css/App.css';

// Returns a list of elements representing resources. 
function formatResources(list) {
  const result = [];
  Object.values(list).forEach(resource => {
    result.push(createResourceElement(resource));
  });
  return result;
}

// Returns a resource formatted into the React/HTML object we want
// TODO: Update to whatever we want.
// NOTE: These elements are all rendered as a list, so they all need a unique key.
function createResourceElement(resource) {
  return (
    <div key={resource.id}>
      <h4>{resource.resource_name}</h4>
      <p> -> {resource.resource_type}{resource.open_247 ? ', 24/7' : ''} </p>
      <p>{"\n"}</p>
    </div>
  );
}

export default class ResourcePage extends React.Component {
  /* 
    Because we are using Axios to asynchronously fetch data from the API we have 
    to handle the response and rendering of that data uniquely. 
    We render once with initial settings and empty resources to set the UI.
    Then we update state which will cause a second render once we have data.
  */
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
      isFetching: true // TODO: Instead of text we can have some loading animations
    };
  }
  
  componentDidMount() {
    this.fetchResources();
  }
  
  fetchResources() {
    this.setState({...this.state, isFetching: true});
    // Get resources (async), wait for response, and update state with response
    model.getAllResources().then(data => {
      this.setState({resources: data, isFetching: false});
    });
  }
  
  render() {
    const formattedResources = formatResources(this.state.resources);
    return (
      <div className="ResourcePage">
        <PublicNavbar />
        <BigHeader title="Resources" subtitle={pageText.resources.header}/>
        <div className="left-text section">
          <p>{this.state.isFetching ? 'Fetching users...' : ''}</p>
          {formattedResources}
        </div>
        <Footer />
      </div>
    );
  }
}
