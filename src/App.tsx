import React from 'react';
import Layout from './layout';
import Banner from './components/Banner';
import Terms from './components/Terms';
import Formats from './components/Formats';
import Benefits from './components/Benefits';
import Grow from './components/Grow';
import Achievements from './components/Achievements';
import Partners from './components/Partners';
import News from './components/News';
import Circs from './components/Circs';
import './assets/scss/style.scss';

function App() {
  return (
    <div>
      <Layout>
        {/* блок баннеров */}
        <Banner />

        {/* блок сроков */}
        <Terms />

        {/* блок форматов */}
        <Formats />

        {/* блок плющек */}
        <Benefits />

        {/* блок роста */}
        <Grow />

        {/* блок достижений */}
        <Achievements />

        {/* блок корусель */}

        {/* блок партнеров */}
        <Partners />

        {/* блок новостей */}
        <News />

        {/* блок условий */}
        <Circs />
      </Layout>
    </div>
  );
}

export default App;
