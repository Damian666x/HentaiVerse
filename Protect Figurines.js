// ==UserScript==
// @name         *[HV] Protect Figurines
// @namespace    HV_PF
// @version      1.0
// @description  Protects figurines from being offered or sold
// @author       Damian666x
// @include      /^https?:\/\/hentaiverse\.org\/.*?ss=(ss|is).*$/
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var items = document.querySelectorAll('#item_pane>table tr'),
        node,
        i;
    for (i=0;i<items.length;i++) {
        node = items[i].querySelector('td > div');
        if ([
            "Twilight Sparkle Figurine",
            "Rainbow Dash Figurine",
            "Applejack Figurine",
            "Fluttershy Figurine",
            "Pinkie Pie Figurine",
            "Rarity Figurine",
            "Trixie Figurine",
            "Princess Celestia Figurine",
            "Princess Luna Figurine",
            "Apple Bloom Figurine",
            "Scootaloo Figurine",
            "Sweetie Belle Figurine",
            "Big Macintosh Figurine",
            "Spitfire Figurine",
            "Derpy Hooves Figurine",
            "Lyra Heartstrings Figurine",
            "Octavia Figurine",
            "Zecora Figurine",
            "Cheerilee Figurine",
            "Vinyl Scratch Figurine",
            "Daring Do Figurine",
            "Doctor Whooves Figurine",
            "Berry Punch Figurine",
            "Bon-Bon Figurine",
            "Fluffle Puff Figurine",
            "Angel Bunny Figurine",
            "Gummy Figurine"
        ].includes(node.innerText)) {
            node.removeAttribute("onclick");
            node.style.color='#800080';
        }
    }
})();
