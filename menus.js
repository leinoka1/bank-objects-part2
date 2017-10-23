<html>
<head>
<meta charset="utf-8">
    <title>Simple Menu - Material Components Catalog</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/images/logo_components_color_2x_web_48dp.png">
    <script src="/assets/simple-menu.css.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <style>
    html,
    body,
    main {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.demo-header-toolbar {
    z-index: 10;
}

.demo-content {
    position: relative;
    flex: 1;
    margin-top: 16px;
}

.demo-controls-container {
    height: 100%;
    width: 100%;
}

.demo-controls {
    margin-left: auto;
    margin-right: auto;
    width: 320px;
}

.mdc-menu-anchor {
    margin: 16px;
}

.mdc-theme--dark {
    background-color: #333;
}

.mdc-menu-anchor {
    position: absolute;
}
</style>
</head>
<body>
<header class="mdc-toolbar mdc-toolbar--fixed demo-header-toolbar">
    <div class="mdc-toolbar__row">
    <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
    <span class="catalog-back">
    <a href="/" class="mdc-toolbar__menu-icon"><i class="material-icons">&#xE5C4;</i></a>
</span>
<span class="mdc-toolbar__title catalog-title">Simple Menu</span>
</section>
</div>
</header>

<main>
<div class="mdc-toolbar-fixed-adjust"></div>
    <section class="hero">
    <div class="mdc-simple-menu mdc-simple-menu--open">
    <ul class="mdc-simple-menu__items mdc-list">
    <li class="mdc-list-item" role="menuitem">Back</li>
    <li class="mdc-list-item" role="menuitem">Forward</li>
    <li class="mdc-list-item" role="menuitem">Reload</li>
    <li class="mdc-list-divider" role="separator"></li>
    <li class="mdc-list-item" role="menuitem">Help &amp; Feedback</li>
    <li class="mdc-list-item" role="menuitem">Settings</li>
    </ul>
    </div>
    </section>

    <div class="demo-content">
    <div class="mdc-menu-anchor">
    <button class="mdc-button mdc-button--raised toggle">
    Reveal Menu
</button>

<div class="mdc-simple-menu" style="position: absolute;" tabindex="-1" id="demo-menu">
    <ul class="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
    <li class="mdc-list-item" role="menuitem" tabindex="0">Back</li>
    <li class="mdc-list-item" role="menuitem" tabindex="0">Forward</li>
    <li class="mdc-list-item" role="menuitem" tabindex="0">Reload</li>
    <li class="mdc-list-divider" role="separator"></li>

    <li class="mdc-list-item" role="menuitem" tabindex="0">Save As...</li>
</ul>
</div>
</div>

<div class="demo-controls-container">
    <div class="demo-controls">
    <p>
    Button position:
    <div class="">
    <label><input type="radio" name="position" value="top left" checked>Top left</label>
</div>

<div class="">
    <label><input type="radio" name="position" value="top right">Top right</label>
</div>

<div class="">
    <label>
    <input type="radio" name="position" value="bottom left">
    Bottom left
</label>
</div>

<div class="">
    <label>
    <input type="radio" name="position" value="bottom right">
    Bottom right
</label>
</div>
</p>
<p>
<label>
<input type="checkbox" name="dark">
    Dark mode
</label>
</p>
<div>
<span>Last Selected item: <em id="last-selected">&lt;none selected&gt;</em></span>
</div>
</div>
</div>
</div>
</main>

<script src="/assets/material-components-web.js"></script>
    <script>
var menuEl = document.querySelector('#demo-menu');
var menu = new mdc.menu.MDCSimpleMenu(menuEl);
var toggle = document.querySelector('.toggle');
toggle.addEventListener('click', function() {
    menu.open = !menu.open;
});

var dark = document.querySelector('input[name="dark"]');
dark.addEventListener('change', function(evt) {
    var contentEl = document.querySelector('.demo-content');
    if (evt.target.checked) {
        contentEl.classList.add('mdc-theme--dark');
        menuEl.classList.add('mdc-simple-menu--theme-dark');
    } else {
        contentEl.classList.remove('mdc-theme--dark');
        menuEl.classList.remove('mdc-simple-menu--theme-dark');
    }
});

var radios = document.querySelectorAll('input[name="position"]');
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function(evt) {
        if (evt.target.checked) {
            if (evt.target.value) {
                var anchor = document.querySelector('.mdc-menu-anchor');
                anchor.style.removeProperty('top');
                anchor.style.removeProperty('right');
                anchor.style.removeProperty('bottom');
                anchor.style.removeProperty('left');

                var vertical = evt.target.value.split(' ')[0];
                var horizontal = evt.target.value.split(' ')[1];
                anchor.style.setProperty(vertical, '0');
                anchor.style.setProperty(horizontal, '0');
            }
        }
    });
}

var lastSelected = document.getElementById('last-selected');
menuEl.addEventListener('MDCSimpleMenu:selected', function(evt) {
    var detail = evt.detail;
    lastSelected.textContent = '"' + detail.item.textContent.trim() +
        '" at index ' + detail.index;
});
</script>
</body>
</html>
</body>
