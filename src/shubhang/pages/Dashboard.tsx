import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Award,
  FileText,
  Download,
  Eye,
  Megaphone,
  Gift,
  CalendarCheck,
  ChevronRight,
  TrendingUp,
  User
} from 'lucide-react';

// Define status types
type ApptStatus = 'Completed' | 'Ongoing' | 'Upcoming';

interface Appointment {
  id: string;
  time: string;
  client: string;
  service: string;
  status: ApptStatus;
}

const Dashboard: React.FC = () => {
  // State for appointments tab (Today vs Tomorrow)
  const [apptTab, setApptTab] = useState<'today' | 'tomorrow'>('today');

  // State for Clock In / Out
  const [isClockedIn, setIsClockedIn] = useState<boolean>(true);
  const [isOnBreak, setIsOnBreak] = useState<boolean>(false);
  const [clockInTime, setClockInTime] = useState<string>('10:30 AM');
  const [clockOutTime, setClockOutTime] = useState<string>('-- : --');

  // State for To-Dos list
  const [todos, setTodos] = useState([
    { id: '1', task: 'Sweeping Checklist', date: '10/10/2025', completed: false },
    { id: '2', task: 'Sweeping Checklist', date: '09/10/2025', completed: false },
    { id: '3', task: 'Sweeping Checklist', date: '08/10/2025', completed: true },
  ]);

  // Appointments mock data
  const appointmentsToday: Appointment[] = [
    { id: '1', time: '10:00 AM', client: 'Priya Sharma', service: 'Haircut', status: 'Completed' },
    { id: '2', time: '11:30 AM', client: 'Rohan Mehta', service: 'Beard Trim', status: 'Ongoing' },
    { id: '3', time: '2:00 PM', client: 'Sneha', service: 'Hair Spa', status: 'Upcoming' },
    { id: '4', time: '4:30 PM', client: 'Neha', service: 'Pedicure', status: 'Upcoming' },
  ];

  const appointmentsTomorrow: Appointment[] = [
    { id: '5', time: '09:30 AM', client: 'Amit Patel', service: 'Hair Styling', status: 'Upcoming' },
    { id: '6', time: '11:00 AM', client: 'Kiran Rao', service: 'Facial Treatment', status: 'Upcoming' },
    { id: '7', time: '01:30 PM', client: 'Ritu Singh', service: 'Manicure', status: 'Upcoming' },
    { id: '8', time: '03:00 PM', client: 'Rahul Verma', service: 'Hair Color', status: 'Upcoming' },
  ];

  const appointments = apptTab === 'today' ? appointmentsToday : appointmentsTomorrow;

  // Toggle todo completion
  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

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
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-[#] rounded-2xl p-2 border border-gray-100 shadow-sm gap-4">
        <div>
          <span className="text-gray-400 font-medium text-lg">Welcome!</span>
          <h2 className="text-xl font-bold text-gray-800 mt-1">
            It's <span className="text-violet-600 font-extrabold">{clockInTime}</span>, 23 March, Sat
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleBreakToggle}
            className={`px-5 py-2.5 rounded-md border border-violet-700 text-sm font-semibold transition-all ${isOnBreak
                ? 'bg-violet-700 border-violet-700 text-white shadow-sm'
                : 'border-violet-200 text-violet-700 bg-violet-50/50 hover:bg-violet-100'
              }`}
          >
            {isOnBreak ? 'Resume Work' : 'Take Break'}
          </button>
          <button
            onClick={handleClockOutToggle}
            className={`px-5 py-2.5 rounded-md text-sm font-semibold text-white transition-all shadow-md ${isClockedIn
                ? 'bg-violet-700 hover:bg-violet-700'
                : 'bg-violet-700 hover:bg-violet-700'
              }`}
          >
            {isClockedIn ? 'Clockout' : 'Clock In'}
          </button>
        </div>
      </div>

      {/* Main Stylist Banner & Clocking Times */}
      <div className="bg-[#1e2022] text-white rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl border border-[#2a2e35] gap-6">
        {/* Subtle design accents */}
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center gap-5 z-10 w-full md:w-auto">
          {/* Avatar (Grey Circle) */}
          <div className="w-16 h-16 rounded-full bg-[#2a2d31] flex-shrink-0" />
          
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold tracking-tight">Good Afternoon, Rajesh</h3>
              <span className="text-xl animate-pulse">👋</span>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Welcome back! Here's a quick view of your day at Glamour Studio.
            </p>
            <span className="inline-block bg-[#22252a] text-gray-300 text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full mt-3 border border-gray-700/50">
              Stylist
            </span>
          </div>
        </div>

        {/* Clock In / Out Stats Card */}
        {(() => {
          const inParts = clockInTime.match(/^(\d{1,2}:\d{2})\s*(AM|PM)$/i) || [null, clockInTime, ''];
          const outParts = clockOutTime.match(/^(\d{1,2}:\d{2})\s*(AM|PM)$/i) || [null, clockOutTime, ''];
          return (
            <div className="bg-[#121416] text-white rounded-2xl px-6 py-4 flex items-center justify-center border border-[#2a2e35] shadow-xl relative overflow-hidden z-10 w-full md:w-auto gap-5 min-w-[240px]">
              <div className="flex flex-col items-center flex-1">
                <div className="text-2xl font-black text-white flex items-baseline">
                  {inParts[1]}
                  {inParts[2] && <span className="text-xs font-bold text-gray-400 ml-0.5">{inParts[2]}</span>}
                </div>
                <span className="text-gray-400 text-[10px] font-semibold mt-1">Clock in</span>
              </div>
              
              <div className="text-violet-500 text-xl font-extrabold pb-4 self-center">:</div>
              
              <div className="flex flex-col items-center flex-1">
                <div className="text-2xl font-black text-white flex items-baseline">
                  {outParts[1]}
                  {outParts[2] && <span className="text-xs font-bold text-gray-400 ml-0.5">{outParts[2]}</span>}
                </div>
                <span className="text-gray-400 text-[10px] font-semibold mt-1">Clock Out</span>
              </div>
            </div>
          );
        })()}
      </div>


      {/* Today's Overview Row */}
      <div>
        <h3 className="text-base font-bold text-gray-800 tracking-tight">Today's Overview</h3>
        <p className="text-xs text-gray-400 mt-0.5">Keep up the pace — you're on track for a productive day 🚀</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {/* Card 1: Attendance */}
          <div className="bg-[#eaf7f2] rounded-2xl p-5 border border-[#cbebe0] transition-transform hover:-translate-y-1 duration-200">
            <span className="text-[#107e59] text-xs font-semibold">Attendance</span>
            <div className="text-3xl font-extrabold text-[#065f46] mt-2">94%</div>
          </div>

          {/* Card 2: Total Hours */}
          <div className="bg-[#fff7ed] rounded-2xl p-5 border border-[#fed7aa] transition-transform hover:-translate-y-1 duration-200">
            <span className="text-[#c2410c] text-xs font-semibold">Total Hours</span>
            <div className="text-3xl font-extrabold text-[#9a3412] mt-2">164h</div>
          </div>

          {/* Card 3: Clients Served */}
          <div className="bg-[#f5f3ff] rounded-2xl p-5 border border-[#ddd6fe] transition-transform hover:-translate-y-1 duration-200">
            <span className="text-[#6d28d9] text-xs font-semibold">Clients Served</span>
            <div className="text-3xl font-extrabold text-[#5b21b6] mt-2">52</div>
          </div>

          {/* Card 4: Avg Rating */}
          <div className="bg-[#fefce8] rounded-2xl p-5 border border-[#fef08a] transition-transform hover:-translate-y-1 duration-200">
            <span className="text-[#a16207] text-xs font-semibold">Avg. Rating</span>
            <div className="text-3xl font-extrabold text-[#854d0e] mt-2 flex items-center gap-1.5">
              <span className="text-2xl">⭐</span> 4.8
            </div>
          </div>
        </div>
      </div>

      {/* Appointments & To-Dos Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Appointments Section */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-violet-500" />
                <h4 className="text-base font-bold text-gray-800">My Appointments</h4>
              </div>
              <div className="flex bg-[#f1f3f5] rounded-xl p-1 text-xs font-semibold">
                <button
                  onClick={() => setApptTab('today')}
                  className={`px-4 py-1.5 rounded-lg transition-colors ${apptTab === 'today' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  Today
                </button>
                <button
                  onClick={() => setApptTab('tomorrow')}
                  className={`px-4 py-1.5 rounded-lg transition-colors ${apptTab === 'tomorrow' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  Tomorrow
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400 mb-4">See all your appointments at a glance.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-400 text-xs font-semibold border-b border-gray-100 pb-2">
                    <th className="py-2.5">Time</th>
                    <th className="py-2.5">Client</th>
                    <th className="py-2.5">Service</th>
                    <th className="py-2.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {appointments.map((appt) => (
                    <tr key={appt.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3 font-semibold text-gray-700">{appt.time}</td>
                      <td className="py-3 font-medium text-gray-800">{appt.client}</td>
                      <td className="py-3 text-gray-500">{appt.service}</td>
                      <td className="py-3">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${appt.status === 'Completed'
                              ? 'bg-emerald-50 text-emerald-700'
                              : appt.status === 'Ongoing'
                                ? 'bg-blue-50 text-blue-700'
                                : 'bg-amber-50 text-amber-700'
                            }`}
                        >
                          {appt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* To-Dos Section */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-indigo-500" />
              <h4 className="text-base font-bold text-gray-800">My To-Dos ⏳</h4>
            </div>

            <div className="space-y-3 mt-4">
              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${todo.completed
                      ? 'bg-emerald-50/30 border-emerald-100 text-gray-400'
                      : 'bg-gray-50/50 border-gray-100 text-gray-700'
                    }`}
                >
                  <div className="flex flex-col">
                    <span className={`text-sm font-semibold ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                      {todo.task}
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold mt-0.5">{todo.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {todo.completed ? (
                      <>
                        <span className="px-2 py-0.5 text-[9px] font-bold text-emerald-700 bg-emerald-100/50 rounded-md">
                          ✓ Completed
                        </span>
                        <button className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-bold">
                          Pending
                        </span>
                        <button
                          onClick={() => handleToggleTodo(todo.id)}
                          className="w-7 h-7 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center hover:bg-violet-100 transition-colors"
                        >
                          ✓
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Shifts Section */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <h4 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
          <CalendarCheck className="w-5 h-5 text-indigo-500" />
          Upcoming Shifts
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {[
            { date: 'Oct 8', time: '10:00 AM to 6:00 PM', type: 'work' },
            { date: 'Oct 9', time: '12:00 PM to 8:00 PM', type: 'work' },
            { date: 'Oct 10', time: 'Weekly Off', type: 'off' },
            { date: 'Oct 11', time: 'Holiday', type: 'holiday' },
            { date: 'Oct 12', time: 'Approved Leave', type: 'leave' },
            { date: 'Oct 13', time: '10:00 AM to 6:00 PM', type: 'work' }
          ].map((shift, idx) => (
            <div key={idx} className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${shift.type === 'work'
                      ? 'bg-emerald-500'
                      : shift.type === 'off'
                        ? 'bg-gray-400'
                        : shift.type === 'holiday'
                          ? 'bg-orange-500'
                          : 'bg-rose-500'
                    }`}
                />
                <span className="text-sm font-bold text-gray-800">{shift.date}</span>
              </div>
              <span className="text-[11px] font-semibold text-gray-500 mt-2.5 block leading-tight">
                {shift.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements & Payslips Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Announcements Details */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Megaphone className="w-5 h-5 text-violet-500" />
              <h4 className="text-base font-bold text-gray-800">Announcements</h4>
            </div>

            <div className="bg-violet-50/20 border border-violet-100/40 rounded-2xl p-5">
              <h5 className="text-sm font-bold text-gray-800">Company-wide Holiday Schedule Update</h5>
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-semibold mt-2 border-b border-gray-100/80 pb-3">
                <span className="flex items-center gap-1 text-gray-500">
                  <User className="w-4 h-4 text-violet-500" />
                  Rajesh Alachandra
                </span>
                <span>•</span>
                <span>Monday, January 15, at 04:00 PM</span>
              </div>

              <div className="text-xs text-gray-600 mt-3 space-y-2 leading-relaxed">
                <p>
                  We're excited to announce updates to our 2024 holiday schedule, which now includes three additional
                  wellness days throughout the year. These changes reflect our ongoing commitment to employee well-being
                  and work-life balance.
                </p>
                <p className="font-bold text-gray-700">Key Updates:</p>
                <ul className="list-disc pl-4 space-y-1 text-gray-500 font-medium">
                  <li>Memorial Day extended weekend (May 25-27, 2024)</li>
                  <li>Summer wellness days in July (July 15 and July 29, 2024)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Payslips Widget */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-indigo-500" />
              <h4 className="text-base font-bold text-gray-800">Recent Pay slips</h4>
            </div>

            <div className="bg-[#fdfdfd] border border-gray-100 rounded-2xl p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Pay slip Month</span>
                  <div className="text-sm font-extrabold text-gray-800 mt-0.5">September</div>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Employee ID</span>
                  <div className="text-sm font-extrabold text-gray-800 mt-0.5">#12345</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-gray-50 pt-3">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Earnings this month</span>
                  <div className="text-sm font-extrabold text-violet-700 mt-0.5">₹42,500</div>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Designation</span>
                  <div className="text-sm font-extrabold text-gray-800 mt-0.5">UI/UX Designer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 mt-5">
            <button className="flex-1 border border-violet-100 text-violet-700 bg-violet-50/50 hover:bg-violet-100 transition-colors py-2 rounded-xl text-xs font-bold">
              View details
            </button>
            <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white transition-colors py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
              <Download className="w-3.5 h-3.5" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Celebrations & Holidays Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Celebrations */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-rose-500" />
              <h4 className="text-base font-bold text-gray-800">Today's Celebrations 🎉</h4>
            </div>

            <div className="space-y-3">
              {[
                { name: 'Anjali', type: 'Birthday 🎂', date: 'Oct 10', emoji: '🎂' },
                { name: 'Ramesh', type: 'Work Anniversary 🏆', date: 'Oct 12', emoji: '🏆' },
                { name: 'Ramesh', type: 'Work Anniversary 🏆', date: 'Oct 12', emoji: '🏆' }
              ].map((c, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/40 border border-gray-100/50 rounded-2xl">
                  <div className="flex items-center gap-2.5">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-800">{c.name}</span>
                      <span className="text-[10px] text-gray-400 font-semibold">{c.type}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-500">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Holidays & Events */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-500" />
                <h4 className="text-base font-bold text-gray-800">Holidays & Events</h4>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { event: 'Dussehra', date: 'Oct 15' },
                { event: 'Foundation Day', date: 'Nov 1' },
                { event: 'Christmas 🎄', date: 'Dec 25' }
              ].map((e, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50/40 border border-gray-100/50 rounded-2xl">
                  <span className="text-sm font-bold text-gray-800">{e.event}</span>
                  <span className="text-xs font-bold text-gray-500">{e.date}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-4 text-center text-xs font-bold text-violet-600 hover:text-violet-700 transition-colors flex items-center justify-center gap-1">
            View Full Calendar
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
        <h4 className="text-base font-bold text-gray-800 mb-4">Quick Actions</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: 'Payslip', bg: 'bg-[#fef9c3]', border: 'border-[#fef08a]', text: 'text-[#854d0e]', icon: FileText },
            { label: 'My Leaves', bg: 'bg-[#dcfce7]', border: 'border-[#bbf7d0]', text: 'text-[#166534]', icon: Calendar },
            { label: 'Announcements', bg: 'bg-[#fee2e2]', border: 'border-[#fecaca]', text: 'text-[#991b1b]', icon: Megaphone },
            { label: 'Shifts', bg: 'bg-[#f3e8ff]', border: 'border-[#e9d5ff]', text: 'text-[#6b21a8]', icon: Clock },
            { label: 'TODO', bg: 'bg-[#ffedd5]', border: 'border-[#fed7aa]', text: 'text-[#9a3412]', icon: Award },
            { label: 'Expense', bg: 'bg-[#ccfbf1]', border: 'border-[#99f6e4]', text: 'text-[#115e59]', icon: TrendingUp }
          ].map((act, idx) => {
            const Icon = act.icon;
            return (
              <button
                key={idx}
                className={`p-4 rounded-2xl border ${act.bg} ${act.border} hover:scale-[1.03] transition-transform duration-200 flex flex-col items-center gap-3 text-center cursor-pointer`}
              >
                <div className={`p-2.5 rounded-xl bg-white/70 shadow-sm ${act.text}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold ${act.text}`}>{act.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
