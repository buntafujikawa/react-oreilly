import React from "react";
import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>X</button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStarts={rating}
        onRate={rating => rateColor(id, rating)}
      />
    </section>
  );
}
