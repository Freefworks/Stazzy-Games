var sites = [
'game-1.html', 
'game-2.html', 
'game-3.html',
'game-4.html',
'game-5.html',
'game-6.html',
'game-7.html',
'game-8.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}