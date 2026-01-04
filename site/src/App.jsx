import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PalestineTimeline from './components/PalestineTimeline';
import CoursePlaylist from './components/CoursePlaylist';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
    const [activeTab, setActiveTab] = useState('home');

    const fatihaVideos = [
        { title: "Why Sūrat al-Fātiḥa matters", duration: "5:00" },
        { title: "God, reality, and worldview", duration: "5:15" },
        { title: "Worship, mercy, and accountability", duration: "4:50" },
        { title: "Guidance and the straight path", duration: "5:05" },
        { title: "Al-Fātiḥa as a map for life", duration: "5:00" },
    ];

    const palestineVideos = [
        { title: "Why Palestine matters", duration: "5:00" },
        { title: "Ottoman Palestine & early changes", duration: "5:20" },
        { title: "Colonialism, Zionism, British Mandate", duration: "5:10" },
        { title: "1948, displacement, occupation", duration: "5:30" },
        { title: "Questions of justice & memory", duration: "5:00" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'fatiha':
                return (
                    <motion.div
                        key="fatiha"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ paddingTop: '100px' }}
                    >
                        <section style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', textTransform: 'uppercase' }}>Tafsīr of Sūrat al-Fātiḥa</h1>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>The Opening Chapter</p>
                        </section>
                        <CoursePlaylist
                            title="The Opening"
                            description="A deep dive into the opening chapter of the Quran."
                            videos={fatihaVideos}
                            align="center"
                        />
                    </motion.div>
                );
            case 'palestine':
                return (
                    <motion.div
                        key="palestine"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{ paddingTop: '100px' }}
                    >
                        <PalestineTimeline />
                        <div style={{ padding: '6rem 0', background: 'var(--bg-color)', marginTop: '4rem', borderTop: '1px solid #ddd' }}>
                            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>The Series</p>
                                <h2 style={{ fontSize: '2.5rem' }}>Watch the Full Explanation</h2>
                            </div>
                            <CoursePlaylist
                                title="Historical Context & Analysis"
                                description="Now that you understand the timeline, watch the detailed breakdown of these events."
                                videos={palestineVideos}
                                align="center"
                            />
                        </div>
                    </motion.div>
                );
            default: // Home
                return (
                    <motion.div
                        key="home"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                fontSize: 'clamp(2rem, 4vw, 3rem)',
                                marginBottom: '4rem',
                                fontWeight: 500,
                                maxWidth: '800px'
                            }}
                        >
                            <span style={{ display: 'block', fontSize: '1rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1rem', letterSpacing: '2px' }}>
                                End of Term Assignment
                            </span>
                            Choose a Module to Begin
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}
                        >
                            <div
                                onClick={() => setActiveTab('palestine')}
                                style={{
                                    padding: '3rem',
                                    border: '1px solid #ccc',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    width: '300px'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = '#111';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                            >
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>The Story of Palestine</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>A historical journey from 1900 to present day.</p>
                            </div>

                            <div
                                onClick={() => setActiveTab('fatiha')}
                                style={{
                                    padding: '3rem',
                                    border: '1px solid #ccc',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    width: '300px'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = '#111';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                            >
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Sūrat al-Fātiḥa</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Reflections on the opening chapter of the Quran.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                );
        }
    };

    return (
        <div className="App">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <AnimatePresence mode="wait">
                {renderContent()}
            </AnimatePresence>
        </div>
    );
}

export default App;
