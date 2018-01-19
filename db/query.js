var db = require('./connection');

function getResolutions(){
  return db('category');
}

function getResolution(id){
  return db('entry').where('cat_id', id);
}

function vote(id, vote){
  return db('entry').where('id', id).update('votes', vote);
}

function addEntry(data){
  return db('entry').insert(data);
}

module.exports = {
  getResolutions,
  getResolution,
  vote,
  addEntry,
};
