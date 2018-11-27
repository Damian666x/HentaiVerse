// ==UserScript==
// @name         *[HV] Remove Unusable Items
// @namespace    HV_RUI
// @version      1.0
// @description  Removes unusable items from "Equipement Shop"
// @author       Damian666x
// @include      /^https?:\/\/hentaiverse\.org\/.*?ss=es.*$/
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (document.getElementById('battle_top')) return;
    var node = document.querySelectorAll('.eqp,.eqb');
    var addClass,
        i;
    for (i=0;i<node.length;i++) {
        if (node[i].classList.contains('txc') || node[i].classList.contains('txf')) {
            if (node[i].classList.contains('tp'))
                addClass=true;
            node[i].remove();
            continue;
        }
        if (addClass) {
            node[i].classList.add('tp');
            addClass=false;
        }
    }
})();
