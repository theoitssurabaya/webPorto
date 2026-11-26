export const translations = {
  en: {
    nav: {
      profile: "Profile",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      title: "Theo Kawalisa Pinem",
      subtitle: "Computer Engineering student experienced in full-stack IoT, edge AI, and SCADA. Proven leader in deploying hardware-to-cloud pipelines and scalable networks.",
      btnExplore: "Explore Projects",
      btnCV: "View CV"
    },
    skills: {
      sectionTitle: "Technical Arsenal",
      title: "Skills & Certifications",
      categories: {
        programming: "Software Development",
        hardware: "Hardware & IoT",
        web: "Web Development",
        ai: "AI & Data"
      }
    },
    education: {
      sectionTitle: "Academic Journey",
      title: "Education Journey"
    },
    experience: {
      sectionTitle: "Professional Journey",
      title: "Experiences"
    },
    projects: {
      sectionTitle: "Selected Works",
      title: "Featured Projects",
      caseStudyLabels: {
        problem: "Problem",
        architecture: "Architecture",
        impact: "Impact",
        viewGithub: "View Repository on GitHub",
        close: "Close"
      },
      proj1: {
        title: "Bird Shooter ESP32",
        desc: "Reaction-based arcade game on a 4x4 LED matrix challenging players to memorize and shoot targets at escalating speeds.",
        problem: "Needed a deterministic, low-latency embedded game loop capable of multiplexing a 4x4 LED matrix while polling physical inputs without flicker.",
        architecture: "ESP32 microcontroller programmed in C++ with custom hardware wiring, state-machine timing, and multiplexed matrix scanning.",
        impact: "Delivered responsive sub-millisecond input polling and progressive difficulty scaling across multi-target stages."
      },
      proj2: {
        title: "PZEM Anomaly Detector",
        desc: "IoT system using PZEM-004T to monitor electrical parameters. Implemented machine learning to detect power consumption anomalies in real-time.",
        problem: "Conventional power meters log raw voltage and current without flagging abnormal electrical spikes or faulty appliance loads early.",
        architecture: "PZEM-004T sensor interfaced with an RTOS-driven microcontroller streaming telemetry to Node-RED and an ML anomaly classifier.",
        impact: "Enabled continuous real-time electrical monitoring with automated anomaly alerts for proactive load diagnostics."
      },
      proj3: {
        title: "Distance Target Game",
        desc: "Interactive Arduino game challenging players to score points by holding their hands at exact distances using ultrasonic sensors.",
        problem: "Ultrasonic sensor readings fluctuate with hand movement, making raw distance matching erratic for real-time interactive scoring.",
        architecture: "ESP32/Arduino ultrasonic sensing pipeline paired with a Node.js backend for real-time distance filtering and score tracking.",
        impact: "Achieved smooth, stable distance-based target detection with instant visual and score feedback."
      },
      proj4: {
        title: "Smart Irrigation System",
        desc: "Automated plant watering system based on soil moisture levels. Includes a dashboard for historical data and manual override controls.",
        problem: "Static timer-based irrigation wastes water and fails to adapt to changing soil moisture and environmental conditions.",
        architecture: "ESP32 sensor nodes streaming serial telemetry to a Raspberry Pi gateway running a Random Forest ML model and FastAPI control dashboard.",
        impact: "Achieved ~85% prediction accuracy for automated watering decisions with priority-based remote actuator override."
      },
      proj5: {
        title: "Smart Dispenser IoT",
        desc: "End-to-end IoT Smart Dispenser system built with ESP32 and Flutter. Features real-time water level monitoring, precision pouring via MQTT, and user quota management with Firebase.",
        problem: "Manual water dispensers lack precise volume control, usage quota enforcement, and hardware safety checks against accidental spills.",
        architecture: "ESP32 with Load Cells, Flow Sensors, and Ultrasonic interlock synced via MQTT and Firebase to a cross-platform Flutter app.",
        impact: "Delivered bi-directional IoT control and a < 0.1s ultrasonic safety interlock that halts pumping immediately if the cup is removed."
      },
      proj6: {
        title: "PERISAI",
        desc: "AI-driven Fullstack Web App predicting risk of Diabetes, Hypertension, and High Cholesterol using Deep Learning.",
        problem: "Early screening for non-communicable diseases (Diabetes, Hypertension, High Cholesterol) is fragmented and lacks accessible AI risk triage.",
        architecture: "Decentralized microservices across Vercel (React), Railway (Node.js/PostgreSQL), and Hugging Face (FastAPI/TensorFlow/Docker) with Gemini AI consultation.",
        impact: "Trained a TensorFlow/Keras deep learning model with a custom BCE + 10x MAE loss function for multi-risk health prediction."
      },
      proj7: {
        title: "Fully Autonomous ESP32 Robotic Vehicle",
        desc: "Autonomous 4WD robot powered by ESP32 that navigates and avoids obstacles in real-time using ultrasonic sensors.",
        problem: "4WD mobile platforms require fast, reliable obstacle avoidance and balanced motor PWM control without stalling on tight turns.",
        architecture: "ESP32 firmware in C++ integrating ultrasonic rangefinding, motor driver H-bridge control, and real-time collision-avoidance logic.",
        impact: "Demonstrated continuous autonomous navigation and dynamic obstacle rerouting in indoor test tracks."
      },
      proj8: {
        title: "Wayfinder",
        desc: "Smart indoor navigation system using A* pathfinding and NLP to provide flexible, AI-driven routing for complex buildings.",
        problem: "Large multi-floor buildings lack GPS coverage, leaving visitors unable to find rooms using natural-language queries.",
        architecture: "React web client backed by Firebase and an NLP query parser feeding an A* graph pathfinding engine.",
        impact: "Translated free-text destination queries into step-by-step shortest-path indoor routes across complex layouts."
      },
      proj9: {
        title: "Awas Ditabrak",
        desc: "A fast-paced 2D lane-avoidance game built with Python and Pygame. Features dynamic difficulty scaling, smooth animations, and a shield power-up system.",
        problem: "Needed a clean object-oriented 2D game loop maintaining stable frame rates while spawning dynamic obstacles and power-ups.",
        architecture: "Python and Pygame architecture with sprite collision detection, progressive speed scaling, and shield state management.",
        impact: "Delivered smooth 60 FPS gameplay with progressive difficulty curves and modular power-up mechanics."
      },
      proj10: {
        title: "Mini SCADA System",
        desc: "A localized Supervisory Control and Data Acquisition system utilizing a PLC architecture for industrial monitoring and control.",
        problem: "Needed a realistic, cost-effective OT industrial control environment to test telemetry pipelines and simulate cyber-attack scenarios safely.",
        architecture: "Distributed sandbox combining Omron CP2E PLC, OpenPLC, Raspberry Pi, and ESP8266 RTUs over Modbus TCP with Dockerized Node-RED HMI and Apache IoTDB.",
        impact: "Provided end-to-end real-time industrial telemetry visualization and vulnerable-by-design infrastructure for OT penetration testing."
      }
    },
    contact: {
      sectionTitle: "Get in Touch",
      title: "Let's Build Something Together",
      emailCardDesc: "My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      emailLabel: "Email",
      locationLabel: "Location",
      phoneLabel: "Phone",
      messageBox: {
        title: "Send me a message",
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message.",
        invalidEmail: "Invalid email format. Please try again."
      }
    }
  },
  id: {
    nav: {
      profile: "Profil",
      skills: "Keahlian",
      education: "Pendidikan",
      experience: "Pengalaman",
      projects: "Proyek",
      contact: "Kontak"
    },
    hero: {
      title: "Theo Kawalisa Pinem",
      subtitle: "Mahasiswa Teknik Komputer berpengalaman di full-stack IoT, edge AI, dan SCADA. Pemimpin dalam penerapan pipeline hardware-ke-cloud dan jaringan berskala besar.",
      btnExplore: "Jelajahi Proyek",
      btnCV: "Lihat CV"
    },
    skills: {
      sectionTitle: "Gudang Teknis",
      title: "Keahlian & Sertifikasi",
      categories: {
        programming: "Pengembangan Perangkat Lunak",
        hardware: "Perangkat Keras & IoT",
        web: "Pengembangan Web",
        ai: "Kecerdasan Buatan & Data"
      }
    },
    education: {
      sectionTitle: "Perjalanan Akademik",
      title: "Perjalanan Pendidikan"
    },
    experience: {
      sectionTitle: "Perjalanan Profesional",
      title: "Pengalaman"
    },
    projects: {
      sectionTitle: "Karya Pilihan",
      title: "Proyek Unggulan",
      caseStudyLabels: {
        problem: "Tantangan",
        architecture: "Arsitektur",
        impact: "Hasil & Dampak",
        viewGithub: "Lihat Repositori di GitHub",
        close: "Tutup"
      },
      proj1: {
        title: "Penembak Burung ESP32",
        desc: "Game arcade reaksi pada matriks LED 4x4, menantang pemain mengingat dan menembak target pada kecepatan kilat.",
        problem: "Membutuhkan game loop embedded dengan latensi rendah untuk multiplexing matriks LED 4x4 dan pembacaan tombol fisik tanpa kedip.",
        architecture: "Mikrokontroler ESP32 berbahasa C++ dengan wiring perangkat keras khusus, state-machine timing, dan scanning matriks.",
        impact: "Menghasilkan pembacaan input sub-milidetik yang responsif dengan peningkatan kecepatan bertahap."
      },
      proj2: {
        title: "Detektor Anomali PZEM",
        desc: "Sistem IoT menggunakan PZEM-004T untuk memantau parameter listrik. Menerapkan machine learning untuk mendeteksi anomali konsumsi daya.",
        problem: "Pengukur listrik konvensional hanya mencatat tegangan dan arus mentah tanpa mendeteksi lonjakan atau anomali beban sejak dini.",
        architecture: "Sensor PZEM-004T terhubung ke mikrokontroler berbasis RTOS yang mengirim telemetri ke Node-RED dan model ML pendeteksi anomali.",
        impact: "Memungkinkan pemantauan kelistrikan real-time beserta deteksi anomali otomatis untuk diagnosis beban lebih cepat."
      },
      proj3: {
        title: "Game Target Jarak",
        desc: "Game interaktif Arduino yang menantang pemain mencetak poin dengan menempatkan tangan pada jarak presisi via sensor ultrasonik.",
        problem: "Pembacaan sensor ultrasonik mudah berfluktuasi akibat gerakan tangan sehingga pencocokan jarak mentah menjadi tidak stabil.",
        architecture: "Pipeline sensor ultrasonik ESP32/Arduino yang terhubung ke backend Node.js untuk penyaringan jarak dan pencatatan skor real-time.",
        impact: "Menghasilkan deteksi target jarak yang stabil dengan umpan balik skor secara langsung."
      },
      proj4: {
        title: "Sistem Irigasi Pintar",
        desc: "Sistem penyiraman tanaman otomatis berbasis tingkat kelembaban tanah. Dilengkapi dengan dasbor untuk data historis dan kontrol manual.",
        problem: "Irigasi berbasis jadwal statis memboroskan air dan tidak adaptif terhadap perubahan kelembaban tanah.",
        architecture: "Node sensor ESP32 mengirim telemetri serial ke gateway Raspberry Pi yang menjalankan model ML Random Forest dan dasbor FastAPI.",
        impact: "Mencapai akurasi prediksi ~85% untuk keputusan penyiraman otomatis dengan kontrol aktuator jarak jauh berbasis prioritas."
      },
      proj5: {
        title: "Dispenser Pintar IoT",
        desc: "Sistem IoT Smart Dispenser end-to-end yang dibangun dengan ESP32 dan Flutter. Menampilkan pemantauan ketinggian air real-time, penuangan presisi via MQTT, dan manajemen kuota pengguna dengan Firebase.",
        problem: "Dispenser konvensional tidak memiliki kontrol volume presisi, batas kuota pengguna, dan pengaman pompa saat gelas diangkat.",
        architecture: "ESP32 dengan Load Cell, Flow Sensor, dan interlock ultrasonik yang tersinkronisasi melalui MQTT dan Firebase ke aplikasi Flutter.",
        impact: "Menghadirkan kontrol IoT dua arah dan pengaman interlock < 0,1 detik yang menghentikan pompa seketika saat gelas diangkat."
      },
      proj6: {
        title: "PERISAI",
        desc: "Web App Fullstack berbasis AI untuk memprediksi risiko Diabetes, Hipertensi, dan Kolesterol Tinggi menggunakan Deep Learning.",
        problem: "Skrining dini penyakit tidak menular (Diabetes, Hipertensi, Kolesterol) masih terpisah-pisah dan minim triase AI yang mudah diakses.",
        architecture: "Arsitektur microservices terdesentralisasi di Vercel (React), Railway (Node.js/PostgreSQL), dan Hugging Face (FastAPI/TensorFlow/Docker) dengan chatbot Gemini AI.",
        impact: "Melatih model deep learning TensorFlow/Keras dengan custom loss function BCE + 10x MAE untuk prediksi multi-risiko kesehatan."
      },
      proj7: {
        title: "Kendaraan Robotik Otonom ESP32",
        desc: "Robot 4WD otonom bertenaga ESP32 yang cerdas menavigasi dan menghindari rintangan secara real-time menggunakan sensor ultrasonik.",
        problem: "Platform robot 4WD membutuhkan penghindaran rintangan yang cepat serta kontrol PWM motor yang seimbang saat berbelok.",
        architecture: "Firmware ESP32 berbahasa C++ yang memadukan sensor jarak ultrasonik, driver motor H-bridge, dan logika penghindaran tabrakan real-time.",
        impact: "Berhasil menjalankan navigasi otonom berkelanjutan dan manuver penghindaran rintangan pada lintasan uji."
      },
      proj8: {
        title: "Wayfinder",
        desc: "Sistem navigasi dalam ruangan pintar menggunakan algoritma A* dan NLP untuk pencarian rute berbasis AI di gedung yang kompleks.",
        problem: "Gedung bertingkat besar tidak terjangkau sinyal GPS sehingga pengunjung kesulitan mencari ruangan dengan bahasa alami.",
        architecture: "Klien web React dengan database Firebase serta parser NLP yang meneruskan tujuan ke mesin pathfinding graf A*.",
        impact: "Mengubah kueri teks bebas menjadi rute terpendek langkah demi langkah di dalam gedung kompleks."
      },
      proj9: {
        title: "Awas Ditabrak",
        desc: "Game hindari jalur 2D bertempo cepat yang dibangun dengan Python dan Pygame. Menampilkan peningkatan kesulitan dinamis, animasi halus, dan sistem power-up perisai.",
        problem: "Membutuhkan game loop 2D berorientasi objek yang menjaga frame rate stabil saat memunculkan rintangan dan power-up dinamis.",
        architecture: "Arsitektur Python dan Pygame dengan deteksi tabrakan sprite, eskalasi kecepatan bertahap, dan manajemen status perisai.",
        impact: "Menghasilkan gameplay 60 FPS yang mulus dengan kurva kesulitan progresif dan mekanik power-up modular."
      },
      proj10: {
        title: "Sistem Mini SCADA",
        desc: "Sistem Supervisory Control and Data Acquisition terpusat menggunakan arsitektur PLC untuk pemantauan dan kontrol industri.",
        problem: "Membutuhkan lingkungan kontrol industri OT yang realistis dan hemat biaya untuk menguji telemetri serta simulasi serangan siber dengan aman.",
        architecture: "Sandbox terdistribusi yang menggabungkan Omron CP2E PLC, OpenPLC, Raspberry Pi, dan RTU ESP8266 via Modbus TCP dengan HMI Node-RED dan Apache IoTDB dalam Docker.",
        impact: "Menyediakan visualisasi telemetri industri real-time end-to-end serta infrastruktur uji penetrasi keamanan OT."
      }
    },
    contact: {
      sectionTitle: "Hubungi Saya",
      title: "Mari Bangun Sesuatu Bersama",
      emailCardDesc: "Kotak masuk saya selalu terbuka. Baik Anda memiliki pertanyaan atau sekadar menyapa, saya akan berusaha membalasnya!",
      emailLabel: "Email",
      locationLabel: "Lokasi",
      phoneLabel: "Telepon",
      messageBox: {
        title: "Kirim pesan kepada saya",
        name: "Nama Anda",
        email: "Email Anda",
        subject: "Subjek",
        message: "Pesan Anda",
        submit: "Kirim Pesan",
        sending: "Mengirim...",
        success: "Pesan berhasil terkirim!",
        error: "Gagal mengirim pesan.",
        invalidEmail: "Format email tidak valid. Silakan coba lagi."
      }
    }
  }
};
