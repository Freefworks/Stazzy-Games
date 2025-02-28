var sites = [
'game-1.html', 
'game-2.html', 
'game-3.html',
'game-4.html',
'game-5.html',
'game-6.html',
'game-7.html',
'game-8.html',
'game-9.html',
'game-10.html',
'game-11.html',
'game-12.html',
'game-13.html',
'game-14.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}