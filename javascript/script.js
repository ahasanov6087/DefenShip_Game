// script.js — Main game logic



(function() {

const entranceContent = document.querySelector('.entrance-content');
    const bootSequence    = document.getElementById('bootSequence');
    const typewriterTarget = document.getElementById('typewriterTarget');
    const progressFill    = document.querySelector('.progress-fill');
    const startBtn        = document.getElementById('startSystemBtn');

    const bootLines = [
        "> SİSTEM BAŞLATILIYOR BLUE_CORE...",
        "> RAM YOXLANIŞI: 64GB OK",
        "> CYBER_DATABASE.DB YÜKLƏNİR...",
        "> ŞƏBƏKƏ PROTOKOLLARı TƏMIN EDİLİR...",
        "> SİSTEM HAZIR."
    ];

    /* ── AUDIO SYSTEM ────────────────────────────────────────── */
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    function playTypeSound() {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.type = 'square';
        osc.frequency.setValueAtTime(400 + Math.random() * 50, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        osc.start(); osc.stop(audioCtx.currentTime + 0.05);
    }

    function playBootBeep() {
        const t = audioCtx.currentTime;
        [880, 880].forEach((f, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain); gain.connect(audioCtx.destination);
            osc.frequency.setValueAtTime(f, t + (i * 0.15));
            gain.gain.setValueAtTime(0, t + (i * 0.15));
            gain.gain.linearRampToValueAtTime(0.05, t + (i * 0.15) + 0.01);
            gain.gain.exponentialRampToValueAtTime(0.001, t + (i * 0.15) + 0.1);
            osc.start(t + (i * 0.15)); osc.stop(t + (i * 0.15) + 0.1);
        });
    }

    async function typeWriter(text, element) {
        const line = document.createElement('p');
        element.appendChild(line);
        for (let char of text) {
            line.textContent += char;
            playTypeSound();
            await new Promise(resolve => setTimeout(resolve, 30));
        }
    }

    /* ── STARTUP TRIGGER ─────────────────────────────────────── */
    startBtn.addEventListener('click', async () => {
        if (audioCtx.state === 'suspended') await audioCtx.resume();
        playBootBeep();
        entranceContent.style.opacity = '0';
        
        setTimeout(async () => {
            entranceContent.classList.add('hidden');
            bootSequence.classList.remove('hidden');

            for (let lineText of bootLines) {
                await typeWriter(lineText, typewriterTarget);
                await new Promise(resolve => setTimeout(resolve, 200));
            }

            progressFill.style.transition = 'width 1s ease-in-out';
            progressFill.style.width = '100%';

            setTimeout(() => {
                const overlay = document.getElementById('entranceOverlay');
                overlay.style.transition = 'all 0.8s ease';
                overlay.style.backgroundColor = 'rgba(180, 230, 255, 1)';
                overlay.style.opacity = '0';
                overlay.style.transform = 'scale(1.1)';

                setTimeout(() => {
                    overlay.remove();
                    // THE ONLY PLACE THE TIMER STARTS
                    startSharedTimer();
                }, 800);
            }, 1200);
        }, 400);
    });

    const desktop             = document.getElementById('desktop');

    const folderIcons         = document.querySelectorAll('.folder-icon');

    const scoreDisplay        = document.getElementById('scoreDisplay');

    const gameOverScreen      = document.getElementById('gameOverScreen');

    const gameOverReason      = document.getElementById('gameOverReason');

    const errorSound          = document.getElementById('errorSound');

    const notificationSound   = document.getElementById('notificationSound');

    const notificationFolder1 = document.getElementById('notification-folder1');

    const notificationFolder2 = document.getElementById('notification-folder2');

    const notificationFolder3 = document.getElementById('notification-folder3');



    let maxZ          = 200;

    let score         = 0;

    let activeFolder  = null;

    let questionTimer = null;



    if (notificationFolder1) notificationFolder1.style.display = 'none';

    if (notificationFolder2) notificationFolder2.style.display = 'none';

    if (notificationFolder3) notificationFolder3.style.display = 'none';



    /* ── DRAGGABLE ──────────────────────────────────────────── */

    function bringToFront(win) { win.style.zIndex = ++maxZ; }



    function makeDraggable(win, handle) {

        let ox, oy, dragging = false;



        handle.addEventListener('mousedown', e => {

            if (e.button !== 0) return;

            e.preventDefault();

            const r = win.getBoundingClientRect();

            ox = e.clientX - r.left;

            oy = e.clientY - r.top;

            dragging = true;

            handle.style.cursor = 'grabbing';

            win.classList.add('dragging');

            document.addEventListener('mousemove', onMove);

            document.addEventListener('mouseup', onUp);

        });



        function onMove(e) {

            if (!dragging) return;

            e.preventDefault();

            const dr = desktop.getBoundingClientRect();

            let l = Math.min(Math.max(e.clientX - ox - dr.left, 0), dr.width  - win.offsetWidth);

            let t = Math.min(Math.max(e.clientY - oy - dr.top,  0), dr.height - win.offsetHeight);

            win.style.left = l + 'px';

            win.style.top  = t + 'px';

        }



        function onUp() {

            if (!dragging) return;

            dragging = false;

            handle.style.cursor = 'grab';

            win.classList.remove('dragging');

            document.removeEventListener('mousemove', onMove);

            document.removeEventListener('mouseup', onUp);

        }

    }



    /* ── SCORE SOUND (Web Audio — no extra file) ────────────── */

    function playScoreSound() {

        try {

            const t = audioCtx.currentTime;

            [880, 1320].forEach((freq, i) => {

                const osc  = audioCtx.createOscillator();

                const gain = audioCtx.createGain();

                osc.connect(gain);

                gain.connect(audioCtx.destination);

                osc.type = 'sine';

                osc.frequency.setValueAtTime(freq, t + i * 0.07);

                gain.gain.setValueAtTime(0, t + i * 0.07);

                gain.gain.linearRampToValueAtTime(0.18, t + i * 0.07 + 0.01);

                gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.07 + 0.18);

                osc.start(t + i * 0.07);

                osc.stop(t + i * 0.07 + 0.2);

            });

        } catch(e) {}

    }



    /* ── INCREASE SCORE ─────────────────────────────────────── */

    function increaseScore() {

        score++;

        scoreDisplay.textContent = score;

        scoreDisplay.classList.remove('pop');

        void scoreDisplay.offsetWidth;

        scoreDisplay.classList.add('pop');

        setTimeout(() => scoreDisplay.classList.remove('pop'), 150);

        playScoreSound();



        const plus = document.createElement('div');

        plus.className = 'plus-one';

        plus.textContent = '+1';

        plus.style.left = (window.innerWidth - 110) + 'px';

        plus.style.top  = '72px';

        document.body.appendChild(plus);

        setTimeout(() => plus.remove(), 900);

    }



    /* ── ERROR WINDOWS ──────────────────────────────────────── */

    const errorMessages = [

        '⚠️ KERNEL_DATA_INPAGE_ERROR',

        '⚠️ FATAL EXCEPTION: 0x000000F4',

        '⚠️ IRQL_NOT_LESS_OR_EQUAL',

        '⚠️ MEMORY CORRUPTION DETECTED',

        '⚠️ SYSTEM THREAD NOT HANDLED',

        '⚠️ PAGE FAULT IN NONPAGED AREA',

        '⚠️ REGISTRY FILE FAILURE',

        '⚠️ CRITICAL PROCESS DIED',

        '⚠️ DPC WATCHDOG VIOLATION',

        '⚠️ UNEXPECTED KERNEL MODE TRAP',

        '⚠️ BAD POOL HEADER',

        '⚠️ ATTEMPTED WRITE TO READONLY MEMORY',

        '⚠️ NTFS FILE SYSTEM FAILURE',

        '⚠️ SYSTEM SERVICE EXCEPTION',

        '⚠️ SESSION5 INITIALIZATION FAILED',

    ];



    function randomErrorMsg() {

        return errorMessages[Math.floor(Math.random() * errorMessages.length)];

    }



    function createErrorWindow(x, y, msg) {

        const win = document.createElement('div');

        win.className = 'error-window';

        win.style.left = x + 'px';

        win.style.top  = y + 'px';

        win.innerHTML = `

            <div class="error-titlebar">

                <span>${msg || '⚠️ Xəta'}</span>

                <span>✕</span>

            </div>

            <div class="error-content">

                ❌ Kritik xəta

                <div class="error-buttons"><div class="error-ok">OKAY</div></div>

            </div>`;

        document.body.appendChild(win);

        return win;

    }



    /* ── AUDIO HELPERS ──────────────────────────────────────── */

    function playErrorSound() {

        if (errorSound) { errorSound.currentTime = 0; errorSound.play().catch(() => {}); }

    }



    function playNotificationSound() {

        if (notificationSound) { notificationSound.currentTime = 0; notificationSound.play().catch(() => {}); }

    }



    /* ── GAME OVER ──────────────────────────────────────────── */

    function showGameOver(explanation, spawnedErrors) {

        spawnedErrors.forEach(e => e.remove());

        gameOverReason.textContent = explanation;

        gameOverScreen.classList.remove('hidden');

        score = 0;

        scoreDisplay.textContent = '0';



        document.addEventListener('click', function reset() {

            gameOverScreen.classList.add('hidden');

            document.removeEventListener('click', reset);

            startSharedTimer();

        }, { once: true });

    }



    function triggerGameOver(explanation) {

        playErrorSound();

        const spawnedErrors = [];

        let done = false;



        // Show game over when audio finishes

        const onAudioEnd = () => {

            if (done) return;

            done = true;

            showGameOver(explanation, spawnedErrors);

        };



        if (errorSound) {

            errorSound.addEventListener('ended', onAudioEnd, { once: true });

            // Fallback if 'ended' never fires

            setTimeout(() => {

                if (!done) { errorSound.removeEventListener('ended', onAudioEnd); onAudioEnd(); }

            }, 10000);

        } else {

            setTimeout(onAudioEnd, 4000);

        }



        // Spam error windows: 200ms → 50ms over ~4s

        const t0 = performance.now();

        function spawnNext() {

            if (done) return;

            spawnedErrors.push(createErrorWindow(

                Math.random() * (window.innerWidth  - 260),

                Math.random() * (window.innerHeight - 160),

                randomErrorMsg()

            ));

            const p = Math.min((performance.now() - t0) / 4000, 1);

            setTimeout(spawnNext, 200 + (50 - 200) * p);

        }

        spawnNext();

    }



    /* ── EARLY MESSAGE ──────────────────────────────────────── */

    function showEarlyMessage() {

        const msg = document.createElement('div');

        msg.className = 'early-message';

        msg.textContent = 'Hələ challenge mövcud deyil!';

        document.body.appendChild(msg);

        setTimeout(() => msg.remove(), 2000);

    }



    /* ── SHARED TIMER WITH WEIGHTED PROBABILITY ───────────── */

    function getRandomFolder() {

        // Weighted distribution: 50% Folder 1, 25% Folder 2, 25% Folder 3

        const roll = Math.random();

        if (roll < 0.5) return '1';       // 50%

        if (roll < 0.75) return '2';      // 25%

        return '3';                        // 25%

    }

    function startSharedTimer() {

        if (questionTimer) clearTimeout(questionTimer);

        if (notificationFolder1) notificationFolder1.style.display = 'none';

        if (notificationFolder2) notificationFolder2.style.display = 'none';

        if (notificationFolder3) notificationFolder3.style.display = 'none';

        activeFolder = null;



        questionTimer = setTimeout(() => {

            // Use weighted probability instead of equal distribution

            activeFolder = getRandomFolder();

            if (activeFolder === '1' && notificationFolder1) notificationFolder1.style.display = 'flex';

            else if (activeFolder === '2' && notificationFolder2) notificationFolder2.style.display = 'flex';

            else if (activeFolder === '3' && notificationFolder3) notificationFolder3.style.display = 'flex';

            playNotificationSound();

        }, Math.floor(Math.random() * 5000) + 4000);

    }



    /* ── GET RANDOM QUESTION FROM DATABASE ──────────────────── */

    function getRandomQuestion() {

        // Get all questions from database (convert object to array)

        const db = window.quizDatabase;
        
        if (!db || Object.keys(db).length === 0) {

            return {

                question: 'Xəta', 

                correctAnswer: 'no', 

                explanationWrong: 'Bilinməyən xəta'

            };

        }

        // Get all question keys and pick random one
        const questionKeys = Object.keys(db);
        const randomKey = questionKeys[Math.floor(Math.random() * questionKeys.length)];
        
        // Return the random question from database
        return db[randomKey];

    }



    /* ── QUESTION WINDOW ────────────────────────────────────── */

    function createQuestionWindow() {

        const q = getRandomQuestion();



        const win = document.createElement('div');

        win.className = 'window';

        win.style.left   = 200 + Math.random() * 200 + 'px';

        win.style.top    = 150 + Math.random() * 150 + 'px';

        win.style.zIndex = ++maxZ;

        win.innerHTML = `

            <div class="window-titlebar">

                <span>Keçidlər</span>

                <div class="window-controls"><button class="close-btn">✕</button></div>

            </div>

            <div class="window-content">

                <div class="quiz-question">${q.question}</div>

                <div class="quiz-option" data-answer="yes">BƏLİ</div>

                <div class="quiz-option" data-answer="no">XEYR</div>

            </div>`;



        desktop.appendChild(win);

        win.querySelector('.close-btn').addEventListener('click', () => win.remove());



        win.querySelectorAll('.quiz-option').forEach(opt => {

            opt.addEventListener('click', () => {

                const correct = opt.dataset.answer === q.correctAnswer;

                win.remove();

                if (correct) {

                    increaseScore();

                    if (notificationFolder1) notificationFolder1.style.display = 'none';

                    activeFolder = null;

                    startSharedTimer();

                } else {

                    if (notificationFolder1) notificationFolder1.style.display = 'none';

                    triggerGameOver('❌ ' + q.explanationWrong);

                }

            });

        });



        makeDraggable(win, win.querySelector('.window-titlebar'));

        win.addEventListener('mousedown', () => bringToFront(win));

    }



    /* ── PASSWORD WINDOW ────────────────────────────────────── */

    function createPasswordWindow() {

        const numbers  = Math.floor(Math.random() * 4);

        const capitals = Math.floor(Math.random() * 3);

        const special  = Math.floor(Math.random() * 4);



        const win = document.createElement('div');

        win.className    = 'window';

        win.style.width  = '420px';

        win.style.left   = 250 + Math.random() * 200 + 'px';

        win.style.top    = 180 + Math.random() * 150 + 'px';

        win.style.zIndex = ++maxZ;

        win.innerHTML = `

            <div class="window-titlebar">

                <span>Şifrə Çətliyi</span>

                <div class="window-controls"><button class="close-btn">✕</button></div>

            </div>

            <div class="window-content">

                <div class="password-requirements">

                    <p>Minimum uzunluq: <strong>8</strong> &nbsp;|&nbsp;

                       Rəqəmlər: <strong>${numbers}</strong> &nbsp;|&nbsp;

                       Böyük hərflər: <strong>${capitals}</strong> &nbsp;|&nbsp;

                       Xüsusi simvollar: <strong>${special}</strong></p>

                    <p style="margin-top:6px;color:#555;font-size:0.9rem;">Boşluqlara icazə verilmir.</p>

                </div>

                <div style="margin:18px 0 12px;position:relative;">

                    <input type="password" id="passwordField" placeholder="Şifrəni daxil edin"

                           style="width:100%;padding:10px;font-size:1rem;border:1px solid #aaa;border-radius:4px;box-sizing:border-box;">

                    <button id="toggleButton"

                            style="position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:0.85rem;color:#555;">Göstər</button>

                </div>

                <button id="submitButton"

                        style="width:100%;padding:11px;font-size:1rem;cursor:pointer;border:1px solid #aaa;border-radius:4px;background:#e8e4d0;">Doğrula</button>

            </div>`;



        desktop.appendChild(win);



        const pf = win.querySelector('#passwordField');

        const tb = win.querySelector('#toggleButton');

        tb.addEventListener('click', () => {

            const h = pf.type === 'password';

            pf.type = h ? 'text' : 'password';

            tb.textContent = h ? 'Gizlət' : 'Göstər';

        });



        win.querySelector('#submitButton').addEventListener('click', () => {

            const p = pf.value, errs = [];

            if (p.includes(' ')) errs.push('Boşluqlara icazə verilmir');

            if (p.length < 8)   errs.push(`8+ simvol lazımdır (${p.length} aldınız)`);

            const nc = (p.match(/[0-9]/g)||[]).length;

            if (nc < numbers)   errs.push(`${numbers} rəqəm lazımdır (${nc} aldınız)`);

            const cc = (p.match(/[A-Z]/g)||[]).length;

            if (cc < capitals)  errs.push(`${capitals} böyük hərflər lazımdır (${cc} aldınız)`);

            const sc = (p.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g)||[]).length;

            if (sc < special)   errs.push(`${special} xüsusi simvol lazımdır (${sc} aldınız)`);



            win.remove();

            if (errs.length === 0) {

                increaseScore();

                if (notificationFolder2) notificationFolder2.style.display = 'none';

                activeFolder = null;

                startSharedTimer();

            } else {

                if (notificationFolder2) notificationFolder2.style.display = 'none';

                triggerGameOver('❌ Səhv şifrə: ' + errs.join('. '));

            }

        });



        win.querySelector('.close-btn').addEventListener('click', () => win.remove());

        makeDraggable(win, win.querySelector('.window-titlebar'));

        win.addEventListener('mousedown', () => bringToFront(win));

    }



    /* ════════════════════════════════════════════════════════

       INSTRUCTIONS FOLDER — CALL CHALLENGE

    ════════════════════════════════════════════════════════ */

    const COLORS        = ['red', 'blue', 'green', 'yellow'];

    const COLOR_NAMES   = { red:'Qırmızı', blue:'Mavi', green:'Yaşıl', yellow:'Sarı' };

    const COLOR_HEX     = { red:'#f87171', blue:'#60a5fa', green:'#4ade80', yellow:'#fbbf24' };

    const AZ_PREFIXES   = ['50','51','55','70','77','99'];

    const FOREIGN_CODES = ['+1','+44','+49','+33','+7','+86','+81','+34','+39','+55'];



    function randomAzNumber() {

        const pre  = AZ_PREFIXES[Math.floor(Math.random() * AZ_PREFIXES.length)];

        const body = String(Math.floor(Math.random() * 9000000) + 1000000);

        return `+994 ${pre} ${body.slice(0,3)} ${body.slice(3)}`;

    }



    function randomForeignNumber() {

        const code = FOREIGN_CODES[Math.floor(Math.random() * FOREIGN_CODES.length)];

        const n = String(Math.floor(Math.random() * 9000000000) + 1000000000).slice(0,10);

        return `${code} ${n.slice(0,3)} ${n.slice(3,6)} ${n.slice(6)}`;

    }



    // Shared call challenge state

    let cs = {

        active: false, target: null, timerID: null,

        callWin: null, panelWin: null, secs: 10

    };



    function cleanupCall() {

        clearInterval(cs.timerID);

        cs.active = false; cs.target = null; cs.timerID = null; cs.secs = 10;

        if (cs.callWin  && cs.callWin.parentNode)  cs.callWin.remove();

        if (cs.panelWin && cs.panelWin.parentNode) cs.panelWin.remove();

        cs.callWin = null; cs.panelWin = null;

    }



    function startCallChallenge(callWin, panelWin) {

        const target = COLORS[Math.floor(Math.random() * COLORS.length)];

        cs.active = true; cs.target = target;

        cs.callWin = callWin; cs.panelWin = panelWin; cs.secs = 10;



        // Unlock the color buttons

        panelWin.querySelectorAll('.color-btn').forEach(b => b.classList.remove('locked'));



        // Replace call screen with instruction + countdown ring

        const screen = callWin.querySelector('.call-screen');

        const C = 2 * Math.PI * 26; // circumference for r=26

        screen.innerHTML = `

            <div class="call-avatar">📞</div>

            <div class="call-instruction">

                Basın

                <span style="font-weight:900;color:${COLOR_HEX[target]};text-shadow:0 0 8px ${COLOR_HEX[target]}">

                    ${COLOR_NAMES[target]}

                </span>

                düyməsini!

            </div>

            <div class="call-timer-wrap">

                <svg width="60" height="60" viewBox="0 0 60 60">

                    <circle class="call-timer-bg"  cx="30" cy="30" r="26"/>

                    <circle class="call-timer-arc" id="callArc" cx="30" cy="30" r="26"

                            stroke-dasharray="${C}" stroke-dashoffset="0"/>

                </svg>

                <div class="call-timer-text" id="callTimerText">10</div>

            </div>`;



        const arc = callWin.querySelector('#callArc');

        const txt = callWin.querySelector('#callTimerText');



        cs.timerID = setInterval(() => {

            cs.secs--;

            if (txt) txt.textContent = cs.secs;

            if (arc) {

                arc.style.strokeDashoffset = C * (1 - cs.secs / 10);

                if (cs.secs <= 3) arc.style.stroke = '#ef4444';

            }

            if (cs.secs <= 0) {

                clearInterval(cs.timerID);

                cleanupCall();

                triggerGameOver('❌ Vaxt bitdi! Çox yavaşdınız.');

            }

        }, 1000);

    }



    function handleColorButton(color) {

        if (!cs.active) return;

        const correct = color === cs.target;

        const tName   = COLOR_NAMES[cs.target];

        const pName   = COLOR_NAMES[color];

        cleanupCall();

        if (correct) {

            increaseScore();

            startSharedTimer();

        } else {

            triggerGameOver(`❌ Səhv düymə! Siz ${pName} düyməsini basdınız, amma onlar ${tName} dedilər.`);

        }

    }



    function createInstructionsWindows() {

        const isSafe = Math.random() < 0.5;  // 50/50 AZ vs foreign

        const number = isSafe ? randomAzNumber() : randomForeignNumber();



        /* ── Call Window ── */

        const callWin = document.createElement('div');

        callWin.className    = 'window call-window';

        callWin.style.left   = '280px';

        callWin.style.top    = '120px';

        callWin.style.zIndex = ++maxZ;

        callWin.innerHTML = `

            <div class="window-titlebar">

                <span>Gələn Zəng</span>

                <div class="window-controls"><button class="close-btn">✕</button></div>

            </div>

            <div class="call-screen ${isSafe ? 'safe' : 'danger'}">

                <div class="call-avatar">${'📞'}</div>

                <div class="call-number">${number}</div>

                <div class="call-status">${isSafe ? 'Azərbaycan nömrəsi' : 'Bilinməyən xarici nömrə'}</div>

                <div class="call-buttons">

                    <button class="call-btn accept"  title="Qəbul et">✔</button>

                    <button class="call-btn decline" title="Rədd et">✖</button>

                </div>

            </div>`;



        /* ── Button Panel ── */

        const panelWin = document.createElement('div');

        panelWin.className    = 'window btn-panel-window';

        panelWin.style.left   = '640px';

        panelWin.style.top    = '120px';

        panelWin.style.zIndex = ++maxZ;

        panelWin.innerHTML = `

            <div class="window-titlebar">

                <span>Kontrol Paneli</span>

                <div class="window-controls"><button class="close-btn">✕</button></div>

            </div>

            <div class="btn-panel-content">

                <button class="color-btn red    locked" data-color="red">Qırmızı</button>

                <button class="color-btn blue   locked" data-color="blue">Mavi</button>

                <button class="color-btn green  locked" data-color="green">Yaşıl</button>

                <button class="color-btn yellow locked" data-color="yellow">Sarı</button>

            </div>`;



        desktop.appendChild(callWin);

        desktop.appendChild(panelWin);



        // Close buttons

        callWin.querySelector('.close-btn').addEventListener('click', () => {

            cleanupCall(); callWin.remove(); panelWin.remove();

        });

        panelWin.querySelector('.close-btn').addEventListener('click', () => {

            cleanupCall(); callWin.remove(); panelWin.remove();

        });



        // Accept

        callWin.querySelector('.call-btn.accept').addEventListener('click', () => {

            if (isSafe) {

                callWin.querySelector('.call-buttons').remove();

                startCallChallenge(callWin, panelWin);

            } else {

                if (notificationFolder3) notificationFolder3.style.display = 'none';

                cleanupCall(); callWin.remove(); panelWin.remove();

                triggerGameOver('❌ Siz bilinməyən xarici nömrədən zəng qəbul etdiniz! Virus quraşdırıldı.');

            }

        });



        // Decline

        callWin.querySelector('.call-btn.decline').addEventListener('click', () => {

            if (!isSafe) {

                if (notificationFolder3) notificationFolder3.style.display = 'none';

                cleanupCall(); callWin.remove(); panelWin.remove();

                increaseScore(); activeFolder = null; startSharedTimer();

            } else {

                if (notificationFolder3) notificationFolder3.style.display = 'none';

                cleanupCall(); callWin.remove(); panelWin.remove();

                triggerGameOver('❌ Siz təhlükəsiz Azərbaycan zəngini rədd etdiniz! Missiya uğursuz oldu.');

            }

        });



        // Color buttons

        panelWin.querySelectorAll('.color-btn').forEach(btn => {

            btn.addEventListener('click', () => {

                if (!btn.classList.contains('locked')) handleColorButton(btn.dataset.color);

            });

        });



        makeDraggable(callWin,  callWin.querySelector('.window-titlebar'));

        makeDraggable(panelWin, panelWin.querySelector('.window-titlebar'));

        callWin.addEventListener('mousedown',  () => bringToFront(callWin));

        panelWin.addEventListener('mousedown', () => bringToFront(panelWin));

    }



    /* ── EMPTY WINDOW ───────────────────────────────────────── */

    function createEmptyWindow(folderId, msg) {

        const names = { '1':'Keçidlər', '2':'Şifrə', '3':'Təlimatlar' };

        const win = document.createElement('div');

        win.className    = 'window';

        win.style.left   = 200 + Math.random() * 200 + 'px';

        win.style.top    = 150 + Math.random() * 150 + 'px';

        win.style.zIndex = ++maxZ;

        win.innerHTML = `

            <div class="window-titlebar">

                <span>${names[folderId] || 'Qovluq'}</span>

                <div class="window-controls"><button class="close-btn">✕</button></div>

            </div>

            <div class="window-content"><i>${msg}</i></div>`;

        desktop.appendChild(win);

        win.querySelector('.close-btn').addEventListener('click', () => win.remove());

        makeDraggable(win, win.querySelector('.window-titlebar'));

        win.addEventListener('mousedown', () => bringToFront(win));

    }



    /* ── FOLDER DOUBLE-CLICK ────────────────────────────────── */

    folderIcons.forEach(icon => {

        icon.addEventListener('dblclick', e => {

            if (e.target.classList.contains('folder-name')) return;

            const id = icon.dataset.folder;



            if (id === '1') {

                if (activeFolder === '1') createQuestionWindow();

                else { createEmptyWindow(id, 'Hələ burada challenge yoxdur. Bildirişi gözləyin.'); showEarlyMessage(); }



            } else if (id === '2') {

                if (activeFolder === '2') createPasswordWindow();

                else { createEmptyWindow(id, 'Hələ burada challenge yoxdur. Bildirişi gözləyin.'); showEarlyMessage(); }



            } else if (id === '3') {

                if (activeFolder === '3') createInstructionsWindows();

                else { createEmptyWindow(id, 'Hələ zəng gəlməyib. Bildirişi gözləyin.'); showEarlyMessage(); }

            }

        });

    });



    document.addEventListener('dragstart', e => e.preventDefault());

})();