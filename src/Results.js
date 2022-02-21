import React from "react";
import Photos from "./Photos";

import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="row">
          <div className="col-7">
            <section>
              <h2>{props.results.word}</h2>
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              })}
            </section>
            {props.results.meanings.map(function (meaning, index) {
              return (
                <section key={index}>
                  <Meaning meaning={meaning} />
                </section>
              );
            })}
          </div>
          <div className="col-5">
            <Photos />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
