const defaultConfig = {
  app_title_arabic: "تعلم العربية بسهولة",
  app_title_indonesian: "Belajar Bahasa Arab dengan Mudah",
  start_button_text: "Mulai Belajar",
  exit_button_text: "Keluar",
  group_text: "Kelompok 9",
  footer_text: "Didesain untuk pembelajaran Bahasa Arab interaktif MA."
};

async function onConfigChange(config) {
  document.getElementById('appTitleArabic').textContent = config.app_title_arabic || defaultConfig.app_title_arabic;
  document.getElementById('appTitleIndonesian').textContent = config.app_title_indonesian || defaultConfig.app_title_indonesian;
  document.getElementById('startButtonText').textContent = config.start_button_text || defaultConfig.start_button_text;
  document.getElementById('exitButtonText').textContent = config.exit_button_text || defaultConfig.exit_button_text;
  document.getElementById('groupText').textContent = config.group_text || defaultConfig.group_text;
  document.getElementById('footerText').textContent = config.footer_text || defaultConfig.footer_text;
}

function mapToCapabilities(config) {
  return {
    recolorables: [],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["app_title_arabic", config.app_title_arabic || defaultConfig.app_title_arabic],
    ["app_title_indonesian", config.app_title_indonesian || defaultConfig.app_title_indonesian],
    ["start_button_text", config.start_button_text || defaultConfig.start_button_text],
    ["exit_button_text", config.exit_button_text || defaultConfig.exit_button_text],
    ["group_text", config.group_text || defaultConfig.group_text],
    ["footer_text", config.footer_text || defaultConfig.footer_text]
  ]);
}

// Navigation functionality
document.getElementById('startButton').addEventListener('click', function () {
  document.getElementById('mainMenu').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'block';
});

document.getElementById('backButton').addEventListener('click', function () {
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
});

document.getElementById('exitButton').addEventListener('click', function () {
  const exitMessage = document.createElement('div');
  exitMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        text-align: center;
        z-index: 1000;
        border: 2px solid #ef4444;
    `;
  exitMessage.innerHTML = `
        <h3 style="color: #ef4444; margin-bottom: 15px;">Terima kasih!</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Sampai jumpa di pembelajaran berikutnya.</p>
        <button onclick="this.parentElement.remove()" style="
            background: #ef4444;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
        ">Tutup</button>
    `;
  document.body.appendChild(exitMessage);
});

// Chapter navigation functions
function showChapter1() {
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('chapter1').style.display = 'block';
}

function showChapter2() {
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('chapter2').style.display = 'block';
}

function showChapter3() {
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('chapter3').style.display = 'block';
}

function showChapter4() {
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('chapter4').style.display = 'block';
}

function showChapter5() {
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('chapter5').style.display = 'block';
}

function showChapter6() {
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('chapter6').style.display = 'block';
}

function showChapter7() {
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('chapter7').style.display = 'block';
}

function backToChapters() {
  document.getElementById('chapter1').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'block';
}

function backToChapters2() {
  document.getElementById('chapter2').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'block';
}

function backToChapters3() {
  document.getElementById('chapter3').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'block';
}

function backToChapters4() {
  document.getElementById('chapter4').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'block';
}

function backToChapters5() {
  document.getElementById('chapter5').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'block';
}

function backToChapters6() {
  document.getElementById('chapter6').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'block';
}

function backToMain() {
  document.getElementById('chapter1').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
}

function backToMain2() {
  document.getElementById('chapter2').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
}

function backToMain3() {
  document.getElementById('chapter3').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
}

function backToMain4() {
  document.getElementById('chapter4').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
}

function backToMain5() {
  document.getElementById('chapter5').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
}

function backToMain6() {
  document.getElementById('chapter6').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
}

function backToChapters7() {
  document.getElementById('chapter7').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'block';
}

function backToMain7() {
  document.getElementById('chapter7').style.display = 'none';
  document.getElementById('chapterMenu').style.display = 'none';
  document.getElementById('mainMenu').style.display = 'block';
}

// Add hover effects to other chapter cards
document.querySelectorAll('.chapter-card:not(.ch1):not(.ch2):not(.ch3):not(.ch4):not(.ch5):not(.ch6):not(.ch7)').forEach(card => {
  card.addEventListener('click', function () {
    const chapterName = this.querySelector('.chapter-name').textContent;
    const message = document.createElement('div');
    message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            text-align: center;
            z-index: 1000;
            border: 2px solid #3b82f6;
        `;
    message.innerHTML = `
            <h3 style="color: #3b82f6; margin-bottom: 15px;">Bab: ${chapterName}</h3>
            <p style="color: #6b7280; margin-bottom: 20px;">Konten bab akan diisi manual di Notepad++</p>
            <button onclick="this.parentElement.remove()" style="
                background: #3b82f6;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
            ">Tutup</button>
        `;
    document.body.appendChild(message);
  });
});

