import React from 'react'
import Layout from '../components/layout'

import Header from '../components/policies'
import SecondLayout from '../components/secod_layout'
import Policy from '../components/policies/privacy-policy'

class IndexPage extends React.Component {
  render() {
    return (
      <>
      <SecondLayout>
        <Layout>
          <div>
            <div id="wrapper">
              <Header />
              <Policy />
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
