import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Data mapping
const narrativeSteps = [
    {
        stat: "134,000+",
        subStat: "Lives Extinguished",
        description: "Since 1948, the cost of this conflict has been paid in blood. From the Nakba to the present day, over one hundred thousand lives have been cut short. Each number represents a universe destroyed—a father, a teacher, a child with a favorite toy.",
        image: "/images/today.jpg"
    },
    {
        stat: "6,600,000+",
        subStat: "Driven from Home",
        description: "What began with 750,000 in 1948 has grown to millions. Today, over 6 million Palestinians remain refugees, waiting for a return that has been denied for generations. It is the longest unresolved refugee crisis in modern history.",
        image: "/images/nakba.jpg"
    },
    {
        stat: "57 Years",
        subStat: "Of Military Occupation",
        description: "Generations have been born into a reality of checkpoints, walls, and soldiers. To throw a stone is to refuse to be invisible. It is a desperate assertion of existence against a machine often ignored by the world.",
        image: "/images/intifada.webp"
    },
    {
        stat: "1",
        subStat: "Broken Promise",
        description: "It began with a pen stroke. The Balfour Declaration of 1917 promised one people a land that was already home to another. This colonial betrayal planted the seeds of a century of bloodshed.",
        image: "/images/mandate.jpg"
    },
    {
        stat: "1,000",
        subStat: "Years of Coexistence",
        description: "It wasn't always this way. Before the walls, Jerusalem was a tapestry where Muslim, Christian, and Jew lived as neighbors. We must remember this lost harmony to believe that peace is possible again.",
        image: "/images/ottoman.jpg"
    }
];

// Reusable Scene Component
// This component sits absolutely on top of the stack and fades in/out based on active state
const Scene = ({ data, isActive, progress }) => {
    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isActive ? 1 : 0,
                transition: 'opacity 1s ease-in-out', // CSS transition for smooth cross-dissolve
                zIndex: isActive ? 10 : 0,
                pointerEvents: isActive ? 'auto' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background Image with Slow Zoom */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <motion.img
                    src={data.image}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.5)'
                    }}
                    animate={{ scale: isActive ? 1.15 : 1 }}
                    transition={{ duration: 15, ease: "linear" }}
                />
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))'
                }}></div>
            </div>

            {/* Static Content (No Scrolling) */}
            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: '#fff' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }} // Text fades in slowly AFTER scene change
                >
                    <h2 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        lineHeight: 1,
                        fontWeight: 800, // Simple Bold
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                        // Removed textShadow for simpler look
                    }}>
                        {data.stat}
                    </h2>
                    <h3 style={{
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '4px', // Simpler spacing
                        marginBottom: '2.5rem',
                        fontWeight: 300, // Light for other info
                        opacity: 0.9,
                        color: 'rgba(255,255,255,0.9)'
                    }}>
                        {data.subStat}
                    </h3>

                    <div style={{ width: '2px', height: '60px', background: '#ffffff', margin: '0 auto 2.5rem auto', opacity: 0.8 }}></div>

                    <p style={{
                        fontSize: '1.25rem',
                        maxWidth: '650px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300, // Light for other info
                        color: '#ffffff'
                    }}>
                        {data.description}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

const IntroScene = ({ isActive }) => (
    <motion.div
        style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            opacity: isActive ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: isActive ? 20 : 0,
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}
    >
        <div style={{ color: '#fff' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', textTransform: 'uppercase', letterSpacing: '5px' }}>
                The Price of Silence
            </h1>
            <p style={{ color: '#888', marginTop: '2rem', letterSpacing: '2px' }}>
                Scroll to Witness
            </p>
        </div>
    </motion.div>
);

const PalestineTimeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Control Scene state based on scroll progress
    const [currentScene, setCurrentScene] = React.useState(0);

    // Map scroll progress (0-1) to discrete scene indices (0 to 5)
    // 0 = Intro, 1-5 = Content
    useTransform(scrollYProgress, (value) => {
        // Divide the scroll container into 6 roughly equal parts
        const totalScenes = narrativeSteps.length + 1; // 6
        const step = 1 / totalScenes;

        const sceneIndex = Math.floor(value / step);
        const clampedIndex = Math.min(Math.max(sceneIndex, 0), totalScenes - 1);

        if (clampedIndex !== currentScene) {
            setCurrentScene(clampedIndex);
        }
        return value;
    });

    return (
        <div ref={containerRef} style={{ height: '600vh', background: '#000' }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'hidden',
                background: '#000'
            }}>
                {/* Intro Scene (Index 0) */}
                <IntroScene isActive={currentScene === 0} />

                {/* Narrative Scenes (Index 1-5) */}
                {narrativeSteps.map((step, index) => (
                    <Scene
                        key={index}
                        data={step}
                        isActive={currentScene === index + 1}
                    />
                ))}

                {/* Cinematic Playback Line */}
                <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%', // Wide cinematic look
                    maxWidth: '1200px',
                    height: '2px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    zIndex: 100,
                    overflow: 'hidden'
                }}>
                    <motion.div style={{
                        width: '100%',
                        height: '100%',
                        background: '#ffffff',
                        transformOrigin: 'left',
                        scaleX: scrollYProgress
                    }} />
                </div>
            </div>
        </div>
    );
};

export default PalestineTimeline;
