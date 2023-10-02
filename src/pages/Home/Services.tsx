import {
  FaCreditCard,
  FaDollarSign,
  FaHeadset,
  FaShippingFast,
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaShippingFast />,
    title: 'free shipping',
    text: 'We offer free shipping for orders over $100',
  },
  {
    id: 2,
    icon: <FaDollarSign />,
    title: 'money back',
    text: '30 days money back guarantee for all orders',
  },
  {
    id: 3,
    icon: <FaHeadset />,
    title: '24/7 support',
    text: 'Contact us 24 hours a day, 7 days a week',
  },
  {
    id: 4,
    icon: <FaCreditCard />,
    title: 'secure payment',
    text: 'We ensure secure payment with PEV',
  },
];

const Services = () => {
  return (
    <section className="d-flex flex-column flex-lg-row px-md-5 justify-content-center align-items-center gap-3 my-5">
      {services.map((service) => (
        <article
          key={service.id}
          className="service d-flex flex-column flex-lg-row gap-1 w-100 justify-content-center gap-sm-3 p-1 align-items-center align-items-lg-start"
        >
          <div className="service__icon">{service.icon}</div>
          <div className="text-center text-lg-start">
            <h2 className="service__heading">{service.title}</h2>
            <p className="service__text">{service.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Services;
