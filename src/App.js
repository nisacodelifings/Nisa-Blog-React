import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <section class="box" id="classes">
          <h3>When should we use classes?</h3>
          <p>
            Here are <b>two</b> rules of thumb
          </p>
          <ul>
            <li>
              When you <b>want to</b> apply the same style to multiple elements
            </li>
            <li>
              But <b>not all elements</b> of the same name
            </li>
          </ul>
          <p>
            A class can be used on <b>multiple elements</b>, and an element can
            have <b>multiple classes</b>
          </p>
        </section>
        <section class="box" id="ids">
          <h3>When should we use IDs?</h3>
          <p>
            Here are <b>two</b> rules of thumb
          </p>
          <ul>
            <li>
              When you <b>don't need to</b> apply the same style to multiple
              elements
            </li>
            <li>
              To have a <b>unique</b> selector to a common element.
            </li>
          </ul>
          <p>
            A ID cannot be used on <b>multiple elements</b>, and an element
            cannot have <b>multiple IDs</b>
          </p>
        </section>
      </main>
    </div>
  );
}
