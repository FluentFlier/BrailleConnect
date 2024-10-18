import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen size={32} />
          <span className="text-xl font-bold">BrailleConnect</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/translate" className="hover:underline">Translate</Link></li>
            <li><Link to="/classroom" className="hover:underline">Classroom</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;