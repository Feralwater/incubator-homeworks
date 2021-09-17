import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import June from "./pages/June";
import JunePlus from "./pages/JunePlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNE: '/june',
    JUNE_PLUS: '/june-plus',
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNE} render={() => <June/>}/>
                <Route path={PATH.JUNE_PLUS} render={() => <JunePlus/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes
