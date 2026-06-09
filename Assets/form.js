/* ============ Katılım Formu — validation & submit ============ */
(function () {
  'use strict';

  var form = document.getElementById('applyForm');
  var success = document.getElementById('formSuccess');
  if (!form) return;

  // Restore draft
  var DRAFT = 'hamilik_form_draft';
  try {
    var saved = JSON.parse(localStorage.getItem(DRAFT) || '{}');
    Object.keys(saved).forEach(function (k) {
      var el = form.elements[k];
      if (!el) return;
      if (el.type === 'radio' || el.type === 'checkbox') {
        var list = form.querySelectorAll('[name="' + k + '"]');
        list.forEach(function (n) {
          if (n.type === 'checkbox') n.checked = saved[k] === true || saved[k] === 'true';
          else n.checked = (n.value === saved[k]);
        });
      } else { el.value = saved[k]; }
    });
  } catch (e) {}

  function saveDraft() {
    var data = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name) return;
      if (el.type === 'checkbox') data[el.name] = el.checked;
      else if (el.type === 'radio') { if (el.checked) data[el.name] = el.value; }
      else data[el.name] = el.value;
    });
    try { localStorage.setItem(DRAFT, JSON.stringify(data)); } catch (e) {}
  }
  form.addEventListener('input', saveDraft);
  form.addEventListener('change', saveDraft);

  function fieldOf(el) { return el.closest('.field') || el.closest('.check'); }

  function validateField(el) {
    var wrap = fieldOf(el);
    if (!wrap) return true;
    var ok = true;
    if (el.type === 'email') {
      ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
    } else if (el.type === 'tel') {
      ok = el.value.replace(/\D/g, '').length >= 10;
    } else if (el.type === 'checkbox') {
      ok = el.checked;
    } else if (el.type === 'radio') {
      ok = !!form.querySelector('[name="' + el.name + '"]:checked');
    } else {
      ok = el.value.trim().length > 0;
    }
    wrap.classList.toggle('err', !ok);
    return ok;
  }

  // live clear on input
  form.addEventListener('input', function (e) {
    var wrap = fieldOf(e.target);
    if (wrap && wrap.classList.contains('err')) validateField(e.target);
  });
  form.addEventListener('change', function (e) {
    if (e.target.type === 'radio' || e.target.type === 'checkbox' || e.target.tagName === 'SELECT') {
      var wrap = fieldOf(e.target);
      if (wrap && wrap.classList.contains('err')) validateField(e.target);
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var firstBad = null;
    var seenRadio = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.required) return;
      if (el.type === 'radio') {
        if (seenRadio[el.name]) return;
        seenRadio[el.name] = true;
      }
      var ok = validateField(el);
      if (!ok && !firstBad) firstBad = fieldOf(el);
    });

    if (firstBad) {
      var y = firstBad.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
      return;
    }

    // success
    try { localStorage.removeItem(DRAFT); } catch (er) {}
    form.style.display = 'none';
    success.classList.add('show');
    var card = success.closest('.fcard');
    if (card) {
      var y2 = card.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y2, behavior: 'smooth' });
    }
  });
})();
