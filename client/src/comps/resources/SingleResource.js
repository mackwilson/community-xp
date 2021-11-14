import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link, useParams} from "react-router-dom";
import { useSelector } from 'react-redux'

import CustomNav from '../../comps/CustomNav.js';
import Footer from '../../comps/Footer.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import pageText from '../../assets/text/pageText.json';

import '../../css/App.css';
import '../../css/Resources.css';

const GOOGLE_MAPS_SEARCH_ENDPOINT = "https://www.google.com/maps/search/?api=1&query="

const notFound = (
  <div className="section centre-text">
    <h4>Oh no!</h4>
    <p>We're sorry, we can't find the selected resource right now.</p>
    <p>If you think this is an error, please contact us at <a href="mailto:info@communityxp.ca" target="_blank" rel="noopener noreferrer">info@communityxp.ca</a>. Thank you.</p>
  </div>
)

const missingInfo = (
  <p>{pageText.resources.missing}</p>
)

function parseHours(hours) {
  let result = []
  Object.keys(hours).forEach(k => {
    result.push(
      <li key={k}><span className="bold">{k}:</span> {hours[k]}</li>
    )
  })
  return result
}

function parseAccessInfo(resource) {
  let result = []
  if (resource.free_access) { result.push(<p>Free</p>) }
  if (resource.paid_access) { result.push(<p>Paid</p>) }
  if (resource.drop_in) { result.push(<p>Drop In</p>) }
  if (resource.appointment) { result.push(<p>By Appointment</p>) }
  if (resource.by_referral) { result.push(<p>By Referral</p>) }
  return result
}

function parseFormatInfo(resource) {
  let result = []
  if (resource.in_person) { result.push(<p>In Person</p>) }
  if (resource.by_phone) { result.push(<p>By Phone</p>) }
  if (resource.video) { result.push(<p>By Video</p>) }
  if (resource.live_chat) { result.push(<p>Live Chat</p>) }
  if (resource.online) { result.push(<p>Online</p>) }
  if (resource.short_term) { result.push(<p>Short Term (shorter than a month)</p>) }
  if (resource.long_term) { result.push(<p>Long Term (longer than a month)</p>) }
  if (resource.individual) { result.push(<p>Individual</p>) }
  if (resource.group) { result.push(<p>Group</p>) }
  return result
}

function parseAudienceInfo(resource) {
  let result = []
  if (resource.children) { result.push(<p>Children (under 18)</p>) }
  if (resource.youth) { result.push(<p>Youth (16-25)</p>) }
  if (resource.adult) { result.push(<p>Adults (18+)</p>) }
  if (resource.families) { result.push(<p>Families (guardians and children)</p>) }
  if (resource.post_secondary) { result.push(<p>Post Secondary Students</p>) }
  if (resource.all_ages) { result.push(<p>All Ages</p>) }
  if (resource.queer) { result.push(<p>2SLGBTQIA+ People</p>) }
  if (resource.trans) { result.push(<p>Trans+ People</p>) }
  if (resource.non_binary) { result.push(<p>Non Binary People</p>) }
  if (resource.women) { result.push(<p>Women & Womxn</p>) }
  if (resource.men) { result.push(<p>Men</p>) }
  if (resource.all_genders) { result.push(<p>All Genders</p>) }
  if (resource.black) { result.push(<p>Black People</p>) }
  if (resource.indigenous) { result.push(<p>Indigenous Peoples</p>) }
  if (resource.immigrant) { result.push(<p>New Canadians</p>) }
  if (resource.neurodiv) { result.push(<p>Neurodivergent People</p>) }
  if (resource.disabled) { result.push(<p>Disabled People</p>) }
  return result
}

function parseInclusivityInfo(resource) {
  let result = []
  if (resource.queer_friendly) { result.push(<p>Queer (LGB) Friendly</p>) }
  if (resource.trans_friendly) { result.push(<p>Trans+ Friendly</p>) }
  if (resource.bipoc_friendly) { result.push(<p>BIPOC Friendly</p>) }
  if (resource.disability_friendly) { result.push(<p>Disability Friendly</p>) }
  if (resource.ndiv_friendly) { result.push(<p>Neurodivergent Friendly</p>) }
  return result
}

function parseServicesInfo(resource) {
  let result = []
  if (resource.shelter) { result.push(<p>Emergency Shelter</p>) }
  if (resource.housing) { result.push(<p>Housing</p>) }
  if (resource.food) { result.push(<p>Food</p>) }
  if (resource.hygeine) { result.push(<p>Hygeine</p>) }
  if (resource.counselling) { result.push(<p>Counselling</p>) }
  if (resource.recreation) { result.push(<p>Recreation</p>) }
  if (resource.peer_support) { result.push(<p>Peer Support</p>) }
  if (resource.resource_bank) { result.push(<p>Resource Bank</p>) }
  if (resource.crisis) { result.push(<p>Crisis Support</p>) }
  if (resource.medical) { result.push(<p>Medical Assistance</p>) }
  if (resource.referrals) { result.push(<p>Referrals</p>) }
  if (resource.outreach) { result.push(<p>Outreach & Advocacy</p>) }
  return result
}

