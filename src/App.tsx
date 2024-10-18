import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TeacherDashboard from './components/TeacherDashboard';
import BrailleTranslator from './components/BrailleTranslator';
import GoogleClassroomIntegration from './components/GoogleClassroomIntegration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<TeacherDashboard />} />
            <Route path="/translate" element={<BrailleTranslator />} />
            <Route path="/classroom" element={<GoogleClassroomIntegration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;