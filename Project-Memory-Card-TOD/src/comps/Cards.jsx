import React from "react";
import Card from "./Card";
import { data } from "./tmepData";

export default function Cards() {
  return (
    <div className="Cards">
      {data.map((card) => (
        <Card />
      ))}
    </div>
  );
}
