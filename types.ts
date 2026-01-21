
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface MaintenanceStatus {
  progress: number;
  estimatedTime: string;
  status: 'planning' | 'deploying' | 'optimizing';
}
