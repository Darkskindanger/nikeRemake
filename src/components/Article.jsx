/* eslint-disable react/prop-types */
export default function Article({ subheading, span, paragraph, styling }) {
  return (
    <div className={styling}>
      <span className="font-semibold">{span}</span>
      <h3 className="font-bold text-4xl">{subheading}</h3>
      <p className="font-semibold text-xl">{paragraph}</p>
      <button className="py-2 px-4 rounded-full font-semibold bg-black text-white">
        Shop Now
      </button>
    </div>
  );
}
