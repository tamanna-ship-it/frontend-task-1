import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/pages/auth/AuthContext';
import logo from '@/assets/logo.png';
import {
  Eye,
  EyeOff,
  ChevronDown,
  Lock,
  User,
  AlertCircle,
  ArrowLeft,
  Sparkles,
  Building2,
  UserCheck
} from 'lucide-react';
import dummyUsers from '@/pages/auth/dummyUsers.json';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { loginStaff, loginOwner, loginManager } = useAuth();

  // Tab State: 'staff' | 'management'
  const [activeTab, setActiveTab] = useState<'staff' | 'management'>('staff');

  // Staff (OTP) State
  const [phone, setPhone] = useState('');
  const [otpStep, setOtpStep] = useState<'phone' | 'otp'>('phone');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [staffError, setStaffError] = useState('');

  // Management State
  const [managementRole, setManagementRole] = useState<'owner' | 'manager'>('owner');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mgmtError, setMgmtError] = useState('');

  // Handle Staff Get OTP
  const handleGetOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStaffError('');

    const cleanPhone = phone.trim();
    if (!cleanPhone || cleanPhone.length < 10) {
      setStaffError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setOtpStep('otp');
    setEnteredOtp('');
  };

  // Handle Staff Verify OTP (Accepts any 4-digit number)
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setStaffError('');

    if (!enteredOtp || enteredOtp.length !== 4) {
      setStaffError('Please enter any 4-digit verification code.');
      return;
    }

    // Success -> Login Staff and route
    loginStaff(phone);
    navigate('/employee/dashboard', { replace: true });
  };

  // Handle Management Login with Dummy Users Validation
  const handleManagementLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMgmtError('');

    const trimmedUser = username.trim().toLowerCase();
    const trimmedPass = password.trim();

    if (!trimmedUser) {
      setMgmtError('Please enter your username or email.');
      return;
    }

    if (!trimmedPass) {
      setMgmtError('Please enter your password.');
      return;
    }

    const availableUsers = managementRole === 'owner' ? dummyUsers.owners : dummyUsers.managers;

    const matchedUser = availableUsers.find(
      (u) =>
        (u.username.toLowerCase() === trimmedUser || u.email.toLowerCase() === trimmedUser) &&
        u.password === trimmedPass
    );

    if (matchedUser) {
      if (managementRole === 'owner') {
        loginOwner(matchedUser.username, matchedUser);
        navigate('/owner/dashboard', { replace: true });
      } else {
        loginManager(matchedUser.username, matchedUser);
        navigate('/manager/dashboard', { replace: true });
      }
    } else {
      setMgmtError('Invalid credentials. Please select or enter valid dummy user details.');
    }
  };

  // Role Switcher (Clears input fields)
  const switchManagementRole = (role: 'owner' | 'manager') => {
    setManagementRole(role);
    setUsername('');
    setPassword('');
    setMgmtError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EAE6FE] via-[#F4F2FF] to-[#EBE7FE] flex flex-col justify-between p-4 sm:p-6 font-sans text-gray-800 select-none">
      {/* Top Navbar Header */}
      <header className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="esteticanow" className="h-9 object-contain" />
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#6C5CE7] bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-purple-100 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Estetica Portal</span>
        </div>
      </header>

      {/* Main Login Card Container */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[460px] bg-white rounded-[2.5rem] shadow-2xl p-6 sm:p-9 border border-purple-50/50 relative overflow-hidden transition-all duration-300">

          {/* Top Role Selector Tabs */}
          <div className="bg-[#F2F0FD] p-1.5 rounded-2xl flex items-center gap-1 mb-8 shadow-inner border border-purple-100/50">
            <button
              type="button"
              onClick={() => {
                setActiveTab('staff');
                setStaffError('');
              }}
              className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-0 ${activeTab === 'staff'
                ? 'bg-white text-[#6C5CE7] shadow-md shadow-purple-500/10'
                : 'text-gray-500 hover:text-gray-800 hover:bg-white/40'
                }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${activeTab === 'staff' ? 'bg-[#6C5CE7]' : 'bg-gray-400'
                  }`}
              />
              <span>Staff Login</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('management');
                setMgmtError('');
              }}
              className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border-0 ${activeTab === 'management'
                ? 'bg-white text-[#6C5CE7] shadow-md shadow-purple-500/10'
                : 'text-gray-500 hover:text-gray-800 hover:bg-white/40'
                }`}
            >
              <span
                className={`w-2 h-2 rounded-full transition-colors ${activeTab === 'management' ? 'bg-[#6C5CE7]' : 'bg-gray-400'
                  }`}
              />
              <span>Owner / Manager</span>
            </button>
          </div>

          {/* TAB 1: STAFF (EMPLOYEE) MOBILE + OTP */}
          {activeTab === 'staff' && (
            <div className="animate-fadeIn">
              {otpStep === 'phone' ? (
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome!</h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                      Step into serenity with just a tap. Your journey to relaxation awaits.
                    </p>
                  </div>

                  <form onSubmit={handleGetOtp} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <div className="flex items-center border border-gray-200 focus-within:border-[#6C5CE7] focus-within:ring-4 focus-within:ring-[#6C5CE7]/10 rounded-2xl p-1.5 transition-all">
                        {/* Country Code Selection */}
                        <div className="flex items-center gap-1.5 px-3 py-2 border-r border-gray-200 text-gray-700 text-sm font-bold bg-white rounded-xl shadow-xs select-none">
                          <span className="text-gray-900" role="img" aria-label="India flag">
                            IND
                          </span>
                          <span className="ml-1 text-gray-900">+91</span>
                          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                        </div>

                        {/* Mobile Number Input */}
                        <input
                          type="tel"
                          maxLength={10}
                          value={phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '');
                            setPhone(val);
                            if (staffError) setStaffError('');
                          }}
                          placeholder="Enter 10-digit mobile number"
                          className="flex-1 bg-transparent px-3 py-2 text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none"
                        />
                      </div>
                      <p className="text-[11px] text-gray-400 mt-2 font-medium">
                        You'll receive an OTP on the number above. For now enter random number as OTP.
                      </p>
                    </div>

                    {staffError && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-medium">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{staffError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={phone.length !== 10}
                      className={`w-full text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-purple-500/20 transition-all duration-200 text-sm tracking-wide border-0 active:scale-[0.99] ${phone.length === 10 ? 'bg-[#6C5CE7] cursor-pointer' : 'bg-[#B2A8F7] cursor-not-allowed'
                        }`}
                    >
                      Get Verification Code
                    </button>
                  </form>
                </div>
              ) : (
                <div className="animate-fadeIn">
                  {/* OTP Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={() => setOtpStep('phone')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6C5CE7] hover:text-purple-800 transition-colors bg-purple-50 px-3 py-1.5 rounded-full border-0 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Change Number</span>
                    </button>
                    <span className="text-xs font-medium text-gray-400">+91 {phone}</span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-gray-900">Enter OTP</h2>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Enter any 4-digit code to complete sign in.
                  </p>

                  <form onSubmit={handleVerifyOtp} className="space-y-5 mt-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                        Verification Code
                      </label>
                      <input
                        type="text"
                        maxLength={4}
                        value={enteredOtp}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setEnteredOtp(val);
                          if (staffError) setStaffError('');
                        }}
                        placeholder="4-digit code"
                        className="w-full text-center text-2xl tracking-[0.5em] font-black py-3 bg-[#F8F8FC] border border-gray-200 focus:border-[#6C5CE7] focus:ring-4 focus:ring-[#6C5CE7]/10 rounded-2xl text-gray-900 focus:outline-none transition-all"
                      />
                    </div>

                    {staffError && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-medium">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{staffError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={enteredOtp.length !== 4}
                      className={`w-full text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-200 text-sm tracking-wide border-0 active:scale-[0.99] ${enteredOtp.length === 4 ? 'bg-[#6C5CE7] cursor-pointer' : 'bg-[#B2A8F7] cursor-not-allowed'
                        }`}
                    >
                      Verify & Sign In
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: OWNER / MANAGER LOGIN (USERNAME & PASSWORD) */}
          {activeTab === 'management' && (
            <div className="animate-fadeIn">
              <div className="mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Management Sign In</h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                  Sign in with your organizational credentials to access owner or manager dashboards.
                </p>
              </div>

              {/* Management Role Selector */}
              <div className="grid grid-cols-2 gap-2 mb-5 p-1 bg-gray-100/80 rounded-xl">
                <button
                  type="button"
                  onClick={() => switchManagementRole('owner')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border-0 ${managementRole === 'owner'
                    ? 'bg-white text-purple-700 shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Owner</span>
                </button>
                <button
                  type="button"
                  onClick={() => switchManagementRole('manager')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border-0 ${managementRole === 'manager'
                    ? 'bg-white text-purple-700 shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                    }`}
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Manager</span>
                </button>
              </div>

              <form onSubmit={handleManagementLogin} className="space-y-4">
                {/* Username Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Username / Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        if (mgmtError) setMgmtError('');
                      }}
                      placeholder="Enter username or email"
                      className="w-full pl-10 pr-4 py-3 bg-[#F8F8FC] border border-gray-200 focus:border-[#6C5CE7] focus:ring-4 focus:ring-[#6C5CE7]/10 rounded-2xl text-sm font-medium text-gray-900 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (mgmtError) setMgmtError('');
                      }}
                      placeholder="Enter password"
                      className="w-full pl-10 pr-11 py-3 bg-[#F8F8FC] border border-gray-200 focus:border-[#6C5CE7] focus:ring-4 focus:ring-[#6C5CE7]/10 rounded-2xl text-sm font-medium text-gray-900 focus:outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer bg-transparent border-0"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {mgmtError && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-xs font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{mgmtError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#6C5CE7] text-white font-bold py-3.5 px-4 rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-200 cursor-pointer text-sm tracking-wide border-0 mt-2 active:scale-[0.99]"
                >
                  Sign In as {managementRole === 'owner' ? 'Owner' : 'Manager'}
                </button>
              </form>
            </div>
          )}

        </div>
      </main>

      {/* Footer Legal Terms */}
      <footer className="text-center text-xs text-gray-500 font-medium">
        By login you agree to our{' '}
        <a href="#terms" className="text-[#6C5CE7] font-semibold hover:underline">
          Terms & Conditions
        </a>{' '}
        and{' '}
        <a href="#privacy" className="text-[#6C5CE7] font-semibold hover:underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default Login;