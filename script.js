// ==============================
// KONFIGURASI SISTEM
// ==============================

// URL Google Apps Script (GANTI dengan URL Anda setelah membuat Google Apps Script)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtMUkDpz8oHNlBrU7RUpCtEbnOdnIEJNXkzKpX1JpO6Fz_HtCgxd7KFS-4VZG0_rWtJA/exec';

// Soal Ulangan (Pendudukan Jepang di Indonesia)
const questions = [
    {
        id: 1,
        question: "Negara Asia yang mengaku sebagai 'Saudara Tua' bangsa Indonesia dan datang menggantikan penjajahan Belanda adalah...",
        options: [
            "Tiongkok",
            "India",
            "Korea",
            "Jepang",
            "Vietnam"
        ],
        correct: "Jepang"
    },
    {
        id: 2,
        question: "Alasan utama Jepang menyerang pangkalan angkatan laut Amerika Serikat di Pearl Harbor (Hawaii) adalah...",
        options: [
            "Ingin memamerkan kekuatan militer baru mereka",
            "Amerika Serikat menghina Kaisar Jepang",
            "Melumpuhkan kekuatan Amerika agar tidak menghalangi Jepang menguasai Asia Pasifik",
            "Ingin merebut wilayah Hawaii untuk dijadikan pangkalan wisata",
            "Membantu Jerman memenangkan perang di Eropa"
        ],
        correct: "Melumpuhkan kekuatan Amerika agar tidak menghalangi Jepang menguasai Asia Pasifik"
    },
    {
        id: 3,
        question: "Tujuan utama Jepang menguasai Indonesia yang kaya akan sumber daya alam adalah untuk...",
        options: [
            "Mengambil rempah-rempah untuk dijual ke Eropa",
            "Mengambil minyak bumi untuk bahan bakar perang",
            "Mencari tempat wisata bagi tentara Jepang",
            "Menyebarkan agama Shinto",
            "Membangun pabrik-pabrik elektronik"
        ],
        correct: "Mengambil minyak bumi untuk bahan bakar perang"
    },
    {
        id: 4,
        question: "Jepang pertama kali mendarat di Indonesia pada tahun 1942 di daerah penghasil minyak, yaitu...",
        options: [
            "Jakarta",
            "Surabaya",
            "Tarakan (Kalimantan Timur)",
            "Bali",
            "Semarang"
        ],
        correct: "Tarakan (Kalimantan Timur)"
    },
    {
        id: 5,
        question: "Belanda menyerah tanpa syarat kepada Jepang pada tanggal 8 Maret 1942 melalui Perjanjian...",
        options: [
            "Linggarjati",
            "Renville",
            "Roem-Royen",
            "Kalijati",
            "Bongaya"
        ],
        correct: "Kalijati"
    },
    {
        id: 6,
        question: "Propaganda awal Jepang untuk menarik hati rakyat Indonesia dikenal dengan 'Gerakan 3A'. Semboyan gerakan tersebut adalah...",
        options: [
            "Jepang Cahaya Asia, Jepang Pelindung Asia, Jepang Pemimpin Asia",
            "Jepang Saudara Asia, Jepang Teman Asia, Jepang Keluarga Asia",
            "Jepang Makmur, Jepang Kaya, Jepang Hebat",
            "Jepang Matahari Terbit, Jepang Putra Asia, Jepang Harapan Asia",
            "Jepang Kuat, Jepang Perkasa, Jepang Jaya"
        ],
        correct: "Jepang Cahaya Asia, Jepang Pelindung Asia, Jepang Pemimpin Asia"
    },
    {
        id: 7,
        question: "Tokoh 'Empat Serangkai' yang memimpin organisasi Putera (Pusat Tenaga Rakyat) adalah Ir. Soekarno, Moh. Hatta, K.H. Mas Mansyur, dan...",
        options: [
            "Ki Hajar Dewantara",
            "Ahmad Soebardjo",
            "Sutan Syahrir",
            "Cipto Mangunkusumo",
            "Dr. Soetomo"
        ],
        correct: "Ki Hajar Dewantara"
    },
    {
        id: 8,
        question: "Sebutan untuk pekerja paksa pada masa pendudukan Jepang yang dikirim untuk membangun jalan dan kubu pertahanan dalam kondisi yang sangat buruk adalah...",
        options: [
            "Kerja Rodi",
            "Romusha",
            "Tanam Paksa",
            "Kuli Kontrak",
            "Budak"
        ],
        correct: "Romusha"
    },
    {
        id: 9,
        question: "Organisasi militer bentukan Jepang yang anggotanya adalah pemuda Indonesia dan kelak menjadi cikal bakal TNI (Tentara Nasional Indonesia) adalah...",
        options: [
            "Seinendan",
            "Keibodan",
            "Fujinkai",
            "PETA (Pembela Tanah Air)",
            "Jawa Hokokai"
        ],
        correct: "PETA (Pembela Tanah Air)"
    },
    {
        id: 10,
        question: "Jepang membentuk sistem kepengurusan tetangga untuk mengawasi penduduk yang hingga kini masih kita gunakan dengan nama Rukun Tetangga (RT). Istilah Jepang untuk RT adalah...",
        options: [
            "Tonarigumi",
            "Ken",
            "Gun",
            "Syu",
            "Son"
        ],
        correct: "Tonarigumi"
    },
    {
        id: 11,
        question: "Salah satu kebijakan budaya Jepang yang ditentang oleh kalangan ulama di Indonesia adalah kewajiban melakukan Seikerei, yaitu...",
        options: [
            "Minum teh bersama setiap sore",
            "Menyanyikan lagu kebangsaan Jepang",
            "Membungkuk ke arah matahari terbit (Timur) untuk menghormati Kaisar",
            "Memakai pakaian kimono setiap hari Jumat",
            "Mencukur rambut hingga botak"
        ],
        correct: "Membungkuk ke arah matahari terbit (Timur) untuk menghormati Kaisar"
    },
    {
        id: 12,
        question: "Bahasa asing yang dilarang keras penggunaannya oleh Jepang di sekolah-sekolah dan kantor pemerintahan adalah...",
        options: [
            "Bahasa Inggris",
            "Bahasa Belanda",
            "Bahasa Mandarin",
            "Bahasa Arab",
            "Bahasa Jerman"
        ],
        correct: "Bahasa Belanda"
    },
    {
        id: 13,
        question: "Perlawanan tentara PETA terhadap Jepang di Blitar pada tahun 1945 dipimpin oleh...",
        options: [
            "Jenderal Sudirman",
            "Bung Tomo",
            "Supriyadi",
            "Untung Suropati",
            "Teuku Umar"
        ],
        correct: "Supriyadi"
    },
    {
        id: 14,
        question: "Perdana Menteri Jepang yang memberikan janji kemerdekaan kepada Indonesia di kemudian hari (Janji September) adalah...",
        options: [
            "PM Koiso",
            "PM Tojo",
            "Kaisar Hirohito",
            "Laksamana Maeda",
            "Jenderal Terauchi"
        ],
        correct: "PM Koiso"
    },
    {
        id: 15,
        question: "Peristiwa yang akhirnya memaksa Jepang menyerah kepada Sekutu dan mengakhiri pendudukannya di Indonesia adalah...",
        options: [
            "Kekalahan Jepang di Papua",
            "Meninggalnya Kaisar Jepang",
            "Pemberontakan tentara PETA di seluruh Jawa",
            "Dijatuhkannya bom atom di kota Hiroshima dan Nagasaki",
            "Kedatangan pasukan Inggris di Surabaya"
        ],
        correct: "Dijatuhkannya bom atom di kota Hiroshima dan Nagasaki"
    }
];

