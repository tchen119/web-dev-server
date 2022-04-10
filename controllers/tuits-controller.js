import * as tuitsDao from "../tuits/tuits-dao.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.postedBy = {
    "username": "Webdev"
  };
  newTuit.stats = {
    "retuits": 111,
    "likes": 222,
    "replies": 333
  };
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
}

const findTuitById = (req, res) =>
  dao.findTuitById(req.params.id)
    .then(tuit => res.json(tuit));

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);

  //tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
  //res.sendStatus(200);
  res.send(status);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);

  //tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
  //res.sendStatus(200);
  res.send(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits)
  app.get("/api/tuits/:id", findTuitById);;
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}