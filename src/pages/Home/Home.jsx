import React from 'react';
import Layout from '../../components/Layout';
import "../../styles/HomeStyle.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

function Home() {
  return (
    <Layout>

      {/* Home Section Hero Banner */}
        <Section1 />

        {/* Home About Section 2 */}
        <Section2 />

        {/* Home Section 3 Menu */}
        <Section3 />
        

    </Layout>
  )
}

export default Home;