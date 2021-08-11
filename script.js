'use strict';
//* Альтернатива window.onload

document.addEventListener('readystatechange', () => {
    (document.readyState === 'loading') && beforeLoadDomFn();
    (document.readyState === 'complete') && afterLoadDomFn();
});

function beforeLoadDomFn() {
    console.log('Before load DOM');
}

function afterLoadDomFn() {
    console.log('DOM is loaded!');
}
