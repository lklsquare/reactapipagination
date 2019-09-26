import React from 'react';
import Main from './Main';

function App() {
  return (
    <div style={styles.container}>
     <h1 style={styles.heading}>React Demo</h1>
     <p style={{padding:50}}>React Application That fetches an API and displaying the response in the page, using the material-ui library. The term serached in the search bar below, will return a number of sentences along with other data, and the sentences wiil be processed by the application in the two different sections.</p>
     <Main/>
     <div style={{marginTop:5, padding:100, paddingTop:25, paddingBottom:25}}>
        <p>
          This is a demo <span style={{color:'red'}}>ReactJs</span> application by Lakshya Kumar (http://www.lakshyakumar.webhostapp.com/), displaying the basic usage of Material UI, Axios for fetching api's, processing of javascript objects and pagination. The application is just for demo purposes and it can be imporved furthur.
        </p>
     </div>
    </div>
  );
}

const styles = {
  container:{
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    margin: '0',
    textAlign: 'center'
  },
  heading:{
    color: '#ffffff'
  }
}

export default App;
