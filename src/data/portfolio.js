export const getExperienceData = (language) => [
    {
        id: "exp-0",
        tabTitle: language === 'id' ? "Magang Business Development" : "Business Development Intern",
        tabSubtitle: "Protergo Cyber Security",
        date: language === 'id' ? "Jun 2026 — Sekarang" : "Jun 2026 — Present",
        orgName: "Protergo Cyber Security",
        points: [
            language === 'id' ? "Merancang sandbox SCADA terdistribusi menggunakan OpenPLC dan mikrokontroler." : "Architecting a distributed SCADA sandbox using OpenPLC and microcontrollers.",
            language === 'id' ? "Berkolaborasi dengan tim untuk menyediakan infrastruktur uji penetrasi." : "Collaborating with cybersecurity teams to provide infrastructure for penetration testing."
        ],
        image: "/assets/experience/protergo.jpeg"
    },
    {
        id: "exp-2",
        tabTitle: language === 'id' ? "Kepala Biro Pengembangan" : "Head of Development Bureau",
        tabSubtitle: "BEM FTEIC",
        date: language === 'id' ? "Feb 2026 — Sekarang" : "Feb 2026 — Present",
        orgName: "BEM FTEIC",
        points: [
            language === 'id' ? "Mengawasi dan memimpin tim yang terdiri dari 8 staf." : "Supervising and leading a team consisting of 8 staff members.",
            language === 'id' ? "Mengarahkan dan mendampingi program pengembangan mahasiswa untuk mahasiswa baru fakultas." : "Directed and mentored the student development programs for incoming faculty students."
        ],
        image: "/assets/experience/bem-fteic.jpeg"
    },
    {
        id: "exp-3",
        tabTitle: language === 'id' ? "Asisten Laboratorium" : "Laboratory Assistant",
        tabSubtitle: "Robotics Lab (ITS)",
        date: language === 'id' ? "Sep 2025 — Sekarang" : "Sep 2025 — Present",
        orgName: "Robotics & Intelligent Systems Lab (ITS)",
        points: [
            language === 'id' ? "Mengelola peralatan dan mengawasi eksperimen mahasiswa." : "Managing equipment and supervising student experiments.",
            language === 'id' ? "Mengoordinasikan pengembangan robotika, IoT, dan sistem cerdas." : "Coordinating development for robotics, IoT, and intelligent systems."
        ],
        image: "/assets/experience/robotics-lab.jpeg"
    },
    {
        id: "exp-1",
        tabTitle: language === 'id' ? "Peserta AI Engineer" : "AI Engineer Cohort",
        tabSubtitle: "DBS x Dicoding Coding Camp 2026",
        date: language === 'id' ? "Feb 2026 — Juli 2026" : "Feb 2026 — July 2026",
        orgName: "Coding Camp by DBS Foundation x Dicoding",
        points: [
            language === 'id' ? "Mengembangkan model ML dan Deep Learning melalui pelatihan intensif." : "Developing ML and Deep Learning models via intensive training.",
            language === 'id' ? "Membangun proyek Capstone AI menggunakan framework Deep Learning." : "Building an AI Capstone project using Deep Learning frameworks."
        ],
        image: "/assets/experience/ai-engineer-cohort.png"
    },
    {
        id: "exp-7",
        tabTitle: language === 'id' ? "Asisten Dosen" : "Assistant Lecturer",
        tabSubtitle: "Institut Teknologi Sepuluh Nopember",
        date: language === 'id' ? "Feb 2026 — Jun 2026" : "Feb 2026 — June 2026",
        orgName: "Institut Teknologi Sepuluh Nopember (ITS)",
        points: [
            language === 'id' ? "Mengajar prinsip robotika dan simulasi 3D Webots kepada 100+ mahasiswa." : "Taught core robotics principles and hands-on Webots 3D simulation to 100+ students.",
            language === 'id' ? "Mengevaluasi kinerja mahasiswa dalam ujian untuk menjaga standar akademik." : "Assessed student performance in examinations to maintain academic standards."
        ],
        image: "/assets/experience/introRoboticsAssistant.jpeg?v=1"
    },
    {
        id: "exp-6",
        tabTitle: language === 'id' ? "Panitia Pengarah" : "Steering Committee",
        tabSubtitle: "PKMBK ITS",
        date: language === 'id' ? "Jan 2025 — Feb 2026" : "Jan 2025 — Feb 2026",
        orgName: "Pembinaan Kerohanian Mahasiswa Baru Kristen ITS 2025",
        points: [
            language === 'id' ? "Membuat konsep keseluruhan acara bagi mahasiswa baru Kristen." : "Conceptualized the entire program events for incoming christian freshmen.",
            language === 'id' ? "Berperan sebagai narahubung utama dengan pembina kerohanian ITS bersama tim beranggotakan 7 orang." : "Acted as the key liaison with the ITS spiritual campus advisor with a 7-person team."
        ],
        image: "/assets/experience/pkmbk.jpeg"
    },
    {
        id: "exp-5",
        tabTitle: language === 'id' ? "Staf Pengembangan SDM" : "Staff of Student Resource Development",
        tabSubtitle: "HIMATEKKOM ITS",
        date: language === 'id' ? "Mar 2025 — Des 2025" : "Mar 2025 — Dec 2025",
        orgName: "Himpunan Mahasiswa Teknik Komputer ITS",
        points: [
            language === 'id' ? "Turut memimpin acara pengenalan jurusan (sebagai Wakil Ketua)." : "Co-Led a major departmental introductory event (as Vice Head).",
            language === 'id' ? "Memfasilitasi dan mendampingi pelatihan sekitar 120 mahasiswa junior." : "Facilitated and assisted in training around 120 juniors."
        ],
        image: "/assets/experience/himatekkom-its.jpeg"
    },
    {
        id: "exp-4",
        tabTitle: language === 'id' ? "Staf Ahli Mentor" : "Expert Staff of Mentor",
        tabSubtitle: "INCLENATION 2025",
        date: language === 'id' ? "Jun 2025 — Agu 2025" : "Jun 2025 — Aug 2025",
        orgName: "BEM FTEIC (INCLENATION 2025)",
        points: [
            language === 'id' ? "Mengarahkan, memimpin, dan membimbing tim mentor beranggotakan 10 orang." : "Directed, led, and taught a 10-person team of mentors.",
            language === 'id' ? "Mengawasi dan memantau mentor saat mereka mendampingi masing-masing 10 mahasiswa baru." : "Supervised and monitored those mentors while they mentor 10 freshmen each."
        ],
        image: "/assets/experience/inclenation.jpeg"
    }
];

