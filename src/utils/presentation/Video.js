const Video = ({ src }) => {
  return (
    <div className="video-component">
      <video controls autoPlay>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
