import React from 'react';
import Layout from './layout';
import Banner from './components/Banner';
import Terms from './components/Terms';
import Formats from './components/Formats';
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
      </Layout>
    </div>
  );
}

export default App;
