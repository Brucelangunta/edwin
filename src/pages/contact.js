import React from 'react'
import Layout from '../components/layout'

import Header from '../components/contact/'
import SecondLayout from '../components/secod_layout'
import Contact from '../components/contact/contact'

class IndexPage extends React.Component {
  render() {
    return (
      <>
      <SecondLayout>
        <Layout>
          <div>
            <div id="wrapper">
              <Header />
              <Contact />
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
