import { Router } from "express";

import { Worker as ListWorker } from "../controllers/List";

const route = Router();

route.get("/", async (req, res) => {
    const listWorker: ListWorker = new ListWorker();
    try {
        const lists = await listWorker.getLists();
        res.status(200).json({ lists: lists });
    } catch (err) {
        const e = err as Error;
        res.status(500).json({ error: e.name, message: e.message });
    }
});

route.post("/", async (req, res) => {
    const { title, description } = req.body;
    const listWorker: ListWorker = new ListWorker();
    try {
        const newList = await listWorker.addList({ title, description });
        res.status(201).json({ id: newList._id });
    } catch (err) {
        const e = err as Error;
        res.status(500).json({ error: e.name, message: e.message });
    }
});

route.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const listWorker: ListWorker = new ListWorker();
    try {
        await listWorker.deleteList(id);
        res.status(204);
    } catch (err) {
        const e = err as Error;
        res.status(500).json({ error: e.name, message: e.message });
    }
});

module.exports = route;
