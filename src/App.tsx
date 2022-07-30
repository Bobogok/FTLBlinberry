import React from 'react';
import Layout from './layout';
import Banner from './components/Banner';
import './assets/scss/style.scss';

function App() {
  return (
    <div>
      <Layout>
        <Banner />
      </Layout>
    </div>
  );
}

export default App;
