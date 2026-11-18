const portfolioData = {
    // Personal Information
    personalInfo: {
        name: "Mohamed Hendawy",
        title: "AI & Data Engineer | Final-Year CS Student",
        email: "mohamedhindawy205@gmail.com",
        phone: "+20 114 888 6982",
        location: "Giza / Cairo, Egypt",
        bio: "Computer Science student specializing in Big Data streaming pipelines, Generative AI & RAG, and Computer Vision deep learning.",
        resumeUrl: "CV/Mohamed_Ashraf_CV.pdf"
    },

    // Typing animation texts shown in hero
    typingTexts: [
        "AI & Data Engineer",
        "Big Data Pipeline Builder",
        "Generative AI Specialist",
        "Deep Learning Researcher"
    ],

    // Skills to show in About > Skills grid
    skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "Apache Kafka", icon: "fas fa-stream" },
        { name: "Apache Spark", icon: "fas fa-bolt" },
        { name: "Apache Airflow", icon: "fas fa-wind" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "PyTorch", icon: "fas fa-brain" },
        { name: "RAG & ChromaDB", icon: "fas fa-robot" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Power BI", icon: "fas fa-chart-pie" },
        { name: "FastAPI", icon: "fas fa-code-branch" },
        { name: "Git & GitHub", icon: "fab fa-git-alt" },
        { name: "JavaScript", icon: "fab fa-js" }
    ],

    // Services section
    services: [
        { title: "Big Data & Streaming Pipelines", description: "Architecting real-time streaming & batch pipelines with Kafka, Spark, MinIO, and Airflow.", icon: "fas fa-network-wired" },
        { title: "Generative AI & RAG Systems", description: "Building production RAG engines, vector indexing with ChromaDB, and multi-agent coordination.", icon: "fas fa-brain" },
        { title: "Computer Vision & Deep Learning", description: "Fine-tuning transformer architectures (SegFormer, SwinIR) for aerial and satellite segmentation.", icon: "fas fa-eye" },
        { title: "Business Intelligence & ETL", description: "Dimensional data modeling, automated ETL pipelines, and executive dashboards in Power BI.", icon: "fas fa-chart-line" }
    ],

    // Projects to render in Projects grid
    projects: [
        {
            title: "S&P 500 Real-Time Big Data Pipeline",
            category: "data-engineering",
            description: "Streaming & batch financial pipeline using Kafka, PySpark, MinIO, PostgreSQL, Airflow, and Docker Compose.",
            image: "images/Data Anlysis.png",
            technologies: ["Kafka", "PySpark", "Airflow", "Docker", "MinIO", "PostgreSQL"],
            liveUrl: "https://github.com/M12hindawy/sp500-big-data-pipeline",
            githubUrl: "https://github.com/M12hindawy/sp500-big-data-pipeline"
        },
        {
            title: "Drug Intelligence System",
            category: "ai-ml",
            description: "Full-stack pharmaceutical platform benchmarking 6 DL models with ChromaDB RAG and hallucination detection.",
            image: "images/hero.jpeg",
            technologies: ["PyTorch", "BERT", "ChromaDB", "RAG", "Flask", "Docker"],
            liveUrl: "https://github.com/M12hindawy/drug-intelligence-system",
            githubUrl: "https://github.com/M12hindawy/drug-intelligence-system"
        },
        {
            title: "Solar Panel Segmentation (NARSS GeoAI)",
            category: "ai-ml",
            description: "Satellite image segmentation pipeline achieving 85.03% IoU and 91.91% Dice with SegFormer-B4 and SwinIR.",
            image: "images/solar_panels.png",
            technologies: ["SegFormer-B4", "SwinIR", "PyTorch", "Remote Sensing"],
            liveUrl: "https://github.com/M12hindawy/solar-panel-segmentation-narss",
            githubUrl: "https://github.com/M12hindawy/solar-panel-segmentation-narss"
        },
        {
            title: "AeroHealth OS — NASA Space Apps 2026",
            category: "ai-ml",
            description: "Autonomous biomedical monitoring HUD for deep-space missions with 60 FPS ECG canvas simulation.",
            image: "images/test.jpg",
            technologies: ["HTML5 Canvas", "JavaScript", "Python", "HL7 FHIR"],
            liveUrl: "https://m12hindawy.github.io/aerohealth-os/",
            githubUrl: "https://github.com/M12hindawy/aerohealth-os"
        },
        {
            title: "Fantasy Football Multi-Agent System",
            category: "ai-ml",
            description: "Sports analytics platform coordinating 15+ AI agents with Dixon-Coles modeling, XGBoost, and Plotly Dash.",
            image: "images/Education.png",
            technologies: ["Multi-Agent", "Dixon-Coles", "XGBoost", "Plotly Dash"],
            liveUrl: "https://github.com/M12hindawy/fantasy-football-intelligence",
            githubUrl: "https://github.com/M12hindawy/fantasy-football-intelligence"
        },
        {
            title: "ArabSentiment-Pipeline",
            category: "ai-ml",
            description: "End-to-end Arabic & Egyptian dialect sentiment classification pipeline with custom text normalizers and FastAPI.",
            image: "images/hero.jpeg",
            technologies: ["Arabic NLP", "FastAPI", "Docker", "Scikit-Learn"],
            liveUrl: "https://github.com/M12hindawy/arabic-sentiment-analysis",
            githubUrl: "https://github.com/M12hindawy/arabic-sentiment-analysis"
        },
        {
            title: "Real-Time Streaming Anomaly Detector",
            category: "data-engineering",
            description: "Streaming time-series anomaly detection engine combining Z-Score, IQR, and EWMA with multi-detector voting.",
            image: "images/Data Anlysis.png",
            technologies: ["Streaming ML", "Z-Score", "IQR", "EWMA", "Docker"],
            liveUrl: "https://github.com/M12hindawy/realtime-anomaly-detection",
            githubUrl: "https://github.com/M12hindawy/realtime-anomaly-detection"
        }
    ],

    // Achievements
    achievements: [
        { title: "Building RAG Agents with LLMs", year: "2026", description: "NVIDIA Deep Learning Institute Certified" },
        { title: "Galactic Problem Solver", year: "2026", description: "NASA Space Apps Challenge Cairo 2026" },
        { title: "GeoAI: Solar Panel Segmentation (120hr)", year: "2026", description: "NARSS National Remote Sensing Authority" },
        { title: "Huawei Big Data Associate (Score: 98.5%)", year: "2026", description: "NTI / Huawei ICT Academy" }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
