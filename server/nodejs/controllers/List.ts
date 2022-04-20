import mongoose from "mongoose";
import { List } from "../models/List";

export interface IList {
    id?: string;
    title: string;
    description: string;
    done?: boolean;
}

export class Worker {
    constructor() {}

    async getLists() {
        return await List.find();
    }

    async addList(data: IList) {
        const newList = new List(data);
        await List.create(newList);
        return newList;
    }

    async deleteList(id: string) {
        return await List.findByIdAndDelete(id);
    }
}