// ==============================
// VARIABEL GLOBAL
// ==============================

let studentData = {
    nama: '',
    kelas: ''
};

let examData = {
    startTime: null,
    endTime: null,
    answers: {},
    shuffledQuestions: [],
    cheatingAttempts: 0,
    cheatingDetected: false,
    warningShown: false
};

let currentQuestionIndex = 0;
let timerInterval = null;
let timeLeft = 20 * 60; // 20 menit dalam detik
let totalTime = 20 * 60;

// ==============================
// FUNGSI INISIALISASI
// ==============================

// Fungsi untuk mengacak array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fungsi untuk mengacak soal dan opsi
function shuffleQuestions() {
    // Buat salinan soal
    let shuffled = [...questions];
    
    // Acak urutan soal
    shuffled = shuffleArray(shuffled);
    
    // Acak pilihan jawaban untuk setiap soal
    shuffled.forEach(q => {
        // Simpan jawaban yang benar
        const correctAnswer = q.correct;
        
        // Simpan opsi dan acak
        const optionsCopy = [...q.options];
        const shuffledOptions = shuffleArray(optionsCopy);
        
        // Update objek soal
        q.options = shuffledOptions;
        
        // Temukan posisi baru jawaban yang benar
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
        if (newCorrectIndex !== -1) {
            // Pastikan jawaban yang benar masih ada di opsi
            q.correct = shuffledOptions[newCorrectIndex];
        }
    });
    
    return shuffled;
}

