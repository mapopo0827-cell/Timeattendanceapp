import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
      toast.success("おかえりなさい、田中さん");
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left side: Image Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1770048532712-4fde5ef7eb90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmlnaHQlMjBvZmZpY2UlMjBpbnRlcmlvciUyMGdsYXNzJTIwYXJjaGl0ZWN0dXJlJTIwbHV4dXJ5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MTA3NDkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern business office"
          className="object-cover w-full h-full opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200">System Online</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              スマートな勤怠管理で、<br />
              チームの生産性を最大化する。
            </h2>
            <div className="space-y-4">
              {[
                "リアルタイム打刻管理",
                "自動集計・月次統計",
                "申請・承認ワークフロー"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70">
                  <CheckCircle2 size={20} className="text-blue-400" />
                  <span className="text-sm font-light tracking-wide">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-16 bg-white">
        <div className="w-full max-w-[400px]">
          <div className="mb-12">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-600 text-white mb-8 shadow-lg shadow-blue-100"
            >
              <ArrowRight size={24} />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">ログイン</h1>
            <p className="text-gray-500 font-light">
              アカウント情報を入力してダッシュボードにアクセスしてください。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-semibold text-gray-400 ml-1">メールアドレス</Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-500 transition-colors" size={18} />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="corp@example.jp" 
                  className="pl-12 h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/20 transition-all rounded-2xl text-gray-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <Label htmlFor="password" name="password" className="text-xs font-semibold text-gray-400">パスワード</Label>
                <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">パスワードを忘れた場合</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-500 transition-colors" size={18} />
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  className="pl-12 pr-12 h-14 bg-gray-50/50 border-gray-100 focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/20 transition-all rounded-2xl text-gray-800"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-xl shadow-blue-100 transition-all active:scale-[0.98] mt-4 font-bold text-base"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>認証中...</span>
                </div>
              ) : "ログイン"}
            </Button>
          </form>

          <div className="mt-20 flex items-center justify-between pt-8 border-t border-gray-100">
            <p className="text-[11px] text-gray-400 font-medium uppercase tracking-widest">
              Attendance System v2.0
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600">利用規約</a>
              <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600">プライバシー</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
