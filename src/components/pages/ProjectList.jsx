import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../Redux/ProjectSlice';
import '../../assets/css/projectList.css';

function ProjectList() {
    const dispatch = useDispatch();
    const projectsFromRedux = useSelector((state) => state.project.projects);
    const project = projectsFromRedux[0];

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <div className="project-list">
            {project && project.map((projects) => (
                <div className="project" key={projects.projectId}>
                    <h2 className="project-title">{projects.title || 'No Title Provided'}</h2>
                    <p className="project-description">{projects.description || 'No Description Provided'}</p>
                    <p className="project-type">Type: {projects.type || 'Type Not Specified'}</p>
                    <p className="project-privacy">Privacy: {projects.privacy || 'Privacy Not Specified'}</p>
                    <div className="team-members">
                        <p>Team Members:</p>
                        <ul className="member-list">
                            {(projects.members || []).map((member, memberIndex) => (
                                <li key={memberIndex}>{member}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="project-goals">
                        <p>Project Goals:</p>
                        <ul className="goal-list">
                            {(projects.goals || []).map((goal, goalIndex) => (
                                <li key={goalIndex}>{goal}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