// ==============================
// FUNGSI DETEKSI KECURANGAN
// ==============================

// Setup deteksi kecurangan
function setupCheatingDetection() {
    // Deteksi ketika user kehilangan fokus dari halaman
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden' && examData.startTime && !examData.endTime) {
            // User berpindah tab atau minimize window
            if (!examData.warningShown) {
                handleCheatingDetected();
            }
        }
    });
    
    // Deteksi sebelum window ditutup
    window.addEventListener('beforeunload', function(e) {
        if (examData.startTime && !examData.endTime) {
            // Hanya tampilkan peringatan jika Ulangan sedang berlangsung
            e.preventDefault();
            e.returnValue = 'Jika Anda keluar, Ulangan Harian akan otomatis terkumpul dan dicatat sebagai kecurangan. Yakin ingin keluar?';
            handleCheatingDetected();
        }
    });
    
    // Blokir klik kanan
    document.addEventListener('contextmenu', function(e) {
        if (examData.startTime && !examData.endTime) {
            e.preventDefault();
            if (!examData.warningShown) {
                showCheatingWarning();
            }
        }
    });
    
    // Blokir seleksi teks
    document.addEventListener('selectstart', function(e) {
        if (examData.startTime && !examData.endTime) {
            e.preventDefault();
        }
    });
    
    // Blokir drag untuk seleksi
    document.addEventListener('dragstart', function(e) {
        if (examData.startTime && !examData.endTime) {
            e.preventDefault();
        }
    });
    
    // Blokir copy-paste
    document.addEventListener('copy', function(e) {
        if (examData.startTime && !examData.endTime) {
            e.preventDefault();
            if (!examData.warningShown) {
                showCheatingWarning();
            }
        }
    });
    
    document.addEventListener('cut', function(e) {
        if (examData.startTime && !examData.endTime) {
            e.preventDefault();
            if (!examData.warningShown) {
                showCheatingWarning();
            }
        }
    });
    
    document.addEventListener('paste', function(e) {
        if (examData.startTime && !examData.endTime) {
            e.preventDefault();
            if (!examData.warningShown) {
                showCheatingWarning();
            }
        }
    });
    
    // Blokir screenshot (Print Screen) dan developer tools
    document.addEventListener('keydown', function(e) {
        if (examData.startTime && !examData.endTime) {
            // Blokir Print Screen
            if (e.key === 'PrintScreen') {
                e.preventDefault();
                if (!examData.warningShown) {
                    showCheatingWarning();
                }
                return false;
            }
            
            // Blokir developer tools
            if (e.key === 'F12' || 
               (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
               (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
                if (!examData.warningShown) {
                    handleCheatingDetected();
                }
                return false;
            }
            
            // Blokir Ctrl+C, Ctrl+X, Ctrl+V
            if ((e.ctrlKey || e.metaKey) && 
                (e.key === 'c' || e.key === 'x' || e.key === 'v')) {
                e.preventDefault();
                if (!examData.warningShown) {
                    showCheatingWarning();
                }
                return false;
            }
        }
    });
}

// Handle ketika kecurangan terdeteksi
function handleCheatingDetected() {
    if (!examData.cheatingDetected && examData.startTime && !examData.endTime) {
        examData.cheatingAttempts++;
        examData.cheatingDetected = true;
        
        // Tampilkan peringatan
        document.getElementById('cheatingWarning').style.display = 'flex';
        document.getElementById('cheatCount').textContent = examData.cheatingAttempts;
        showModal('warning');
        
        // Jika sudah 3 kali kecurangan, langsung kumpulkan
        if (examData.cheatingAttempts >= 3) {
            setTimeout(() => {
                submitExam();
            }, 3000);
        }
    }
}

// Tampilkan peringatan kecurangan ringan
function showCheatingWarning() {
    examData.cheatingAttempts++;
    if (examData.cheatingAttempts <= 2) {
        // Tampilkan peringatan di header
        document.getElementById('cheatingWarning').style.display = 'flex';
        document.getElementById('cheatCount').textContent = examData.cheatingAttempts;
        
        // Set timeout untuk menghilangkan peringatan
        setTimeout(() => {
            if (examData.cheatingAttempts < 3) {
                document.getElementById('cheatingWarning').style.display = 'none';
            }
        }, 5000);
    } else {
        handleCheatingDetected();
    }
}

// ==============================
// FUNGSI TAMPILAN MODAL
// ==============================

// Tampilkan modal berdasarkan tipe
function showModal(modalType) {
    examData.warningShown = true;
    
    if (modalType === 'warning') {
        document.getElementById('warningModal').classList.add('active');
    } else if (modalType === 'confirm') {
        document.getElementById('confirmModal').classList.add('active');
    }
}

// Sembunyikan modal
function hideModal(modalType) {
    examData.warningShown = false;
    
    if (modalType === 'warning') {
        document.getElementById('warningModal').classList.remove('active');
    } else if (modalType === 'confirm') {
        document.getElementById('confirmModal').classList.remove('active');
    }
}

// ==============================
// FUNGSI PERPINDAHAN HALAMAN
// ==============================

// Tampilkan halaman login
function showLoginPage() {
    document.getElementById('loginPage').classList.add('active');
    document.getElementById('examPage').classList.remove('active');
    document.getElementById('resultPage').classList.remove('active');
    
    // Reset form
    document.getElementById('studentForm').reset();
    
    // Reset data Ulangan
    resetExamData();
    
    // Hapus kelas ulangan berlangsung
    document.body.classList.remove('ulangan-berlangsung');
}

// Tampilkan halaman ulangan
function showExamPage() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('examPage').classList.add('active');
    document.getElementById('resultPage').classList.remove('active');
    
    // Tambah kelas ulangan berlangsung
    document.body.classList.add('ulangan-berlangsung');
    
    // Mulai timer
    startTimer();
    
    // Setup deteksi kecurangan
    setupCheatingDetection();
    
    // Tampilkan soal pertama
    displayQuestion(currentQuestionIndex);
    updateQuestionButtons();
    updateAnsweredCount();
}

