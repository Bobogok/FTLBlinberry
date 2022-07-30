import React from 'react';
import Layout from './layout';
import Banner from './components/Banner';
import Terms from './components/Terms';
import './assets/scss/style.scss';

function App() {
  return (
    <div>
      <Layout>
        {/* блок баннеров */}
        <Banner />

        {/* блок сроков */}
        <Terms />
      </Layout>
    </div>
  );
}

export default App;
