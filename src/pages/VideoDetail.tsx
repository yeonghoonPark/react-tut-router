import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  // const params = useParams();
  // const { videoId } = params;
  const { videoId } = useParams();

  return <div>Video Id = {videoId}</div>;
}
