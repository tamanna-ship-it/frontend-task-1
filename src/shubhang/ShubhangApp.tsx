import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ComingSoon from './components/ComingSoon';
import {
  Calendar,
  UserCheck,
  CalendarOff,
  Clock,
  FileText,
  Megaphone,
  IndianRupee,
  Star,
  Palmtree
} from 'lucide-react';

function ShubhangApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout basePath="/shubhang" />}>
        {/* Redirect root path to dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<ComingSoon title="Bookings" icon={Calendar} />} />
        <Route path="attendance" element={<ComingSoon title="Attendance" icon={UserCheck} />} />
        <Route path="leaves" element={<ComingSoon title="Leaves" icon={CalendarOff} />} />
        <Route path="shifts" element={<ComingSoon title="Shifts Management" icon={Clock} />} />
        <Route path="payslips" element={<ComingSoon title="Payslips" icon={FileText} />} />
        <Route path="announcements" element={<ComingSoon title="Announcements" icon={Megaphone} />} />
        <Route path="revenue" element={<ComingSoon title="Revenue" icon={IndianRupee} />} />
        <Route path="reviews" element={<ComingSoon title="Reviews & Ratings" icon={Star} />} />
        <Route path="holidays" element={<ComingSoon title="Holidays" icon={Palmtree} />} />
      </Route>
    </Routes>
  );
}

export default ShubhangApp;

