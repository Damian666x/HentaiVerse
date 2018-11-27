// ==UserScript==
// @name         *[HV] Colorfy Equipement
// @namespace    HV_CE
// @version      1.0
// @description  Colors all equipement in every pane depending on it's rarity
// @author       Damian666x
// @include      /^https?:\/\/hentaiverse\.org\/.*?ss=(eq|in|es|mm|iw|re|up|en|sa|fo|fu).*$/
// @run-at       document-end
// @grant        none
// ==/UserScript==

/*
You can customize Colors and Opacities in the "colors" and "opacity" variables.
Color "Custom" is for renamed potency tier 10 (MAX) items.
*/

(function() {
    'use strict';
    if (document.getElementById('battle_top')) return;
    let node=document.querySelectorAll('.eqp,.eqb'),
        style=document.createElement('style'),
        colors={
            Crude: '808080',
            Fair:'FFFFFF',
            Average:'008000',
            Fine:'53AB00',
            Superior:'0000FF',
            Exquisite:'800080',
            Magnificent:'FFFF00',
            Legendary:'FFA500',
            Peerless:'00FFFF',
            Custom:'FF0057'
        },
        opacity={
            Default:'7D',
            Hover:'90'
        },
        color,
        inner,
        css='',
        i;
    for (color in colors)
        css+='.'+color+'{background-color:#'+colors[color]+opacity.Default+'}'+
            '.'+color+':hover{background-color:#'+colors[color]+opacity.Hover+'}';
    style.innerText = css+'.eqp{margin-left:3px}';
    document.head.appendChild(style);
    loop: for (i=0;i<node.length;i++) {
        if (node[i].children[1])
            inner=node[i].children[1].innerText;
        else
            inner=node[i].children[0].innerText;
        for (color in colors)
            if (inner.includes(color)) {
                node[i].classList.add(color);
                continue loop;
            }
        node[i].classList.add('Custom');
    }
})();
