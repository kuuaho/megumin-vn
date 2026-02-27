/* ============================================
   Game Engine — Visual Novel Core
   ============================================ */
(() => {
    'use strict';

    // === State ===
    const state = {
        chapter: 0,
        sceneIndex: 0,
        affection: 0,
        unlockedChapters: [0],
        isTyping: false,
        autoMode: false,
        skipMode: false,
        currentText: '',
        typingTimer: null,
        autoTimer: null,
        saveMode: null // 'save' or 'load'
    };

    // === DOM References ===
    const $ = id => document.getElementById(id);
    const screens = {
        title: $('title-screen'),
        chapter: $('chapter-screen'),
        save: $('save-screen'),
        game: $('game-screen'),
        ending: $('ending-screen')
    };

    const dom = {
        bgLayer: $('bg-layer'),
        bgNext: $('bg-layer-next'),
        effectLayer: $('effect-layer'),
        uiLayer: $('ui-layer'), // Added uiLayer
        charSprite: $('character-sprite'),
        chapterOverlay: $('chapter-title-overlay'),
        chapterNumber: $('chapter-number'),
        chapterName: $('chapter-name'),
        chapterIndicator: $('chapter-indicator'),
        speakerName: $('speaker-name'),
        dialogueText: $('dialogue-text'),
        dialogueContainer: $('dialogue-container'),
        clickIndicator: $('click-indicator'),
        choiceContainer: $('choice-container'),
        affectionFill: $('affection-fill'),
        clickArea: $('click-area'),
        chapterGrid: $('chapter-grid'),
        saveSlots: $('save-slots'),
        saveScreenTitle: $('save-screen-title'),
        endingTitle: $('ending-title'),
        endingText: $('ending-text'),
        endingStats: $('ending-stats')
    };

    const TYPING_SPEED = 35;
    const AUTO_DELAY = 2500;
    const MAX_AFFECTION = 100;

    // === Screen Management ===
    function showScreen(name) {
        Object.values(screens).forEach(s => s.classList.remove('active'));
        screens[name].classList.add('active');
    }

    // === Character Rendering (Image-based) ===
    // === Character Rendering (Image-based) ===
    const EXPRESSION_MAP = {
        normal: 'images/characters/main1.png',
        happy: 'images/characters/main2.png.png',
        serious: 'images/characters/main3.png.png',
        blush: 'images/characters/main4.png.png',
        proud: 'images/characters/main2.png.png' // Utilizing happy for proud as fallback
    };

    function setCharacter(expression) {
        if (!expression) {
            dom.charSprite.classList.remove('visible');
            setTimeout(() => {
                dom.charSprite.style.backgroundImage = '';
                dom.charSprite.innerHTML = '';
            }, 500);
            return;
        }

        // If expression is a direct path (starts with images/characters/) use it, otherwise use map
        let imagePath = EXPRESSION_MAP[expression];
        if (expression.startsWith('images/characters/')) {
            imagePath = expression;
        }

        if (imagePath) {
            // Use img tag for better control
            dom.charSprite.innerHTML = `<img src="${imagePath}" class="char-img" alt="${expression}">`;
            requestAnimationFrame(() => {
                dom.charSprite.classList.add('visible');
            });
        }
    }

    // === Event CG ===
    function showEventCG(src, callback) {
        // 1. Hide UI and Character
        dom.uiLayer.style.opacity = '0';
        dom.charSprite.classList.remove('visible');

        // 2. Prepare Event Layer
        const eventLayer = document.getElementById('event-layer');
        eventLayer.innerHTML = `
            <div class="event-cg-container">
                <img src="${src}" class="event-cg-image" alt="Event CG">
                <div class="flash-overlay"></div>
            </div>
        `;
        eventLayer.classList.add('active');
        eventLayer.style.cursor = 'default'; // Not clickable yet

        // 3. Wait 5 seconds, then enable click to proceed
        setTimeout(() => {
            eventLayer.style.cursor = 'pointer'; // Now clickable

            const clickHandler = () => {
                eventLayer.removeEventListener('click', clickHandler);
                eventLayer.style.cursor = '';

                // Hide CG
                hideEventCG();

                // Restore UI
                dom.uiLayer.style.opacity = '1';

                // Callback to start text
                if (callback) callback();
            };

            eventLayer.addEventListener('click', clickHandler);
        }, 5000);
    }

    function hideEventCG() {
        const eventLayer = document.getElementById('event-layer');
        if (eventLayer.classList.contains('active')) {
            eventLayer.classList.remove('active');
            setTimeout(() => {
                eventLayer.innerHTML = '';
            }, 1000);
        }
    }

    // === Background ===
    let currentBg = '';
    function setBackground(bgClass) {
        if (bgClass === currentBg) return;
        dom.bgNext.className = `bg-layer ${bgClass}`;
        dom.bgNext.style.opacity = '1';
        setTimeout(() => {
            dom.bgLayer.className = `bg-layer ${bgClass}`;
            dom.bgNext.style.opacity = '0';
            currentBg = bgClass;
        }, 600);
    }

    // === Effects ===
    function playEffect(effect) {
        if (!effect) return;
        dom.effectLayer.className = 'effect-layer';
        void dom.effectLayer.offsetWidth; // force reflow

        if (effect === 'explosion') {
            dom.effectLayer.classList.add('effect-explosion');
            document.getElementById('game-screen').classList.add('effect-shake');
            setTimeout(() => {
                document.getElementById('game-screen').classList.remove('effect-shake');
            }, 700);
        } else if (effect === 'shake') {
            document.getElementById('game-screen').classList.add('effect-shake');
            setTimeout(() => {
                document.getElementById('game-screen').classList.remove('effect-shake');
            }, 700);
        } else if (effect === 'hearts') {
            dom.effectLayer.classList.add('effect-hearts');
            for (let i = 0; i < 12; i++) {
                const heart = document.createElement('span');
                heart.className = 'heart-particle';
                heart.textContent = '♥';
                heart.style.left = `${10 + Math.random() * 80}%`;
                heart.style.top = `${30 + Math.random() * 50}%`;
                heart.style.animationDelay = `${Math.random() * 1.5}s`;
                heart.style.fontSize = `${1 + Math.random() * 1.5}rem`;
                heart.style.color = `hsl(${340 + Math.random() * 20}, 80%, ${50 + Math.random() * 20}%)`;
                dom.effectLayer.appendChild(heart);
                setTimeout(() => heart.remove(), 3500);
            }
        }
        setTimeout(() => {
            dom.effectLayer.className = 'effect-layer';
        }, 2000);
    }

    // === Affection ===
    function addAffection(amount) {
        state.affection = Math.min(MAX_AFFECTION, state.affection + amount);
        updateAffectionBar();
    }

    function updateAffectionBar() {
        const pct = Math.min(100, (state.affection / MAX_AFFECTION) * 100);
        dom.affectionFill.style.width = `${pct}%`;
    }

    // === Typing Effect ===
    function typeText(text, callback) {
        clearTimeout(state.typingTimer);
        state.isTyping = true;
        state.currentText = text;
        dom.dialogueText.textContent = '';
        dom.clickIndicator.classList.remove('visible');

        let i = 0;
        function type() {
            if (i < text.length) {
                dom.dialogueText.textContent += text[i];
                i++;
                state.typingTimer = setTimeout(type, TYPING_SPEED);
            } else {
                state.isTyping = false;
                dom.clickIndicator.classList.add('visible');
                if (callback) callback();
            }
        }
        type();
    }

    function finishTyping() {
        clearTimeout(state.typingTimer);
        dom.dialogueText.textContent = state.currentText;
        state.isTyping = false;
        dom.clickIndicator.classList.add('visible');
    }

    // === Speaker Display ===
    function setSpeaker(name) {
        if (!name) {
            dom.speakerName.textContent = '';
            dom.speakerName.classList.add('narrator');
        } else {
            dom.speakerName.textContent = name;
            dom.speakerName.classList.remove('narrator');
            if (name === 'kuu') {
                dom.speakerName.style.color = '#78b8e0';
            } else {
                dom.speakerName.style.color = '';
            }
        }
    }

    // === Scene Processing ===
    function getCurrentChapter() {
        return CHAPTERS[state.chapter];
    }

    function getCurrentScene() {
        const ch = getCurrentChapter();
        return ch ? ch.scenes[state.sceneIndex] : null;
    }

    function processScene() {
        const scene = getCurrentScene();
        if (!scene) {
            advanceChapter();
            return;
        }

        // Choice scene
        if (scene.type === 'choice') {
            showChoices(scene);
            return;
        }

        // Regular scene
        if (scene.bg) setBackground(scene.bg);

        // Check for Event CG (charImg)
        if (scene.charImg) {
            // It's a special scene! Show Event CG
            showEventCG(scene.charImg, () => {
                // Callback after CG animation delay
                setSpeaker(scene.speaker);
                typeText(scene.text, () => {
                    if (scene.effect) playEffect(scene.effect);
                    if (state.autoMode) {
                        state.autoTimer = setTimeout(advanceScene, AUTO_DELAY);
                    }
                });
            });
            // Return here to stop immediate execution, wait for callback
            return;
        } else {
            // Normal scene, hide any active CG
            hideEventCG();

            if (scene.char !== undefined) {
                setCharacter(scene.char);
            }
        }

        setSpeaker(scene.speaker);
        typeText(scene.text, () => {
            if (scene.effect) playEffect(scene.effect);
            if (state.autoMode) {
                state.autoTimer = setTimeout(advanceScene, AUTO_DELAY);
            }
        });

        // Auto-save every 5 scenes
        if (state.sceneIndex % 5 === 0) {
            autoSave();
        }
    }

    function advanceScene() {
        clearTimeout(state.autoTimer);
        if (state.isTyping) {
            finishTyping();
            return;
        }
        state.sceneIndex++;
        processScene();
    }

    function advanceChapter() {
        const nextChapter = state.chapter + 1;
        if (nextChapter >= CHAPTERS.length) {
            showEnding();
            return;
        }
        // Unlock next chapter
        if (!state.unlockedChapters.includes(nextChapter)) {
            state.unlockedChapters.push(nextChapter);
        }
        state.chapter = nextChapter;
        state.sceneIndex = 0;
        autoSave();
        showChapterTitle();
    }

    // === Choices ===
    function showChoices(scene) {
        dom.dialogueContainer.style.opacity = '0.3';
        dom.choiceContainer.innerHTML = '';
        dom.choiceContainer.classList.add('active');
        dom.clickArea.style.pointerEvents = 'none';

        scene.choices.forEach((choice, idx) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.addEventListener('click', () => {
                addAffection(choice.affection);
                dom.choiceContainer.classList.remove('active');
                dom.dialogueContainer.style.opacity = '1';
                dom.clickArea.style.pointerEvents = '';
                state.sceneIndex++;
                processScene();
            });
            dom.choiceContainer.appendChild(btn);
        });
    }

    // === Chapter Title Display ===
    function showChapterTitle() {
        const ch = getCurrentChapter();
        dom.chapterNumber.textContent = ch.number;
        dom.chapterName.textContent = ch.title;
        dom.chapterOverlay.classList.add('active');
        dom.chapterIndicator.textContent = `${ch.number}　${ch.title}`;

        setTimeout(() => {
            dom.chapterOverlay.classList.remove('active');
            processScene();
        }, 2500);
    }

    // === Start Game ===
    function startGame(chapter = 0, sceneIndex = 0, affection = 0, unlocked = [0]) {
        state.chapter = chapter;
        state.sceneIndex = sceneIndex;
        state.affection = affection;
        state.unlockedChapters = unlocked;
        state.autoMode = false;
        state.skipMode = false;

        // Clear any lingering choice UI from a previous session
        dom.choiceContainer.classList.remove('active');
        dom.choiceContainer.innerHTML = '';
        dom.dialogueContainer.style.opacity = '1';
        dom.clickArea.style.pointerEvents = '';

        updateAffectionBar();
        showScreen('game');
        showChapterTitle();
    }

    // === Ending ===
    function showEnding() {
        showScreen('ending');
        const aff = state.affection;
        let title, text;

        if (aff >= 80) {
            title = '真実の爆裂エンド';
            text = 'kuuとめぐみんの絆は、どんな爆裂魔法よりも強く、美しいものだった。\n二人は永遠に寄り添い、幸せな日々を歩んでいく。\n\n——これぞ、究極の爆裂ハッピーエンド。';
        } else if (aff >= 50) {
            title = '爆裂の絆エンド';
            text = '紆余曲折ありながらも、kuuとめぐみんは共に歩む道を選んだ。\n爆裂魔法のように激しく、でも温かい日々が二人を待っている。\n\n——ナイス爆裂。';
        } else {
            title = '新たな冒険エンド';
            text = 'kuuとめぐみんの物語は、まだ始まったばかり。\nこれからの冒険が、二人の距離をもっと近づけてくれるだろう。\n\n——爆裂道は続く。';
        }

        dom.endingTitle.textContent = title;
        dom.endingText.style.whiteSpace = 'pre-line';
        dom.endingText.textContent = text;
        dom.endingStats.innerHTML = `
      <p>♥ 好感度: ${state.affection} / ${MAX_AFFECTION}</p>
      <p>📖 全${CHAPTERS.length}話クリア</p>
    `;
    }

    // === Save/Load ===
    function autoSave() {
        SaveManager.autoSave({
            chapter: state.chapter,
            sceneIndex: state.sceneIndex,
            affection: state.affection,
            chapterTitle: getCurrentChapter()?.title || '',
            unlockedChapters: state.unlockedChapters
        });
    }

    function getState() {
        return {
            chapter: state.chapter,
            sceneIndex: state.sceneIndex,
            affection: state.affection,
            chapterTitle: getCurrentChapter()?.title || '',
            unlockedChapters: state.unlockedChapters
        };
    }

    function openSaveScreen(mode) {
        state.saveMode = mode;
        dom.saveScreenTitle.textContent = mode === 'save' ? 'セーブ' : 'ロード';
        renderSaveSlots();
        showScreen('save');
    }

    function renderSaveSlots() {
        const slots = SaveManager.getAllSlots();
        dom.saveSlots.innerHTML = '';

        // Auto-save slot
        const autoData = SaveManager.loadAuto();
        const autoSlot = createSlotElement('オートセーブ', autoData, -1);
        dom.saveSlots.appendChild(autoSlot);

        slots.forEach((data, i) => {
            const el = createSlotElement(`スロット ${i + 1}`, data, i);
            dom.saveSlots.appendChild(el);
        });
    }

    function createSlotElement(label, data, slotIdx) {
        const el = document.createElement('div');
        el.className = 'save-slot';

        const header = document.createElement('div');
        header.className = 'save-slot-header';
        const labelEl = document.createElement('span');
        labelEl.className = 'save-slot-label';
        labelEl.textContent = label;
        header.appendChild(labelEl);

        if (data) {
            const dateEl = document.createElement('span');
            dateEl.className = 'save-slot-date';
            dateEl.textContent = new Date(data.timestamp).toLocaleString('ja-JP');
            header.appendChild(dateEl);
        }
        el.appendChild(header);

        if (data) {
            const info = document.createElement('div');
            info.className = 'save-slot-info';
            const ch = CHAPTERS[data.chapter];
            info.textContent = `${ch?.number || ''} ${ch?.title || ''} ♥${data.affection || 0}`;
            el.appendChild(info);

            const actions = document.createElement('div');
            actions.className = 'save-slot-actions';

            if (state.saveMode === 'load') {
                const loadBtn = document.createElement('button');
                loadBtn.className = 'save-action-btn';
                loadBtn.textContent = 'ロード';
                loadBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    loadFromSlot(data);
                });
                actions.appendChild(loadBtn);
            }

            if (state.saveMode === 'save' && slotIdx >= 0) {
                const saveBtn = document.createElement('button');
                saveBtn.className = 'save-action-btn';
                saveBtn.textContent = '上書きセーブ';
                saveBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    SaveManager.save(slotIdx, getState());
                    renderSaveSlots();
                });
                actions.appendChild(saveBtn);
            }

            if (slotIdx >= 0) {
                const delBtn = document.createElement('button');
                delBtn.className = 'save-action-btn delete';
                delBtn.textContent = '削除';
                delBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    SaveManager.deleteSave(slotIdx);
                    renderSaveSlots();
                });
                actions.appendChild(delBtn);
            }

            el.appendChild(actions);
        } else {
            const empty = document.createElement('div');
            empty.className = 'save-slot-empty';
            empty.textContent = '— 空きスロット —';
            el.appendChild(empty);

            if (state.saveMode === 'save' && slotIdx >= 0) {
                el.addEventListener('click', () => {
                    SaveManager.save(slotIdx, getState());
                    renderSaveSlots();
                });
            }
        }

        return el;
    }

    function loadFromSlot(data) {
        startGame(data.chapter, data.sceneIndex, data.affection, data.unlockedChapters || [0]);
    }

    // === Chapter Select ===
    function renderChapterSelect() {
        const unlocked = SaveManager.getUnlockedChapters();
        // Merge with current state
        state.unlockedChapters.forEach(c => {
            if (!unlocked.includes(c)) unlocked.push(c);
        });

        dom.chapterGrid.innerHTML = '';
        CHAPTERS.forEach((ch, i) => {
            const card = document.createElement('div');
            card.className = 'chapter-card';
            if (!unlocked.includes(i)) card.classList.add('locked');

            card.innerHTML = `
        <div class="chapter-card-number">${ch.number}</div>
        <div class="chapter-card-title">${ch.title}</div>
        <div class="chapter-card-desc">${ch.desc}</div>
      `;

            if (unlocked.includes(i)) {
                card.addEventListener('click', () => startGame(i));
            }

            dom.chapterGrid.appendChild(card);
        });
    }

    // === Event Listeners ===
    function init() {
        // Title buttons
        $('btn-start').addEventListener('click', () => startGame(0));

        const continueBtn = $('btn-continue');
        const autoSaveData = SaveManager.loadAuto();
        if (SaveManager.hasSaves()) {
            continueBtn.style.display = '';
            continueBtn.addEventListener('click', () => {
                const data = autoSaveData || SaveManager.load(0);
                if (data) loadFromSlot(data);
                else startGame(0);
            });
        }

        $('btn-chapters').addEventListener('click', () => {
            renderChapterSelect();
            showScreen('chapter');
        });

        // Back buttons
        $('btn-back-title').addEventListener('click', () => showScreen('title'));
        $('btn-back-game').addEventListener('click', () => showScreen('game'));

        // Game UI buttons
        $('btn-auto').addEventListener('click', () => {
            state.autoMode = !state.autoMode;
            $('btn-auto').classList.toggle('active', state.autoMode);
            if (state.autoMode && !state.isTyping) {
                state.autoTimer = setTimeout(advanceScene, AUTO_DELAY);
            }
        });

        $('btn-skip').addEventListener('click', () => {
            state.skipMode = !state.skipMode;
            $('btn-skip').classList.toggle('active', state.skipMode);
            if (state.skipMode) runSkip();
        });

        $('btn-save-game').addEventListener('click', () => openSaveScreen('save'));
        $('btn-load-game').addEventListener('click', () => openSaveScreen('load'));

        $('btn-menu').addEventListener('click', () => {
            state.autoMode = false;
            state.skipMode = false;
            $('btn-auto').classList.remove('active');
            $('btn-skip').classList.remove('active');
            autoSave();
            showScreen('title');
        });

        // Click to advance
        dom.clickArea.addEventListener('click', advanceScene);

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (screens.game.classList.contains('active')) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    advanceScene();
                }
            }
        });

        // Ending
        $('btn-ending-title').addEventListener('click', () => showScreen('title'));
    }

    function runSkip() {
        if (!state.skipMode) return;
        const scene = getCurrentScene();
        if (!scene || scene.type === 'choice') {
            state.skipMode = false;
            $('btn-skip').classList.remove('active');
            return;
        }
        if (state.isTyping) finishTyping();
        setTimeout(() => {
            state.sceneIndex++;
            processScene();
            if (state.skipMode) setTimeout(runSkip, 150);
        }, 100);
    }

    // Start
    init();
})();
