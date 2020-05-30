import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import familyImage from "../images/family.png"
import coupleImage from "../images/couple.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="The Love Tale" />
    <section className="hero">
      <h2>So Much For The Love</h2>
      <h1>Aananya Weds Thiyagaraj</h1>
      <p>3rd June 2020</p>
      <Link to={"./comingsoon"}>Watch The Wedding Live</Link>
    </section>

    <section className="plain-info">
      <article>
        <h3>The Couple</h3>
        <p>We are blessed to be surrounded by lovely people. </p>
      </article>
      <img src={coupleImage} />
    </section>
    <section className="plain-info">
      <article>
        <h3>Our Lovely Family</h3>
        <p>We are blessed to be surrounded by lovely people. </p>
      </article>
      <img src={familyImage} />
    </section>
  </Layout>
)

export default IndexPage
