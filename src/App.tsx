import React from 'react';
import Layout from './layout';
import Banner from './components/Banner';
import Terms from './components/Terms';
import Formats from './components/Formats';
import Benefits from './components/Benefits';
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
      </Layout>
    </div>
  );
}

export default App;
