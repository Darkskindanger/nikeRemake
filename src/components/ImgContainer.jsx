/* eslint-disable react/prop-types */
export default function ImgContainer({ src, alt, styling }) {
  return (
    <div className={styling}>
      <img src={src} alt={alt} />
    </div>
  );
}
