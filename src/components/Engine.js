// base engine to all endpoints
// insert url

// dummy data for initialize the database
const dummy  ={
  name:"dummydata"
}

// to init the DB
const simubase_መረጃ_ፍጠር = (tableName, Data = JSON.stringify(dummy)) => {
  return window.localStorage.setItem(tableName, Data);
};

// to insert the DB
const simubase_መረጃ_አስገባ = (tableName, Data) => {
  return window.localStorage.setItem(tableName, Data);
};

// to fetch the DB
const simubase_መረጃ_አምጣ = (tableName) => {
  return window.localStorage.getItem(tableName);
};

// to delete the DB
const simubase_መረጃ_አጥፋ = (DocumentID) => {
  return window.localStorage.setItem(DocumentID);
};

// to update the DB
const simubase_መረጃ_ደልዝ = (DocumentID, newDocument) => {
  return window.localStorage.setItem(DocumentID, newDocument);
};

module.exports = {
  simubase_መረጃ_ፍጠር,
  simubase_መረጃ_አስገባ,
  simubase_መረጃ_አምጣ,
  simubase_መረጃ_አጥፋ,
  simubase_መረጃ_ደልዝ,
};