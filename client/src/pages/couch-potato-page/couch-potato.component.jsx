import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";

import "./couch-potato.styles.scss";

import Button from "@material-ui/core/Button";
function Couchpotato() {
  const data = [
    { Series: "GOT", id: 1 },
    { Series: "TBBT", id: 2 },
    { Series: "Naruto", id: 1 },
    { Series: "Harry Potter", id: 1 },
    { Series: "Kota", id: 1 },
    { Series: "Suits OR", id: 1 },
  ];
  const [options] = useState(data);

  return (
    <div className="selectStyle">
      <h3> Select Any 4 Series</h3>
      <Multiselect options={options} displayValue="Series" selectionLimit="4" />
      <Button
        variant="contained"
        color="secondary"
        className="buttonStyle"
        onClick={() => {
          this.props.selectedQuestionNext(this.props.selectedQuestionNumber);
        }}
      >
        Login
      </Button>
    </div>
  );
}
export default Couchpotato;
