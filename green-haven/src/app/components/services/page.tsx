import Image from 'next/image';
import styles from './services.module.css';

type ServiceCardProps = {
  title: string;
  imageSrc: string;
  description: string;
};

const ServiceCard = ({ title, imageSrc, description }: ServiceCardProps) => (
  <div className={styles.serviceCard}>
    <div className={styles.imageContainer}>
      <Image 
        src={imageSrc} 
        alt={title} 
        width={170} 
        height={110} 
        className={styles.serviceImage}
      />
    </div>
    <h3 className={styles.cardTitle}>{title}</h3>
    <p className={styles.cardDescription}>{description}</p>
    <a href="#" className={styles.exploreLink}>
      Explore More <span>→</span>
    </a>
  </div>
);

export default function Services() {
  const services = [
    {
      title: "Fresh Vegetable",
      imageSrc: "/fresh-veg.jpg",
      description: "Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits."
    },
    {
      title: "Agriculture Product",
      imageSrc: "/agric-prod.png",
      description: "Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits."
    },
    {
      title: "Fresh Fruit",
      imageSrc: "/fresh-fruits.png",
      description: "Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits."
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        <span className={styles.subtitle}>Green Haven Farm</span>
        <h1 className={styles.title}>We Provide More Fresh<br />Agro Products</h1>
        <p className={styles.description}>Extend maintainable e-commerce for resource maximizing functionalities. Interactively customize adaptive niches whereas granular benefits.</p>
        <a href="#" className={styles.exploreLink}>
          Explore More <span>→</span>
        </a>
      </div>
      
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}