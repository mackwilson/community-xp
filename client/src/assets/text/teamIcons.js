import mack from '../images/mack.jpg';
import benny from '../images/benny.jpg';
import dani from '../images/dani.jpg';

const team = [
  {
    name: "Dani",
    role: "Founder & Executive Director",
    pronouns: "they/them",
    photo: dani,
    text: "Dani is a recent graduate from the University of Waterloo. ",
    imgAlt: "dani"
  }, {
    name: "Ben",
    role: "Director of Operations",
    imgAlt: "benny",
    pronouns: "he/they",
    photo: benny,
    email: "bskinner@communityxp.ca",
    text: "Ben has an undergraduate degree in Peace and Conflict Studies from the University of Waterloo, and recently went back for his Masters. They cover the broad, vague umbrella of Operations for UXP, meaning they do anything and everything to keep the group running! This includes most of our outreach and organization, so give him a shout if you're interested in connecting for business purposes."
  // }, {
  //   name: "Lars",
  //   role: "Head of User Experience",
  //   imgAlt: "lars",
  //   pronouns: "he/him",
  //   text: "Lars is in his fifth and final year of Systems Design Engineering at the University of Waterloo."
  }, {
    name: "Mack",
    role: "Head of Development",
    photo: mack,
    imgAlt: "mack",
    email: "mwilson@communityxp.ca",
    pronouns: "they/them",
    text: "Mack is a recent Engineering graduate from the University of Waterloo. They work full time as a back-end Software Engineer for a tech startup. Mack joined CommUnity XP in May 2020 to lead the tech side of the site. They are responsible for web development, architecture, and system administration, and work closely with Lars and Cash to incorporate the visual and UX design of the site. They are loving the energy from the entire UXP team and are super happy to be here!"
  }, {
    name: "Cash",
    role: "Lead Digital Content Designer",
    imgAlt: "Cash",
    email: "cash@cloudland.ca",
    pronouns: "she/her",
    "text": "Cash manages, designs, and creates all digital content for CommUnity XP, from our Instagram page to our web design and more. She joined the team in August 2020 and we are so excited to have her."
  }, {
    name: "Laurel",
    role: "Full Stack Developer",
    pronouns: "she/her",
    text: "Laurel is also a recent engineering graduate from the University of Waterloo. She works full-time as an Android Developer for a tech startup. Since January 2021, she has worked heavily with Mack to iterate and build out all areas of the site."
  }
];

export default team;