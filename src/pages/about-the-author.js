import React from 'react'
import Layout from '../components/layout'

import Header from '../components/author/'
import UpperMain from '../components/author/upper-main'
import SecondLayout from '../components/secod_layout'

class IndexPage extends React.Component {
  render() {
    return (
      <>
      <SecondLayout>
        <Layout>
          <div>
            <div id="wrapper">
              <Header />
              <UpperMain /> 
            </div>
            <div id="bg"></div>
          </div>
          
        </Layout>
      </SecondLayout>
      </>
    )
  }
}

export default IndexPage
