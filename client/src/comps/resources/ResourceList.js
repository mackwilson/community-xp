import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDollarSign,
  faTransgenderAlt,
  faPhone,
  faVideo,
  faComments,
  faLaptop,
  faCalendarCheck,
  faBriefcaseMedical,
  faHome,
  faUtensils,
  faVenus,
  faDoorOpen,
  faRainbow,
  faFistRaised
} from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import {
  fetchResources,
  getAllResources,
  getFetchStatus
} from '../../store/resourcesSlice.js';

import '../../css/App.css';

// CONSTANTS
const baseClasses = "entry darkText "
const normClasses = ""
const altClasses = "whiteFill"

// Icons
const open247 = <div className="icon-text">24/7</div>
const paid = <FontAwesomeIcon icon={faDollarSign}/>
const blm = <FontAwesomeIcon icon={faFistRaised} />
const trans = <FontAwesomeIcon icon={faTransgenderAlt} />
const phone = <FontAwesomeIcon icon={faPhone} />
const video = <FontAwesomeIcon icon={faVideo} />
const chat = <FontAwesomeIcon icon={faComments} />
const online = <FontAwesomeIcon icon={faLaptop} />
const food = <FontAwesomeIcon icon={faUtensils} />
const shelter = <FontAwesomeIcon icon={faHome} />
const med = <FontAwesomeIcon icon={faBriefcaseMedical} />
const womxn = <FontAwesomeIcon icon={faVenus} />
const appt = <FontAwesomeIcon icon={faCalendarCheck} />
const queer = <FontAwesomeIcon icon={faRainbow} />
const dropin = <FontAwesomeIcon icon={faDoorOpen} />

// Returns a list of elements representing resources.
function formatResources(list) {
  const result = [];
  Object.values(list).forEach((resource, idx) => {
    result.push(mapResourceToElement(resource, idx));
  });
  return result;
}

// Returns a link object {
function getLink(text, url) {
  return (
    <Link to={{ pathname: url }} target="_blank">
      <Button className="darkText pinkFill-light pinkShadow btn thinBorder darkBorder">
        {text}
      </Button>
    </Link>
  )
}

function linkToPage(id) {
  return (
    <Link to={`/resources/${id}`}>
      <Button className="darkText pinkFill-light pinkShadow btn thinBorder darkBorder">
        <span className="bold">More Info...</span>
      </Button>
    </Link>
  )
}

// Returns a resource formatted into the React/HTML object we want
// TODO: Update to formatting we want, or separate component.
// NOTE: These elements are all rendered as a list, so they all need a unique key.
const mapResourceToElement = (resource, idx) => {
  let classes = idx %2 === 0 ? normClasses : altClasses;
  let number = resource.phone_support ? resource.phone_support : resource.phone_general;
  let city = resource.address_city ? ', ' + resource.address_city : '';
  let address = resource.address_street ? resource.address_street + city : '';

  return (
    <Fade key={idx}>
      <Row className={baseClasses + classes}>
        <Col xs={9}>
          <h5>{resource.resource_name}</h5>
          <p>{number ? number : ''}</p>
          <p>{address ? address : ''}</p>
          <p>{linkToPage(resource.id)}  {resource.website ? getLink("Website", resource.website) : ''}  {resource.email ? getLink("Email", "mailto:"+resource.email) : ''}</p>
        </Col>
        <Col className="right-text icon-box">
          {resource.open_247 ? open247 : ''}
          {!resource.free_access && resource.paid_access ? paid : ''}
          {resource.shelter || resource.housing ? shelter : ''}
          {resource.food ? food : ''}
          {resource.medical || resource.nurse ? med : ''}
          {resource.indigenous || resource.black || resource.bipoc_friendly ? blm : ''}
          {resource.trans || resource.non_binary || resource.trans_friendly ? trans : ''}
          {resource.queer || resource.queer_friendly ? queer : ''}
          {resource.by_phone ? phone : ''}
          {resource.video ? video : ''}
          {resource.live_chat ? chat : ''}
          {resource.online || resource.resource_bank ? online : ''}
          {resource.women ? womxn : ''}
          {resource.drop_in ? dropin : ''}
          {resource.appointment && !resource.drop_in ? appt : ''}
        </Col>
      </Row>
    </Fade>
  );
}

const Error = (
  <div className="centre-text section width-80">
    <h4>Oh no!</h4>
    <p>We're having some trouble right now. Sorry about this! Please try again later.</p>
  </div>
);

const Loading = (
  <div className="centre-text section width-80">
    <h5>Loading resources...</h5>
  </div>
);

function getStatus(status) {
  return status === 'failed' ? Error : Loading
}


export default function ResourceList() {
  const resources = useSelector(getAllResources);
  const status = useSelector(getFetchStatus);

  const dispatch = useDispatch();

  // Only fetch resources if we haven't before
  useEffect(() => {
    if (resources === null || resources.length === 0) {
      dispatch(fetchResources())
    }
  }, [resources, dispatch])

  return (
    <div>
        { status === 'success' ? formatResources(resources) : getStatus(status)}
    </div>
  )
}
