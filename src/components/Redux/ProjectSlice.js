// projectSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { GetProject } from '../services/Api';

export const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: [],
    },
    reducers: {
        addProject: (state, action) => {
            const newProject = action.payload;
            const existingProjectIndex = state.projects.findIndex(
                (project) => project.projectId === newProject.projectId
            );
            if (existingProjectIndex === -1) {
                state.projects.push(newProject);
            } else {
                state.projects[existingProjectIndex] = newProject;
            }
        },
        clearProjects: (state) => {
            state.projects = [];
        },
    },
});

export const fetchProjects = () => async (dispatch) => {
    try {
        const response = await GetProject();
        if (response.status === 200) {
            console.log('Fetched Projects:', response.data);
            dispatch(addProject(response.data));
        }
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
};

export const { addProject, clearProjects } = projectSlice.actions;

export default projectSlice.reducer;
