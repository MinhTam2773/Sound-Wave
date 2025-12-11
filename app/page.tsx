import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Calendar, Users, DollarSign, Clock, TrendingUp, MapPin, CheckCircle2, Star, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Clean & Minimal */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-black p-2">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">ClipperPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <Link href="/register">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Clean & Spacious */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Trusted by 500+ barbershops nationwide
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 text-balance">
            Run your barbershop,<br />
            <span className="text-blue-600">not your paperwork</span>
          </h1>
          
          <p className="text-xl text-gray-600 text-balance max-w-2xl mx-auto leading-relaxed">
            All-in-one platform to manage appointments, payments, staff, and customers. 
            Everything you need to grow your business in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="text-base bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/register">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base border-gray-300 text-gray-700">
              <Link href="/booking/modern-cuts" className="flex items-center gap-2">
                View Live Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-gray-500">No credit card required • 14-day free trial</p>
        </div>
      </section>

      {/* Features Section - Clean Grid */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything your barbershop needs</h2>
            <p className="text-lg text-gray-600 text-balance max-w-2xl mx-auto">
              Powerful tools designed specifically for barbershops to save time and increase revenue
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Smart Booking",
                description: "Online booking with real-time availability. Customers book 24/7 from any device.",
                color: "blue"
              },
              {
                icon: Users,
                title: "Queue Management", 
                description: "Digital queue with SMS notifications. Reduce wait times and improve experience.",
                color: "green"
              },
              {
                icon: DollarSign,
                title: "Point of Sale",
                description: "Integrated POS with tips, products, and multiple payment methods.",
                color: "purple"
              },
              {
                icon: Clock,
                title: "Staff Scheduling",
                description: "Drag-and-drop schedule builder with shift management and availability.",
                color: "orange"
              },
              {
                icon: TrendingUp,
                title: "Business Analytics",
                description: "Real-time dashboards with revenue tracking and performance metrics.",
                color: "red"
              },
              {
                icon: MapPin,
                title: "Multi-Location",
                description: "Manage multiple locations from one account with centralized reporting.",
                color: "indigo"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className={`rounded-lg bg-${feature.color}-50 p-3 w-fit`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Clean & Modern */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-gray-600 text-balance max-w-2xl mx-auto">
              Start free for 14 days. No credit card required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">$49</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">Perfect for single-chair shops</p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Walk-in management",
                    "Digital queue system", 
                    "POS checkout & payments",
                    "Up to 2 staff accounts",
                    "Email notifications",
                    "Basic reports"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-white border-gray-300 text-gray-900 hover:bg-gray-50" variant="outline" asChild>
                  <Link href="/register">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan - Featured */}
            <Card className="border-2 border-blue-500 bg-white shadow-lg relative">
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">$149</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">For growing barbershops</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-gray-900">Everything in Starter, plus:</span>
                  </li>
                  {[
                    "Unlimited staff accounts",
                    "Customer kiosk mode", 
                    "Loyalty program & rewards",
                    "Advanced analytics",
                    "SMS notifications",
                    "Priority support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/register">Start Free Trial</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Franchise Plan */}
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Franchise</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-gray-900">Custom</span>
                  </div>
                  <p className="text-sm text-gray-600">For multi-location brands</p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-medium text-gray-900">Everything in Pro, plus:</span>
                  </li>
                  {[
                    "Multi-location dashboard",
                    "SSO & enterprise auth",
                    "Analytics data export", 
                    "Custom branding",
                    "API access",
                    "Dedicated success manager"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-white border-gray-300 text-gray-900 hover:bg-gray-50" variant="outline" asChild>
                  <Link href="/register">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Bold */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to grow your barbershop?
            </h2>
            <p className="text-xl text-gray-300 text-balance">
              Join hundreds of barbershops using ClipperPro to save time and increase revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="text-base bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base border-gray-600 text-white hover:bg-gray-800">
                <Link href="/demo" className="flex items-center gap-2">
                  Schedule a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-gray-400">No setup fees • No long-term contracts • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-black p-2">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">ClipperPro</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gray-900 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
            
            <p className="text-sm text-gray-500">&copy; 2025 ClipperPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}