import React from 'react';
import VideoCard from './VideoCard';
import { motion } from 'framer-motion';

const CoursePlaylist = ({ title, description, videos, align = 'left' }) => {
    return (
        <section className="section container">
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'start'
            }}>
                <motion.div
                    initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ order: align === 'left' ? 1 : 2 }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '5px 10px',
                        border: '1px solid #333',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        marginBottom: '1rem',
                        color: 'var(--accent)'
                    }}>
                        Video Series
                    </div>
                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        color: '#fff'
                    }}>
                        {title}
                    </h2>
                    <p style={{
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        fontSize: '1.1rem'
                    }}>
                        {description}
                    </p>
                    <button className="btn">View Full Playlist</button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ order: align === 'left' ? 2 : 1 }}
                >
                    {videos.map((video, index) => (
                        <VideoCard
                            key={index}
                            number={index + 1}
                            title={video.title}
                            duration={video.duration}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoursePlaylist;
