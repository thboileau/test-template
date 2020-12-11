const dropdowns= Array.prototype.slice.call(document.querySelectorAll('.js-dropdown'));
dropdowns.forEach(function initDropdown(dropdown) {
  const menuItems = Array.prototype.slice.call(dropdown.parentElement.querySelectorAll('[role="menuitem"]'));
  const menu = dropdown.parentElement.querySelector('[role="menu"]');

  /**
   * show/hide the dropdown content
   * @param show {Boolean} do we need to show the content or not
   */
  function toggle(show){
    menu.hidden = !show;
    dropdown.setAttribute('aria-expanded', show);
    const icon = dropdown.querySelector('svg');
    if (icon.classList) {
      icon.classList.toggle('dropdown__icon--active', show);
    }
    if (show) {
      menuItems[0].focus();
    }
  }


  dropdown.addEventListener('click', function() {
    toggle(menu.hidden);
    if (menu.hidden) {
      dropdown.focus();
    }
    document.addEventListener('click', function closeDropdown(e) {
      if (!e.target.closest('.js-dropdown') && !e.target.closest('.dropdown__content')) {
        toggle(false);
        document.removeEventListener('click', closeDropdown)
      }
    });
  });
  menuItems.forEach(function (menuItem, currentIndex) {
    menuItem.addEventListener('keydown', function (e) {
      const nextIndex = currentIndex + 1 >= menuItems.length ? 0 : currentIndex + 1,
        previousIndex = currentIndex - 1 < 0 ? menuItems.length - 1 : currentIndex - 1;
      if (e.keyCode === 40) {
        e.preventDefault()
        menuItems[nextIndex].focus();
      }
      if (e.keyCode === 38) {
        e.preventDefault()
        menuItems[previousIndex].focus();
      }
      if (e.keyCode === 27 || e.keyCode === 9) {
        toggle(false)
      }
      if (e.keyCode === 27) {
        e.preventDefault()
        dropdown.focus()
      }
    });
  });
});

const examples = Array.prototype.slice.call(document.querySelectorAll('[data-example]'));
examples.forEach(function (example) {
  example.addEventListener('click' , function(event) {
    const snippet = document.querySelector(example.getAttribute('href'));
    snippet.hidden = !snippet.hidden;
    example.hidden = !snippet.hidden;
    const otherExamples = Array.prototype.slice.call(example.parentElement.querySelectorAll('[data-example]'));
    otherExamples.filter(otherExample => example !== otherExample).forEach(function (otherExample) {
      otherExample.hidden = !otherExample.hidden;
      const otherSnippet = document.querySelector(otherExample.getAttribute('href'));
      otherSnippet.hidden = !otherExample.hidden;
    });
    document.querySelector(`[aria-controls="${example.parentElement.id}"] .js-dropdown-text`).textContent = example.textContent;
    event.preventDefault();
  })
})

/**
 * Escape a given string
 * @param {String} string - the string to transform
 * @return {String} A copy fo the string escaped
 */
function escapeRegExp(string) {
  return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
}
const chars = [
  'AaÁáÀàÂâÄäAĄąȺⱥǍǎȦȧẠạĀāÃãå',
  'CcĆćĈĉÇçȻȼČčĊċ',
  'EeÉéÈèÊêËëȨȩĘęɆɇĚěĖėẸẹĒēẼẽ',
  'IiÍíÌìÎîÏïĮįƗɨǏǐİiỊịĪīĨĩ',
  'JjĴĵɈɉǰ',
  'LlĹĺĻļŁłȽƚĽľḶḷ',
  'NnŃńǸǹŅņꞤꞥŇňṅṆṇÑñ',
  'OoÓóÒòÔôÖöǪǫØøƟɵǑǒȮȯỌọŌōÕõ',
  'SsŚśŜŝŞşꞨꞩŠšṠṡṢṣ',
  'TtẗŢţȾⱦŦŧŤťṪṫṬṭ',
  'UuÚúÙùÛûÜüŲųɄʉǓǔỤụŪūŨũ',
  'YyÝýỲỳŶŷŸÿɎɏẎẏỴỵȲȳỸỹ',
  'ZzŹźẐẑƵƶŽžŻżẒẓ'
];
/**
 * Replaces the characters of a given string with their diacritical equivalents
 * @example "b[a]r" => "b[AaÁáÀàÂâÄäAĄąȺⱥǍǎȦȧẠạĀāÃãå]r"
 * @param {String} text - The string to transform
 * @return {String} A new string with the replaced characters
 */
