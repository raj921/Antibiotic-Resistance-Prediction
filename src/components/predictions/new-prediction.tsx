import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function NewPrediction() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Prediction</CardTitle>
        <CardDescription>Upload genome sequence data for analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Button>Upload Genome Sequence</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}