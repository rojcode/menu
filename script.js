const $ = document;

let isChosen = localStorage.getItem('isChosen');
let lang = localStorage.getItem('lang');

// Show Connect Modal

const modalContentConnect = $.querySelector('.modal-content');
const modalInfo = $.querySelector('.modal');
// span
const spanInfo = $.createElement('span');
spanInfo.classList.add('close');
spanInfo.setAttribute('id', 'closeModalBtn');
spanInfo.innerHTML = '×';

// h2
const h2Info = $.createElement('h2');
if (lang == 'ku') {
   h2Info.textContent = 'پەیوەندیمان پێوەبکە';
} else {
   h2Info.textContent = 'تماس با ما ';
}

// p 
const pConnect = $.createElement('p');
if (lang == 'ku') {
   pConnect.textContent = 'ناونیشان 📍: شەقامی سەفەری - بەردەم شەقامی نەورۆز';

} else {

   pConnect.textContent = 'آدرس📍: خیابان صفری بالاتر از چهار‌راه روبروی خیابان نوروز';
}

// p clock
const pClock = $.createElement('p');
pClock.textContent = '🕘 10:00am - 10:00pm';

// hr 
const hrClock = $.createElement('hr');

// p Instagram
const pInstagram = $.createElement('p');
if (lang == 'ku') {
   pInstagram.textContent = 'ئینستاگرام : @havana_cafe1';
} else {
   pInstagram.textContent = 'اینستاگرام : @havana_cafe1';
}
pInstagram.addEventListener('click', (e) => {
   window.location.href = 'https://www.instagram.com/havana_cafe1/';
})

// span instagram
const spanInstagram = $.createElement('span');
spanInstagram.textContent = '☎️';

// a href phone
const aPhone = $.createElement('a');
aPhone.href = 'tel:+989187841841';
aPhone.setAttribute('id', 'call');
if (lang == 'ku') {
   aPhone.textContent = 'بۆ پەیوەندیکردن بە کافەکە کلیک لەسەرم بکە :)';
} else {

   aPhone.textContent = 'جهت تماس با کافە روی من کلیک کن :)';
}

// hr href phone
const hrPhone = $.createElement('hr');

// href map
const hrefMap = $.createElement('a');
hrefMap.href = 'https://www.google.com/maps?q=35.311500,46.987794';
hrefMap.setAttribute('id', 'map');
if (lang == 'ku') {
   hrefMap.textContent = 'بۆ دۆزینەوەی ناونیشان کافەکە کلیک لەسەرم بکە';
} else {
   hrefMap.textContent = 'جهت مسیریابی کافه روی من کلیک کن📍';
}


modalContentConnect.append(spanInfo, h2Info, pClock, hrClock, pInstagram, spanInstagram, aPhone, hrPhone, hrefMap);


const showModalInfo = () => {
   modalInfo.style.display = 'block';
   spanInfo.addEventListener('click', (e) => {
      modalInfo.style.display = 'none';
   });
};

window.addEventListener('click', (e) => {
   if (e.target == modalInfo) {
      modalInfo.style.display = 'none';
   }
})


// Set title
let head = $.querySelector('head');
let headTitle = $.createElement('title');


if (lang == 'ku') {
   headTitle.textContent = 'کافه هاڤانا';
} else {
   headTitle.textContent = 'کافه هاوانا';
}

if (head) {
   head.append(headTitle);
} else {
   console.error(`Can't find ${head}`);
}

// Set Header 

const header = $.querySelector('header');
const headerH1 = $.createElement('h1');
if (header) {
   if (lang == 'ku') {
      headerH1.textContent = 'کافه هاڤانا'
   } else {
      headerH1.textContent = 'کافه هاوانا'
   }
   header.append(headerH1);
} else {
   console.error(`Can't find header`);
}

