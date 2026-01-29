
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Font Awesome class name
  category: 'tipo' | 'tecnico' | 'automatizacion';
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  serviceType: string;
  message: string;
}