// Initialize Element SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Semua kode JavaScript sebelumnya tetap sama, tambahkan kode audio player berikut:

// Audio Player Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Inisialisasi semua audio player
  initAudioPlayers();
});

function initAudioPlayers() {
  // Temukan semua tombol play/pause
  const playPauseButtons = document.querySelectorAll('.play-pause-btn');
  const stopButtons = document.querySelectorAll('.stop-btn');
  const progressBars = document.querySelectorAll('.progress-bar');
  const audioTimeDisplays = document.querySelectorAll('.audio-time');

  // Inisialisasi setiap audio player
  playPauseButtons.forEach(button => {
    const audioId = button.getAttribute('data-audio');
    const audio = document.getElementById(audioId);
    const playIcon = button.querySelector('.play-icon');
    const pauseIcon = button.querySelector('.pause-icon');
    const progressBar = document.querySelector(`.progress-bar[data-audio="${audioId}"]`);
    const audioTime = document.querySelector(`.audio-time[data-audio="${audioId}"]`);

    // Event listener untuk play/pause
    button.addEventListener('click', function () {
      if (audio.paused) {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
      } else {
        audio.pause();
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
      }
    });

    // Event listener untuk stop
    const stopButton = document.querySelector(`.stop-btn[data-audio="${audioId}"]`);
    if (stopButton) {
      stopButton.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        playIcon.style.display = 'inline';
        pauseIcon.style.display = 'none';
        updateProgress(audio, progressBar, audioTime);
      });
    }

    // Update progress bar saat audio diputar
    audio.addEventListener('timeupdate', function () {
      updateProgress(audio, progressBar, audioTime);
    });

    // Klik pada progress bar untuk seek
    // Ganti bagian ini di script.js agar seek lebih akurat
    const audioProgress = progressBar.parentElement;
    audioProgress.addEventListener('click', function (e) {
      const rect = audioProgress.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      
      // Pastikan audio sudah load metadata
      if(audio.duration) {
          audio.currentTime = percent * audio.duration;
      }
    });

    // Reset UI saat audio selesai
    audio.addEventListener('ended', function () {
      playIcon.style.display = 'inline';
      pauseIcon.style.display = 'none';
      audio.currentTime = 0;
      updateProgress(audio, progressBar, audioTime);
    });

    // Format waktu
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Update progress bar dan waktu
    function updateProgress(audio, progressBar, audioTime) {
      const percent = (audio.currentTime / audio.duration) * 100 || 0;
      progressBar.style.width = `${percent}%`;

      const currentTime = formatTime(audio.currentTime);
      const duration = formatTime(audio.duration || 0);
      audioTime.textContent = `${currentTime} / ${duration}`;
    }

    // Inisialisasi progress
    updateProgress(audio, progressBar, audioTime);
  });
}

// Semua fungsi navigasi chapter tetap sama
// ...