import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const AdminDashboard = () => {
  const userActivityData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'User Activity',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const projectActivityData = {
    labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
    datasets: [
      {
        label: 'Project Activity',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>User Activity Chart</h3>
        <Bar data={userActivityData} />
      </div>
      <div>
        <h3>Project Activity Chart</h3>
        <Pie data={projectActivityData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
