import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <section className="container" style={{ paddingBottom: '6rem' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Section Label */}
                <p style={{
                    fontStyle: 'italic',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem',
                    fontFamily: 'serif'
                }}>
                    The Project.
                </p>

                {/* Divider Line */}
                <div style={{
                    width: '100%',
                    height: '1px',
                    background: '#ccc',
                    marginBottom: '3rem'
                }}></div>

                {/* Two Column Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'start'
                }}>
                    {/* Left Column: Heading & Button */}
                    <div>
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: 400,
                            marginBottom: '2rem',
                            lineHeight: 1.2
                        }}>
                            Hi, I'm Noah.
                        </h2>

                        <button className="btn">
                            Get in Touch ↗
                        </button>
                    </div>

                    {/* Right Column: Text */}
                    <div>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                            marginBottom: '1.5rem'
                        }}>
                            This project captures the essence of our term's journey.
                            I'm dedicated to turning complex historical and spiritual concepts into
                            accessible, user-centered educational content.
                        </p>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6
                        }}>
                            From the spiritual depths of <strong>Sūrat al-Fātiḥa</strong> to the historical realities of <strong>Palestine</strong>,
                            these videos aim to bridge understanding for a new audience.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Intro;
