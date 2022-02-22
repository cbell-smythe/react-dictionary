import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="Results">
        <section>
          <span>
            <span className="word">{props.results.word} |</span>{" "}
            <span className="phoneticText">
              {props.results.phonetics[1].text}
            </span>
          </span>
          {props.results.phonetics
            .filter(function (phonetic) {
              return phonetic.audio.length > 0;
            })
            .map(function (phonetic, index) {
              if (index === 0) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              } else {
                return null;
              }
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
    );
  } else {
    return null;
  }
}
