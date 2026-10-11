import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  theme: "Light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = state.theme === "Light" ? "Dark" : "Light";
      console.log(state.theme)
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
