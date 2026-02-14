import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "2/8", 勤務: 8.0, 残業: 0.5 },
  { name: "2/9", 勤務: 8.5, 残業: 1.0 },
  { name: "2/10", 勤務: 7.5, 残業: 0 },
  { name: "2/11", 勤務: 0, 残業: 0 },
  { name: "2/12", 勤務: 8.0, 残業: 0.5 },
  { name: "2/13", 勤務: 9.0, 残業: 1.5 },
  { name: "2/14", 勤務: 4.0, 残業: 0 },
];

export function AttendanceChart() {
  return (
    <Card className="col-span-full border-none shadow-sm bg-white/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-500">週間の勤務状況</CardTitle>
          <div className="flex items-center gap-3 text-[10px] font-medium text-gray-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>通常</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>残業</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[240px] w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 11 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#9ca3af', fontSize: 11 }}
                unit="h"
              />
              <Tooltip 
                cursor={{ fill: '#f9fafb' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05)', fontSize: '12px' }}
              />
              <Bar dataKey="勤務" fill="#3b82f6" radius={[4, 4, 4, 4]} barSize={24} stackId="a" />
              <Bar dataKey="残業" fill="#fb923c" radius={[4, 4, 4, 4]} barSize={24} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
