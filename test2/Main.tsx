import * as React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Selector from './selector'
const Main: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <div className="ttb" id="ttb">
                <img src="http://ahah12k.cafe24.com/ptp2/resources/img/img.png" className="main"/>
                <Link id="removeThis" to="/selector/gikal?count=1" className="gogo">검사하러가기</Link>
            </div>
            <>
                <Switch>
                    <Route exact path="/selector" component={Selector} />
                    <Route path="/selector/:count" render={()=><Selector/>}/>
                </Switch>
            </>
        </BrowserRouter>
    );
};

export default Main;