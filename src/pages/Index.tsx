
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Star, MessageSquare, Calendar, Search, User, Settings, Menu, X, Scale } from "lucide-react";
import { ClientDashboard } from '@/components/ClientDashboard';
import { LawyerDashboard } from '@/components/LawyerDashboard';
import { SearchLawyers } from '@/components/SearchLawyers';
import { UserProfile } from '@/components/UserProfile';
import { AIAssistant } from '@/components/AIAssistant';

const Index = () => {
  const [activeView, setActiveView] = useState('home');
  const [userType, setUserType] = useState<'client' | 'lawyer' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock user data - in real app, this would come from authentication
  const [user, setUser] = useState({
    name: "Sarah Johnson",
    email: "sarah@email.com",
    type: "client" as "client" | "lawyer",
    isLoggedIn: false
  });

  const handleUserTypeSelection = (type: 'client' | 'lawyer') => {
    setUserType(type);
    setUser(prev => ({ ...prev, type, isLoggedIn: true }));
    setActiveView('home');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Landing page for user type selection
  if (!user.isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <Scale className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">LegalAccess</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Affordable Legal Help
              <span className="block text-blue-600">When You Need It</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Connect with trusted, affordable legal counsel. Find the right lawyer for your needs, book consultations, and get the legal help you deserve.
            </p>
          </div>

          {/* User Type Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">I Need Legal Help</CardTitle>
                <CardDescription className="text-base">
                  Find affordable lawyers, book consultations, and get the legal assistance you need
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleUserTypeSelection('client')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                >
                  Get Started as Client
                </Button>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-200">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">I'm a Lawyer</CardTitle>
                <CardDescription className="text-base">
                  Connect with clients who need your expertise and grow your practice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handleUserTypeSelection('lawyer')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                >
                  Join as Lawyer
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Features Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose LegalAccess?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
                <p className="text-gray-600">Find lawyers by location, practice area, and budget with our smart search filters</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">See upfront consultation fees and payment options before you book</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Guidance</h3>
                <p className="text-gray-600">Get help understanding your legal needs with our AI assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main app interface for logged-in users
  const navigationItems = user.type === 'client' ? [
    { id: 'home', label: 'Home', icon: User },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'ai-assistant', label: 'AI Help', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ] : [
    { id: 'home', label: 'Dashboard', icon: User },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return user.type === 'client' ? <ClientDashboard /> : <LawyerDashboard />;
      case 'search':
        return user.type === 'client' ? <SearchLawyers /> : null;
      case 'appointments':
        return <div className="p-6"><h2 className="text-2xl font-bold">Appointments</h2><p className="text-gray-600 mt-2">Your upcoming and past appointments will appear here.</p></div>;
      case 'ai-assistant':
        return user.type === 'client' ? <AIAssistant /> : null;
      case 'profile':
        return <UserProfile user={user} />;
      case 'settings':
        return <div className="p-6"><h2 className="text-2xl font-bold">Settings</h2><p className="text-gray-600 mt-2">App preferences and account settings.</p></div>;
      default:
        return user.type === 'client' ? <ClientDashboard /> : <LawyerDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">LegalAccess</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeView === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {renderContent()}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="grid grid-cols-4 gap-1">
          {navigationItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`flex flex-col items-center space-y-1 py-3 px-2 text-xs transition-colors ${
                activeView === item.id
                  ? 'text-blue-600'
                  : 'text-gray-600'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Bottom padding for mobile navigation */}
      <div className="md:hidden h-20"></div>
    </div>
  );
};

export default Index;
