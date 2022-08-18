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
  const terms = useRef(null);
  const formats = useRef(null);
  const achivments = useRef(null);
  const news = useRef(null);
  const partners = useRef(null);
  const circs = useRef(null);

  const scrollToRecall = () => {
    // @ts-ignore
    recall.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  const scrollToTerms = () => {
    // @ts-ignore
    terms.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  const scrollToFormats = () => {
    // @ts-ignore
    formats.current!.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };
  const scrollToAchivments = () => {
    // @ts-ignore
    achivments.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  const scrollToNews = () => {
    // @ts-ignore
    news.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  const scrollToPartners = () => {
    // @ts-ignore
    partners.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  const scrollToCircs = () => {
    // @ts-ignore
    circs.current!.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };

  return (
    <div>
      <Layout
        scrollToTerms={scrollToTerms}
        scrollToFormats={scrollToFormats}
        scrollToAchivments={scrollToAchivments}
        scrollToNews={scrollToNews}
        scrollToPartners={scrollToPartners}
        scrollToCircs={scrollToCircs}
      >
        {/* блок баннеров */}
        <Banner scrollToRecall={scrollToRecall} />

        {/* блок сроков */}
        <Terms refProp={terms} />

        {/* блок форматов */}
        <Formats refProp={formats} />

        {/* блок плющек */}
        <Benefits />

        {/* блок роста */}
        <Grow />

        {/* блок достижений */}
        <Achievements refProp={achivments} />

        {/* блок корусель */}
        <Carousel />

        {/* блок партнеров */}
        <Partners refProp={partners} />

        {/* блок новостей */}
        <News refProp={news} />

        {/* блок условий */}
        <Circs refProp={circs} />

        {/* блок гибкой работы */}
        <Flex />

        {/* блок перезвона */}
        <Recall refProp={recall} />
      </Layout>
    </div>
  );
}

export default App;
