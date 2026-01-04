import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '4rem 2rem',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    lineHeight: 1.1,
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '2rem',
                    maxWidth: '1000px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    I believe in a user centered design approach.
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    marginBottom: '3rem'
                }}
            >
                End of Term Assignment: A detailed exploration of Sūrat al-Fātiḥa & The Story of Palestine.
            </motion.p>
        </section>
    );
};

export default Hero;
