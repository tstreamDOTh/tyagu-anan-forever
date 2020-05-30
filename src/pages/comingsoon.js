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
        6am - 7.30am. Add the event to you google calendar. The Link will be
        available on the site very soon.
      </p>
      <a
        target="_blank"
        href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MDFiaG9vM2tvbTlyOW52Z2twNDl0cWpya2ogdHN0cmVhbS5oQG0&tmsrc=tstream.h%40gmail.com"
        className="gcalendar"
      >
        <img src={gcalendar} /> Add to Google Calendar
      </a>
      <Link to="/">Go Back</Link>
    </section>
  </Layout>
)

export default SecondPage
