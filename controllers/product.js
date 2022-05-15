const { Product } = require('../models');

const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
  }
};
const addProduct = async (req, res) => {
  const post = req.body;

  try {
    const newProduct = await Product.create({ ...post });
    res.status(200).json(newProduct);
  } catch (error) {
    console.log(error.message);
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ msg: 'data berhasil di hapus' });
  } catch (error) {
    console.log(error.message);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  try {
    const dataProduct = await Product.findOne({
      where: {
        id: Number(id),
      },
    });

    const updateProduct = await Product.update(
      {
        ...post,
      },
      {
        where: {
          id: Number(id),
        },
      },
      { new: true }
    );
    const updatedProduct = await Product.findOne({
      where: {
        id: Number(id),
      },
    });
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { addProduct, updateProduct, getProduct, deleteProduct };
