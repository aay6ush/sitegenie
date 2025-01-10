declare type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  description: string[];
  accentColor: string;
  buttonColor: string;
};

declare type TestimonialCardProps = {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
};

declare type PricingPlanCard = {
  id: number;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isPopular: boolean;
  features: string[];
  isYearly: boolean;
};
