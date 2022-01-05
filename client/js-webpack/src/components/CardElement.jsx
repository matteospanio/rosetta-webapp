import {
  Button,
  ButtonGroup,
  Card,
  Elevation,
  Collapse,
} from "@blueprintjs/core";
import React from "react";

const CardElement = (props) => {
  const { singleList, onDelete } = props;

  const getCardAnimation = () => {
    const classStyle = singleList.show ? "m-2 list-elem" : "m-1 deleting";
    return classStyle;
  };

  return (
    <Collapse isOpen={singleList.show}>
      <Card
        key={singleList.id}
        className={getCardAnimation()}
        elevation={Elevation.THREE}
      >
        <div className="row">
          <div className="col">
            <h5>{singleList.title}</h5>
          </div>
          <div className="col">
            <ButtonGroup minimal={true}>
              <Button
                className="bp3-intent-danger"
                onClick={() => {
                  onDelete(singleList.id);
                }}
                icon="trash"
              >
                Delete
              </Button>
              <Button className="bp3-intent-primary" icon="edit">
                Edit
              </Button>
              <Button className="bp3-intent-success" icon="tick">
                Done
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <p>{singleList.description}</p>
      </Card>
    </Collapse>
  );
};

export default CardElement;
