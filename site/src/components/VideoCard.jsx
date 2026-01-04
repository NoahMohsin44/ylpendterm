import React from 'react';
import { motion } from 'framer-motion';

const VideoCard = ({ number, title, duration = "5:00" }) => {
    return (
        <motion.div
            whileHover={{ y: -5, backgroundColor: '#1a1a1a' }}
            style={{
                padding: '1.5rem',
                backgroundColor: '#111',
                borderLeft: '2px solid #333',
                marginBottom: '1rem',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'border-color 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderLeft = '2px solid var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.borderLeft = '2px solid #333'}
        >
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <span style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#333',
                    fontFamily: 'var(--font-heading)'
                }}>
                    0{number}
                </span>
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{title}</h4>
                    <span style={{ fontSize: '0.8rem', color: '#666' }}>Watch Video &bull; {duration}</span>
                </div>
            </div>

            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)'
            }}>
                ▶
            </div>
        </motion.div>
    );
};

export default VideoCard;
