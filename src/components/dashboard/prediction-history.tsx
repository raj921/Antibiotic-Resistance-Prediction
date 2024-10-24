import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function PredictionHistory() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Prediction History</CardTitle>
        <CardDescription>Monthly prediction accuracy and volume</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
          Chart placeholder
        </div>
      </CardContent>
    </Card>
  );
}