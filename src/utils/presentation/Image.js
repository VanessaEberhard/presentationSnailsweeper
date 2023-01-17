const Image = ({ src, info, innerStyle }) => {
  return (
    <div className="image">
      <img src={src} alt={info} className={innerStyle} />
    </div>
  );
};

export default Image;