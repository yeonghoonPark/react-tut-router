import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Videos() {
  const navigate = useNavigate();
  const [videoId, setVideoId] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/videos/${videoId}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoId(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Video Id...'
        value={videoId}
        onChange={handleChange}
      />
    </form>
  );
}
