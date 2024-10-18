import React from 'react';
import { School, Book, FileText } from 'lucide-react';

const GoogleClassroomIntegration: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Google Classroom Integration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IntegrationCard
          icon={<School size={24} />}
          title="Connect to Google Classroom"
          description="Link your Google Classroom account to BrailleConnect"
        />
        <IntegrationCard
          icon={<Book size={24} />}
          title="Import Course Materials"
          description="Import and convert course materials to braille"
        />
        <IntegrationCard
          icon={<FileText size={24} />}
          title="Assign Braille Materials"
          description="Create and assign braille materials to students"
        />
      </div>
    </div>
  );
};

const IntegrationCard: React.FC<{
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
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Get Started
      </button>
    </div>
  );
};

export default GoogleClassroomIntegration;