function diacritic(text = '') {
  let result = escapeRegExp(text);
  for (let i = 0; i < chars.length; i++) { // eslint-disable-line
    result = result.replace(new RegExp(`[${ chars[i] }]`, 'gi'), `[${ chars[i] }]`);
  }
  return result;
}

/**
 * Search for matching suggestions
 * @param {Array<Node>} values - all the node
 * @param {String} term - the string to search for
 * @return {Array<Node>} The node corresponding to the given term
 */
function search(values, term) {
  const re = new RegExp(diacritic(term), 'i');
  return values.filter(
    (suggestion) => re.exec(suggestion.textContent)
  );
}

const filter = document.querySelector('.js-filter');
const values = Array.prototype.slice.call(document.querySelectorAll('.js-api-definition a'));
if (filter) {
  filter.addEventListener('input', function findContent(){
    const searchTerm = filter.value;
    const result = search(values, searchTerm);
    values.forEach(value => {
      if (result.indexOf(value) >= 0) {
        value.parentElement.removeAttribute('hidden');
      } else {
        value.parentElement.setAttribute('hidden', true)
      }
      value.innerHTML = highlightLabel(filter.value, value.textContent);
    });
});
}

/**
 * Hightlight the searched string in the text
 * @param {String} term - the string we are looking for
 * @param {String} labelToHighlight - the text we need to highlight
 * @return {String} the text highlighted with a mark element.
 */
function highlightLabel(term, labelToHighlight) {
  if (term) {
    return labelToHighlight.replace(
      new RegExp(`(${
        diacritic(term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
          .split(' ').join('|') })`, 'gi'
      ),
      '<mark>$1</mark>'
    );
  }
  return labelToHighlight;
}

const triggers = Array.prototype.slice.call(document.querySelectorAll('.js-tooltip-trigger'));
triggers.forEach(function initTooltip(trigger) {
  const target = document.querySelector(`#${trigger.getAttribute('aria-controls')}`);
  const clonedTarget = target.cloneNode(true);
  trigger.addEventListener('click', function handleAction() {
    clonedTarget.hidden = false;
    trigger.setAttribute('aria-expanded', true);
    trigger.appendChild(clonedTarget);
    clonedTarget.focus();
    clonedTarget.classList.add('tooltip__content');
    clonedTarget.addEventListener('keydown', function handleExit(e) {
      if (e.keyCode === 27 || e.keyCode === 9) {
        trigger.setAttribute('aria-expanded', false)
        clonedTarget.removeEventListener('keydown', handleExit);
        trigger.removeChild(clonedTarget);
      }
    });
    document.addEventListener('click', function closeDropdown(e) {
      if (!e.target.closest('.js-tooltip-trigger') && !e.target.closest('.js-tooltip-content')) {
        trigger.setAttribute('aria-expanded', false)
        document.removeEventListener('click', closeDropdown)
        trigger.removeChild(clonedTarget);
      }
    });
  });
});



const formElement = document.querySelector('.js-search-form');
if (formElement) {
  formElement.addEventListener('submit', function (e) {e.preventDefault();});
}

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
      const leftPanelAnchor = document.querySelector(`.js-api-definition [href="#${entry.target.getAttribute('aria-labelledby')}"]`);
      if (leftPanelAnchor) {
        document.querySelector('.api-definition__item--selected').classList.remove('api-definition__item--selected');
        leftPanelAnchor.parentElement.classList.add('api-definition__item--selected');
      }
    }
  });
}
const anchorTargets = document.querySelectorAll('section[aria-labelledby]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(handleIntersection, {threshold: .7});
  anchorTargets.forEach(target => observer.observe(target));
}
