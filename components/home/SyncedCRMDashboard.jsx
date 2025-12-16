import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, DollarSign, TrendingUp, Users, CheckCircle, Sparkles, Send, BarChart3, PhoneCall, MailOpen, X, Check } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import ChatUserAbhi from "@/public/images/userAvatar.png";
import { LayoutPanelLeft } from 'lucide-react';
import { Shell } from 'lucide-react';
import { HandCoins } from 'lucide-react';
import { Brain } from 'lucide-react';


export function SyncedCRMDashboard() {
  const [currentView, setCurrentView] = useState('analytics');
  const [messages, setMessages] = useState([]);
  const [chatStep, setChatStep] = useState(0);
  const [callingLeads, setCallingLeads] = useState([]);
  const [calledLeads, setCalledLeads] = useState([]);
  const [sendingEmails, setSendingEmails] = useState([]);
  const [sentEmails, setSentEmails] = useState([]);

  const leads = [
    { id: 1, name: 'Sarah Mitchell', email: 'sarah.m@email.com', phone: '(555) 234-5678', loanAmount: '$450,000', status: 'New' },
    { id: 2, name: 'John Davidson', email: 'john.d@email.com', phone: '(555) 876-5432', loanAmount: '$320,000', status: 'New' },
    { id: 3, name: 'Mike Rodriguez', email: 'mike.r@email.com', phone: '(555) 345-6789', loanAmount: '$275,000', status: 'New' },
    { id: 4, name: 'Emily Chen', email: 'emily.c@email.com', phone: '(555) 567-8901', loanAmount: '$525,000', status: 'New' },
    { id: 5, name: 'David Park', email: 'david.p@email.com', phone: '(555) 432-1098', loanAmount: '$380,000', status: 'New' },
  ];

  const chatScript = [
    { id: 1, sender: 'lisa', text: '5 new leads found! May I call them to qualify?', delay: 1000 },
    { id: 2, sender: 'user', text: 'Yes please', delay: 2000 },
    { id: 3, sender: 'lisa', text: 'Initiating calls now...', delay: 500 },
    { id: 4, sender: 'lisa', text: 'Called 5 leads successfully! 4 are interested. Should I send them pre-approval emails?', delay: 4000 },
    { id: 5, sender: 'user', text: 'Great! Yes, send emails', delay: 2000 },
    { id: 6, sender: 'lisa', text: 'Sending personalized emails...', delay: 500 },
    { id: 7, sender: 'lisa', text: 'Emails sent! ✓ 3 meetings scheduled for tomorrow.', delay: 3000 },
  ];



  useEffect(() => {
    // If reached end → reset everything and restart loop
    if (chatStep >= chatScript.length) {
      const resetTimer = setTimeout(() => {
        // Reset all animated states
        setMessages([]);
        setCurrentView(null);
        setCallingLeads([]);
        setCalledLeads([]);
        setSendingEmails([]);
        setSentEmails([]);

        setChatStep(0); // restart
      }, 1000);

      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(() => {
      const currentMessage = chatScript[chatStep];
      setMessages(prev => [...prev, currentMessage]);

      // === CRM VIEW & ACTION LOGIC ===
      if (chatStep === 0) {
        setTimeout(() => setCurrentView("leads"), 800);
      }

      else if (chatStep === 2) {
        setTimeout(() => {
          setCurrentView("calling");

          leads.forEach((lead, index) => {
            setTimeout(() => {
              setCallingLeads(prev => [...prev, lead.id]);
            }, index * 600);

            setTimeout(() => {
              setCallingLeads(prev => prev.filter(id => id !== lead.id));
              setCalledLeads(prev => [...prev, lead.id]);
            }, index * 600 + 2000);
          });
        }, 300);
      }

      else if (chatStep === 4) {
        setTimeout(() => setCurrentView("email"), 800);
      }

      else if (chatStep === 5) {
        setTimeout(() => {
          leads.slice(0, 4).forEach((lead, index) => {
            setTimeout(() => {
              setSendingEmails(prev => [...prev, lead.id]);
            }, index * 500);

            setTimeout(() => {
              setSendingEmails(prev => prev.filter(id => id !== lead.id));
              setSentEmails(prev => [...prev, lead.id]);
            }, index * 500 + 1500);
          });
        }, 300);
      }

      setChatStep(prev => prev + 1); // safe increment
    }, chatScript[chatStep].delay);

    return () => clearTimeout(timer);
  }, [chatStep]);



  return (
    <div className="relative bg-white rounded-xs shadow-2xl border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-12 h-[600px]">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="col-span-2 bg-gray900 bg-crm-green p-4 flex flex-col"
        >
          {/* <h3 className="text-white text-md" style={{ fontWeight: 600 }}>TAYGO™ CRM</h3> */}
          <div className="mb-6 p-2">
            <Image src="/logo/TaygoLogoWhite.png" alt='logo' width={100} height={20} />
            {/* <p className="text-gray-200 text-xs mt-1">Mortgage Dashboard</p>  */}
          </div>

          <nav className="flex-1">
            <button
              onClick={() => setCurrentView('analytics')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xs transition-colors cursor-pointer ${currentView === 'analytics' ? 'text-white' : 'text-gray-200 hover:bg-teal-700'
                }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-md">Dashboard</span>
            </button>

            <button
              onClick={() => setCurrentView('leads')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xs transition-colors cursor-pointer ${currentView === 'calling' ? 'text-white' : 'text-gray-200 hover:bg-teal-700'
                }`}
            >
              <Users className="w-4 h-4" />
              <span className="text-md">LeadFlow</span>
            </button>

            <button
              // onClick={() => setCurrentView('email')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xs transition-colors cursor-pointer ${currentView === 'email' ? 'text-white' : 'text-gray-200 hover:bg-teal-700'
                }`}
            >
              <LayoutPanelLeft className="w-4 h-4" />
              <span className="text-md">AppFlow (POS)</span>
            </button>
            <button
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xs transition-colors cursor-pointer ${currentView === 'email' ? 'text-white' : 'text-gray-200 hover:bg-teal-700'
                }`}
            >
              <Shell className="w-4 h-4" />
              <span className="text-md">Refi Pipeline Builder</span>
            </button>
            <button
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xs transition-colors cursor-pointer ${currentView === 'email' ? 'text-white' : 'text-gray-200 hover:bg-teal-700'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-md">Call Center</span>
            </button>
            <button
              onClick={() => setCurrentView('email')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xs transition-colors cursor-pointer ${currentView === 'email' ? 'text-white' : 'text-gray-200 hover:bg-teal-700'
                }`}
            >
              <HandCoins className="w-4 h-4" />
              <span className="text-md">Loans</span>
            </button>


            <button
              onClick={() => setCurrentView('email')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xs transition-colors cursor-pointer ${currentView === 'email' ? 'text-white' : 'text-gray-200 hover:bg-teal-700'
                }`}
            >
              <Brain className="w-4 h-4" />
              <span className="text-md">Automation</span>
            </button>
            <button
              onClick={() => setCurrentView('email')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xs transition-colors cursor-pointer ${currentView === 'email' ? 'text-white' : 'text-gray-200 hover:bg-teal-700'
                }`}
            >
              <LayoutPanelLeft className="w-4 h-4" />
              <span className="text-md">Apps</span>
            </button>

          </nav>

          <div className="mt-auto pt-4 border-t border-gray-300">
            <div className="flex items-center gap-2 text-gray-200 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Lisa Active</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="col-span-7 bg-gray-50 overflow-y-auto">
          <AnimatePresence mode="wait">
            {currentView === 'analytics' && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6"
              >
                <h2 className="text-2xl text-gray-900 mb-6" style={{ fontWeight: 700 }}>Dashboard Analytics</h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xs flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>47</div>
                        <div className="text-sm text-gray-500">Total Leads</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>+12% this week</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-teal/10 rounded-xs flex items-center justify-center">
                        <PhoneCall className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <div className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>128</div>
                        <div className="text-sm text-gray-500">Calls Made</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>+8% this week</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-xs flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>$2.1M</div>
                        <div className="text-sm text-gray-500">Pipeline Value</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-green-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>+15% this week</span>
                    </div>
                  </motion.div>
                </div>

                {/* Activity Chart */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg text-gray-900 mb-4" style={{ fontWeight: 600 }}>Recent Activity</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Phone, text: 'Lisa called 12 leads', time: '2 hours ago', color: 'bg-green-100 text-green-600' },
                      { icon: Mail, text: '8 pre-approval emails sent', time: '4 hours ago', color: 'bg-blue-100 text-blue-600' },
                      { icon: CheckCircle, text: '3 meetings scheduled', time: '5 hours ago', color: 'bg-teal/10 text-teal' },
                      { icon: User, text: '5 new leads added', time: '6 hours ago', color: 'bg-purple-100 text-purple-600' },
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xs transition-colors"
                      >
                        <div className={`w-10 h-10 ${activity.color} rounded-xs flex items-center justify-center`}>
                          <activity.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.text}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === 'leads' && (
              <motion.div
                key="leads"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>New Leads</h2>
                  <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    <CheckCircle className="w-4 h-4" />
                    <span>{leads.length} Active</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {leads.map((lead, index) => (
                    <motion.div
                      key={lead.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xs p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-white" />
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
                        <div className="text-right">
                          <div className="text-lg text-gray-900" style={{ fontWeight: 600 }}>{lead.loanAmount}</div>
                          <div className="text-xs text-gray-500 mt-1">{lead.status}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentView === 'calling' && (
              <motion.div
                key="calling"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6"
              >
                <h2 className="text-2xl text-gray-900 mb-6" style={{ fontWeight: 700 }}>Calling Leads</h2>

                <div className="space-y-3">
                  {leads.map((lead, index) => (
                    <motion.div
                      key={lead.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xs p-4 shadow-sm border border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${callingLeads.includes(lead.id)
                            ? 'bg-blue-100'
                            : calledLeads.includes(lead.id)
                              ? 'bg-green-100'
                              : 'bg-gray-100'
                            }`}>
                            {callingLeads.includes(lead.id) ? (

                              <motion.div
                                animate={{ rotate: [-5, 5, -5, 5, 0] }}
                                transition={{
                                  duration: 0.5,
                                  repeat: Infinity,
                                  repeatDelay: 2
                                }}
                              >

                                <Phone className="w-6 h-6 text-blue-600" />
                              </motion.div>
                            ) : calledLeads.includes(lead.id) ? (
                              <CheckCircle className="w-6 h-6 text-green-600" />
                            ) : (
                              <Phone className="w-6 h-6 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-gray-900" style={{ fontWeight: 600 }}>{lead.name}</h4>
                            <p className="text-xs text-gray-500">{lead.phone}</p>
                          </div>
                        </div>
                        <div>
                          {callingLeads.includes(lead.id) && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex items-center gap-2 text-blue-600 text-sm"
                            >
                              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                              <span>Calling...</span>
                            </motion.div>
                          )}
                          {calledLeads.includes(lead.id) && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="flex items-center gap-2 text-green-600 text-sm"
                            >
                              <Check className="w-4 h-4" />
                              <span>Completed</span>
                            </motion.div>
                          )}
                          {!callingLeads.includes(lead.id) && !calledLeads.includes(lead.id) && (
                            <div className="text-gray-400 text-sm">Pending</div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentView === 'email' && (
              <motion.div
                key="email"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6"
              >
                <h2 className="text-2xl text-gray-900 mb-6" style={{ fontWeight: 700 }}>Email Campaign</h2>

                <div className="space-y-3">
                  {leads.slice(0, 4).map((lead, index) => (
                    <motion.div
                      key={lead.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xs p-4 shadow-sm border border-gray-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${sendingEmails.includes(lead.id)
                          ? 'bg-blue-100'
                          : sentEmails.includes(lead.id)
                            ? 'bg-green-100'
                            : 'bg-gray-100'
                          }`}>
                          {sendingEmails.includes(lead.id) ? (
                            <motion.div
                              animate={{ x: [0, 10, 0] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                            >
                              <MailOpen className="w-6 h-6 text-blue-600" />
                            </motion.div>
                          ) : sentEmails.includes(lead.id) ? (
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          ) : (
                            <Mail className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-gray-900" style={{ fontWeight: 600 }}>{lead.name}</h4>
                            {sendingEmails.includes(lead.id) && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-2 text-blue-600 text-sm"
                              >
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                                <span>Sending...</span>
                              </motion.div>
                            )}
                            {sentEmails.includes(lead.id) && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center gap-2 text-green-600 text-sm"
                              >
                                <Check className="w-4 h-4" />
                                <span>Sent</span>
                              </motion.div>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mb-2">{lead.email}</p>
                          <div className="bg-gray-50 rounded-xs p-3 text-xs">
                            <p className="text-gray-700" style={{ fontWeight: 600 }}>Subject: Pre-Approval Application for {lead.loanAmount}</p>
                            <p className="text-gray-600 mt-1">Hi {lead.name.split(' ')[0]}, Great news! You're pre-qualified for a mortgage...</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Lisa Chat Panel */}
        <div className="col-span-3 bg-white border-l border-gray-200 flex flex-col">
          <div className="bg-crm-green p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                {/* <Sparkles className="w-5 h-5" /> */}

                <Image src="/images/lisa.png" alt="Lisa Icon" width={32} height={32} className="rounded-full" />

              </div>
              <div>
                <h3 className="text-sm" style={{ fontWeight: 600 }}>Lisa</h3>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse" />
                  <span className="text-xs text-teal-50">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-gray-50">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {message.sender === 'lisa' && (
                    <div className="w-7 h-7 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                      {/* <span className="text-white text-xs" style={{ fontWeight: 600 }}>L</span> */}

                      <Image src="/images/lisa.png" alt="Lisa Icon" width={23} height={23} className="rounded-full" />
                    </div>
                  )}
                  <div className={`rounded-xs p-3 max-w-[200px] ${message.sender === 'lisa'
                    ? 'bg-white border border-gray-200'
                    : 'bg-gray-200'
                    }`}>
                    <p className="text-xs text-gray-900">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      {/* <span className="text-xs text-gray-700" style={{ fontWeight: 600 }}>U</span> */}

                      <Image src={ChatUserAbhi} alt="User Icon" width={29} height={29} className="rounded-full" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {messages.length > 0 && messages.length < chatScript.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-[#0D9488] to-[#14B8A6] rounded-full flex items-center justify-center flex-shrink-0">
                  {/* <span className="text-white text-xs" style={{ fontWeight: 600 }}>L</span> */}

                  <Image src="/images/lisa.png" alt="Lisa Icon" width={23} height={23} className="rounded-full" />
                </div>
                <div className="bg-white rounded-xs p-2 border border-gray-200">
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
            )}
          </div>

          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask Lisa..."
                className="flex-1 px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xs focus:outline-none focus:ring-2 focus:ring-btn-green"
              />
              <button className="bg-btn-green text-white p-2 rounded-xs hover:bg-btn-green-hover transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
