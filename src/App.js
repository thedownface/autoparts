import React from "react";
import Home from "./home";
import Contactus from "./contactus"
import UsedEngine from "./usedengine";
import UsedSteeringColumn from "./usedsteeringcolumn";
import UsedTransferCaseAssembly from "./transfercaseassembly";
import UsedTransmissions from "./usedtransmissions";
import UsedInstrumentCluster from "./usedinstrumentcluster";
import UsedRearAssembly from "./usedrearaxleassembly";
import UsedSuperCharger from "./usedsupercharger";
import UsedDriverShaft from "./useddrivershaft";
import Aboutus from "./aboutus";
import Warranty from "./Warranty";
import Privacy from "./privacypolicy";
import Termsandconditions from "./termsandconditions";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
function App()
{
return (<div className="App">
    
<>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
          <Route path="/used-engine" component={UsedEngine} />
          <Route path="/UsedTransmissions" component={UsedTransmissions} />
          <Route path="/UsedInstrumentCluster" component={UsedInstrumentCluster} />
          <Route path="/UsedSteeringColumn" component={UsedSteeringColumn} />
          <Route path="/UsedRearAssembly" component={UsedRearAssembly} />
          <Route path="/UsedDriverShaft" component={UsedDriverShaft} />
          <Route path="/UsedSuperCharger" component={UsedSuperCharger} />
          <Route path="/UsedTransferCaseAssembly" component={UsedTransferCaseAssembly} />
          <Route path="/Contact-us" component={Contactus}/>
          <Route path="/About-us" component={Aboutus}/>
          <Route path="/warranty-policy" component={Warranty}/>
          <Route path="/privacy-policy" component={Privacy}/>
          <Route path="/termsanconditions" component={Termsandconditions}/>
        
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
    </div>
  );
}
export default App