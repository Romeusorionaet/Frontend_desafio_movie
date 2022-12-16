import {Routes, Route} from 'react-router-dom';

import {MoviePreview} from '../pages/MoviePreview';
import {CreateMovie} from '../pages/CreateMovie';
import {Profile} from '../pages/Profile';
import {Home} from '../pages/Home';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviePreview" element={<MoviePreview />} />
            <Route path="/createMovie" element={<CreateMovie />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}
