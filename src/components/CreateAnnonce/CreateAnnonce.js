import React from 'react'
import classes from './CreateAnnonce.scss'
import fetch from 'isomorphic-fetch'
let state = {
  uploads: ''
}

function parseData(){
  //pure function to parse form to formData

}
const handleSubmit = (event) =>{
  event.preventDefault();
  console.log(state);
  let form = new FormData()
  form.append('uploads', state.images);
    fetch('/annonce', {
      method: 'post',
      body: form
    })
    .then( lastAnnonces => {
    console.log(lastAnnonces);
    })
    .catch( error => {
      state.done = true
      console.warn(error);
    });
}


export const CreateAnnonce = (props) => (
  <div>
    <form action="/annonce" enctype="multipart/form-data" method="POST" onSubmit={handleSubmit} >
    <input type="file" name="uploads" multiple="multiple" onChange={upload}/><br/>
    <input type="text" name="title"  placeholder="Lorum"/><br/>
    <input type="text" name="description"  placeholder="Lorum"/><br/>
    <input type="checkbox" name="vente"  placeholder="Lorum"/><br/>
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