// Tampilkan halaman hasil
function showResultPage() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('examPage').classList.remove('active');
    document.getElementById('resultPage').classList.add('active');
    
    // Hapus kelas ulangan berlangsung
    document.body.classList.remove('ulangan-berlangsung');
    
    // Tampilkan data siswa
    document.getElementById('resultNama').textContent = studentData.nama;
    document.getElementById('resultKelas').textContent = studentData.kelas;
    
    // Tampilkan tanggal
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    document.getElementById('resultDate').textContent = now.toLocaleDateString('id-ID', options);
    
    // Hitung skor
    calculateAndDisplayResults();
}

// Reset data ulangan
function resetExamData() {
    examData = {
        startTime: null,
        endTime: null,
        answers: {},
        shuffledQuestions: [],
        cheatingAttempts: 0,
        cheatingDetected: false,
        warningShown: false
    };
    
    currentQuestionIndex = 0;
    timeLeft = totalTime;
    clearInterval(timerInterval);
    
    // Reset tampilan timer
    document.getElementById('timer').textContent = formatTime(timeLeft);
    document.getElementById('remainingTime').textContent = formatTime(timeLeft);
    document.getElementById('progress').style.width = '100%';
    document.getElementById('progress').style.background = 'linear-gradient(to right, #4CAF50, #8BC34A)';
    
    // Reset peringatan kecurangan
    document.getElementById('cheatingWarning').style.display = 'none';
}

// ==============================
// FUNGSI ULANGAN DAN TIMER
// ==============================

