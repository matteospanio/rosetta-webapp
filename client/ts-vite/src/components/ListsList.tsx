import React, { useState, useEffect } from "react";
import { createList, deleteList, getListsList } from "../utils/fetchData";
import CardElement from "./CardElement";
import {
  Card,
  Collapse,
  EditableText,
  Elevation,
  H2,
  H4,
  Spinner,
} from "@blueprintjs/core";
import { IList, IListsListProps, IListsListState } from "../utils/interfaces";

class ListsList extends React.Component<IListsListProps, IListsListState> {
  constructor(props: IListsListProps) {
    super(props);
    this.state = {
      lists: [],
      fetchedData: false,
    };
  }

  async componentDidMount() {
    let _lists = await getListsList();
    _lists = _lists.map((list: IList) => {
      list.show = true;
      return list;
    });
    setInterval(() => {
      this.setState({ lists: _lists, fetchedData: true });
    }, 300);
  }

  handleDelete = (listId: number) => {
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
          <div
            style={{ marginTop: "2.5rem" }}
            className="row text-center justify-content-center align-items-center"
          >
            <Spinner size={70} />
            <H4 className="m-5">Fetching Data...</H4>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default ListsList;
