const axios = require('axios');

const getUsers = async (_req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
};

const postUser = async (req, res) => {
  try {
    const { body } = req;
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/users', body);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
};

const updateUser = async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      body
    );
    return res.status(200).json(data);
  } catch (e) {
    return res.status(400).json({ error: e });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.status(200).send('Deleted!');
  } catch (e) {
    return res.status(400).json({ error: e });
  }
};

module.exports = { getUsers, postUser, updateUser, deleteUser };