// Mulai timer
function startTimer() {
    examData.startTime = new Date();
    
    // Update timer setiap detik
    timerInterval = setInterval(function() {
        timeLeft--;
        
        // Update tampilan timer
        document.getElementById('timer').textContent = formatTime(timeLeft);
        document.getElementById('remainingTime').textContent = formatTime(timeLeft);
        
        // Update progress bar
        const progressPercent = (timeLeft / totalTime) * 100;
        document.getElementById('progress').style.width = `${progressPercent}%`;
        
        // Ubah warna timer jika waktu hampir habis
        if (timeLeft <= 300) { // 5 menit terakhir
            document.getElementById('progress').style.background = 'linear-gradient(to right, #ff9800, #ff5722)';
        }
        if (timeLeft <= 60) { // 1 menit terakhir
            document.getElementById('progress').style.background = 'linear-gradient(to right, #f44336, #d32f2f)';
            document.getElementById('timer').style.color = '#f44336';
            document.getElementById('timer').style.animation = 'pulse 1s infinite';
        }
        
        // Jika waktu habis, kumpulkan otomatis
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}

// Format waktu dari detik ke MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Tampilkan soal
function displayQuestion(index) {
    const question = examData.shuffledQuestions[index];
    
    // Update judul soal
    document.getElementById('currentQuestion').textContent = index + 1;
    
    // Kosongkan container soal
    const container = document.querySelector('.questions-container');
    container.innerHTML = '';
    
    // Buat elemen soal
    const questionElement = document.createElement('div');
    questionElement.className = `question-item ${index === currentQuestionIndex ? 'active' : ''}`;
    questionElement.innerHTML = `
        <div class="question-text">
            <span class="question-number">${index + 1}</span>
            ${question.question}
        </div>
        <div class="options-container">
            ${question.options.map((option, i) => `
                <div class="option ${examData.answers[question.id] === option ? 'selected' : ''}" 
                     data-question-id="${question.id}" 
                     data-option="${option}">
                    <div class="option-letter">${String.fromCharCode(65 + i)}</div>
                    <div class="option-text">${option}</div>
                </div>
            `).join('')}
        </div>
    `;
    
    container.appendChild(questionElement);
    
    // Tambahkan event listener untuk pilihan
    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', function() {
            const questionId = parseInt(this.getAttribute('data-question-id'));
            const selectedOption = this.getAttribute('data-option');
            
            // Simpan jawaban
            examData.answers[questionId] = selectedOption;
            
            // Update tampilan
            document.querySelectorAll(`[data-question-id="${questionId}"]`).forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            
            // Update tombol navigasi dan hitungan
            updateQuestionButtons();
            updateAnsweredCount();
        });
    });
    
    // Update tombol navigasi
    updateNavigationButtons();
}

// Update tombol navigasi soal
function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = currentQuestionIndex === examData.shuffledQuestions.length - 1;
}

// Update tombol nomor soal
function updateQuestionButtons() {
    const container = document.querySelector('.question-buttons');
    container.innerHTML = '';
    
    examData.shuffledQuestions.forEach((question, index) => {
        const button = document.createElement('button');
        button.className = `question-btn ${index === currentQuestionIndex ? 'active' : ''} ${examData.answers[question.id] ? 'answered' : ''}`;
        button.textContent = index + 1;
        button.addEventListener('click', () => {
            currentQuestionIndex = index;
            displayQuestion(currentQuestionIndex);
            updateQuestionButtons();
        });
        container.appendChild(button);
    });
}

// Update hitungan soal terjawab
function updateAnsweredCount() {
    const answeredCount = Object.keys(examData.answers).length;
    document.getElementById('answeredCount').textContent = answeredCount;
}

// Pindah ke soal sebelumnya
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
        updateQuestionButtons();
    }
}

// Pindah ke soal berikutnya
function nextQuestion() {
    if (currentQuestionIndex < examData.shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
        updateQuestionButtons();
    }
}

// ==============================
// FUNGSI PENGUMPULAN DAN HASIL
// ==============================

// Konfirmasi pengumpulan
function confirmSubmit() {
    const answeredCount = Object.keys(examData.answers).length;
    const totalQuestions = examData.shuffledQuestions.length;
    const unansweredCount = totalQuestions - answeredCount;
    
    // Update modal dengan data terkini
    document.getElementById('unansweredCount').textContent = unansweredCount;
    document.getElementById('modalAnswered').textContent = answeredCount;
    document.getElementById('modalUnanswered').textContent = unansweredCount;
    
    if (unansweredCount > 0) {
        document.getElementById('confirmMessage').textContent = `Anda masih memiliki ${unansweredCount} soal yang belum terjawab.`;
    } else {
        document.getElementById('confirmMessage').textContent = "Semua soal telah terjawab.";
    }
    
    // Tampilkan modal konfirmasi
    showModal('confirm');
}

