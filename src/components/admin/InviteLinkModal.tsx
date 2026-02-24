import React, { useState } from 'react';
import { Link, Copy, CheckCircle2, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InviteLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  role: string;
  inviteLink: string;
}

export const InviteLinkModal: React.FC<InviteLinkModalProps> = ({
  isOpen,
  onClose,
  email,
  role,
  inviteLink,
}) => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`sm:max-w-md ${theme === 'dark' ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-gray-200'}`}>
        <DialogHeader>
          <DialogTitle className={`flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-zinc-800' : 'bg-gray-100'}`}>
              <Link className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
            </div>
            <span>Invitation Link</span>
          </DialogTitle>
          <DialogDescription className={`${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
            Share this link with <strong>{email}</strong> to complete their registration as a <strong>{role}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Invite Link Display */}
          <div>
            <div className={`flex items-center gap-2 p-3 rounded-lg border ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-gray-50 border-gray-200'}`}>
              <code className={`flex-1 text-xs break-all ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-700'}`}>
                {inviteLink}
              </code>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={handleCopyLink}
              className={`flex-1 ${theme === 'dark' ? 'bg-white hover:bg-zinc-200 text-black' : 'bg-black hover:bg-gray-800 text-white'}`}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className={`${theme === 'dark' ? 'border-zinc-700 text-white hover:bg-zinc-800 bg-transparent' : 'border-gray-300 text-gray-700 hover:bg-gray-100 bg-white'}`}
            >
              Close
            </Button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none ${
            theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-gray-400 hover:text-gray-900'
          }`}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </DialogContent>
    </Dialog>
  );
};
