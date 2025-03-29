import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function DefineObjectivesStep() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Define Objectives</CardTitle>
        <CardDescription>
          Clearly state your research objectives. These will guide the entire questionnaire design process.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted p-4 rounded-lg mb-4">
          <p className="text-sm">
            <strong>Tip:</strong> Good objectives are specific, measurable, achievable, relevant, and time-bound
            (SMART). They clearly state what you want to learn from your questionnaire.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Objective 1</h3>
            <Button variant="ghost" size="sm">
              Remove
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="objective-title-1">Title</Label>
            <Input id="objective-title-1" placeholder="e.g., Evaluate customer satisfaction with product X" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="objective-description-1">Description</Label>
            <Textarea id="objective-description-1" placeholder="Provide more details about this objective" rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="objective-importance-1">Importance (1-10)</Label>
            <Input id="objective-importance-1" type="number" min="1" max="10" placeholder="e.g., 8" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Objective 2</h3>
            <Button variant="ghost" size="sm">
              Remove
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="objective-title-2">Title</Label>
            <Input id="objective-title-2" placeholder="e.g., Identify areas for product improvement" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="objective-description-2">Description</Label>
            <Textarea id="objective-description-2" placeholder="Provide more details about this objective" rows={3} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="objective-importance-2">Importance (1-10)</Label>
            <Input id="objective-importance-2" type="number" min="1" max="10" placeholder="e.g., 7" />
          </div>
        </div>

        <Button className="w-full">Add Another Objective</Button>
      </CardContent>
    </Card>
  );
}