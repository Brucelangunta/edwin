import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import UpperMain from '../components/upper-main'
import MidMain from '../components/mid-main'
import SecondLayout from '../components/secod_layout'

class IndexPage extends React.Component {
  render() {
    return (
      <>
      <SecondLayout>
        <Layout>
          <div>
            <div id="wrapper">
              {/* <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} /> */}
              <Header />
              {/* <Main
                isArticleVisible={this.state.isArticleVisible}
                timeout={this.state.timeout}
                articleTimeout={this.state.articleTimeout}
                article={this.state.article}
                onCloseArticle={this.handleCloseArticle}
                setWrapperRef={this.setWrapperRef}
              /> */}
              <UpperMain />
              {/* <Footer /> */}
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
