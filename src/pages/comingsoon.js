import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import gcalendar from "../images/google-calendar.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <section className="comingsoon">
      <h1>Coming Soon...</h1>
      <p>
        The Wedding ceromony shall be streamed live on Youtube on 3rd June 2020
        6am - 7.30am.
        <br /> <br />
        The Link will be shared here soon on this site.
      </p>

      <Link to="/" className={"link"}>
        Go Back
      </Link>
    </section>
  </Layout>
)

export default SecondPage
