
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin, Star, DollarSign, Calendar, Filter, Search, Clock, CheckCircle } from "lucide-react";

export const SearchLawyers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([200]);
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Mock lawyer data
  const lawyers = [
    {
      id: 1,
      name: "Maria Rodriguez",
      practice: "Family Law",
      specialties: ["Divorce", "Child Custody", "Domestic Relations"],
      rating: 4.8,
      reviews: 127,
      consultationFee: 100,
      location: "Downtown",
      distance: "0.5 miles",
      availability: "Available today",
      verified: true,
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      experience: "15 years",
      languages: ["English", "Spanish"],
      paymentPlans: true
    },
    {
      id: 2,
      name: "James Wilson",
      practice: "Immigration Law",
      specialties: ["Green Cards", "Citizenship", "Deportation Defense"],
      rating: 4.9,
      reviews: 203,
      consultationFee: 125,
      location: "Midtown",
      distance: "1.2 miles",
      availability: "Available tomorrow",
      verified: true,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      experience: "12 years",
      languages: ["English"],
      paymentPlans: true
    },
    {
      id: 3,
      name: "Sarah Kim",
      practice: "Employment Law",
      specialties: ["Wrongful Termination", "Harassment", "Contract Review"],
      rating: 4.7,
      reviews: 89,
      consultationFee: 90,
      location: "Uptown",
      distance: "2.1 miles",
      availability: "Available Friday",
      verified: true,
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      experience: "8 years",
      languages: ["English", "Korean"],
      paymentPlans: false
    },
    {
      id: 4,
      name: "Robert Chen",
      practice: "Criminal Defense",
      specialties: ["DUI Defense", "Drug Charges", "Assault Cases"],
      rating: 4.6,
      reviews: 156,
      consultationFee: 150,
      location: "Westside",
      distance: "3.5 miles",
      availability: "Available next week",
      verified: true,
      photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face",
      experience: "20 years",
      languages: ["English", "Mandarin"],
      paymentPlans: true
    }
  ];

  const practiceAreas = [
    "Family Law",
    "Immigration Law",
    "Employment Law",
    "Criminal Defense",
    "Personal Injury",
    "Real Estate",
    "Business Law",
    "Estate Planning"
  ];

  const locations = [
    "Downtown",
    "Midtown",
    "Uptown",
    "Westside",
    "Eastside",
    "Suburbs"
  ];

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.practice.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lawyer.specialties.some(specialty => specialty.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesArea = !selectedArea || lawyer.practice === selectedArea;
    const matchesLocation = !selectedLocation || lawyer.location === selectedLocation;
    const matchesPrice = lawyer.consultationFee <= priceRange[0];
    
    return matchesSearch && matchesArea && matchesLocation && matchesPrice;
  });

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Search Header */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Find Your Lawyer</h1>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search by name, practice area, or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-3 text-lg"
          />
        </div>

        {/* Filter Toggle */}
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="mb-4"
        >
          <Filter className="w-4 h-4 mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </Button>

        {/* Filters */}
        {showFilters && (
          <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Practice Area</label>
              <Select value={selectedArea} onValueChange={setSelectedArea}>
                <SelectTrigger>
                  <SelectValue placeholder="All practice areas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All practice areas</SelectItem>
                  {practiceAreas.map(area => (
                    <SelectItem key={area} value={area}>{area}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All locations</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Consultation Fee: ${priceRange[0]}
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={300}
                min={50}
                step={25}
                className="mt-2"
              />
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Found {filteredLawyers.length} lawyers matching your criteria
        </p>
        <Select defaultValue="rating">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="price-low">Lowest Price</SelectItem>
            <SelectItem value="price-high">Highest Price</SelectItem>
            <SelectItem value="distance">Nearest</SelectItem>
            <SelectItem value="availability">Most Available</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Lawyer Cards */}
      <div className="space-y-4">
        {filteredLawyers.map((lawyer) => (
          <Card key={lawyer.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Lawyer Photo & Basic Info */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={lawyer.photo}
                      alt={lawyer.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                    />
                    {lawyer.verified && (
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Lawyer Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{lawyer.name}</h3>
                        <p className="text-lg text-gray-600">{lawyer.practice}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-lg">{lawyer.rating}</span>
                          <span className="text-gray-500">({lawyer.reviews} reviews)</span>
                        </div>
                        <div className="text-2xl font-bold text-green-600">
                          ${lawyer.consultationFee}
                        </div>
                        <p className="text-sm text-gray-600">consultation</p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {lawyer.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Key Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{lawyer.location} • {lawyer.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{lawyer.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-green-600">{lawyer.availability}</span>
                      </div>
                      <div>
                        <span>Languages: {lawyer.languages.join(', ')}</span>
                      </div>
                    </div>

                    {/* Payment Plans */}
                    {lawyer.paymentPlans && (
                      <Badge variant="outline" className="text-blue-600 border-blue-200 mt-2">
                        <DollarSign className="w-3 h-3 mr-1" />
                        Payment plans available
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Full Profile
                    </Button>
                    <Button variant="ghost" size="sm">
                      Save Lawyer
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredLawyers.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No lawyers found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
          <Button onClick={() => {
            setSearchTerm('');
            setSelectedArea('');
            setSelectedLocation('');
            setPriceRange([200]);
          }}>
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};
