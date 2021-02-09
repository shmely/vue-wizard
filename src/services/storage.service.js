export const storageService = {
    saveToStorage,
    loadFromStorage,
    removeFromStorage,
    clearStorage,
    saveToSession,
    loadFromSession,
    clearSession
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}
function clearStorage() {
    localStorage.clear();
}

function saveToSession(key, val) {
    sessionStorage.setItem(key, JSON.stringify(val));
}
function loadFromSession(key) {
    var val = sessionStorage.getItem(key)
    return JSON.parse(val)
}
function clearSession() {
    sessionStorage.clear();
}