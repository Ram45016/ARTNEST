import React from 'react';
import '../../assets/css/ProjectView.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProjectView = () => {
    const navigate = useNavigate();
    const projectsFromRedux = useSelector((state) => state.project.projects);
    const project = projectsFromRedux[0];

    return (
        <div className="project-view">
            <table>
                <thead>
                    <tr>
                        <th>Project Title</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Privacy</th>
                        <th>Team Members</th>
                        <th>Project Goals</th>
                        <th>Environment</th>
                    </tr>
                </thead>
                <tbody>
                    {project.map((project, index) => (
                        <tr key={index}>
                            <td>{project.title || 'No Title Provided'}</td>
                            <td>{project.description || 'No Description Provided'}</td>
                            <td>{project.type || 'Type Not Specified'}</td>
                            <td>{project.privacy || 'Privacy Not Specified'}</td>
                            <td>
                                <ul>
                                    {(project.members || []).map((member, memberIndex) => (
                                        <li key={memberIndex}>{member}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    {(project.goals || []).map((goal, goalIndex) => (
                                        <li key={goalIndex}>{goal}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <button onClick={() => navigate(`/environment/${project.projectId}`)}>
                                    Open Environment
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectView;
