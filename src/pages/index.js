import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./styles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import familyImage from "../images/family.png"
import coupleImage from "../images/couple.png"

import Confetti from "react-dom-confetti"

import firebase from "gatsby-plugin-firebase"

const IndexPage = () => {
  const [confettiShower, setConfettiShower] = useState(false)

  const [data, setData] = React.useState(null)

  useEffect(() => {
    firebase
      .database()
      .ref("/celebrate")
      .on("value", snapshot => {
        setData(snapshot.val())
      })
  }, [])

  return (
    <Layout>
      <SEO title="Aananya Weds Thiyagaraj" />
      <section className="hero">
        <h2>So Much For The Love</h2>
        <h1>Aananya Weds Thiyagaraj</h1>
        <p>3rd June 2020</p>
        <Link to={"./comingsoon"} className={"link"}>
          Watch The Wedding Live
        </Link>
      </section>
      <section className="invite">
        <article>
          <h3>A Note to our Dear Ones </h3>
          <p>
            We are getting married on{" "}
            <span className="highlight">3rd of June 2020 </span>, and we invite
            you to witness one of our most special days of our lives <br />
            <br />
            We know many of you were anticipating to attend the wedding in
            person, but to ensure everyone's health in the given situation, we
            will be having a closed function at home & will be streaming the
            auspicious occasion <span className="highlight">live</span>.
            <br />
            <br />
            Definitely once things get better we will have a great get together
            & we all are looking forward to you and your family to join the post
            wedding celebrations very soon.
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
            Its been about 8 years together and we have decided to move forward
            in life as husband & wife.
          </p>
        </article>
        <img src={coupleImage} />
      </section>
      <section className="plain-info">
        <article>
          <h3>Our Family</h3>
          <p>
            We are blessed & fortunate to be surrounded by a{" "}
            <span className="highlight">lovely family </span>. <br></br>
            <br></br>Without their support & belief, all this would not be
            possible.
          </p>
        </article>
        <img src={familyImage} />
      </section>

      {data && (
        <section className={"celebrate"}>
          <article>
            <h3>Do us a small favour?</h3>
            <p>
              Show your love, blessing & good vibes by hitting the button below.{" "}
              <br />
              <br /> <span className="highlight">We miss you.</span>
            </p>
          </article>
          <button
            onClick={e => {
              setConfettiShower(false)
              setTimeout(setConfettiShower.bind(this, true), 0)
              firebase
                .database()
                .ref("/celebrate")
                .set(data + 1)
              e.preventDefault()
            }}
          >
            {`🎉 Celebrate ${data ? `(${data})` : ""}`}
            <Confetti
              active={confettiShower}
              config={{
                angle: 90,
                spread: 45,
                startVelocity: 45,
                elementCount: 50,
                dragFriction: 0.1,
                duration: 3000,
                stagger: 0,
                width: "10px",
                height: "10px",
                colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
              }}
            />
          </button>
        </section>
      )}
    </Layout>
  )
}

export default IndexPage
