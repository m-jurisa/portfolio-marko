const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

module.exports = {
    itemVariants,
    dotVariants,
    imageVariants,
};
