const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// CREATE: Add a new product
router.post("/", async (req, res) => {
  try {
    const { name, description, price, category, status } = req.body;
    const newItem = await prisma.products.create({
      data: { name, description, price, category, status },
    });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: req.body });
  }
});

// READ: Get all products
router.get("/", async (req, res) => {
  try {
    const items = await prisma.products.findMany();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ: Get a single product by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await prisma.products.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE: Update product by ID
router.put("/:id", async (req, res) => {
  try {
    const { name, description, price, category, status } = req.body;
    const updatedItem = await prisma.products.update({
      where: { id: parseInt(req.params.id) },
      data: { name, description, price, category, status },
    });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Delete product by ID
router.delete("/:id", async (req, res) => {
  try {
    await prisma.products.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
