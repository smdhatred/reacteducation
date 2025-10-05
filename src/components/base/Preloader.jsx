import loadingAnimation from "../../assets/animations/lottie/Loading.json";
import Lottie from "lottie-react";

export default function Preloader({ fit = 100 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Lottie
        style={{
          width: `${fit}%`,
          height: `${fit}%`,
        }}
        animationData={loadingAnimation}
        loop={true}
        autoplay={true}
      />
    </div>

    // <div
    //  style={{
    //         width: `${fit}%`,
    //         height: `${fit}%`
    //     }}
    // >
    //     <Lottie
    //     // style={{
    //     //     width: `${fit}%`,
    //     //     height: `${fit}%`
    //     //     }}

    //         animationData={ loadingAnimation}
    //         loop={true}
    //         autoPlay={true}
    //         >
    //     </Lottie>
    // </div>
  );
}