function parseSupportInfo(resource) {
  let result = []
  if (resource.employment) { result.push(<p>Employment Support</p>) }
  if (resource.legal) { result.push(<p>Legal Support</p>) }
  if (resource.abuse) { result.push(<p>Abuse</p>) }
  if (resource.trauma) { result.push(<p>Trauma</p>) }
  if (resource.addiction) { result.push(<p>Addiction & Substance Use</p>) }
  if (resource.religions.length) { result.push(<p>{"Religion: " + resource.religions.toString()}</p>) }
  if (resource.languages.length) { result.push(<p>{"Language: " + resource.languages.toString()}</p>) }
  return result
}

function parseStaffInfo(resource) {
  let result = []
  if (resource.interpreter) { result.push(<p>Interpreter</p>) }
  if (resource.nurse) { result.push(<p>Nurse or Other Medical Practitioner</p>) }
  if (resource.psychologist) { result.push(<p>Psychologist</p>) }
  if (resource.sw) { result.push(<p>Social Worker</p>) }
  if (resource.psychotherapist) { result.push(<p>Pyschotherapist</p>) }
  if (resource.ot) { result.push(<p>Occupational Therapist</p>) }
  return result
}

function getLink(text, url) {
  return (
    <Link to={{ pathname: url }} target="_blank" rel="noopener noreferrer">
      <Button className="darkText pinkFill-light pinkShadow btn thinBorder darkBorder">
        <p className="bold">{text}</p>
      </Button>
    </Link>
  )
}

function getGMapsQuery(address) {
  let trimmedAddress = address.replace('/[.,]/g', '')
  let queryString = trimmedAddress.replace(' ', '+')
  return GOOGLE_MAPS_SEARCH_ENDPOINT + queryString
}

function resourcePage(resource) {
  let city = resource.address_city ? ', ' + resource.address_city : '';
  let address = resource.address_street ? resource.address_street + city : '';

  let access = parseAccessInfo(resource)
  let format = parseFormatInfo(resource)
  let audience = parseAudienceInfo(resource)
  let inclusion = parseInclusivityInfo(resource)
  let services = parseServicesInfo(resource)
  let specializations = parseSupportInfo(resource)
  let staff = parseStaffInfo(resource)

  return (
    <div>
      <div className="whiteFill title-box">
        <h2>{resource.organization ? resource.organization + " " + resource.resource_name : resource.resource_name}</h2>
        <p>{resource.open_247 ? resource.resource_type + ", Open 24/7" : resource.resource_type}</p>
        <p className="spaceTop">{resource.website ? getLink("Website", resource.website) : ''}  {resource.email ? getLink("Email", "mailto:"+resource.email) : ''} {address ? getLink("Google Maps", getGMapsQuery(address)) : ''}</p>
      </div>
      <div className="width-80">
        <Row>
          <Col md={6}>
            <h4>Contact</h4>
            <p><span className="bold">{address ? "Address: ": ""}</span>{address ? address : ""}</p>
            <p><span className="bold">{resource.phone_general ? "Phone: " : ""}</span>{resource.phone_general ? resource.phone_general : ""}</p>
            <p><span className="bold">{resource.phone_support ? "Support Line: " : ""}</span>{resource.phone_support ? resource.phone_support : ""}</p>
            <p><span className="bold">{resource.hours ? "Hours: " : ""}</span> {resource.open_247 ? "24/7" : ""}</p>
            <ul>{resource.hours && !resource.open_247 ? parseHours(resource.hours) : ""}</ul>

            <h4>Access</h4>
            { access.length ? access : missingInfo }

            <h4>Format</h4>
            { format.length ? format : missingInfo }

            <h4>Audience</h4>
            { audience.length ? audience : missingInfo }
          </Col>

          <Col xs ={12} md={6}>
            <h4>Inclusivity</h4>
            { inclusion.length ? inclusion : missingInfo }

            <h4>Services</h4>
            { services.length ? services : missingInfo }

            <h4>Specializations</h4>
            { specializations.length ? specializations : missingInfo }

            <h4>Staff</h4>
            { staff.length ? staff : missingInfo }

          </Col>
        </Row>
        <div className="whiteFill title-box">
            <h4>See an error?</h4>
            <p>If you'd like to suggest an update, send us an email at <a href="mailto:info@communityxp.ca" target="_blank" rel="noopener noreferrer">info@communityxp.ca</a>. Mention the resource number {resource.id} in the subject line, and describe the requested update.</p>
        </div>
      </div>
    </div>
  );
}

// Function based component to use Redux easier.
export default function SingleResource() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  id = + id;
  const resource = useSelector(state => {
    const l = state.resources.list
    return l.find(r => r.id === id)
  })

  return (
    <div className="ResourcePage">
      <CustomNav />
      <Fade>
        <div className="single-resource">
          <Link to="/resources">
            <Button className="darkText blueFill pinkShadow btn thinBorder darkBorder">
              <FontAwesomeIcon icon={faArrowLeft} />
              {" Go Back"}
            </Button>
          </Link>

          {resource ? resourcePage(resource) : notFound}
        </div>
      </Fade>

      <Footer />
    </div>
  )
}
