const model = require('./model');

const findAllTuits = () =>
  model.find();

const deleteTuit = (id) =>
  model.removeOne({_id: id});

const createTuit = (tuit) =>
  model.create(tuit);

const findTuitById = (id) =>
  model.findById(id);

const updateTuit = (id, tuit) =>
  model.updateOne({_id: id},
    {$set: tuit});

module.exports = {
  findAllTuits, deleteTuit, createTuit, findTuitById, updateTuit
};