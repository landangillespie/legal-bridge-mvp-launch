
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Star, Calendar, Search, MessageSquare, TrendingUp, Users, BookOpen } from "lucide-react";

export const ClientDashboard = () => {
  // Mock data for demonstration
  const upcomingAppointments = [
    {
      id: 1,
      lawyer: "David Chen",
      practice: "Immigration Law",
      date: "Tomorrow, 2:00 PM",
      type: "Initial Consultation",
      fee: "$150"
    }
  ];

  const recentSearches = [
    "Family Law near me",
    "Affordable divorce attorney",
    "Immigration lawyer consultation"
  ];

  const recommendedLawyers = [
    {
      id: 1,
      name: "Maria Rodriguez",
      practice: "Family Law",
      rating: 4.8,
      reviews: 127,
      consultationFee: "$100",
      location: "Downtown",
      availability: "Available today"
    },
    {
      id: 2,
      name: "James Wilson",
      practice: "Immigration Law", 
      rating: 4.9,
      reviews: 203,
      consultationFee: "$125",
      location: "Midtown",
      availability: "Available tomorrow"
    }
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-blue-100 mb-4">Find the legal help you need with confidence</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button className="bg-white text-blue-600 hover:bg-blue-50">
            <Search className="w-4 h-4 mr-2" />
            Find a Lawyer
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            <MessageSquare className="w-4 h-4 mr-2" />
            Ask AI for Help
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1</div>
            <div className="text-sm text-gray-600">Upcoming</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">3</div>
            <div className="text-sm text-gray-600">Saved Lawyers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">5</div>
            <div className="text-sm text-gray-600">Past Consults</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">$350</div>
            <div className="text-sm text-gray-600">Total Saved</div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Upcoming Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{appointment.lawyer}</h3>
                      <p className="text-gray-600">{appointment.practice}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {appointment.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {appointment.fee}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {appointment.type}
                    </Badge>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Join Meeting
                    </Button>
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No upcoming appointments</p>
              <Button className="mt-3 bg-blue-600 hover:bg-blue-700">
                Book Consultation
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recommended Lawyers */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Recommended for You
          </CardTitle>
          <CardDescription>
            Based on your search history and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {recommendedLawyers.map((lawyer) => (
              <div key={lawyer.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{lawyer.name}</h3>
                    <p className="text-gray-600">{lawyer.practice}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{lawyer.rating}</span>
                      <span className="text-gray-500">({lawyer.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    {lawyer.consultationFee}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {lawyer.location}
                  </span>
                </div>
                
                <Badge variant="outline" className="text-green-600 border-green-200 mb-3">
                  {lawyer.availability}
                </Badge>
                
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Book Consultation
                  </Button>
                  <Button size="sm" variant="outline">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Searches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-gray-600" />
            Recent Searches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((search, index) => (
              <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-gray-200">
                {search}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
