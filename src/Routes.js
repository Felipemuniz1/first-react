import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlanetsList from "./screen/planetList";
import PlanetDetails from "./screen/PlanetDetails"

const Routes = () => {
    return ( 
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PlanetsList}/>
            <Route exact path='/:id' component={PlanetDetails}/>
        </Switch>
    </BrowserRouter>
    );
}

export default Routes;