// Kumpulkan Ulangan
function submitExam() {
    clearInterval(timerInterval);
    examData.endTime = new Date();
    
    // Hitung durasi dalam detik
    const durationMs = examData.endTime - examData.startTime;
    const durationSeconds = Math.floor(durationMs / 1000);
    
    // Hitung skor
    let correctCount = 0;
    examData.shuffledQuestions.forEach(question => {
        if (examData.answers[question.id] === question.correct) {
            correctCount++;
        }
    });
    
    const score = Math.round((correctCount / examData.shuffledQuestions.length) * 100);
    
    // Siapkan data untuk dikirim ke Google Sheets
    const submissionData = {
        nama: studentData.nama,
        kelas: studentData.kelas,
        waktuMulai: examData.startTime.toLocaleString("id-ID"),
        waktuSelesai: examData.endTime.toLocaleString("id-ID"),
        durasiDetik: durationSeconds,
        skor: score,
        jawabanBenar: correctCount,
        jawabanSalah: examData.shuffledQuestions.length - correctCount,
        jawaban: examData.answers,
        logKecurangan: examData.cheatingAttempts > 0 ? `${examData.cheatingAttempts} kali` : "-",
        statusKecurangan: examData.cheatingDetected ? "Ya" : "Tidak",
        tanggal: new Date().toISOString().split('T')[0]
    };
    
    // Kirim data ke Google Sheets
    sendDataToGoogleSheets(submissionData);
    
    // Sembunyikan modal jika terbuka
    hideModal('confirm');
    hideModal('warning');
    
    // Tampilkan halaman hasil
    showResultPage();
}

// Kirim data ke Google Sheets via Google Apps Script
async function sendDataToGoogleSheets(data) {
    try {
        // Periksa apakah URL Google Script sudah dikonfigurasi
        if (GOOGLE_SCRIPT_URL.includes('URL_WEB_APP_ANDA_DISINI')) {
            console.warn('URL Google Apps Script belum dikonfigurasi. Data tidak dikirim ke Google Sheets.');
            console.log('Data ulangan yang dihasilkan:', data);
            return;
        }
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        console.log('Data berhasil dikirim ke Google Sheets');
    } catch (error) {
        console.error('Error mengirim data:', error);
    }
}

// Hitung dan tampilkan hasil
function calculateAndDisplayResults() {
    // Hitung jawaban benar dan salah
    let correctCount = 0;
    let wrongQuestions = [];
    
    examData.shuffledQuestions.forEach(question => {
        const userAnswer = examData.answers[question.id];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) {
            correctCount++;
        } else {
            wrongQuestions.push({
                number: examData.shuffledQuestions.indexOf(question) + 1,
                question: question.question
            });
        }
    });
    
    const totalQuestions = examData.shuffledQuestions.length;
    const wrongCount = totalQuestions - correctCount;
    const score = Math.round((correctCount / totalQuestions) * 100);
    
    // Update tampilan hasil
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
    document.getElementById('totalSoalResult').textContent = totalQuestions;
    
    // Hitung dan tampilkan durasi
    const durationMs = examData.endTime - examData.startTime;
    const durationMinutes = Math.floor(durationMs / 60000);
    const durationSeconds = Math.floor((durationMs % 60000) / 1000);
    const durationText = `${durationMinutes} menit ${durationSeconds} detik`;
    document.getElementById('durationResult').textContent = durationText;
    document.getElementById('resultWaktu').textContent = durationText;
    
    // Hitung persentase
    const correctPercent = Math.round((correctCount / totalQuestions) * 100);
    const wrongPercent = 100 - correctPercent;
    
    // Update chart
    document.getElementById('correctBar').style.height = `${correctPercent}%`;
    document.getElementById('wrongBar').style.height = `${wrongPercent}%`;
    document.getElementById('correctPercent').textContent = `${correctPercent}%`;
    document.getElementById('wrongPercent').textContent = `${wrongPercent}%`;
    
    // Tentukan grade
    const grade = getGrade(score);
    document.getElementById('gradeValue').textContent = grade;
    
    // Animasikan lingkaran skor
    animateScoreCircle(score);
    
    // Tampilkan soal yang salah (TANPA JAWABAN BENAR)
    displayWrongAnswers(wrongQuestions);
    
    // Tampilkan pesan motivasi
    displayMotivationMessage(score, correctCount, totalQuestions);
}

