
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Heavy Civil' | 'Industrial' | 'Municipal' | 'Commercial' | 'Petrochemical';
  location: string;
  client: string;
  status: 'Completed' | 'Ongoing';
  completionYear?: string;
  imageUrl: string;
  description: string;
  featured?: boolean;
}

export interface Stat {
  label: string;
  value: string;
}
