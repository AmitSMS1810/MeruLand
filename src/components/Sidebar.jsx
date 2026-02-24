import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Megaphone, 
  FolderKanban, 
  Search, 
  Mail, 
  Wallet, 
  Bell, 
  HelpCircle, 
  UserPlus,
  Crown,
  ChevronLeft,
  Menu
} from 'lucide-react';
import logo from '../assets/logo.png';
import { SiNike } from "react-icons/si";
import { IoIosArrowDropdown } from "react-icons/io";

function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const menuItems = {
    dashboard: [
      { icon: LayoutDashboard, label: 'Overview', href: '#' },
      { icon: Users, label: 'Influencer Hub', href: '#' },
      { icon: Megaphone, label: 'Create Campaign', href: '#' },
      { icon: FolderKanban, label: 'Campaigns', href: '#' },
      { icon: Search, label: 'Browse Influencer', href: '#' },
      { icon: Mail, label: 'Inbox', href: '#' },
      { icon: Wallet, label: 'Wallet', href: '#' },
    ],
    manage: [
      { icon: Bell, label: 'Notification', href: '#' },
      { icon: HelpCircle, label: 'Help (Label)', href: '#' }, // Added (Label)
      { icon: UserPlus, label: 'Invite Members', href: '#' },
    ]
  };

  const SidebarContent = () => (  
    <div className="flex flex-col h-full">
      {/* Brand & Logo */}
      <div className={`${collapsed ? 'px-4 py-2' : 'flex items-center justify-between px-4 py-4'}`}>
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className={`${collapsed ? 'w-10 h-10' : 'w-12 h-12'}`}/>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-lg font-bold">Glamorous</span>
              <span className="text-xs font-medium text-gray-500">For Brand</span> {/* Changed from "For Creators" to "For Brand" */}
            </div>
          )}
        </div>
        <button 
          onClick={toggleSidebar}
          className="hidden md:block p-1 rounded-lg hover:bg-gray-100"
        >
          <ChevronLeft className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Workspace Title - Fixed styling to match screenshot */}
      {!collapsed ? (
        <div className="px-4 ">
          <div className='flex items-center gap-2 border border-gray-100 py-2 px-2 rounded-md'>
            <SiNike className="w-5 h-5 text-gray-700" />
          <h2 className="text-sm font-medium text-gray-800">Nike Workspace</h2>
          <IoIosArrowDropdown className="w-4 h-4 text-gray-500 ml-auto" />
          </div>
        </div>
      ) : (
        <div className="px-4 py-3 flex justify-center">
          <SiNike className="w-5 h-5 text-gray-700" />
        </div>
      )}

      {/* Dashboard Menu */}
      <div className="flex-1 overflow-y-auto px-3">
        {!collapsed && <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-4 mb-2">Dashboard</p>}
        <ul className="space-y-1">
          {menuItems.dashboard.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                {!collapsed && <span className="text-sm font-medium text-gray-700">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        {/* Manage Menu */}
        {!collapsed && <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-6 mb-2">Manage</p>}
        <ul className="space-y-1 mt-2">
          {menuItems.manage.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-gray-600 group-hover:text-purple-600" />
                {!collapsed && <span className="text-sm font-medium text-gray-700">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>

        {/* Upgrade Card */}
        <div className="mt-6">
          {collapsed ? (
            // Collapsed state - show only icon
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-pink-400 rounded-xl flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
            </div>
          ) : (
            // Expanded state - show full card
            <div className="p-4 bg-gradient-to-br from-[#ffbf00] to-pink-50 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-5 h-5" />
                <span className="font-semibold text-sm">Upgrade to PRO</span>
              </div>
              <p className="text-xs opacity-90">Upgrade anytime. No long-term commitment</p>
            </div>
          )}
        </div>
      </div>

      {/* User Profile - Fixed email format */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-800">Aditya</span>
              <span className="text-xs text-gray-500 truncate">aditya.mail.com</span> {/* Changed from aditya@mail.com */}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobile}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobile}
        />
      )}

      {/* Sidebar - Desktop & Mobile */}
      <aside 
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 z-50
          ${collapsed ? 'w-20' : 'w-72'} 
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <SidebarContent />
      </aside>

      {/* Main Content Spacer */}
      <div className={`hidden md:block transition-all duration-300 ${collapsed ? 'ml-20' : 'ml-72'}`} />
    </>
  );
}

export default Sidebar;