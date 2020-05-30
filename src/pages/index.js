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
        <p>
          We are together on an wonderful journey called - Life. <br></br>
          <br></br>
          Its been about 8 years together and we have decided to move forward in
          live as husband & wife.
        </p>
      </article>
      <img src={coupleImage} />
    </section>
    <section className="plain-info">
      <article>
        <h3>Our Lovely Family</h3>
        <p>
          We are blessed & fortunate to be surrounded by a lovely family.{" "}
          <br></br>
          <br></br>Without their support & belief, all this would be impossible.
        </p>
      </article>
      <img src={familyImage} />
    </section>
  </Layout>
)

export default IndexPage
