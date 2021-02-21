import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import {
  fetchResources,
  getAllResources,
  getFetchStatus
} from '../store/resourcesSlice.js';

import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';

import pageText from '../assets/text/pageText.json';

import '../css/App.css';


// Returns a list of elements representing resources. 
function formatResources(list) {
  const result = [];
  Object.values(list).forEach(resource => {
    result.push(mapResourceToElement(resource));
  });
  return result;
}

// Returns a resource formatted into the React/HTML object we want
// TODO: Update to formatting we want, or separate component.
// NOTE: These elements are all rendered as a list, so they all need a unique key.
const mapResourceToElement = (resource) => {
  return (
    <div key={resource.id}>
      <h4>{resource.resource_name}</h4>
      <p> -> {resource.resource_type}{resource.open_247 ? ', Open 24/7' : ''} </p>
    </div>
  );
}

// Function based component to use Redux easier.
export default function ResourcePage() {
  // Local state variables 
  const [flags, setFlags] = useState([]);
  
  // Use Redux store for cached & global vars
  const dispatch = useDispatch();
  const resources = useSelector(getAllResources);
  const status = useSelector(getFetchStatus);  
  
  // Only fetch resources if we haven't before
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchResources())
    }
  }, [status, dispatch])
  
  return (
    <div className="ResourcePage">
      <CustomNav />
      <div className="left-text section">
        <p>{status === 'idle' || status === 'loading' ? 'Fetching resources...' : ''}</p>
        <p>{status === 'failed' ? 'Error fetching resources, please try again later.' : ''}</p>
        {resources ? formatResources(resources) : ''}
      </div>
      <Footer />
    </div>
  );
}