// Tentukan grade berdasarkan skor
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'E';
}

// Animasi lingkaran skor
function animateScoreCircle(score) {
    const circle = document.getElementById('scoreCircle');
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;
    
    // Set animasi CSS
    circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
    circle.style.strokeDashoffset = offset;
    
    // Ubah warna berdasarkan skor
    if (score >= 80) {
        circle.style.stroke = '#4CAF50'; // Hijau
    } else if (score >= 60) {
        circle.style.stroke = '#FF9800'; // Oranye
    } else {
        circle.style.stroke = '#f44336'; // Merah
    }
}

// Tampilkan soal yang salah TANPA JAWABAN BENAR
function displayWrongAnswers(wrongQuestions) {
    const container = document.getElementById('wrongAnswersContainer');
    const listContainer = container.querySelector('.wrong-answers-list');
    
    if (wrongQuestions.length === 0) {
        container.innerHTML = `
            <h3><i class="fas fa-check-circle" style="color: #4CAF50;"></i> SELAMAT! SEMUA JAWABAN BENAR</h3>
            <p class="subtitle">Anda telah menjawab semua soal dengan benar. Pertahankan prestasi ini!</p>
            <div class="motivation-message">
                <p>Kerja bagus! Pemahaman Anda tentang materi Pendudukan Jepang di Indonesia sangat baik. Terus pertahankan semangat belajar!</p>
            </div>
        `;
        return;
    }
    
    listContainer.innerHTML = '';
    
    wrongQuestions.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'wrong-answer-item';
        itemElement.innerHTML = `
            <h4><i class="fas fa-exclamation-circle"></i> Soal ${item.number} Perlu Dipelajari Kembali</h4>
            <p>${item.question}</p>
            <div class="correction-note">
                <strong>Evaluasi:</strong>
                <p>Jawaban Anda untuk soal ini belum tepat. Silakan pelajari kembali materi tentang Pendudukan Jepang di Indonesia terkait soal ini.</p>
                <p class="note">📝 <em>Diskusikan dengan guru untuk pemahaman lebih lanjut</em></p>
            </div>
        `;
        listContainer.appendChild(itemElement);
    });
}

// Tampilkan pesan motivasi
function displayMotivationMessage(score, correctCount, totalQuestions) {
    const container = document.getElementById('motivationMessage');
    let message = '';
    let teacher = '';
    
    if (score >= 90) {
        message = "Luar biasa! Pemahaman Anda tentang Pendudukan Jepang di Indonesia sangat mendalam. Pertahankan prestasi gemilang ini dengan terus belajar sejarah bangsa kita.";
        teacher = "Guru Sejarah";
    } else if (score >= 80) {
        message = "Bagus sekali! Anda telah memahami materi dengan baik. Tinjau kembali soal-soal yang belum tepat untuk pemahaman yang lebih komprehensif.";
        teacher = "Guru Sejarah";
    } else if (score >= 70) {
        message = "Sudah baik, namun masih ada ruang untuk perbaikan. Pelajari kembali materi pendudukan Jepang dengan lebih detail untuk hasil yang lebih baik.";
        teacher = "Guru Sejarah";
    } else if (score >= 60) {
        message = "Cukup baik, tetapi perlu peningkatan. Fokuskan belajar pada periode pendudukan Jepang dan dampaknya bagi perjuangan kemerdekaan Indonesia.";
        teacher = "Guru Sejarah";
    } else if (score >= 50) {
        message = "Anda perlu lebih serius dalam belajar sejarah. Pahami konsep dasar pendudukan Jepang dan pentingnya periode ini bagi perjuangan kemerdekaan.";
        teacher = "Guru Sejarah";
    } else {
        message = "Jangan berkecil hati. Sejarah adalah guru terbaik. Pelajari kembali materi dengan tekun, fokus pada tujuan Jepang datang ke Indonesia dan dampaknya bagi bangsa kita.";
        teacher = "Guru Sejarah";
    }
    
    container.innerHTML = `
        <p>"${message}"</p>
        <div style="margin-top: 20px; font-weight: 600; color: var(--primary-color);">
            — ${teacher}
        </div>
    `;
}

