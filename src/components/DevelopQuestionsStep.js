import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Button } from './button';
import { Progress } from './progress';

const DevelopQuestionsStep = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Develop Questions</CardTitle>
        <CardDescription>Develop the questions for your questionnaire.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="question1">Question 1</Label>
            <Input id="question1" placeholder="Enter your first question" />
          </div>
          <div>
            <Label htmlFor="question2">Question 2</Label>
            <Textarea id="question2" placeholder="Enter your second question" />
          </div>
        </div>
        <Progress value={50} className="h-2 mt-4" />
      </CardContent>
      <div className="flex justify-between mt-8">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button>
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default DevelopQuestionsStep;