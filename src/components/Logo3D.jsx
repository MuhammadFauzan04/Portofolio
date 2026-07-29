export default function Logo3D({ src, alt }) {
    return (
      <div className="logo3d">
        <div className="logo3d__inner">
          <img src={src} alt={alt} className="logo3d__img" />
          <div className="logo3d__shine" />
        </div>
      </div>
    );
  }