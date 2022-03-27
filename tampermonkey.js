// ==UserScript==
// @name         Roblox Server JobID Joiner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Join Roblox servers using JobID.
// @author       mstudio45#5590, jaackk#6695
// @match        *://*.roblox.com/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/4/48/Roblox_Player_icon.png
// @grant        none
// ==/UserScript==

/* 
HOW TO SETUP:
1. Install Tampermonkey https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
2. Go to this link: chrome-extension://dhdgffkkebhmkfjojejmpbldmpobfkfo/options.html#nav=new-user-script+editor
3. Copy this code and paste it to the editor
4. Press CTRL+S or click File and press Save.
5. Then enable the script. If you end up in the dashboard you are done.
*/

/*
HOW TO USE: 
1. Same stuff applies to the setup.
2. Find a green colored button that says "Join" it is next to the search bar.
3. Click it and it will request you a prompt for JobID. 
4. Enter the JobID and then press OK and it will join you to the server.
*/

function _0x1a8b(){const _0x182ef6=['getElementsByTagName','pathname','match','GameLauncher','5vqsBnb','joinGameInstance','316590flVAIp','1501500AtxjqK','getElementById','\x0a\x20\x20\x20\x20<li\x20class=\x27cursor-pointer\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20id=\x22THEJOINBUTTONJOBID\x22\x20class=\x27font-header-2\x20nav-menu-title\x20text-header\x27\x20style=\x22color:green\x22>Join</a>\x0a\x20\x20\x20\x20</li>\x0a','JobId:\x20','addEventListener','innerHTML','3375152UEVYGt','39pVYIGM','243UkCeYP','1628040ynrGcE','click','1928460yFKTnC','Error:','19970mXdjpH','436247ZjmgMb'];_0x1a8b=function(){return _0x182ef6;};return _0x1a8b();}const _0x458a55=_0x5766;function _0x5766(_0x12d240,_0x133a7b){const _0x1a8b1a=_0x1a8b();return _0x5766=function(_0x57664d,_0x3a68df){_0x57664d=_0x57664d-0x15f;let _0x4d4e44=_0x1a8b1a[_0x57664d];return _0x4d4e44;},_0x5766(_0x12d240,_0x133a7b);}(function(_0x3607a7,_0x551f72){const _0x254cde=_0x5766,_0x2f23b9=_0x3607a7();while(!![]){try{const _0x374248=parseInt(_0x254cde(0x164))/0x1*(parseInt(_0x254cde(0x16a))/0x2)+parseInt(_0x254cde(0x173))/0x3+parseInt(_0x254cde(0x166))/0x4+-parseInt(_0x254cde(0x170))/0x5*(-parseInt(_0x254cde(0x168))/0x6)+-parseInt(_0x254cde(0x16b))/0x7+-parseInt(_0x254cde(0x163))/0x8+-parseInt(_0x254cde(0x165))/0x9*(parseInt(_0x254cde(0x172))/0xa);if(_0x374248===_0x551f72)break;else _0x2f23b9['push'](_0x2f23b9['shift']());}catch(_0x16549c){_0x2f23b9['push'](_0x2f23b9['shift']());}}}(_0x1a8b,0x4431f));let menu=document[_0x458a55(0x16c)]('ul')[0x0],html=_0x458a55(0x15f);menu[_0x458a55(0x162)]+=html,document[_0x458a55(0x174)]('THEJOINBUTTONJOBID')[_0x458a55(0x161)](_0x458a55(0x167),JOBIDFUNC);function JOBIDFUNC(){const _0x1c177f=_0x458a55;let _0x1beee2=prompt(_0x1c177f(0x160));if(_0x1beee2)try{const _0xb91dcc=window['location'][_0x1c177f(0x16d)][_0x1c177f(0x16e)](/\/(\d+)\/.+?$/)[0x1];Roblox[_0x1c177f(0x16f)][_0x1c177f(0x171)](_0xb91dcc,_0x1beee2);}catch(_0xa7cdf2){alert(_0x1c177f(0x169)+_0xa7cdf2);}else alert('Please\x20input\x20the\x20JobID.');}
