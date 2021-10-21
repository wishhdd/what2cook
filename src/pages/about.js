import React from "react";

export const aboutPage = () => {
  return (
    <div className="card">
      <div className="card-header">About what to cook</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            If you don't know what to cook, specify what you have and the service will offer you
            what you can cook from it. If there are not enough ingredients, he will offer to buy the
            necessary things to cook something delicious.
          </p>
        </blockquote>
      </div>
    </div>
  );
};
