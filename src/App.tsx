import React, { useRef } from 'react';
import Layout from './layout';
import Banner from './components/Banner';
import Terms from './components/Terms';
import Formats from './components/Formats';
import Benefits from './components/Benefits';
import Grow from './components/Grow';
import Achievements from './components/Achievements';
import Carousel from './components/Carousel';
import Partners from './components/Partners';
import News from './components/News';
import Circs from './components/Circs';
import Flex from './components/Flex';
import Recall from './components/Recall';
import './assets/scss/style.scss';

function App() {
  const recall = useRef(null);

  const scrollToRecall = () => {
    // @ts-ignore
    recall.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  return (
    <div>
      <Layout>
        {/* блок баннеров */}
        <Banner scrollToRecall={scrollToRecall} />

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
        <Carousel />

        {/* блок партнеров */}
        <Partners />

        {/* блок новостей */}
        <News />

        {/* блок условий */}
        <Circs />

        {/* блок гибкой работы */}
        <Flex />

        {/* блок перезвона */}
        <Recall refProp={recall} />
      </Layout>
    </div>
  );
}

export default App;
