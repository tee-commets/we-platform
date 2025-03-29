import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Button } from './button';
import { Progress } from './progress';

const ReviewAndDeployStep = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Review & Deploy</CardTitle>
        <CardDescription>Review your questionnaire and deploy.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="review-title">Review Title</Label>
            <Input id="review-title" placeholder="Review Title" />
          </div>
          <div>
            <Label htmlFor="review-description">Review Description</Label>
            <Textarea id="review-description" placeholder="Review Description" />
          </div>
        </div>
        <Progress value={100} className="h-2 mt-4" />
      </CardContent>
      <div className="flex justify-between mt-8">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button>
          Deploy Questionnaire
        </Button>
      </div>
    </Card>
  );
};

export default ReviewAndDeployStep;