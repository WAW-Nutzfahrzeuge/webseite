export interface Service {
  id: string;
  title: string;
  eyebrow: string;
  short: string;
  description: string;
  cardBullets: string[];
  detailTitle: string;
  detailItems: string[];
  iconSrc: string;
  imageSrc: string;
  featured?: boolean;
}
