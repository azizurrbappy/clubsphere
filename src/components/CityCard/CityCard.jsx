import { motion } from 'framer-motion';

const CityCard = ({ img, title }) => {
  return (
    <motion.div
      className="card bg-base-100 shadow-sm rounded-2xl cursor-pointer overflow-hidden"
      whileHover={{
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.figure whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <img className="h-50 w-full" src={img} alt={title} />
      </motion.figure>
      <div className="card-body py-4">
        <h2 className="text-center text-[#232326] font-bold">{title}</h2>
      </div>
    </motion.div>
  );
};

export default CityCard;
