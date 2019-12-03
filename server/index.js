require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const {
  register,
  login,
  logout,
  userSession
} = require("./controller/userController");
const {
  createFolderStudied,
  updateFolderStudied,
  deleteFolderStudied,
  readFolder
} = require("./controller/studiedController");
const {
  createFolderStudying,
  updateFolderStudying,
  deleteFolderStudying,
  readStudyingFolder
} = require("./controller/studyingController");
const {
  createFolderStudying3,
  updateFolderStudying3,
  deleteFolderStudying3,
  readStudyingFolder3
} = require("./controller/studyController");
const {
  addKanji,
  deleteKanji,
  readKanji
} = require("./controller/kanjiController");
const {
  addKanji2,
  deleteKanji2,
  readKanji2
} = require("./controller/kanji2Controller");
const {
  addKanji3,
  deleteKanji3,
  readKanji3
} = require("./controller/kanji3Controller");

app.use(express.json());

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env;

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitalized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

massive(CONNECTION_STRING).then(dbInstance => {
  console.log("data base is lit");
  app.set("db", dbInstance);
});

// register ********************************************
app.post("/auth/register", register);

// login ********************************************
app.post("/auth/login", login);

// user session ********************************************
app.get("/auth/user_session", userSession);

// logout ********************************************
app.delete("/auth/logout", logout);

//studied  folder ******************************
app.get("/api/get_folder/:user_id", readFolder);

app.post("/api/studied_folder/:user_id", createFolderStudied);

app.put("/api/studied_folder_update/:user_id/:folder_id/", updateFolderStudied);

app.delete("/api/studied_delete/:user_id/:folder_id", deleteFolderStudied);

// studtying folder 2222222****************************
app.get("/api/get_studying_folder/:user_id", readStudyingFolder);

app.post("/api/studying_folder/:user_id", createFolderStudying);

app.put(
  "/api/studying_folder_update/:user_id/:folder_id/",
  updateFolderStudying
);

app.delete("/api/studying_delete/:user_id/:folder_id", deleteFolderStudying);

// study folder 333333****************************
app.get("/api/get_study_folder/:user_id", readStudyingFolder3);

app.post("/api/study_folder/:user_id", createFolderStudying3);

app.put("/api/study_folder_update/:user_id/:folder_id/", updateFolderStudying3);

app.delete("/api/study_delete/:user_id/:folder_id", deleteFolderStudying3);

// add kanji in to studied folder *****************

app.get("/api/read_kanji/:user_id/:folder_id", readKanji);

app.post("/api/add_kanji/:user_id/:folder_id", addKanji);

app.delete("/api/delete_kanji/:user_id/:folder_id/:kanji_id", deleteKanji);

// add kanji2 in to studying folder *****************

app.get("/api/read2_kanji/:user_id/:folder_id", readKanji2);

app.post("/api/add2_kanji/:user_id/:folder_id", addKanji2);

app.delete("/api/delete2_kanji/:user_id/:folder_id/:kanji_id", deleteKanji2);
// add kanji3 in to studying folder *****************

app.get("/api/read3_kanji/:user_id/:folder_id", readKanji3);

app.post("/api/add3_kanji/:user_id/:folder_id", addKanji3);

app.delete("/api/delete3_kanji/:user_id/:folder_id/:kanji_id", deleteKanji3);

let port = SERVER_PORT || 5000;
app.listen(port, () => console.log(`hear ya bruh on ${port}`));
