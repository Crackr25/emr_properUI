import React from 'react';
import { Activity } from 'lucide-react';

interface OnboardingHeroProps {
  currentStage: number;
  totalStages: number;
  stageIcon: React.ReactNode;
  stageTitle: string;
}

export const OnboardingHero: React.FC<OnboardingHeroProps> = ({
  currentStage,
  totalStages,
  stageIcon,
  stageTitle,
}) => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-black relative overflow-hidden">
      {/* Radial Gradient Glow Effects */}
      <div className="absolute inset-0">
        {/* Green glow from left/center */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"></div>
        {/* Purple/Blue glow from right */}
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full px-12 text-white">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
              <Activity className="w-9 h-9 text-black" strokeWidth={2.5} />
            </div>
            <h1 className="text-5xl font-bold">OneUp</h1>
          </div>
        </div>

        {/* Glassmorphism Card */}
        <div className="w-full max-w-md aspect-square bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {stageIcon}
            </div>
            <p className="text-2xl font-bold text-white mb-2">
              Step {currentStage} of {totalStages}
            </p>
            <p className="text-sm text-zinc-300">{stageTitle}</p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-zinc-400 max-w-md">
          Complete your profile to get started
        </p>
      </div>
    </div>
  );
};
