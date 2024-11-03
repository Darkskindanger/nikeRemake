import Article from "./components/Article";
import Header from "./components/Header";
import ImgCarousel from "./components/ImgCarousel";
import ImgContainer from "./components/ImgContainer";
// import images from "./data/images";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <ImgContainer
        src={"../assets/female-model.jpg"}
        alt={"Female model for Nike"}
        styling={"w-screen px-20 [&_img]:mx-auto"}
      />
      <Article
        span="Just In"
        subheading="SHOX TL"
        paragraph="Ahead of its time, Shox TL continues to push the boundaries of style with its future-forward silhouette."
        styling={
          "flex flex-col gap-1 items-center w-[900px] mx-auto text-center"
        }
      />
      <ImgCarousel
        subheading={"Latest & Greatest"}
        img={[
          {
            src: "../assets/pexels-bohlemedia-2803158.jpg",
            alt: "Running Essentials",
          },
          { src: "../assets/pexels-nappy-936075.jpg", alt: "For Everyone" },
          {
            src: "../assets/pexels-pedrofurtadoo-29138798.jpg",
            alt: "For Everyone",
          },
        ]}
        maxWidth={"max-w-[600px]"}
        maxHeight={"h-[900px]"}
      />
      <ImgCarousel
        subheading={"Shop Our Icons"}
        img={[
          {
            src: "../assets/shoe1.png",
            alt: "Running Essentials",
          },
          { src: "../assets/shoe2.png", alt: "For Everyone" },
          {
            src: "../assets/shoe3.png",
            alt: "For Everyone",
          },
        ]}
        maxWidth={"max-w-[600px]"}
        maxHeight={"h-fit"}
      />
      <ImgContainer
        src={"../assets/findYourPerfectFit.png"}
        alt={"Female model for Nike"}
        styling={"w-screen [&_img]:mx-auto"}
      />
    </>
  );
}

export default App;
