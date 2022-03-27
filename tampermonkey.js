// ==UserScript==
// @name         Roblox Server JobID Joiner
// @namespace    https://discord.gg/unyJcrzBnV
// @version      1.0
// @description  Join Roblox servers using JobID.
// @author       mstudio45#5590, jaackk#6695, ramirez
// @match        *://*.roblox.com/games/*
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

function _0x4059(_0x5065b6,_0x3093fa){const _0xc245b8=_0xc245();return _0x4059=function(_0x405938,_0x394cc0){_0x405938=_0x405938-0x113;let _0x60307=_0xc245b8[_0x405938];return _0x60307;},_0x4059(_0x5065b6,_0x3093fa);}const _0x3477ca=_0x4059;(function(_0x159fc3,_0x595b21){const _0x487a8a=_0x4059,_0x443b46=_0x159fc3();while(!![]){try{const _0x758b4=parseInt(_0x487a8a(0x127))/0x1*(parseInt(_0x487a8a(0x115))/0x2)+-parseInt(_0x487a8a(0x122))/0x3+parseInt(_0x487a8a(0x11d))/0x4+parseInt(_0x487a8a(0x117))/0x5*(parseInt(_0x487a8a(0x116))/0x6)+-parseInt(_0x487a8a(0x113))/0x7*(parseInt(_0x487a8a(0x124))/0x8)+parseInt(_0x487a8a(0x125))/0x9*(parseInt(_0x487a8a(0x119))/0xa)+-parseInt(_0x487a8a(0x120))/0xb*(parseInt(_0x487a8a(0x11c))/0xc);if(_0x758b4===_0x595b21)break;else _0x443b46['push'](_0x443b46['shift']());}catch(_0x106eb7){_0x443b46['push'](_0x443b46['shift']());}}}(_0xc245,0x80af7));let menu=document['getElementsByTagName']('ul')[0x0],html=_0x3477ca(0x11b);function _0xc245(){const _0x2fb33a=['3699684rTmnpN','GameLauncher','JobId:\x20','77zuOsLz','match','2607489DbJqQX','location','664EVLOhf','9riRoqm','joinGameInstance','246824SIbacG','31843nXsoWT','Please\x20input\x20the\x20JobID.','2LHGrvm','2904PgKHlx','3790meJhyM','Error:','7636450xnhTuZ','innerHTML','\x0a\x20\x20\x20\x20<li\x20class=\x27cursor-pointer\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20class=\x27font-header-2\x20nav-menu-title\x20text-header\x27\x20style=\x22color:green\x22\x20onclick=\x27why()\x27>Join</a>\x0a\x20\x20\x20\x20</li>\x0a','905892yoayge'];_0xc245=function(){return _0x2fb33a;};return _0xc245();}menu[_0x3477ca(0x11a)]+=html,window['why']=()=>{const _0x188851=_0x3477ca;let _0x25a400=prompt(_0x188851(0x11f));if(_0x25a400)try{const _0x1eab14=window[_0x188851(0x123)]['pathname'][_0x188851(0x121)](/\/(\d+)\/.+?$/)[0x1];Roblox[_0x188851(0x11e)][_0x188851(0x126)](_0x1eab14,_0x25a400);}catch(_0x3ddb84){alert(_0x188851(0x118)+_0x3ddb84);}else alert(_0x188851(0x114));};
