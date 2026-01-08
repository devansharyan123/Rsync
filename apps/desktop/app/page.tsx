"use client";

import React from 'react';
import { Circle, Settings, X, Minimize2 } from 'lucide-react';

export default function RecorderUI() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      {/* Main Window Card */}
      <div 
        style={{ WebkitAppRegion: 'drag' } as any}
        className="w-full max-w-md flex flex-col bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-white rounded-2xl border border-gray-700/50 shadow-2xl overflow-hidden select-none"
      >
        {/* Top Bar - Window Controls */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-gray-800/30">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div style={{ WebkitAppRegion: 'no-drag' } as any} className="w-3 h-3 bg-red-500 hover:bg-red-600 rounded-full cursor-pointer transition-colors shadow-lg shadow-red-500/50" title="Close" />
              <div style={{ WebkitAppRegion: 'no-drag' } as any} className="w-3 h-3 bg-yellow-500 hover:bg-yellow-600 rounded-full cursor-pointer transition-colors shadow-lg shadow-yellow-500/50" title="Minimize" />
              <div style={{ WebkitAppRegion: 'no-drag' } as any} className="w-3 h-3 bg-green-500 hover:bg-green-600 rounded-full cursor-pointer transition-colors shadow-lg shadow-green-500/50" title="Maximize" />
            </div>
            <div className="flex items-center gap-2 pl-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-gray-400">Rsync</span>
            </div>
          </div>
          <div style={{ WebkitAppRegion: 'no-drag' } as any} className="flex gap-3">
            <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-all hover:rotate-90 duration-300" />
            <X className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 bg-gradient-to-b from-transparent to-gray-900/30">
          {/* Recording Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-24 h-24 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl shadow-red-900/50 border-4 border-red-500/30">
              <Circle className="w-12 h-12 text-white fill-white" />
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Capture?</h1>
          <p className="text-sm text-gray-400 mb-8 text-center max-w-xs">Your screen recording will start instantly when you click the button below</p>
          
          {/* Action Buttons */}
          <div style={{ WebkitAppRegion: 'no-drag' } as any} className="flex flex-col gap-3 w-full">
            <button className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-red-900/50 border border-red-500/50">
              <Circle className="w-5 h-5 fill-white animate-pulse" />
              Start Recording
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-3 rounded-xl font-medium transition-all border border-gray-700 hover:border-gray-600">
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-3 rounded-xl font-medium transition-all border border-gray-700 hover:border-gray-600">
                <Minimize2 className="w-4 h-4" />
                Minimize
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="px-5 py-3 bg-gray-900/50 border-t border-gray-800/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs text-gray-400">Ready</span>
          </div>
          <span className="text-xs text-gray-500">v1.0.0</span>
        </div>

        {/* Subtle accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
      </div>
    </div>
  );
}