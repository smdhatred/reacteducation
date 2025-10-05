import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router";

import startAnimation from "../assets/animations/lottie/Intro.json";
import Lottie from "lottie-react";

export default function StartPage() {
  const navigate = useNavigate();

  //    useEffect(() => {
  //         const anim = lottie.loadAnimation

  //         return () => clearTimeout(timer)

  //    }, [navigate])

  return (
    <Fragment>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <h1>Start Page</h1>
        <div style={{ width: 300, height: 300, margin: "0 auto" }}>
          <Lottie
            animationData={startAnimation}
            loop={false}
            autoplay={true}
            onComplete={() => navigate("/main")}
          />
        </div>
      </section>
    </Fragment>
  );
}
