import StateBank from "./StateBank";
import ReduxBank from "./ReduxBank";
import './index.css';

const App = () => {

  return (
    <div className="atms">
      
      <div className="bank">
        <StateBank />
      </div>

      <div className="bank">
        <ReduxBank />
      </div>

    </div>
  )
};


export default App;