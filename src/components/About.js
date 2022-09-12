import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
function About() {
  const a = useContext(noteContext);
  useEffect(() => {
    return () => {
      a.update();
    };
  }, []);

  return (
    <div className="mt-5">
      This is about {a.state.name} and he is in {a.state.div}
    </div>
  );
}

export default About;
