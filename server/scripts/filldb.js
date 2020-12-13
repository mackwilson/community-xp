const fs = require('fs');
const Pool = require('pg').Pool;

const resourcePath = '/Users/mack.wilson/Documents/Personal/community-xp/server/db/resources.json';
const schemaPath = '/Users/mack.wilson/Documents/Personal/community-xp/server/db/schema.json';
const resourceData = fs.readFileSync(resourcePath);
const schemaData = fs.readFileSync(schemaPath);
let allResources = JSON.parse(resourceData);
const schema = JSON.parse(schemaData);

console.log("parsing json data ... \n")

allResources.forEach(resource => {
  console.log(resource.resource_name);
  const keys = Object.keys(resource);
  keys.forEach(field => {
    if (schema[field].required && resource[field] === "") {
      resource[field] = schema[field].default;
    }
    if (field === 'hours') {
      // handle hours json
      let resultingJson = {};
      if (resource[field] != "") {
        const days = resource[field].split(',');
        days.forEach(day => {
          const entry = day.split('=');
          resultingJson[entry[0]] = entry[1];
        });
      }
      resource[field] = JSON.stringify(resultingJson);
    }
    if (resource[field] === "TRUE") {
      resource[field] = true;
    }
    if (resource[field] === "FALSE") {
      resource[field] = false;
    }
    if (field === 'religions') {
      resource[field] = [resource[field]];
    }
  });
});

console.log("parsing complete, connecting to db...");

// create pg pool connection 
const pool = new Pool({
  /*
    Use env vars instead of committing to code. 
    Host, User, & PW can be obtained from Mack.
    Set them to env vars from terminal before running this i.e.:
    `export UXP_PASSWORD="<password>"`
  */
  user: process.env.UXP_USER,
  host: process.env.RESOURCES_HOST_DEV,
  database: 'resources',
  port: 5432,
  password: process.env.UXP_PASSWORD
});

allResources.forEach(resource => {
  const vals = Object.values(resource);
  const queryString = 'INSERT INTO resources (resource_name,organization,resource_type,'
    +'address_street,address_city,phone_general,phone_support,email,website,open_247,'
    +'hours,short_term,long_term,individual,group_support,free_access,paid_access,'
    +'in_person,by_phone,video,live_chat,online,drop_in,appointment,by_referral,'
    +'referrals,children,youth,adult,families,post_secondary,all_ages,queer,trans,'
    +'non_binary,women,men,all_genders,black,indigenous,immigrant,neurodiv,disabled,'
    +'queer_friendly,trans_friendly,bipoc_friendly,disability_friendly,ndiv_friendly,'
    +'interpreter,nurse,psychologist,sw,psychotherapist,ot,shelter,housing,food,'
    +'hygeine,counseling,recreation,peer_support,resource_bank,crisis,medical,outreach,'
    +'employment,legal,abuse,trauma,addiction,religions,languages) '
    +'values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,'
    +'$16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30,'
    +'$31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45,'
    +'$46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60,'
    +'$61, $62, $63, $64, $65, $66, $67, $68, $69, $70, $71, $72);';

  pool.query(queryString, vals,
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log("inserted resource " + results.resource_name + " with id " + results.id);
  });
  
  // pool.query('SELECT * FROM resources WHERE id=5;', (error, results) => {
  //   if (error) {
  //     pool.end().then(() => console.log('pool was closed due to error'));
  //     throw error;
  //   }
  //   console.log(results.rows);
  // });
});

// close the db connection 
pool.end().then(() => console.log('pool has ended'));

