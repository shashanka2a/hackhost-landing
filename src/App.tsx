'use client';

import { motion } from 'framer-motion';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { 
  Clock, 
  Users, 
  Brain, 
  Zap, 
  Bot, 
  Code, 
  Sparkles, 
  ChevronRight,
  Github,
  Twitter,
  Mail
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen dark bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-slate-950">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-transparent to-cyan-500/15"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(139, 69, 219, 0.15), transparent, rgba(6, 182, 212, 0.15))",
                "linear-gradient(90deg, rgba(6, 182, 212, 0.15), transparent, rgba(139, 69, 219, 0.15))",
                "linear-gradient(135deg, rgba(139, 69, 219, 0.15), transparent, rgba(6, 182, 212, 0.15))"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Floating Icons */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-violet-400/20"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              {i % 3 === 0 ? <Code size={32} /> : i % 3 === 1 ? <Zap size={32} /> : <Brain size={32} />}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl mb-8 bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent leading-[0.9] tracking-tight">
              HackHost
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-slate-200 max-w-4xl mx-auto leading-relaxed">
              The Intelligent Platform for Effortless Hackathons
            </p>
            <p className="text-xl mb-16 text-slate-400 max-w-3xl mx-auto leading-relaxed">
              AI-powered co-pilot to launch, match, and support your event
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white px-10 py-7 text-xl shadow-2xl shadow-violet-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-violet-500/40 border-0"
            >
              Get Started
              <ChevronRight className="ml-3" size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-600 text-slate-200 hover:bg-slate-800/50 hover:border-slate-500 px-10 py-7 text-xl transition-all duration-300 backdrop-blur-sm"
            >
              See How It Works
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-background to-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-100">The Challenge</h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Organizing hackathons shouldn't be a hackathon itself
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Clock size={56} />,
                title: "Time-Consuming Setup",
                description: "Hours spent on manual registration, team formation, and event logistics"
              },
              {
                icon: <Users size={56} />,
                title: "Participant Disengagement", 
                description: "Poor team matching and lack of real-time support leads to frustrated participants"
              },
              {
                icon: <Brain size={56} />,
                title: "Administrative Overload",
                description: "Juggling multiple tools and constant manual intervention throughout the event"
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group p-8 rounded-2xl bg-gradient-to-b from-slate-900/30 to-slate-800/20 border border-slate-800/50 hover:border-red-500/30 transition-all duration-500 hover:bg-slate-800/30"
              >
                <div className="text-red-400 mb-8 transition-all duration-300 group-hover:scale-110 group-hover:text-red-300 flex justify-center">
                  {problem.icon}
                </div>
                <h3 className="text-2xl mb-6 text-slate-100 group-hover:text-white transition-colors duration-300">{problem.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-100">Your AI Co-Pilot for Hackathons</h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Streamline every aspect of your hackathon with intelligent automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTkxMTcwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hackathon collaboration"
                  className="relative rounded-3xl w-full h-96 object-cover shadow-2xl border border-slate-700/50"
                  width={800}
                  height={400}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  icon: <Sparkles className="text-violet-400" size={40} />,
                  title: "AI-Powered Content Generation",
                  description: "Automatically generate event descriptions, challenges, and promotional materials tailored to your audience",
                  accent: "violet"
                },
                {
                  icon: <Users className="text-cyan-400" size={40} />,
                  title: "Smart Team Matching",
                  description: "Intelligent algorithms pair participants based on skills, interests, and complementary expertise",
                  accent: "cyan"
                },
                {
                  icon: <Bot className="text-emerald-400" size={40} />,
                  title: "24/7 Support Bot",
                  description: "Instant assistance for participants with questions about rules, resources, and technical issues",
                  accent: "emerald"
                }
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className={`p-8 bg-gradient-to-r from-slate-800/60 to-slate-700/40 border-l-4 border-l-transparent hover:border-l-${feature.accent}-500 transition-all duration-500 hover:bg-slate-700/60 group backdrop-blur-sm shadow-xl`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="transition-all duration-300 group-hover:scale-110 p-3 rounded-xl bg-slate-900/50">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl mb-4 text-slate-100 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guiding Philosophy */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-950/50 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-100">Our Philosophy</h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Built on three core principles that drive innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Robust Core",
                description: "Rock-solid infrastructure that scales from 10 to 10,000 participants without breaking a sweat",
                gradient: "from-violet-600/30 to-violet-800/10",
                icon: "🏗️",
                accent: "violet"
              },
              {
                title: "Elegant Interface", 
                description: "Intuitive design that makes complex event management feel effortless for organizers and participants",
                gradient: "from-cyan-600/30 to-cyan-800/10",
                icon: "✨",
                accent: "cyan"
              },
              {
                title: "AI-Powered Engine",
                description: "Smart automation that learns from each event to continuously improve the hackathon experience",
                gradient: "from-emerald-600/30 to-emerald-800/10",
                icon: "🤖",
                accent: "emerald"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`p-10 h-full bg-gradient-to-br ${principle.gradient} border-slate-700/50 hover:border-slate-600/80 transition-all duration-500 hover:scale-105 group backdrop-blur-sm shadow-2xl`}>
                  <div className="text-center">
                    <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                      {principle.icon}
                    </div>
                    <h3 className={`text-3xl mb-6 text-slate-100 group-hover:text-${principle.accent}-400 transition-colors duration-300`}>
                      {principle.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      {principle.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-slate-900/60 to-slate-800/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl mb-8 text-slate-100">Frequently Asked Questions</h2>
            <p className="text-2xl text-slate-300">
              Everything you need to know about HackHost
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  question: "How quickly can I set up a hackathon with HackHost?",
                  answer: "With our AI-powered setup wizard, you can have a fully configured hackathon ready in under 15 minutes. Our platform handles registration pages, team formation rules, judging criteria, and communication channels automatically."
                },
                {
                  question: "How does the smart team matching work?",
                  answer: "Our AI analyzes participant skills, interests, preferred programming languages, and experience levels to suggest optimal team combinations. Participants can also manually form teams or let our algorithm do the work based on complementary skill sets."
                },
                {
                  question: "What kind of support is available during the event?",
                  answer: "HackHost provides 24/7 AI-powered chat support for participants, real-time troubleshooting guides, and escalation to human moderators when needed. Organizers get a dedicated dashboard to monitor all activities and intervene when necessary."
                },
                {
                  question: "Can I customize the hackathon format and rules?",
                  answer: "Absolutely! HackHost is fully customizable. You can set custom judging criteria, submission formats, team size limits, technology restrictions, and create unique challenge categories. Our platform adapts to your specific event needs."
                },
                {
                  question: "Is there a limit to the number of participants?",
                  answer: "HackHost scales from intimate 20-person hackathons to massive 10,000+ participant events. Our infrastructure automatically adjusts to handle registration surges, real-time collaboration, and submission processing at any scale."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-slate-700/60 bg-slate-800/30 rounded-xl px-6 backdrop-blur-sm">
                  <AccordionTrigger className="text-left hover:text-violet-400 transition-colors duration-300 text-xl text-slate-200 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 leading-relaxed text-lg pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-r from-violet-900/40 via-purple-900/30 to-cyan-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-cyan-600/10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-7xl mb-10 text-slate-100 leading-tight">
              Start hosting smarter hackathons today
            </h2>
            <p className="text-2xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Join the future of hackathon management. Your participants will thank you.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white px-16 py-10 text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 border-0"
            >
              Launch with HackHost
              <Sparkles className="ml-4" size={28} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-slate-800/60 bg-gradient-to-br from-background to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-0"
            >
              <h3 className="text-3xl bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                HackHost
              </h3>
              <p className="text-slate-300 text-lg">The intelligent hackathon platform</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-16"
            >
              <div className="flex space-x-10">
                <a href="#" className="text-slate-300 hover:text-violet-400 transition-colors duration-300 text-lg">
                  About
                </a>
                <a href="#" className="text-slate-300 hover:text-violet-400 transition-colors duration-300 text-lg">
                  Pricing
                </a>
                <a href="#" className="text-slate-300 hover:text-violet-400 transition-colors duration-300 text-lg">
                  Contact
                </a>
              </div>
              
              <div className="flex space-x-6">
                <a href="#" className="text-slate-300 hover:text-violet-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50">
                  <Github size={28} />
                </a>
                <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50">
                  <Twitter size={28} />
                </a>
                <a href="#" className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-800/50">
                  <Mail size={28} />
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="border-t border-slate-800 mt-16 pt-10 text-center">
            <p className="text-slate-400 text-lg">
              © 2025 HackHost. All rights reserved. Making hackathons effortless.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}