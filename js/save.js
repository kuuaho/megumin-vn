/* ============================================
   Save / Load System — localStorage
   ============================================ */
const SaveManager = (() => {
  const SAVE_KEY = 'crimson_eyes_saves';
  const AUTO_KEY = 'crimson_eyes_auto';
  const MAX_SLOTS = 6;

  function _getAll() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  }

  function _setAll(data) {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  }

  function save(slot, state) {
    const saves = _getAll();
    saves[`slot_${slot}`] = {
      chapter: state.chapter,
      sceneIndex: state.sceneIndex,
      affection: state.affection,
      timestamp: Date.now(),
      chapterTitle: state.chapterTitle || '',
      unlockedChapters: state.unlockedChapters || [0]
    };
    _setAll(saves);
  }

  function load(slot) {
    const saves = _getAll();
    return saves[`slot_${slot}`] || null;
  }

  function deleteSave(slot) {
    const saves = _getAll();
    delete saves[`slot_${slot}`];
    _setAll(saves);
  }

  function autoSave(state) {
    try {
      localStorage.setItem(AUTO_KEY, JSON.stringify({
        chapter: state.chapter,
        sceneIndex: state.sceneIndex,
        affection: state.affection,
        timestamp: Date.now(),
        chapterTitle: state.chapterTitle || '',
        unlockedChapters: state.unlockedChapters || [0]
      }));
    } catch {}
  }

  function loadAuto() {
    try {
      const raw = localStorage.getItem(AUTO_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  function hasSaves() {
    const saves = _getAll();
    const auto = loadAuto();
    return Object.keys(saves).length > 0 || auto !== null;
  }

  function getAllSlots() {
    const saves = _getAll();
    const slots = [];
    for (let i = 0; i < MAX_SLOTS; i++) {
      slots.push(saves[`slot_${i}`] || null);
    }
    return slots;
  }

  function getUnlockedChapters() {
    const saves = _getAll();
    const auto = loadAuto();
    let maxUnlocked = [0];

    Object.values(saves).forEach(s => {
      if (s.unlockedChapters && s.unlockedChapters.length > maxUnlocked.length) {
        maxUnlocked = s.unlockedChapters;
      }
    });
    if (auto && auto.unlockedChapters && auto.unlockedChapters.length > maxUnlocked.length) {
      maxUnlocked = auto.unlockedChapters;
    }
    return maxUnlocked;
  }

  return { save, load, deleteSave, autoSave, loadAuto, hasSaves, getAllSlots, getUnlockedChapters, MAX_SLOTS };
})();
