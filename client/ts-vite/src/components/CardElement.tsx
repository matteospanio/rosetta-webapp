import {
  Button,
  ButtonGroup,
  Card,
  Collapse,
  Elevation,
} from "@blueprintjs/core";
import { IList } from "../utils/interfaces";

interface Props {
  singleList: IList;
  onDelete: Function;
}

const CardElement = ({ singleList, onDelete }: Props) => {
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
          <div className="col text-end">
            <ButtonGroup minimal={true}>
              <Button
                small={true}
                className="bp3-intent-danger"
                onClick={() => {
                  onDelete(singleList.id);
                }}
                icon="trash"
              >
                Delete
              </Button>
              <Button small={true} className="bp3-intent-primary" icon="edit">
                Edit
              </Button>
              <Button small={true} className="bp3-intent-success" icon="tick">
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
