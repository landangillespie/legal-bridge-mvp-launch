
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, DollarSign, Eye, TrendingUp, MessageSquare, Clock, Star, CheckCircle, XCircle } from "lucide-react";

export const LawyerDashboard = () => {
  // Mock data for demonstration
  const todayStats = {
    profileViews: 24,
    consultationRequests: 3,
    revenue: 450,
    upcomingAppointments: 2
  };

  const pendingRequests = [
    {
      id: 1,
      clientName: "Anonymous Client",
      legalArea: "Family Law",
      requestedDate: "Tomorrow, 10:00 AM",
      consultationFee: "$150",
      urgency: "Medium",
      description: "Divorce proceedings consultation needed"
    },
    {
      id: 2,
      clientName: "Anonymous Client", 
      legalArea: "Immigration Law",
      requestedDate: "Friday, 2:00 PM",
      consultationFee: "$125",
      urgency: "High",
      description: "Green card application assistance"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      clientName: "Sarah M.",
      legalArea: "Employment Law",
      date: "Today, 3:00 PM",
      type: "Follow-up",
      duration: "60 minutes"
    }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Good morning, Counselor!</h1>
        <p className="text-green-100 mb-4">Manage your practice and connect with clients who need your expertise</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-white text-green-600 hover:bg-green-50">
            <Eye className="w-4 h-4 mr-2" />
            View Profile
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
            <TrendingUp className="w-4 h-4 mr-2" />
            Boost Visibility
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{todayStats.profileViews}</div>
            <div className="text-sm text-gray-600">Profile Views</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{todayStats.consultationRequests}</div>
            <div className="text-sm text-gray-600">New Requests</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">${todayStats.revenue}</div>
            <div className="text-sm text-gray-600">Today's Revenue</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{todayStats.upcomingAppointments}</div>
            <div className="text-sm text-gray-600">Upcoming</div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Consultation Requests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            Consultation Requests
          </CardTitle>
          <CardDescription>
            New clients requesting consultations - respond quickly to increase bookings
          </CardDescription>
        </CardHeader>
        <CardContent>
          {pendingRequests.length > 0 ? (
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div key={request.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{request.clientName}</h3>
                        <Badge 
                          variant={request.urgency === 'High' ? 'destructive' : request.urgency === 'Medium' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {request.urgency} Priority
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-1">{request.legalArea}</p>
                      <p className="text-sm text-gray-500">{request.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600">{request.consultationFee}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>Requested for {request.requestedDate}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline">
                      <XCircle className="w-4 h-4 mr-1" />
                      Decline
                    </Button>
                    <Button size="sm" variant="ghost">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No pending consultation requests</p>
              <p className="text-sm">New requests will appear here when clients book with you</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{appointment.clientName}</h3>
                      <p className="text-gray-600">{appointment.legalArea}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {appointment.date}
                        </span>
                        <span>{appointment.duration}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {appointment.type}
                    </Badge>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Start Meeting
                    </Button>
                    <Button size="sm" variant="outline">
                      View Client Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No appointments scheduled for today</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Profile Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            Profile Performance
          </CardTitle>
          <CardDescription>
            Improve your visibility to attract more clients
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">This Week</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-semibold">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Consultation Requests</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bookings</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue</span>
                  <span className="font-semibold text-green-600">$1,200</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Profile Completion</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Basic Info</span>
                  <Badge className="bg-green-100 text-green-800">Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Professional Photo</span>
                  <Badge className="bg-green-100 text-green-800">Complete</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Case Examples</span>
                  <Badge variant="outline" className="text-orange-600 border-orange-200">Partial</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Client Reviews</span>
                  <Badge variant="secondary">3 Reviews</Badge>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline">
                Improve Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
