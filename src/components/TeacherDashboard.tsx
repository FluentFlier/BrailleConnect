import React from 'react';
import { Book, Users, FileText } from 'lucide-react';

const TeacherDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          icon={<Book size={24} />}
          title="Manage Materials"
          description="Create and manage braille learning materials"
        />
        <DashboardCard
          icon={<Users size={24} />}
          title="Student Progress"
          description="Track and review student progress"
        />
        <DashboardCard
          icon={<FileText size={24} />}
          title="Assignments"
          description="Create and manage braille assignments"
        />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TeacherDashboard;