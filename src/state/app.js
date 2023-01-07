const { atom } = require("recoil");

export const progressBar = atom({
  key: "selectedElement",
  default: 1,
});

export const pageTitle = atom({
    key: "pageTitle",
    default: "Snailsweeper",
  });