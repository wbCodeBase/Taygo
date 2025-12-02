import { motion } from 'motion/react';
import { User, Phone, Mail, DollarSign, Calendar, CheckCircle, Clock, AlertCircle, Sparkles, Send, X } from 'lucide-react';
import { useState } from 'react';

export function MortgageCRMDashboard() {
  const [chatOpen, setChatOpen] = useState(true);
  const [message, setMessage] = useState('');

  const leads = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      email: 'sarah.m@email.com',
      phone: '(555) 234-5678',
      loanAmount: '$450,000',
      status: 'Pre-Approved',
      statusColor: 'bg-green-500',
      progress: 75,
      lastContact: '2 hours ago',
      nextStep: 'Document Review'
    },
    {
      id: 2,
      name: 'John Davidson',
      email: 'john.d@email.com',
      phone: '(555) 876-5432',
      loanAmount: '$320,000',
      status: 'Qualification',
      statusColor: 'bg-blue-500',
      progress: 45,
      lastContact: '1 day ago',
      nextStep: 'Credit Check'
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      email: 'mike.r@email.com',
      phone: '(555) 345-6789',
      loanAmount: '$275,000',
      status: 'New Lead',
      statusColor: 'bg-yellow-500',
      progress: 15,
      lastContact: '3 hours ago',
      nextStep: 'Initial Call'
    },
    {
      id: 4,
      name: 'Emily Chen',
      email: 'emily.c@email.com',
      phone: '(555) 567-8901',
      loanAmount: '$525,000',
      status: 'Application',
      statusColor: 'bg-indigo-500',
      progress: 60,
      lastContact: '5 hours ago',
      nextStep: 'Income Verification'
    },
  ];

  return (
    <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg" style={{ fontWeight: 600 }}>Mortgage CRM Dashboard</h3>
            <p className="text-sm text-gray-300 mt-1">Active Pipeline</p>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <div className="text-2xl" style={{ fontWeight: 700 }}>47</div>
              <div className="text-xs text-gray-300">Total Leads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl" style={{ fontWeight: 700 }}>12</div>
              <div className="text-xs text-gray-300">Active Today</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 border-b border-gray-200">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-yellow-500" />
            <span className="text-xs text-gray-600">New</span>
          </div>
          <div className="text-xl text-gray-900" style={{ fontWeight: 700 }}>8</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <AlertCircle className="w-4 h-4 text-blue-500" />
            <span className="text-xs text-gray-600">Qualifying</span>
          </div>
          <div className="text-xl text-gray-900" style={{ fontWeight: 700 }}>15</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-xs text-gray-600">Approved</span>
          </div>
          <div className="text-xl text-gray-900" style={{ fontWeight: 700 }}>18</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-teal" />
            <span className="text-xs text-gray-600">Closing</span>
          </div>
          <div className="text-xl text-gray-900" style={{ fontWeight: 700 }}>6</div>
        </div>
      </div>

      {/* Leads Grid */}
      <div className="p-4 space-y-3 max-h-[420px] overflow-y-auto">
        {leads.map((lead, index) => (
          <motion.div
            key={lead.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900" style={{ fontWeight: 600 }}>{lead.name}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Mail className="w-3 h-3" />
                      {lead.email}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Phone className="w-3 h-3" />
                      {lead.phone}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`${lead.statusColor} w-2 h-2 rounded-full`} />
                <span className="text-xs text-gray-600">{lead.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div className="text-xs text-gray-500">Loan Amount</div>
                <div className="text-sm text-gray-900" style={{ fontWeight: 600 }}>{lead.loanAmount}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Next Step</div>
                <div className="text-sm text-gray-900" style={{ fontWeight: 600 }}>{lead.nextStep}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Progress</span>
                <span className="text-gray-700" style={{ fontWeight: 600 }}>{lead.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <motion.div
                  className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] h-1.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${lead.progress}%` }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                Last contact: {lead.lastContact}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lisa Chat Box - Corner Position */}
      {chatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute bottom-4 right-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-300 overflow-hidden z-10"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#0D9488] to-[#14B8A6] px-4 py-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm" style={{ fontWeight: 600 }}>Lisa AI Agent</h4>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                  <span className="text-xs text-teal-50">Active</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setChatOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3 space-y-3 h-64 overflow-y-auto bg-gray-50">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-2"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs" style={{ fontWeight: 600 }}>L</span>
              </div>
              <div className="bg-white rounded-lg rounded-tl-sm p-3 flex-1 shadow-sm border border-gray-200">
                <p className="text-xs text-gray-900">
                  I've qualified Sarah Mitchell and John Davidson. Both ready for pre-approval. Should I send the applications?
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex gap-2 justify-end"
            >
              <div className="bg-gray-200 rounded-lg rounded-tr-sm p-3 max-w-[200px] shadow-sm">
                <p className="text-xs text-gray-900">
                  Yes, and schedule calls
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex gap-2"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs" style={{ fontWeight: 600 }}>L</span>
              </div>
              <div className="bg-white rounded-lg rounded-tl-sm p-3 flex-1 shadow-sm border border-gray-200">
                <p className="text-xs text-gray-900 mb-2">Done! ✓</p>
                <div className="bg-teal/5 rounded p-2 text-xs space-y-1 border border-teal/20">
                  <p className="text-gray-700">• Applications sent</p>
                  <p className="text-gray-700">• Calls scheduled for tomorrow</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex gap-2"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs" style={{ fontWeight: 600 }}>L</span>
              </div>
              <div className="bg-white rounded-lg rounded-tl-sm p-2 shadow-sm border border-gray-200">
                <div className="flex gap-1">
                  <motion.div
                    className="w-1.5 h-1.5 bg-[#0D9488] rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 bg-[#0D9488] rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-1.5 h-1.5 bg-[#0D9488] rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chat Input */}
          <div className="p-2 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask Lisa..."
                className="flex-1 px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:border-transparent"
              />
              <button className="bg-[#0D9488] text-white p-2 rounded-lg hover:bg-[#0c8077] transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Lisa Chat Button - When Closed */}
      {!chatOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => setChatOpen(true)}
          className="absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-10"
        >
          <Sparkles className="w-6 h-6 text-white" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs" style={{ fontWeight: 700 }}>3</span>
          </div>
        </motion.button>
      )}
    </div>
  );
}
