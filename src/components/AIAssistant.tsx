
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, HelpCircle, Scale, Users, Home, Briefcase, Heart, Car, Building } from "lucide-react";

export const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm here to help you understand your legal needs. What situation are you dealing with? Don't worry - I'm here to guide you, not provide legal advice."
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const commonQuestions = [
    {
      icon: Home,
      title: "Landlord Issues",
      description: "Problems with rent, repairs, or eviction",
      category: "Housing Law"
    },
    {
      icon: Heart,
      title: "Family Matters",
      description: "Divorce, custody, or domestic issues",
      category: "Family Law"
    },
    {
      icon: Briefcase,
      title: "Work Problems",
      description: "Workplace discrimination or wrongful termination",
      category: "Employment Law"
    },
    {
      icon: Car,
      title: "Accident/Injury",
      description: "Car accidents or personal injury claims",
      category: "Personal Injury"
    },
    {
      icon: Users,
      title: "Immigration",
      description: "Visa, green card, or citizenship questions",
      category: "Immigration Law"
    },
    {
      icon: Building,
      title: "Small Business",
      description: "Business formation or contract issues",
      category: "Business Law"
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: generateAIResponse(inputMessage)
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInputMessage('');
  };

  const generateAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('divorce') || input.includes('custody') || input.includes('family')) {
      return "It sounds like you're dealing with a family law matter. Family law attorneys can help with divorce proceedings, child custody arrangements, spousal support, and property division. I'd recommend looking for lawyers who specialize in family law and have experience with cases similar to yours. Would you like help finding family law attorneys in your area?";
    }
    
    if (input.includes('landlord') || input.includes('rent') || input.includes('eviction') || input.includes('apartment')) {
      return "This appears to be a housing/landlord-tenant issue. You may need help from an attorney who specializes in housing law or tenant rights. They can assist with lease disputes, eviction proceedings, security deposit issues, and habitability problems. Many areas also have tenant rights organizations that offer free or low-cost help. Should I help you find housing law attorneys?";
    }
    
    if (input.includes('work') || input.includes('job') || input.includes('fired') || input.includes('discrimination')) {
      return "This sounds like an employment law issue. Employment attorneys can help with wrongful termination, workplace discrimination, harassment, wage disputes, and contract issues. Many employment lawyers work on contingency (no upfront fees) for certain types of cases. Would you like me to help you find employment law specialists?";
    }
    
    if (input.includes('accident') || input.includes('injury') || input.includes('car') || input.includes('hurt')) {
      return "This seems like a personal injury matter. Personal injury attorneys typically handle cases involving car accidents, slip and falls, medical malpractice, and other injuries caused by someone else's negligence. Most personal injury lawyers work on contingency, meaning you don't pay unless you win. Should I help you find personal injury attorneys?";
    }
    
    if (input.includes('immigration') || input.includes('visa') || input.includes('green card') || input.includes('citizen')) {
      return "This is an immigration law matter. Immigration attorneys can help with visa applications, green card processes, citizenship applications, deportation defense, and family reunification. Immigration law is complex and changes frequently, so it's important to work with an experienced immigration attorney. Would you like help finding immigration lawyers?";
    }
    
    return "Thank you for sharing that information. Based on what you've told me, I'd recommend speaking with a qualified attorney who can provide proper legal advice for your specific situation. I can help you find lawyers in the relevant practice area. What type of legal help do you think you might need, or would you like me to ask you a few questions to help narrow it down?";
  };

  const handleQuickQuestion = (question: any) => {
    const message = `I need help with: ${question.title} - ${question.description}`;
    setInputMessage(message);
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <MessageSquare className="w-6 h-6" />
            AI Legal Guidance Assistant
          </CardTitle>
          <CardDescription className="text-purple-600">
            Get help understanding your legal needs. I'll guide you to the right type of lawyer and questions to ask.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Common Legal Issues */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            What do you need help with?
          </CardTitle>
          <CardDescription>
            Click on a common issue below or describe your situation in the chat
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonQuestions.map((question, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-md transition-shadow duration-200 border-2 hover:border-blue-200"
                onClick={() => handleQuickQuestion(question)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <question.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{question.title}</h3>
                      <p className="text-xs text-gray-600 mb-2">{question.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {question.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Messages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-green-600" />
            Legal Guidance Chat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <Input
              placeholder="Describe your legal situation..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
              <Send className="w-4 h-4" />
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-xs text-yellow-800">
              <strong>Important:</strong> This AI assistant provides general guidance only and is not legal advice. 
              Always consult with a qualified attorney for advice specific to your situation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