export const getEducationData = (language) => [
    {
        id: "edu-1",
        date: language === 'id' ? "Jul 2020 – Mei 2023" : "Jul 2020 – May 2023",
        title: language === 'id' ? "Ijazah SMA (Ilmu Alam)" : "High School Diploma (Science)",
        orgName: "SMAN 2 Kota Tangerang Selatan",
        pills: [
            { label: language === 'id' ? "Nilai:" : "Grade:", value: "88" },
            { label: language === 'id' ? "Aktivitas:" : "Activities:", value: language === 'id' ? "Klub Bulu Tangkis." : "Attended Badminton Club." },
            { value: language === 'id' ? "Peringkat 66 dari 141 siswa jurusan IPA" : "Ranked 66 eligible students of Natural Sciences out of 141" }
        ],
        image: "/assets/education/sma.jpeg",
        imgStyle: { objectPosition: "center 25%" }
    },
    {
        id: "edu-2",
        date: language === 'id' ? "Agu 2023 – Agu 2027 (Perkiraan)" : "Aug 2023 – Aug 2027 (Expected)",
        title: language === 'id' ? "Sarjana Teknik Komputer" : "Bachelor of Computer Engineering",
        orgName: "Institut Teknologi Sepuluh Nopember",
        pills: [
            { label: language === 'id' ? "IPK:" : "Grade:", value: "3.51/4.00" },
            { label: "TEFL:", value: "537" },
            { label: language === 'id' ? "Keahlian:" : "Skills:", value: language === 'id' ? "Bahasa Inggris sebagai Bahasa Kedua (ESL)" : "English as a Second Language (ESL)" }
        ],
        image: "/assets/education/kuliah.jpeg",
        imgStyle: {}
    }
];

