import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

type ApptStatus = 'Completed' | 'Ongoing' | 'Upcoming';

interface Appointment {
  id: string;
  time: string;
  client: string;
  service: string;
  status: ApptStatus;
}

const AppointmentsCard: React.FC = () => {
  const [apptTab, setApptTab] = useState<'today' | 'tomorrow'>('today');

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

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-violet-500" />
            <h4 className="text-base font-bold text-gray-800">My Appointments</h4>
          </div>
          <div className="flex bg-[#f1f3f5] rounded-xl p-1 text-xs font-semibold">
            <button
              onClick={() => setApptTab('today')}
              className={`px-4 py-1.5 rounded-lg transition-colors ${
                apptTab === 'today' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setApptTab('tomorrow')}
              className={`px-4 py-1.5 rounded-lg transition-colors ${
                apptTab === 'tomorrow' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-800'
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
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        appt.status === 'Completed'
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
  );
};

export default AppointmentsCard;
