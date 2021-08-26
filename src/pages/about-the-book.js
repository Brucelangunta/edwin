import React from 'react'
import Layout from '../components/layout'

import Header from '../components/book/'
import SecondLayout from '../components/secod_layout'
import Books from '../components/book/about-the-book'

class IndexPage extends React.Component {
  render() {
    return (
      <>
      <SecondLayout>
        <Layout>
          <div>
            <div id="wrapper">
              <Header />
              <Books />
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
