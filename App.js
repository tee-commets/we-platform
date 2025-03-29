import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FileText, ArrowLeft, ArrowRight, Save } from 'lucide-react';

import { Button } from './components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/card';
import { Input } from './components/input';
import { Label } from './components/label';
import { Textarea } from './components/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/tabs';
import { Progress } from './components/progress';

import BasicInformationStep from './components/BasicInformationStep';
import DefineObjectivesStep from './components/DefineObjectivesStep';
import FormulateHypothesesStep from './components/FormulateHypothesesStep';
import IdentifyAspectsStep from './components/IdentifyAspectsStep';
import DevelopQuestionsStep from './components/DevelopQuestionsStep';
import ReviewAndDeployStep from './components/ReviewAndDeployStep';

export default function App() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(16);

  const handleNext = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    setProgress(nextStep * 16 > 100 ? 100 : nextStep * 16);
  };

  const handlePrevious = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    setProgress(prevStep * 16);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="border-b">
          <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <FileText className="h-6 w-6" />
              <span>QuestionnairePro</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <Link to="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
                Dashboard
              </Link>
              <Link to="/about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link to="/help" className="text-sm font-medium hover:underline underline-offset-4">
                Help
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 container px-4 py-6 md:px-6 md:py-8 lg:py-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Link to="/dashboard">
                <Button variant="outline" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <h1 className="text-3xl font-bold tracking-tight">Create Questionnaire</h1>
            </div>
            <Button variant="outline">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium">Step {step} of 6</div>
              <div className="text-sm text-muted-foreground">{progress}% Complete</div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="md:col-span-1">
              <nav className="flex flex-col space-y-1">
                <Button
                  variant={step === 1 ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => {
                    setStep(1);
                    setProgress(16);
                  }}
                >
                  1. Basic Information
                </Button>
                <Button
                  variant={step === 2 ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => {
                    setStep(2);
                    setProgress(32);
                  }}
                >
                  2. Define Objectives
                </Button>
                <Button
                  variant={step === 3 ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => {
                    setStep(3);
                    setProgress(48);
                  }}
                >
                  3. Formulate Hypotheses
                </Button>
                <Button
                  variant={step === 4 ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => {
                    setStep(4);
                    setProgress(64);
                  }}
                >
                  4. Identify Aspects
                </Button>
                <Button
                  variant={step === 5 ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => {
                    setStep(5);
                    setProgress(80);
                  }}
                >
                  5. Develop Questions
                </Button>
                <Button
                  variant={step === 6 ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => {
                    setStep(6);
                    setProgress(100);
                  }}
                >
                  6. Review & Deploy
                </Button>
              </nav>
            </div>
            <div className="md:col-span-3">
              {step === 1 && <BasicInformationStep />}
              {step === 2 && <DefineObjectivesStep />}
              {step === 3 && <FormulateHypothesesStep />}
              {step === 4 && <IdentifyAspectsStep />}
              {step === 5 && <DevelopQuestionsStep />}
              {step === 6 && <ReviewAndDeployStep />}

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={handlePrevious} disabled={step === 1}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>

                {step < 6 ? (
                  <Button onClick={handleNext}>
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button>Deploy Questionnaire</Button>
                )}
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 QuestionnairePro. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="text-sm font-medium hover:underline underline-offset-4">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
                Privacy
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
cmc