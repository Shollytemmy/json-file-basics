import data from './data.json'


import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Student Records</h1>

      {
        data.map((datum) => {
          return(
            <div key={datum.id}>
              
              {
              datum.name &&  datum.name.map((name) =>{
                 return(
                  <span key={datum.id}>{name.firstName} {name.lastName}</span>

                 ) 
                })
                
                
              }
              <img src={datum.image && datum.image.small} alt="img" />
              <p>{datum.class && datum.class.level}</p>
            </div>
          )
        })
      }
      
    </div>
  );
}

export default App;


