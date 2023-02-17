import { create } from "zustand";
// import { persist } from "zustand/middleware";

export const useLogin = create((set) => ({
  username: "",
  setUsername: (username) => set({ username }),
}));

export const useValidate = create((set) => ({
  validateData: false,
  setValidateData: (validateData) => set({ validateData }),
}));

export const useRegist = create((set) => ({
  regist: "",
  setRegist: (regist) => set({ regist }),
}));

export const useDataShopping = create((set) => ({
  dataChoose: [],
  setDataChoose: (dataChoose) => set({ dataChoose }),
}));
