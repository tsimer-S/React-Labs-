import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEnergyData = createAsyncThunk(
  "energy/fetchEnergyData",
  async () => {
    const response = await fetch("/src/data/energy.json");

    await new Promise(resolve => setTimeout(resolve, 2500));

    return response.json();
  }
);

const energySlice = createSlice({
  name: "energy",
  initialState: {
    projects: [],
    news: [],
    selectedProject: null,
    loading: false
  },
  reducers: {
    selectProject: (state, action) => {
      state.selectedProject = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchEnergyData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchEnergyData.fulfilled, (state, action) => {
        state.projects = action.payload.projects;
        state.news = action.payload.news;
        state.loading = false;
      });
  }
});

export const { selectProject } = energySlice.actions;
export default energySlice.reducer;
