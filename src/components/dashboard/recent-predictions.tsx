import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export function RecentPredictions() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Predictions</CardTitle>
        <CardDescription>Latest resistance predictions</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="mb-4 last:mb-0">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Sample #{2023001 + i}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Predicted: Resistant
                  </p>
                </div>
                <div className="ml-auto font-medium">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
              <Separator className="mt-4" />
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}