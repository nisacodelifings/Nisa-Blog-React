import React from "react";

export default function Box(props) {
  return (
    <section class="box" id={props.id}>
      <h3>{props.judul}</h3>
      <p>
        You can do <b>Anything</b>, but not everything
      </p>
      <ul>
        <li>
          You can do anything. <b>You can be anything</b> You can do things that
          other people can.
        </li>
      </ul>
      <p>
        But the point is, <b>not everything</b> you have to be able to do, even
        if you think "other people can, how can I?" Yes, those words are true.
        But ... <b>please, you have to focus!</b>
      </p>
      <a href={props.baca} class="baca">
        Read More
      </a>
    </section>
  );
}