// Set nav
const navItem = [{
      id: 1,
      names: [{
         fa: 'منو',
         ku: 'مێنۆ'
      }]
   },
   {
      id: 2,
      names: [{
         fa: 'تماس با ما',
         ku: 'پەیوەندی لەگەڵ ئێمە'
      }]
   },
   {
      id: 3,
      names: [{
         fa: 'تغییر زبان',
         ku: 'گۆڕین زمان'
      }]
   },
];
const nav = $.querySelector('nav');
if (nav) {
   navItem.forEach(item => {
      const names = item.names;
      names.forEach(name => {
         const aNav = $.createElement('a');
         aNav.setAttribute('data-id', item.id);
         if (lang == 'ku') {
            aNav.innerHTML = name.ku;
         } else {
            aNav.innerHTML = name.fa;
         }
         if (item.id == 1) {
            aNav.classList.add('active-page');
         }
         if (aNav.dataset.id == 2) {
            aNav.addEventListener('click', (e) => {
               showModalInfo();
            });
         };

         if (aNav.dataset.id == 3) {
            aNav.addEventListener('click', (e => {
               showModalLanguage();
            }));
         };
         nav.append(aNav);
      });
   });
} else {
   console.error(`Can't find nav`);
}


// Section

const section = $.querySelector('section');
const h2Section = $.createElement('h2');

if (section) {
   section.insertBefore(h2Section, section.firstChild);
   if (lang == 'ku') {
      h2Section.textContent = ' مێنۆی کافه';
   } else {
      h2Section.textContent = ' منوی کافه';
   }

   menu.forEach(m => {
      const names = m.name;
      names.forEach(me => {
         const menuItem = $.createElement('div');
         menuItem.classList.add('menu-item');
         const spanPrice = $.createElement('span');
         spanPrice.textContent = m.price;
         spanPrice.setAttribute('id', 'span-price');
         const spanName = $.createElement('span');
         if (lang == 'ku') {
            spanName.textContent = me.ku
         } else {
            spanName.textContent = me.fa
         }
         menuItem.append(spanPrice, spanName);

         section.append(menuItem);

      })
   })
}


const footer = $.querySelector('footer');
const pFooter = $.createElement('p')
const spanFooter = $.createElement('span');

if (lang == 'ku') {
   pFooter.textContent = '© 2024 کافە هاڤانا، هەموو مافەکان پارێزراوە';
   spanFooter.textContent = '-☕️ بە خۆشەویستی ♥️ و چا پەرەی پێدراوە ';
} else {
   pFooter.textContent = '© 2024 کافه هاوانا تمامی حقوق محفوظ است';
   spanFooter.textContent = '-☕️ توسعه داده شده با عشق ♥️ و چای ';
}


if (footer) {
   footer.append(pFooter, spanFooter);
} else {
   console.error(`Can't Find Footer`);
}


// Language

const images = [{
      id: 1,
      name: 'Kurdistan',
      src: 'img/Flag_of_Kurdistan.svg.png'
   },
   {
      id: 2,
      name: 'Iran',
      src: 'img/Flag_of_Iran.svg.png'
   },
];

const languageOptionsModal = $.querySelector('#languageModal');
const modalContent = $.querySelector('#lang-modal');
const h2ModalContent = $.createElement('h2');
h2ModalContent.textContent = 'زبان خود را انتخاب کنید';
modalContent.insertBefore(h2ModalContent, modalContent.firstChild);

const languageOptions = $.createElement('div');
languageOptions.classList.add('language-options');
images.forEach(img => {
   const imageFlag = $.createElement('img');
   imageFlag.src = img.src;
   imageFlag.alt = img.name;
   imageFlag.classList.add('language-flag');
   imageFlag.setAttribute('id', 'iranFlag');
   imageFlag.setAttribute('data-name', img.name);
   languageOptions.append(imageFlag);

})
modalContent.append(languageOptions);

const showModalLanguage = () => {
   languageOptionsModal.style.display = 'inline';
   if (modalContent) {


      const iranFlag = $.querySelector(`img[data-name="Iran"]`);
      iranFlag.addEventListener('click', e => {
         isChosen = true;
         lang = 'fa';
         localStorage.setItem('isChosen', JSON.stringify(isChosen));
         localStorage.setItem('lang', lang);
         languageOptionsModal.style.display = 'none';
         location.reload();


      })

      const kurdistanFlag = $.querySelector('img[data-name="Kurdistan"]');
      kurdistanFlag.addEventListener('click', e => {
         isChosen = true;
         lang = 'ku';
         localStorage.setItem('isChosen', JSON.stringify(isChosen));
         localStorage.setItem('lang', lang);
         languageOptionsModal.style.display = 'none';
         location.reload();

      })

   } else {
      console.error(`Can't Find modalContent`);
   }


}


if (isChosen !== 'false' && isChosen !== 'true') {
   showModalLanguage();
}