import React from 'react';
import Layout from '../../components/Layout';
import "../../styles/HomeStyle.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

function Home() {
  return (
    <Layout>

      {/* Home Section Hero Banner */}
        <Section1 />

        {/* Home About Section 2 */}
        <Section2 />

        {/* Home Section 3 Menu */}
        <Section3 />

        {/* BG Parallax Scroll */}
        <Section4 />

        {/* Door Slider */}
        <Section5 />

        {/* Home Contact Section*/}
        <Section6 />
        

    </Layout>
  )
}

export default Home;