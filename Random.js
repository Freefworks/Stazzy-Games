var sites = [
'game-1.html', 
'game-2.html', 
'game-3.html',
'game-4.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}