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
    <section className="invite">
      <article>
        <h3>A Note to our Dear Ones </h3>
        <p>
          We are getting married on{" "}
          <span className="highlight">3rd of June 2020 </span>, and we invite
          you to witness one of our most special days of our lives <br />
          <br />
          We know many of you were anticipated to attend the wedding in person,
          but to ensure everyone's health in the given situation, we will be
          having a closed function at home & will be streaming the auspicious
          occasion <span className="highlight">live</span>.
          <br />
          <br />
          Definitely once things get better we will have a great get together &
          we all are looking forward you and your family very soon to join the
          post wedding celebrations.
        </p>

        <div className="sign">
          <div className="from">With Love</div>
          <div className="name">Thiyagaraj & Aananya</div>
        </div>
      </article>
    </section>
    <section className="plain-info">
      <article>
        <h3>The Couple</h3>
        <p>
          We are together on a wonderful journey called -{" "}
          <span className="highlight">Life </span>. <br></br>
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
          We are blessed & fortunate to be surrounded by a{" "}
          <span className="highlight">lovely family </span>. <br></br>
          <br></br>Without their support & belief, all this would be impossible.
        </p>
      </article>
      <img src={familyImage} />
    </section>
  </Layout>
)

export default IndexPage
