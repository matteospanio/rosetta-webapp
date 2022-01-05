import React from "react";
import { createList, deleteList, getListsList } from "../utils/fetchData";
import CardElement from "./CardElement";
import {
  Card,
  Collapse,
  EditableText,
  Elevation,
  H2,
  Spinner,
} from "@blueprintjs/core";

class ListsList extends React.Component {
  state = {
    lists: [],
    fetchedData: false,
  };

  async componentDidMount() {
    let _lists = await getListsList();
    _lists = _lists.map((list) => {
      list.show = true;
      return list;
    });
    this.setState({ lists: _lists, fetchedData: true });
  }

  /*useEffect(() => {
    const fetchData = async () => {
      let _lists = await getListsList();
      _lists = _lists.map((list) => {
        list.show = true;
        return list;
      });
      setLists(_lists);

      //setLists(_lists.map((list) => (list.show = true)));
      setFetchedData(true);
      console.log("fatto");
      console.log(_lists);
    };
    fetchData();
  }, []);*/

  handleDelete = (listId) => {
    const newLists = this.state.lists.map((list) => {
      if (list.id === listId) {
        list.show = false;
      }
      return list;
    });
    this.setState({ lists: newLists });
    setInterval(() => {
      const _lists = this.state.lists.filter((list) => list.id !== listId);
      this.setState({ lists: _lists });
    }, 1000);
    deleteList(listId);
  };

  render() {
    const { fetchedData, lists } = this.state;

    return (
      <React.Fragment>
        {fetchedData ? (
          <div className="row justify-content-center">
            {console.log(lists)}
            {lists.map((singleList) => (
              <CardElement
                key={singleList.id}
                singleList={singleList}
                onDelete={this.handleDelete}
              />
            ))}
            <Collapse isOpen={true}>
              <Card className="m-2 list-elem" elevation={Elevation.THREE}>
                <div className="row">
                  <H2>
                    <EditableText
                      alwaysRenderInput={false}
                      placeholder="Edit title..."
                    />
                  </H2>
                  <EditableText
                    alwaysRenderInput={false}
                    maxLines={12}
                    minLines={3}
                    multiline={true}
                    placeholder="Edit report... (controlled, multiline)"
                    onConfirm={(value) => {
                      createList({ description: value });
                    }}
                  />
                </div>
              </Card>
            </Collapse>
          </div>
        ) : (
          <div className="row">
            <Spinner size={70} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ListsList;
