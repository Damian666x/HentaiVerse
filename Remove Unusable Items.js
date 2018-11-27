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
    var node = document.querySelectorAll('.eqp,.eqb'),
        cSwitch,
        cList,
        i;
    for (i=0;i<node.length;i++) {
		cList = node[i].classList;
        if (cList.contains('txc') || cList.contains('txf')) {
            if (cList.contains('tp'))
                cSwitch=true;
            node[i].remove();
            continue;
        }
        if (cSwitch) {
            cList.add('tp');
            cSwitch=false;
        }
    }
})();
