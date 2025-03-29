import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';

const BasicInformationStep = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>Provide the basic information for the questionnaire.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="questionnaire-title">Title</Label>
            <Input id="questionnaire-title" placeholder="Questionnaire Title" />
          </div>
          <div>
            <Label htmlFor="questionnaire-description">Description</Label>
            <Textarea id="questionnaire-description" placeholder="Questionnaire Description" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInformationStep;