import { useState } from "react";
import { AttendanceSidebar } from "./components/attendance/AttendanceSidebar";
import { ClockInOutCard } from "./components/attendance/ClockInOutCard";
import { MonthlyStatsCard } from "./components/attendance/MonthlyStatsCard";
import { RecentRecordsCard } from "./components/attendance/RecentRecordsCard";
import { QuickActionsCard } from "./components/attendance/QuickActionsCard";
import { MiniCalendar } from "./components/attendance/MiniCalendar";
import { AttendanceChart } from "./components/attendance/AttendanceChart";
import { Login } from "./components/Login";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <>
        <Login onLogin={() => setIsLoggedIn(true)} />
        <Toaster position="top-right" richColors />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AttendanceSidebar onLogout={() => setIsLoggedIn(false)} />
      
      <div className="ml-64 transition-all duration-300 p-10">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-light tracking-tight text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-400 mt-1">2026年2月14日 土曜日</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">System Online</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Stats Row */}
          <MonthlyStatsCard />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Clock In/Out */}
            <div className="lg:col-span-1 space-y-8">
              <ClockInOutCard />
              <AttendanceChart />
            </div>

            {/* Right Column - Calendar and Quick Actions */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MiniCalendar />
                <QuickActionsCard />
              </div>
              <RecentRecordsCard />
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
}
