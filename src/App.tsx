import { BrainCircuit } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { PredictionHistory } from '@/components/dashboard/prediction-history';
import { RecentPredictions } from '@/components/dashboard/recent-predictions';
import { NewPrediction } from '@/components/predictions/new-prediction';
import { DataManagement } from '@/components/data/data-management';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <BrainCircuit className="h-6 w-6 mr-2" />
          <h1 className="text-lg font-semibold">Antibiotic Resistance Prediction System</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="data">Data Management</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <StatsCards />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <PredictionHistory />
              <RecentPredictions />
            </div>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-4">
            <NewPrediction />
          </TabsContent>

          <TabsContent value="data" className="space-y-4">
            <DataManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;