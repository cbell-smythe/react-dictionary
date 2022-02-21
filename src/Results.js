import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <span>
            <span className="word">{props.results.word} |</span>{" "}
            <span className="phoneticText">
              {props.results.phonetics[1].text}
            </span>
          </span>
          <Phonetic phonetic={props.results.phonetics[0]} />
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
