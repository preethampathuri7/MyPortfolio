import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";
import "./styles/AvatarPhoto.css";

const AvatarPhoto = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    // Drive progress to 100 then let the Loading component's own logic
    // handle the rest (initialFX → smoother.paused(false) → scroll works)
    const progress = setProgress((value) => setLoading(value));
    // Immediately mark as loaded so progress races to 100%
    progress.loaded();
  }, []);

  return (
    <div className="avatar-photo-wrapper">
      {/* Floating star particles */}
      <div className="avatar-stars">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`avatar-star avatar-star-${i + 1}`}></span>
        ))}
      </div>

      {/* Avatar image */}
      <div className="avatar-image-container">
        <img
          src="/images/avatar.png"
          alt="Lakshmi Prasanna Udumula - Full Stack Engineer"
          className="avatar-image"
          draggable={false}
        />
        {/* Orbital glow ring */}
        <div className="avatar-orbit-ring"></div>
        {/* Bottom nebula fade */}
        <div className="avatar-ground-glow"></div>
      </div>

      {/* Bottom fade into page */}
      <div className="avatar-bottom-fade"></div>
    </div>
  );
};

export default AvatarPhoto;
