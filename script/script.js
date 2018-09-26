'use strict';

// header
const form = document.querySelector('.creation-form');
const addBtn = form.querySelector('.add-btn');
const inputField = form.querySelector('.input-field');

// section
const list = document.querySelector('.list');
const item = list.querySelectorAll('.item');
const itemText = document.querySelector('.item-text');
const completeBtn = document.querySelector('.complete-btn');
const removeBtn = document.querySelector('.remove-btn');
const editBtn = document.querySelector('.edit-btn');

// svg
const svgCompleteBtn = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" width="100px" height="100px"><g><path class="fill" d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z "/></g></svg>';
const svgRemoveBtn = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
const svgEditBtn = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 275.836 275.836" style="enable-background:new 0 0 275.836 275.836;" xml:space="preserve"><g><path class="fill" d="M191.344,20.922l-95.155,95.155c-0.756,0.756-1.297,1.699-1.565,2.734l-8.167,31.454c-0.534,2.059,0.061,4.246,1.565,5.751c1.14,1.139,2.671,1.757,4.242,1.757c0.503,0,1.009-0.063,1.508-0.192l31.454-8.168c1.035-0.269,1.979-0.81,2.734-1.565l95.153-95.153c0.002-0.002,0.004-0.003,0.005-0.004s0.003-0.004,0.004-0.005l19.156-19.156c2.344-2.343,2.344-6.142,0.001-8.484L218.994,1.758C217.868,0.632,216.343,0,214.751,0c-1.591,0-3.117,0.632-4.242,1.758l-19.155,19.155c-0.002,0.002-0.004,0.003-0.005,0.004S191.346,20.921,191.344,20.922z M120.631,138.208l-19.993,5.192l5.191-19.993l89.762-89.762l14.801,14.802L120.631,138.208z M214.751,14.485l14.801,14.802l-10.675,10.675L204.076,25.16L214.751,14.485z"/><path class="fill" d="M238.037,65.022c-3.313,0-6,2.687-6,6v192.813H43.799V34.417h111.063c3.313,0,6-2.687,6-6s-2.687-6-6-6H37.799c-3.313,0-6,2.687-6,6v241.419c0,3.313,2.687,6,6,6h200.238c3.313,0,6-2.687,6-6V71.022C244.037,67.709,241.351,65.022,238.037,65.022z"/></g></svg>';
const svgSaveBtn = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 49" style="enable-background:new 0 0 49 49;" xml:space="preserve"> <g> <path class="fill" d="M39.914,0H37.5h-28h-9v49h7h33h8V8.586L39.914,0z M35.5,2v14h-24V2H35.5z M9.5,47V28h29v19H9.5z M46.5,47h-6V26h-33v21h-5 V2h7v16h28V2h1.586L46.5,9.414V47z"/> <path class="fill" d="M13.5,33h7c0.553,0,1-0.447,1-1s-0.447-1-1-1h-7c-0.553,0-1,0.447-1,1S12.947,33,13.5,33z"/> <path class="fill" d="M23.5,35h-10c-0.553,0-1,0.447-1,1s0.447,1,1,1h10c0.553,0,1-0.447,1-1S24.053,35,23.5,35z"/> <path class="fill" d="M25.79,35.29c-0.181,0.189-0.29,0.45-0.29,0.71s0.109,0.52,0.29,0.71C25.979,36.89,26.229,37,26.5,37 c0.26,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71s-0.11-0.521-0.29-0.71C26.84,34.92,26.16,34.92,25.79,35.29z"/> <path class="fill" d="M33.5,4h-6v10h6V4z M31.5,12h-2V6h2V12z"/></g>'

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addItem(inputField.value);
    inputField.value = '';
});

// completeBtn.addEventListener('click', completeItem);
// removeBtn.addEventListener('click', function() {removeItem(this)});
// editBtn.addEventListener('click', editItem);

function createElement(element, classNames, child, attribute) {
    let elem = document.createElement(element);

    classNames.split(' ').forEach(className => {
        elem.classList.add(className);
    });

    if (child) {
        elem.innerHTML = child;
    }

    if (attribute) {
        elem.setAttribute(attribute, false);
    }

    return elem;
}

