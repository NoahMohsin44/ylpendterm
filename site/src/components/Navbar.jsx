import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const Navbar = ({ activeTab, setActiveTab }) => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            if (latest > 50) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        });
    }, [scrollY]);

    const linkStyle = (isActive) => ({
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        cursor: 'pointer',
        opacity: isActive ? 1 : 0.6,
        transition: 'opacity 0.3s',
        fontWeight: 600,
        fontFamily: 'var(--font-heading)',
        letterSpacing: '2px'
    });

    return (
        <motion.nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                mixBlendMode: 'difference',
                color: '#fff'
            }}
            animate={{
                y: hidden ? -100 : 0,
                opacity: hidden ? 0 : 1
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div
                style={{
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    cursor: 'pointer',
                    letterSpacing: '-1px',
                    fontFamily: 'var(--font-heading)',
                    textTransform: 'uppercase'
                }}
                onClick={() => setActiveTab('home')}
            >
                Noah Mohsin
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <div
                    style={linkStyle(activeTab === 'palestine')}
                    onClick={() => setActiveTab('palestine')}
                >
                    palestine
                </div>
                <div
                    style={linkStyle(activeTab === 'fatiha')}
                    onClick={() => setActiveTab('fatiha')}
                >
                    surah fatiha
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
