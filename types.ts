export interface Doctor {
  name: string;
  specialty: string;
  bio: string;
  timings: string[];
  imageUrl: string;
}

export interface Service {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
