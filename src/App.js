import React from 'react';
import './assets/sass/main.scss';
import './assets/sass/fonts.scss';

import 'bootstrap/dist/css/bootstrap.min.css';







import Header from './layout/Header';
import SidebarLeft from './layout/SiderbarLeft';
import Newsfeed from './pages/Newsfeed';
import ProfileHeader from './assets/ProfileHeader';

{/*import 'Bootstrap/dist/css/bootstrap-reboot.css';
import 'Bootstrap/dist/css/bootstrap.css';
import 'Bootstrap/dist/css/bootstrap-grid.css';*/}

function App() {
  return (
    <div>
    <SidebarLeft />
    <Header />
    
    <ProfileHeader />
    </div>
    
  );
}

export default App;
