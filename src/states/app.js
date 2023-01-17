import { atom, atomFamily, DefaultValue, selectorFamily } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const progressBar = atom({
  key: uuidv4(),
  default: 1,
});

export const pageTitle = atom({
  key: uuidv4(),
  default: "Snailsweeper",
});

const listStepsState = atomFamily({
  key: uuidv4(),
  default: 0,
});

export const listStepState = selectorFamily({
  key: uuidv4(),
  get:
    (id) =>
    ({ get }) => {
      return get(listStepsState(id));
    },

  set:
    (id) =>
    ({ set, reset }, newValue) => {
      if (newValue instanceof DefaultValue) {
        reset(listStepsState(id));
      } else {
        set(listStepsState(id), newValue);
      }
    },
});
