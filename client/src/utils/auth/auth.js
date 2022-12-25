import auth0 from 'auth0-js';
import axios from "axios";

const webAuth = new auth0.WebAuth({
  clientID: 'uB0699pdrL89uBtPtJIunSnvw1LpFg1K',
  domain: 'dev-ahu7b68qhcyj61fc.us.auth0.com',
  redirectUri: 'http://localhost:8081/callback',
  responseType: 'id_token token'
});


let token = {};
let userInfo = {};
let userID;

const handleAuth = (cb) => {
  webAuth.parseHash((error, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      token.accessToken = authResult.accessToken;
      token.idToken = authResult.idToken;
      token.expiry = new Date().getTime() + authResult.expiresIn * 1000
      cb();
    } else {
      console.log(error);
    }
  });
};

function currentUser() {


  // Get AuthID
  if(token.accessToken) {
    webAuth.client.userInfo(token.accessToken, function(err, user) {
      // Trim user.sub so only the ID numbers remain
      if(user.sub.indexOf('|') !== -1) {
        userID = user.sub.slice(user.sub.indexOf('|') + 1);
      }
      userInfo = user;

      // Search mongodb Users collection if the AuthID Exists
      if(userID) {
        findUser(userID);
       }

      // if no user exists, run the createUser() function
      //createUser(userID, userInfo.given_name, userInfo.family_name, userInfo.locale);
    });
  }
}

async function findUser(userid) {
  const response = await axios.get("api/userItem/" + userid)
  .catch(error => {
    console.log('No user found, creating data for this user')
    createUser(userID, userInfo.given_name, userInfo.family_name, userInfo.locale);
  })
}


async function createUser(userid, firstName, lastName, locale) {
  const response = await axios.post("api/userItem/", {
    // push location data to the database
    AuthID: userid,
    family_name: firstName,
    given_name: lastName,
    locale: locale,
  });

  console.log('User Created')
}

const isLogged = () => {
  return token.accessToken && new Date().getTime() < token.expiry;
}

const logUserOut = () => {
  token = {};
  webAuth.logout({
    returnTo: 'http://localhost:8081',
    clientID: 'uB0699pdrL89uBtPtJIunSnvw1LpFg1K'

  })
}

function login() {
  webAuth.authorize();
}


export { login, handleAuth, isLogged, logUserOut, currentUser }
