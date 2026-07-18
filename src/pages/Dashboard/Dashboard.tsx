import React, { useState } from 'react';
import ClockInOutCard from './components/ClockInOutCard';
import GreetingsCard from './components/GreetingsCard';
import TodaysOverviewCard from './components/TodaysOverviewCard';
import AppointmentsCard from './components/AppointmentsCard';
import ToDosCard from './components/ToDosCard';
import UpcomingShiftsCard from './components/UpcomingShiftsCard';
import AnnouncementsCard from './components/AnnouncementsCard';
import RecentPayslipsCard from './components/RecentPayslipsCard';
import TodaysCelebrationsCard from './components/TodaysCelebrationsCard';
import HolidaysAndEventsCard from './components/HolidaysAndEventsCard';
import QuickActionsCard from './components/QuickActionsCard';

const Dashboard: React.FC = () => {
  // State for Clock In / Out
  const [isClockedIn, setIsClockedIn] = useState<boolean>(true);
  const [isOnBreak, setIsOnBreak] = useState<boolean>(false);
  const [clockInTime, setClockInTime] = useState<string>('10:30 AM');
  const [clockOutTime, setClockOutTime] = useState<string>('-- : --');

  // Clock Actions
  const handleBreakToggle = () => {
    setIsOnBreak(!isOnBreak);
  };

  const handleClockOutToggle = () => {
    if (isClockedIn) {
      setIsClockedIn(false);
      setIsOnBreak(false);
      setClockOutTime('06:00 PM');
    } else {
      setIsClockedIn(true);
      setClockInTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setClockOutTime('-- : --');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Row */}
      <ClockInOutCard
        clockInTime={clockInTime}
        isClockedIn={isClockedIn}
        isOnBreak={isOnBreak}
        onBreakToggle={handleBreakToggle}
        onClockOutToggle={handleClockOutToggle}
      />

      {/* Main Stylist Banner & Clocking Times */}
      <GreetingsCard clockInTime={clockInTime} clockOutTime={clockOutTime} />

      {/* Today's Overview Row */}
      <TodaysOverviewCard />

      {/* Appointments & To-Dos Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Appointments Section */}
        <div className="lg:col-span-2">
          <AppointmentsCard />
        </div>

        {/* To-Dos Section */}
        <div>
          <ToDosCard />
        </div>
      </div>

      {/* Upcoming Shifts Section */}
      <UpcomingShiftsCard />

      {/* Announcements & Payslips Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Announcements Details */}
        <div className="lg:col-span-2">
          <AnnouncementsCard />
        </div>

        {/* Payslips Widget */}
        <div>
          <RecentPayslipsCard />
        </div>
      </div>

      {/* Celebrations & Holidays Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Celebrations */}
        <TodaysCelebrationsCard />

        {/* Holidays & Events */}
        <HolidaysAndEventsCard />
      </div>

      {/* Quick Actions Panel */}
      <QuickActionsCard />
    </div>
  );
};

export default Dashboard;