export const projectList = [
    {
        key: "proj1",
        link: "https://github.com/theoitssurabaya/Bird-Shooter-Game-ESP32",
        img: "assets/projects/bird-shooter-esp32.jpeg",
        alt: "Bird Shooter ESP32",
        objPos: "center center",
        tags: ["C++", "Electrical Wiring", "ESP32"]
    },
    {
        key: "proj2",
        link: "https://github.com/theoitssurabaya/PZEM-AnomalyDetector",
        img: "assets/projects/pzem-anomaly-detector.jpeg",
        alt: "PZEM Anomaly Detector",
        tags: ["RTOS", "Machine Learning", "Node-RED"]
    },
    {
        key: "proj4",
        link: "https://github.com/theoitssurabaya/Soil-Monitoring-Controlled-Irrigation",
        img: "assets/projects/smart-irrigation.png",
        alt: "Smart Irrigation",
        tags: ["ESP32", "ML", "Raspberry Pi"]
    },
    {
        key: "proj3",
        link: "https://github.com/theoitssurabaya/distance_target_game_project",
        img: "assets/projects/distance-target-game.png",
        alt: "Distance Target Game",
        objPos: "left center",
        tags: ["Node.js", "ESP32", "IoT"]
    },
    {
        key: "proj6",
        link: "https://github.com/theoitssurabaya/PERISAI",
        img: "assets/projects/PERISAI-transparent2.png",
        alt: "PERISAI",
        objFit: "contain",
        tags: ["React", "Node.js", "FastAPI"]
    },
    {
        key: "proj5",
        link: "https://github.com/theoitssurabaya/Smart-Dispenser-IoT",
        img: "assets/projects/smart-dispenser-iot.jpeg",
        alt: "Smart Dispenser IoT",
        tags: ["Flutter", "ESP32", "IoT"]
    },
    {
        key: "proj7",
        link: "https://github.com/theoitssurabaya/Fully-Autonomous-ESP32-Robotic-Vehicle",
        img: "assets/projects/fully-autonomous-esp32-robotic-vehicle.jpeg",
        alt: "Fully Autonomous ESP32 Robotic Vehicle",
        objPos: "center 60%",
        tags: ["C++", "ESP32", "Electrical Wiring"]
    },
    {
        key: "proj8",
        link: "https://github.com/theoitssurabaya/Wayfinder",
        img: "assets/projects/wayfinder-transparent2.png",
        alt: "Wayfinder",
        objFit: "contain",
        tags: ["React", "Firebase", "NLP"]
    },
    {
        key: "proj9",
        link: "https://github.com/theoitssurabaya/AwasDitabrak",
        img: "assets/projects/awasditabrak.png",
        alt: "Awas Ditabrak",
        objFit: "cover",
        tags: ["Python", "Pygame", "Game"]
    }
];

export const certsList = [
    { img: "assets/skills/English for Business Communication.jpg", title: "English for Business Communication (USG Education)", objPos: "center 25%" },
    { img: "assets/skills/Pengembangan Generative AI berbasis LLM.png", title: "Pengembangan Generative AI berbasis LLM (Dicoding)" },
    { img: "assets/skills/Membangun Proyek Deep Learning Tingkat Mahir.jpeg", title: "Membangun Proyek Deep Learning Tingkat Mahir (Dicoding)" },
    { img: "assets/skills/Belajar Fundamental Deep Learning.jpeg", title: "Belajar Fundamental Deep Learning (Dicoding)" },
    { img: "assets/skills/Belajar Machine Learning untuk Pemula.jpeg", title: "Belajar Machine Learning untuk Pemula (Dicoding)" },
    { img: "assets/skills/Memulai Pemrograman dengan Python.jpeg", title: "Memulai Pemrograman dengan Python (Dicoding)" },
    { img: "assets/skills/Belajar Dasar AI.jpg", title: "Belajar Dasar AI (Dicoding)" },
    { img: "assets/skills/Belajar Dasar Git dengan Github.jpeg", title: "Belajar Dasar Git dengan Github (Dicoding)" },
    { img: "assets/skills/Pengenalan ke Logika Pemrograman (Programming Logic 101).jpg", title: "Pengenalan ke Logika Pemrograman (Programming Logic 101) (Dicoding)" },
    { img: "assets/skills/Memulai Dasar Pemrograman untuk Menjadi Pengembangan Software.jpg", title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software (Dicoding)" },
    { img: "assets/skills/Introduction to Software Engineering.jpeg", title: "Introduction to Software Engineering (RevoU)" },
    { img: "assets/skills/Introduction to Financial Literacy.jpg", title: "Introduction to Financial Literacy (Dicoding)" },
    { img: "assets/skills/LKMM-TD.jpg", title: "Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar (HIMATEKKOM ITS)" }
];
