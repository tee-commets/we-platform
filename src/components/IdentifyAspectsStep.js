import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Button } from './button';

const IdentifyAspectsStep = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Identify Aspects</CardTitle>
        <CardDescription>Identify the key aspects of your questionnaire.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs>
          <TabsList>
            <TabsTrigger value="aspect1">Aspect 1</TabsTrigger>
            <TabsTrigger value="aspect2">Aspect 2</TabsTrigger>
          </TabsList>
          <TabsContent value="aspect1">
            <div>
              <Label htmlFor="aspect1-title">Aspect 1 Title</Label>
              <Input id="aspect1-title" placeholder="Title of Aspect 1" />
            </div>
            <div>
              <Label htmlFor="aspect1-description">Aspect 1 Description</Label>
              <Textarea id="aspect1-description" placeholder="Description of Aspect 1" />
            </div>
          </TabsContent>
          <TabsContent value="aspect2">
            <div>
              <Label htmlFor="aspect2-title">Aspect 2 Title</Label>
              <Input id="aspect2-title" placeholder="Title of Aspect 2" />
            </div>
            <div>
              <Label htmlFor="aspect2-description">Aspect 2 Description</Label>
              <Textarea id="aspect2-description" placeholder="Description of Aspect 2" />
            </div>
          </TabsContent>
        </Tabs>
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

export default IdentifyAspectsStep;