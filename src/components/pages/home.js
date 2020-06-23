import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Banner from '../pages/banner';
import Video from '../pages/video';
import Location from '../pages/location';

function Home() {
    return (
        <Route>
            <Fragment>
                <Banner />
                <Video />
                <Location />
            </Fragment>
        </Route>
    )
}
export default Home;