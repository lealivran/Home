import React from 'react'
import classes from './CreateAnnonce.scss'
import fetch from 'isomorphic-fetch'
let state = {
"title": "sqjdjlsqj",
"description": "jxkcjhskljxklwjljwlkjcklwxjcjxwlkjcwxkcjlwjclkjwxclkwj",
"vente": "false",
"price": 2642406220,
"pictures": [
  {
    "uri": "http://www.spy-immo.fr/site/images/normal/Laius-des-pages-annonces-Annonces---Maisons549be49f405bb.pnge"
  }
],
"furnished": "true",
"area": 2637318104,
"orientation": "west",
"type": "house",
"address": {
  "building": 57,
  "street": "Crown Street",
  "zipcode": 31258,
  "coord": {
    "latitude": -85.612774,
    "longitude": -150.798967
  },
  "city": "Vivian"
},
"features": {
  "roomNumber": 21,
  "bedroomNumber": 7,
  "stairs": 1,
  "cave": "true",
  "parking": "false",
  "terrace": "true",
  "balcony": "false",
  "garden": "true",
  "pool": "true"
}
}

function parseData(){
  //pure function to parse form to formData
  let form = new FormData()
  form.append('images', state.images);
  return form
}
const handleSubmit = (event) =>{
  event.preventDefault();
  let data = parseData()
    fetch('/create/annonce', {
      method: 'post',
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'multipart/form-data'
      },
      body: data
    })
    .then( lastAnnonces => {
      this.setState({annonces: lastAnnonces.data })
    })
    .catch( error => {
      state.done = true
      console.warn(error);
    });
}


export const CreateAnnonce = (props) => (
  <div>
    <form action="/annonce" enctype="multipart/form-data" method="POST" >
    <input type="file" name="uploads" multiple="multiple" onChange={upload}/><br/>
    <input type="text" name="title"  placeholder="Lorum"/><br/>
    <input type="text" name="description"  placeholder="Lorum"/><br/>
    <input type="text" name="vente"  placeholder="Lorum"/><br/>
    <input type="text" name="vente"  placeholder="Lorum"/><br/>
            <button type="submit">Upload</button>
    </form>
    {(state.done)?<div>hdjksqhjkdqs</div>:<div></div> }
  </div>
)

CreateAnnonce.propTypes = {
  // counter: React.PropTypes.number.isRequired,
  // doubleAsync: React.PropTypes.func.isRequired,
  // increment: React.PropTypes.func.isRequired
}
const upload =(event)=> {
  // console.log(event.target.value);
  // console.log(CreateAnnonce);
  state.images = event.target.value
  console.log(state);
  let formData = new FormData();
}

export default CreateAnnonce