// ==============================
// FUNGSI CETAK HASIL
// ==============================

function printResults() {
    // Sembunyikan elemen yang tidak perlu dicetak
    const elementsToHide = document.querySelectorAll('.btn-restart, .btn-print, .result-note, .background-logo');
    elementsToHide.forEach(el => el.style.display = 'none');
    
    // Ganti background untuk cetakan
    document.body.style.background = 'white';
    document.querySelectorAll('.page').forEach(page => {
        page.style.boxShadow = 'none';
        page.style.background = 'white';
    });
    
    // Cetak
    window.print();
    
    // Kembalikan tampilan
    setTimeout(() => {
        elementsToHide.forEach(el => el.style.display = '');
        document.body.style.background = '';
        document.querySelectorAll('.page').forEach(page => {
            page.style.boxShadow = '';
            page.style.background = '';
        });
    }, 100);
}

// ==============================
// EVENT LISTENERS
// ==============================

// Form login siswa
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil data siswa
    studentData.nama = document.getElementById('nama').value.trim();
    studentData.kelas = document.getElementById('kelas').value;
    
    // Validasi
    if (!studentData.nama || !studentData.kelas) {
        alert('Harap isi nama lengkap dan pilih kelas!');
        return;
    }
    
    // Acak soal
    examData.shuffledQuestions = shuffleQuestions();
    
    // Tampilkan data siswa di halaman ulangan
    document.getElementById('displayNama').textContent = studentData.nama;
    document.getElementById('displayKelas').textContent = studentData.kelas;
    document.getElementById('totalQuestions').textContent = examData.shuffledQuestions.length;
    
    // Tampilkan halaman ulangan
    showExamPage();
});

// Tombol navigasi soal
document.getElementById('prevBtn').addEventListener('click', prevQuestion);
document.getElementById('nextBtn').addEventListener('click', nextQuestion);

// Tombol kumpulkan ulangan harian
document.getElementById('submitBtn').addEventListener('click', confirmSubmit);

// Tombol konfirmasi modal
document.getElementById('modalCancelBtn').addEventListener('click', function() {
    hideModal('confirm');
});

document.getElementById('modalSubmitBtn').addEventListener('click', function() {
    submitExam();
});

// Tombol lanjutkan ulangan harian di peringatan kecurangan
document.getElementById('continueBtn').addEventListener('click', function() {
    document.getElementById('cheatingWarning').style.display = 'none';
    hideModal('warning');
});

// Tombol modal peringatan
document.getElementById('modalOkBtn').addEventListener('click', function() {
    hideModal('warning');
});

// Tombol ulangan lagi
document.getElementById('restartBtn').addEventListener('click', showLoginPage);

// Tombol cetak
document.getElementById('printBtn').addEventListener('click', printResults);

// ==============================
// INISIALISASI SAAT HALAMAN DIMUAT
// ==============================

document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan halaman login saat pertama kali dimuat
    showLoginPage();
    
    // Cek apakah URL Google Script sudah dikonfigurasi
    if (GOOGLE_SCRIPT_URL.includes('URL_WEB_APP_ANDA_DISINI')) {
        console.warn('PERINGATAN: URL Google Apps Script belum dikonfigurasi. Data hasil ulangan tidak akan disimpan ke Google Sheets.');
        console.log('Untuk menyimpan data ke Google Sheets:');
        console.log('1. Buat Google Sheets dan Google Apps Script sesuai petunjuk');
        console.log('2. Dapatkan URL Web App dari Google Apps Script');
        console.log('3. Ganti URL_WEB_APP_ANDA_DISINI di baris 9 dengan URL Web App Anda');
    }
    
    // Load logo sekolah
    const logoImg = document.getElementById('schoolLogo');
    logoImg.onerror = function() {
        console.error('Logo sekolah tidak ditemukan. Pastikan file logo-sekolah.png ada di folder yang sama.');
        logoImg.style.display = 'none';
        document.querySelector('.logo-image').innerHTML = '<i class="fas fa-school" style="font-size: 60px; color: #FFD700;"></i>';
    };
});


