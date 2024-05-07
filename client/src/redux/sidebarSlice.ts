import { createSlice } from '@reduxjs/toolkit';

export interface SidebarState {
  expanded: boolean;
}

const initialState: SidebarState = {
  expanded: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;