function createItem(text) {
    if (!text) {
        return;
    }

    let item = createElement('li', 'item');
    let completeBtn = createElement('button', 'complete-btn btn', svgCompleteBtn);
    let removeBtn = createElement('button', 'remove-btn btn', svgRemoveBtn);
    let editBtn = createElement('button', 'edit-btn btn', svgEditBtn);
    let itemText = createElement('span', 'item-text', text, 'contenteditable');

    completeBtn.addEventListener('click', completeItem);
    removeBtn.addEventListener('click', removeItem);
    editBtn.addEventListener('click', editItem);


    // itemText.addEventListener('keydown', function(event) {
    //     if (event.which !== 13) {
    //         return true;
    //     }
    //
    //     let docFragment = document.createDocumentFragment();
    //
    //     //add a new line
    //     let newEle = document.createTextNode('\n');
    //     docFragment.appendChild(newEle);
    //
    //     //add the br, or p, or something else
    //     newEle = document.createElement('br');
    //     docFragment.appendChild(newEle);
    //
    //     //make the br replace selection
    //     let range = window.getSelection().getRangeAt(0);
    //     range.deleteContents();
    //     range.insertNode(docFragment);
    //
    //     //create a new range
    //     range = document.createRange();
    //     range.setStartAfter(newEle);
    //     range.collapse(true);
    //
    //     //make the cursor there
    //     let sel = window.getSelection();
    //     sel.removeAllRanges();
    //     sel.addRange(range);
    //
    //     return false;
    // });


    item.appendChild(completeBtn);
    item.appendChild(itemText);
    item.appendChild(editBtn);
    item.appendChild(removeBtn);

    return item;
}

function addItem(todo) {
    list.prepend(createItem(todo));
}

function completeItem() {
    this.parentNode.classList.toggle('completed');
}

function removeItem() {
    list.removeChild(this.parentNode);
}

function editItem() {
    const itemText = this.previousElementSibling;

    if (!itemText.classList.contains('changeable')) {
        itemText.setAttribute('contenteditable', true);
        itemText.focus();
        this.innerHTML = svgSaveBtn;
    } else {
        itemText.removeAttribute('contenteditable');
        this.innerHTML = svgEditBtn;
    }

    this.previousElementSibling.classList.toggle('changeable');
}

// let itemList = document.getElementsByClassName('item');
// console.log(itemList);
//
// let forEach = Array.prototype.forEach;
//
// forEach.call(itemList, function(b, i) {
//     console.log(b, i);
// });


// let pulse = document.querySelectorAll('.item .pulse');

// Array.prototype.forEach.call(item, item => {
//     item.onclick = function() {
//         console.log(item);
//     };
// });



// for (let i = 0; i < item.length; i++) {
//     item[i].onclick = function() {
//         console.log(23);
//
//     };
// }
//
// Array.prototype.forEach.call(item, item => {
//     item.onclick = function() {
//         console.log(234)
//     };
// });

// document.querySelector('.item').addEventListener('click', function(e) {
//     pulse.style.setProperty('--x', e.clientX - this.getBoundingClientRect().left - pulse.offsetWidth/2 + 'px');
//     pulse.style.setProperty('--y', e.clientY - this.getBoundingClientRect().top - pulse.offsetHeight/2 + 'px');
//
//     let scaleCount = 0,
//         opacityCount = 1;
//
//     const animationTime = 500;
//
//     let scaleUp = setInterval(function() {
//         scaleCount += 0.25;
//         pulse.style.setProperty('--scale', scaleCount);
//
//         opacityCount -= 0.05;
//         pulse.style.opacity = opacityCount;
//     }, animationTime / 20);
//
//     setTimeout(function() {
//         clearInterval(scaleUp);
//         pulse.style.setProperty('--scale', 0);
//     }, animationTime);
// });


// if (list) {
//     document.querySelector('preview').classList.remove('hidden');
// } else {
//     document.querySelector('preview').classList.add('hidden');
// }

