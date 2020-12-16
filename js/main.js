window.onload  = () => {
    console.log('window-load');
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('./serviceWorker.js');
    }
};
