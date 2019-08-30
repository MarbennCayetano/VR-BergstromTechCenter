(function(){
    var script = {
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2], 'cardboardAvailable'); this.playList_E88594FC_E46A_83E3_41E0_7A45CF6CD7D1.set('selectedIndex', 0)",
 "vrPolyfillScale": 1,
 "minWidth": 20,
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "width": "100%",
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && ((window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0))) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "existsKey": function(key){  return key in window; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "unregisterKey": function(key){  delete window[key]; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getKey": function(key){  return window[key]; }
 },
 "backgroundPreloadEnabled": true,
 "propagateClick": false,
 "gap": 10,
 "id": "rootPlayer",
 "children": [
  "this.TabPanel_BC5A99EF_ACB8_4AAB_41CD_5A2CED1E3183"
 ],
 "class": "Player",
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "id": "panorama_B08CB062_BB4C_B734_41C7_F08141F48814",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 96.65,
   "distance": 1,
   "panorama": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
   "backwardYaw": -103.99
  }
 ],
 "class": "Panorama",
 "label": "3d-13_53_23",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FEDEE52C_DD33_D90C_41E5_666F5F809E06",
  "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_t.jpg",
 "mapLocations": [
  {
   "x": 468.51,
   "angle": 110.3,
   "y": 1323.99,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 109.78,
  "pitch": -2.16
 }
},
{
 "id": "panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 166.8,
   "distance": 1,
   "panorama": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
   "backwardYaw": -140.23
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -91.63,
   "distance": 1,
   "panorama": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080",
   "backwardYaw": -47.04
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 21.79,
   "distance": 1,
   "panorama": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
   "backwardYaw": 148.25
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 38.45,
   "distance": 1,
   "panorama": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
   "backwardYaw": -25.7
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -22,
   "distance": 1,
   "panorama": "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88",
   "backwardYaw": -26.59
  }
 ],
 "class": "Panorama",
 "label": "3d-13_13_46",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E882BDFA_C7CC_A914_41DC_C0410EAD7A4A",
  "this.overlay_F1A8E335_DB55_B91C_41D4_7CD2755F4ECE",
  "this.overlay_F01DF6C1_DB54_7B74_41DF_57239795EA8F",
  "this.overlay_F05F8202_DB55_FAF4_41E0_20B535048178",
  "this.overlay_8F37E14C_DB5C_D90C_41E2_B08694E2A623",
  "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_t.jpg",
 "mapLocations": [
  {
   "x": 761.25,
   "angle": 27.83,
   "y": 1385.61,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_EAA92B90_E46A_8623_41CE_6E7B38ADF4FA",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -59.84,
  "pitch": 0
 }
},
{
 "id": "camera_E8CAC85A_E46A_8227_4190_936B48D56FCD",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -71.31,
  "pitch": 0
 }
},
{
 "id": "panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -124.97,
  "pitch": -5.9
 }
},
{
 "id": "panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -26.59,
   "distance": 1,
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "backwardYaw": -22
  }
 ],
 "class": "Panorama",
 "label": "3d-13_15_06",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8E296643_DB5C_DB74_41E1_7878A960835E",
  "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_t.jpg",
 "mapLocations": [
  {
   "x": 759.52,
   "angle": -155.26,
   "y": 1325.85,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_EA767A93_E46A_8625_41E2_ECA9ACBC11CF",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.01,
  "pitch": 0
 }
},
{
 "id": "camera_E9C11637_E46A_8E6D_41D9_872C85AECA19",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.05,
  "pitch": 0
 }
},
{
 "id": "panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.71,
  "pitch": 3.64
 }
},
{
 "id": "panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -26.21,
  "pitch": -8.31
 }
},
{
 "id": "panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -69.52,
   "distance": 1,
   "panorama": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
   "backwardYaw": 120.16
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 36.77,
   "distance": 1,
   "panorama": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
   "backwardYaw": -135.55
  }
 ],
 "class": "Panorama",
 "label": "3d-13_21_05",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F6445E04_DCCC_EAFC_41BA_78BB478CEB52",
  "this.overlay_8B2F4EBE_DB4C_AB0C_41D8_07ADF5B89A0D",
  "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_t.jpg",
 "mapLocations": [
  {
   "x": 1096.39,
   "angle": -64.02,
   "y": 1329.67,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E946B58E_E46A_823F_41D5_089220258636",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -124.96,
  "pitch": 0
 }
},
{
 "id": "camera_E9A45A31_E46A_8665_41E9_FCEA2C0C0349",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 64.75,
  "pitch": 0
 }
},
{
 "id": "panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 144.96,
  "pitch": -12.99
 }
},
{
 "id": "panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 151.69,
   "distance": 1,
   "panorama": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
   "backwardYaw": -32.33
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_12_57_52_20190813103040",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8D960CF1_DB57_EF14_41B8_A520AA01C5E1",
  "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_t.jpg",
 "mapLocations": [
  {
   "x": 1112.01,
   "angle": 119.87,
   "y": 303.06,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 19.32,
   "distance": 1,
   "panorama": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
   "backwardYaw": -69.35
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -65.76,
   "distance": 1,
   "panorama": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
   "backwardYaw": -65.58
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -135.55,
   "distance": 1,
   "panorama": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
   "backwardYaw": 36.77
  }
 ],
 "class": "Panorama",
 "label": "3d-13_22_13",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F7374049_DCD7_D774_41C8_6DC50A6B6F08",
  "this.overlay_F70B2EF3_DCD5_AB14_41D7_9E19EC513E31",
  "this.overlay_8965EAFF_DB34_6B0C_41E0_71785A11683F",
  "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_t.jpg",
 "mapLocations": [
  {
   "x": 1083.45,
   "angle": -59.11,
   "y": 1224.75,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.97,
  "pitch": -6.93
 }
},
{
 "id": "panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -145.73,
   "distance": 1,
   "panorama": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
   "backwardYaw": 109.79
  }
 ],
 "class": "Panorama",
 "label": "3d-13_53_57",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E13CF3B8_DD34_5914_41CA_3EE5B25399B6",
  "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_t.jpg",
 "mapLocations": [
  {
   "x": 409.81,
   "angle": 291.06,
   "y": 1386.48,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E92F75AE_E46A_827F_41DA_0B67EC689817",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.63,
  "pitch": 0
 }
},
{
 "id": "panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.97,
  "pitch": -6.01
 }
},
{
 "id": "camera_E997D6DE_E46A_8FDF_41DE_0291E42BA5B4",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.55,
  "pitch": 0
 }
},
{
 "id": "camera_E8DA8890_E46A_8223_41D7_D17A1D6F9D81",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.67,
  "pitch": 0
 }
},
{
 "id": "panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.37,
  "pitch": 4.29
 }
},
{
 "id": "camera_EA6ADA72_E46A_86E7_41D8_1C8A2D6B69CF",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 138.36,
  "pitch": 0
 }
},
{
 "id": "camera_E9684915_E46A_822D_41EA_B0FA0EFD6A84",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.61,
  "pitch": 0
 }
},
{
 "id": "camera_EA472AA4_E46A_8663_41D6_669951AF6ABD",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 16.42,
  "pitch": 0
 }
},
{
 "id": "camera_E8BC88D4_E46A_8223_41EB_6DFC54158CF5",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.99,
  "pitch": 0
 }
},
{
 "id": "camera_EA795A83_E46A_8625_41E4_3AB8BE5CDE31",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.74,
  "pitch": 0
 }
},
{
 "id": "panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 104.43,
   "distance": 1,
   "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
   "backwardYaw": -78.46
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 152.85,
   "distance": 1,
   "panorama": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
   "backwardYaw": -32.24
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -20.36,
   "distance": 1,
   "panorama": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
   "backwardYaw": 157.9
  }
 ],
 "class": "Panorama",
 "label": "3d-13_36_26",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8359CFB3_CCD4_E914_41E3_C722AAA8076C",
  "this.overlay_8BE39F15_CCDC_691C_41CD_16F218EB105F",
  "this.overlay_83E7977F_CD73_B90C_41D8_752493A076BC",
  "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_t.jpg",
 "mapLocations": [
  {
   "x": 896.17,
   "angle": 159.07,
   "y": 1059.89,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "class": "PlayList",
 "id": "playList_E88594FC_E46A_83E3_41E0_7A45CF6CD7D1",
 "items": [
  {
   "class": "MapPlayListItem",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "player": "this.MapViewerMapPlayer",
   "media": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E88998E5_E46A_83ED_41D5_3A7C8D33AB41",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.41,
  "pitch": 0
 }
},
{
 "id": "panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.43,
  "pitch": 1.76
 }
},
{
 "id": "panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 150.8,
   "distance": 1,
   "panorama": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
   "backwardYaw": -20.01
  }
 ],
 "class": "Panorama",
 "label": "3d-13_37_30",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9EFFE8D6_CBFC_D71C_41CB_AD532CDE8F8E",
  "this.overlay_9EF0F62B_CBF5_BB34_41CE_CD3D767BFDFB",
  "this.overlay_9DFC42FD_CBF4_7B0C_41EA_2E47922618D2",
  "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_t.jpg",
 "mapLocations": [
  {
   "x": 847.69,
   "angle": -189.8,
   "y": 1190.45,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E9621925_E46A_826D_41E2_ABC54FFD8D08",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.38,
  "pitch": 0
 }
},
{
 "id": "panorama_B76768D0_BB4D_F714_41E6_F60680726080_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.45,
  "pitch": 2.09
 }
},
{
 "id": "camera_E90EA5DF_E46A_8DDD_41D3_B78EDC5C5A9D",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.47,
  "pitch": 0
 }
},
{
 "id": "camera_E97E9936_E46A_826F_41D6_3F8E16A87425",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.21,
  "pitch": 0
 }
},
{
 "id": "camera_EA0A8780_E46A_8E23_41EC_1D63C5ABB53E",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.02,
  "pitch": 0
 }
},
{
 "id": "camera_E91D85F1_E46A_8DE5_41D0_432CA4EE3E07",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.07,
  "pitch": 0
 }
},
{
 "id": "camera_E953159E_E46A_825F_41C7_8BF69A40D8B8",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 148.82,
  "pitch": 0
 }
},
{
 "id": "camera_E98706C3_E46A_8E25_41D7_86904F6C42DA",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 128.21,
  "pitch": 0
 }
},
{
 "id": "panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 54.59,
  "pitch": -0.3
 }
},
{
 "id": "panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.21,
  "pitch": -2.06
 }
},
{
 "id": "camera_EA3A176F_E46A_8EFD_41D3_DD9A084617AF",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.1,
  "pitch": 0
 }
},
{
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "id": "camera_EA6286FA_E46A_8FE7_41E8_B89F710C0230",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.49,
  "pitch": 0
 }
},
{
 "id": "camera_E98E7A51_E46A_8625_41BF_96792BF4A343",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 95.96,
  "pitch": 0
 }
},
{
 "id": "camera_E8C94848_E46A_8223_41E6_31238D7ED83B",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.02,
  "pitch": 0
 }
},
{
 "id": "camera_EA191791_E46A_8E25_41BD_9E5B17D2CEEF",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.48,
  "pitch": 0
 }
},
{
 "id": "panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 135.03,
   "distance": 1,
   "panorama": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
   "backwardYaw": -51.79
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -25.7,
   "distance": 1,
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "backwardYaw": 38.45
  }
 ],
 "class": "Panorama",
 "label": "3d-13_16_54",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FBC5763E_DCCD_FB0C_41D6_66D33197C836",
  "this.overlay_8D5BFB54_DB4C_691C_41D4_796EDB8312A3",
  "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_t.jpg",
 "mapLocations": [
  {
   "x": 840.42,
   "angle": -52.16,
   "y": 1382.69,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E92AC97E_E46A_82DF_41A9_F08F8294D72E",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.3,
  "pitch": 0
 }
},
{
 "id": "panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 89,
   "distance": 1,
   "panorama": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
   "backwardYaw": -3.44
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -25.79,
   "distance": 1,
   "panorama": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
   "backwardYaw": -78.3
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.64,
   "distance": 1,
   "panorama": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
   "backwardYaw": -80.28
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_12_59_53_20190813103033",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E15B9392_C5CD_B914_41D6_CAB9EC8C6109",
  "this.overlay_E15C91A5_C5CC_593C_41D4_49A13336AF4D",
  "this.overlay_E158F60A_C5CF_BAF4_41C4_E8E7A2A81B35",
  "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_t.jpg",
 "mapLocations": [
  {
   "x": 792.28,
   "angle": 90.46,
   "y": 501.16,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_EA5EC74D_E46A_8E3D_41DA_8893C63134DC",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.54,
  "pitch": 0
 }
},
{
 "id": "panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.78,
  "pitch": -10.4
 }
},
{
 "id": "camera_E9F169F2_E46A_85E7_41CE_82C76AB32661",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.36,
  "pitch": 0
 }
},
{
 "id": "camera_EA30BAD6_E46A_862F_41E8_E00A95D7F60A",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.03,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "playList_E88574FC_E46A_83E3_41D8_C3EE80AB358C",
 "items": [
  {
   "class": "MapPlayListItem",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "player": "this.MapViewerMapPlayer",
   "media": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E9B02A41_E46A_8625_41CD_39D6F4E6466D",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -27.15,
  "pitch": 0
 }
},
{
 "id": "camera_E91739D2_E46A_8227_41E5_BBE56823ECD1",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 88.37,
  "pitch": 0
 }
},
{
 "id": "panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 150.44,
  "pitch": -9.52
 }
},
{
 "id": "camera_EA555AB4_E46A_8663_41D3_107E2CC3DCAB",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158,
  "pitch": 0
 }
},
{
 "id": "panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -78.3,
   "distance": 1,
   "panorama": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
   "backwardYaw": -25.79
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -60.93,
   "distance": 1,
   "panorama": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
   "backwardYaw": 162.98
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_02_57_20190813103023",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E26707FE_C5D4_D90C_41C7_D02D347E4F6D",
  "this.overlay_E38E4D16_C5D7_E91C_41E1_3EF9446C5F30",
  "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_t.jpg",
 "mapLocations": [
  {
   "x": 904.64,
   "angle": 20.7,
   "y": 456.62,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.79,
  "pitch": -11.56
 }
},
{
 "id": "camera_E9BBB690_E46A_8E23_41DE_546AF6FD7176",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.35,
  "pitch": 0
 }
},
{
 "id": "camera_E885F8F5_E46A_83ED_41B6_D517AE602C84",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.11,
  "pitch": 0
 }
},
{
 "id": "camera_E930E9A1_E46A_8265_4193_209165F7F722",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.64,
  "pitch": 0
 }
},
{
 "id": "panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.16,
  "pitch": -6.33
 }
},
{
 "id": "panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.41,
  "pitch": -9.36
 }
},
{
 "id": "panorama_B76768D0_BB4D_F714_41E6_F60680726080",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 150.59,
   "distance": 1,
   "panorama": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
   "backwardYaw": -98.21
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -47.04,
   "distance": 1,
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "backwardYaw": -91.63
  }
 ],
 "class": "Panorama",
 "label": "3d-13_49_13",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FE908CF2_DD3C_AF14_41C5_F36416163C88",
  "this.overlay_FF8B7DD4_DD3C_E91C_41DD_FDF28BC23C2C",
  "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_t.jpg",
 "mapLocations": [
  {
   "x": 692.29,
   "angle": 118.19,
   "y": 1382.57,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.35,
  "pitch": 2.33
 }
},
{
 "id": "camera_EA1617A2_E46A_8E67_41A8_4E54144FB473",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.56,
  "pitch": 0
 }
},
{
 "id": "panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -98.21,
   "distance": 1,
   "panorama": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080",
   "backwardYaw": 150.59
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 42.02,
   "distance": 1,
   "panorama": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
   "backwardYaw": -144.89
  }
 ],
 "class": "Panorama",
 "label": "3d-13_50_22",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FF8997DC_DD3C_D90C_41E2_8D239539FB89",
  "this.overlay_FF0CD69D_DD34_DB0C_41E7_135D4B7B9070",
  "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_t.jpg",
 "mapLocations": [
  {
   "x": 626.05,
   "angle": -155.78,
   "y": 1383.35,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_EAE407B3_E46A_8E65_41E9_8252B02D3F58",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 101.7,
  "pitch": 0
 }
},
{
 "id": "camera_EAFCEB41_E46A_8625_41CD_82AA769FD8BC",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114.24,
  "pitch": 0
 }
},
{
 "id": "camera_EAEC3B25_E46A_866D_41B2_930BC114A46C",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.26,
  "pitch": 0
 }
},
{
 "id": "panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.86,
  "pitch": 4.69
 }
},
{
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer"
},
{
 "id": "panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.91,
  "pitch": -1.98
 }
},
{
 "id": "panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 133.83,
  "pitch": -1.08
 }
},
{
 "id": "camera_E89FD905_E46A_822D_4188_4662CB1CE8AE",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -32.17,
  "pitch": 0
 }
},
{
 "id": "camera_E944B959_E46A_8225_41D0_8C415751BAD9",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.96,
  "pitch": 0
 }
},
{
 "id": "panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -41.64,
   "distance": 1,
   "panorama": "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07",
   "backwardYaw": -11.51
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 155.81,
   "distance": 1,
   "panorama": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
   "backwardYaw": 177.18
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.44,
   "distance": 1,
   "panorama": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
   "backwardYaw": 89
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_07_56_20190813103016",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E0BA82D0_C5F3_DB14_41DF_FD2457E25DE9",
  "this.overlay_E0DAC8C9_C5FC_7774_41BE_CA759112717F",
  "this.overlay_E023939C_C5FC_590C_41B0_53B98B7CE40E",
  "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_t.jpg",
 "mapLocations": [
  {
   "x": 787.45,
   "angle": 18.76,
   "y": 612.19,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 56.55,
  "pitch": 2.66
 }
},
{
 "id": "panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -120.81,
   "distance": 1,
   "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
   "backwardYaw": 60.53
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -20.01,
   "distance": 1,
   "panorama": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C",
   "backwardYaw": 150.8
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -163.58,
   "distance": 1,
   "panorama": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
   "backwardYaw": 21.46
  }
 ],
 "class": "Panorama",
 "label": "3d-13_29_17",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8744D04C_CCF4_570C_41CA_541F08C256CA",
  "this.overlay_85885EC9_CCF3_EB74_41E3_FA5DED0A80D9",
  "this.overlay_8508E24C_C5DC_7B0C_41D9_1DA426602696",
  "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_t.jpg",
 "mapLocations": [
  {
   "x": 760.47,
   "angle": -197.67,
   "y": 1100.17,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 150.76,
  "pitch": 16.51
 }
},
{
 "id": "panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -11.51,
   "distance": 1,
   "panorama": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
   "backwardYaw": -41.64
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_04_58_20190813103018",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E47BAC2A_C5DC_AF34_4175_139F9A9ED1FE",
  "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_t.jpg",
 "mapLocations": [
  {
   "x": 741.35,
   "angle": 140.08,
   "y": 590.17,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E9AAD675_E46A_8EED_41E3_8F5403B530F8",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 34.27,
  "pitch": 0
 }
},
{
 "id": "camera_E927398F_E46A_823D_41D9_F48A7626C081",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.41,
  "pitch": 0
 }
},
{
 "id": "camera_E93545CF_E46A_823D_41E9_B8A5D8CCD19F",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 70.86,
  "pitch": 0
 }
},
{
 "id": "camera_EA736716_E46A_8E2F_41CE_FF9CCDF7489B",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.82,
  "pitch": 0
 }
},
{
 "id": "camera_EAB92BA7_E46A_866D_41E5_4E46BD468018",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 44.45,
  "pitch": 0
 }
},
{
 "id": "camera_E9E8E603_E46A_8E25_41DB_9E2954DE0190",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -28.31,
  "pitch": 0
 }
},
{
 "id": "panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 88.95,
   "distance": 1,
   "panorama": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
   "backwardYaw": 147.83
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 88.53,
   "distance": 1,
   "panorama": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
   "backwardYaw": 34.39
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237"
  }
 ],
 "class": "Panorama",
 "label": "3d-13_26_03",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8B4159AC_DB34_690C_41E3_CDE222A725F5",
  "this.overlay_87B3BE15_DB4C_EB1C_41D7_C141EDFA2B7E",
  "this.overlay_874CC225_DB3C_5B3C_41DD_4B12D212E31D",
  "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_t.jpg",
 "mapLocations": [
  {
   "x": 1050.7,
   "angle": 91.64,
   "y": 1076.15,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 165.35,
   "distance": 1,
   "panorama": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
   "backwardYaw": -60.26
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 104.53,
   "distance": 1,
   "panorama": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
   "backwardYaw": 27.89
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_01_18_20190813103029",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A78C603F_BB33_B70C_41D1_992C2A832A0D",
  "this.overlay_8EECC05D_DB53_D70C_41E7_B9BA69E1FC5B",
  "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_t.jpg",
 "mapLocations": [
  {
   "x": 758.21,
   "angle": -148.99,
   "y": 742.25,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 53.82,
  "pitch": 1.48
 }
},
{
 "id": "camera_EA2FD75E_E46A_8EDF_41E5_1CA6A33806CD",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 147.76,
  "pitch": 0
 }
},
{
 "id": "panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -31.18,
   "distance": 1,
   "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
   "backwardYaw": 158.26
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -84.04,
   "distance": 1,
   "panorama": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
   "backwardYaw": 93.99
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 21.46,
   "distance": 1,
   "panorama": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
   "backwardYaw": -163.58
  }
 ],
 "class": "Panorama",
 "label": "3d-13_31_14",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9C9A0F5F_CBCC_E90C_41DD_2736FD05FF6C",
  "this.overlay_81BDF5FD_CBCC_590C_41AD_C9081E514F86",
  "this.overlay_9D62C916_CBCC_691D_41E7_61C409C0A16D",
  "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_t.jpg",
 "mapLocations": [
  {
   "x": 752.9,
   "angle": -201.5,
   "y": 1006.04,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 55.04,
   "distance": 1,
   "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
   "backwardYaw": -115.25
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -32.24,
   "distance": 1,
   "panorama": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
   "backwardYaw": 152.85
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 93.99,
   "distance": 1,
   "panorama": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
   "backwardYaw": -84.04
  }
 ],
 "class": "Panorama",
 "label": "3d-13_31_54",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_867809AB_CCCC_6934_41D4_DBCB2B60CE9E",
  "this.overlay_86477B04_CCCC_AAFC_41E5_1958E260784A",
  "this.overlay_80BA5B74_CCD5_A91C_41E9_B0B180FEDDB7",
  "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_t.jpg",
 "mapLocations": [
  {
   "x": 853.57,
   "angle": 167.78,
   "y": 1014.2,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 13.13,
   "distance": 1,
   "panorama": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
   "backwardYaw": 170.98
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 120.16,
   "distance": 1,
   "panorama": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
   "backwardYaw": -69.52
  }
 ],
 "class": "Panorama",
 "label": "3d-13_19_18",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F7780DCF_DCF5_A90C_41DE_66EF2B03F993",
  "this.overlay_F95FE6EB_DCF3_DB34_41E1_F617D3342B9C",
  "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_t.jpg",
 "mapLocations": [
  {
   "x": 985.61,
   "angle": -60.15,
   "y": 1425.43,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 68.02,
  "pitch": 0.29
 }
},
{
 "id": "panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 109.79,
   "distance": 1,
   "panorama": "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265",
   "backwardYaw": -145.73
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -103.99,
   "distance": 1,
   "panorama": "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814",
   "backwardYaw": 96.65
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 8.37,
   "distance": 1,
   "panorama": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
   "backwardYaw": 62.58
  }
 ],
 "class": "Panorama",
 "label": "3d-13_52_46",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E062B18B_DD4C_79F4_41D5_6AD5BA90FA4B",
  "this.overlay_E1E82C4B_DD4C_AF74_41E0_85735B7227DC",
  "this.overlay_E0092DC0_DD4C_A974_41B8_8EA6C384ED7D",
  "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_t.jpg",
 "mapLocations": [
  {
   "x": 458.19,
   "angle": 109.41,
   "y": 1388.97,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E971056C_E46A_82E3_41D6_FAD7055EA6A7",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 59.19,
  "pitch": 0
 }
},
{
 "id": "panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -39.97,
   "distance": 1,
   "panorama": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
   "backwardYaw": 129.91
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -140.23,
   "distance": 1,
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "backwardYaw": 166.8
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_01_52_20190813103026",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DE0C8EF2_C5D3_AB14_41E0_7A476A034643",
  "this.overlay_F1A1F414_DB4F_BF1C_41DD_6699285A7ECD",
  "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_t.jpg",
 "mapLocations": [
  {
   "x": 743.84,
   "angle": 201.67,
   "y": 648.78,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -109.14,
   "distance": 1,
   "panorama": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
   "backwardYaw": 108.69
  }
 ],
 "class": "Panorama",
 "label": "3d-13_54_53",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E060FE33_DD54_EB14_41D6_17DE8E550ED3",
  "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_t.jpg",
 "mapLocations": [
  {
   "x": 511.31,
   "angle": -146.87,
   "y": 1355.61,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_EAF457C4_E46A_8E23_41E0_0E80A4E2668E",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.72,
  "pitch": 0
 }
},
{
 "id": "camera_E9F57627_E46A_8E6D_41CD_4168FB088608",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.59,
  "pitch": 0
 }
},
{
 "id": "camera_E8A8B8B3_E46A_8265_41DC_40DE59939285",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.2,
  "pitch": 0
 }
},
{
 "id": "panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 62.09,
  "pitch": -4.34
 }
},
{
 "id": "camera_E98896A7_E46A_8E68_41EA_4FA70114BFD1",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -117.42,
  "pitch": 0
 }
},
{
 "id": "camera_E8C0F86C_E46A_82E3_41A2_61EEB33C0C4C",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.87,
  "pitch": 0
 }
},
{
 "id": "camera_E90CC9B2_E46A_8267_41E0_7CD5499C4E78",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.75,
  "pitch": 0
 }
},
{
 "id": "panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 60.53,
   "distance": 1,
   "panorama": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
   "backwardYaw": -120.81
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -78.46,
   "distance": 1,
   "panorama": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
   "backwardYaw": 104.43
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -115.25,
   "distance": 1,
   "panorama": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
   "backwardYaw": 55.04
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 158.26,
   "distance": 1,
   "panorama": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
   "backwardYaw": -31.18
  }
 ],
 "class": "Panorama",
 "label": "3d-13_30_39",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8D3BCBB5_CD54_A91C_41CF_5755E33BD1A3",
  "this.overlay_8F522B1B_CD54_6914_41E2_67366406B83A",
  "this.overlay_8E1D4AB2_CD5C_6B14_41E9_9C05C7FE03F1",
  "this.overlay_828B816F_CD5F_D90C_41E9_9C3319952191",
  "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_t.jpg",
 "mapLocations": [
  {
   "x": 806.45,
   "angle": 155.97,
   "y": 1056.55,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E9A9DA22_E46A_8667_41E3_D7CAFC5C8DF0",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.19,
  "pitch": 0
 }
},
{
 "id": "camera_E9E589E2_E46A_85E7_41D0_BBE3C383419A",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.47,
  "pitch": 0
 }
},
{
 "id": "panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -29.99,
  "pitch": -6.7
 }
},
{
 "id": "panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -103.62,
   "distance": 1,
   "panorama": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
   "backwardYaw": -27.71
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 32.25,
   "distance": 1,
   "panorama": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
   "backwardYaw": 37.97
  }
 ],
 "class": "Panorama",
 "label": "3d-13_47_05",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9EBF5847_CBDC_F77C_41BF_44C89D9CD85E",
  "this.overlay_9FDE0217_CBDC_BB1C_41D5_7827D4680D8D",
  "this.overlay_9D07DBDE_CBF4_690C_41E8_C8BD6208D196",
  "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_t.jpg",
 "mapLocations": [
  {
   "x": 899.17,
   "angle": -19.91,
   "y": 1187.06,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E91B69C2_E46A_8227_41D0_8D0EEAE6D1E4",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.79,
  "pitch": 0
 }
},
{
 "id": "camera_EA41D732_E46A_8E67_41E8_9B397501E824",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91,
  "pitch": 0
 }
},
{
 "id": "panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 27.89,
   "distance": 1,
   "panorama": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
   "backwardYaw": 104.53
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -80.28,
   "distance": 1,
   "panorama": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
   "backwardYaw": -161.64
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_58_47_20190813102957",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E610FD14_C7F7_E91C_41B2_18D312A5996B",
  "this.overlay_E9D227A9_C7F4_5934_4191_7DF57E605884",
  "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_t.jpg",
 "mapLocations": [
  {
   "x": 308.15,
   "angle": 103.23,
   "y": 542.36,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -31.62,
  "pitch": 1.74
 }
},
{
 "id": "camera_EAC447D4_E46A_8E23_41E4_F81AEE155306",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.65,
  "pitch": 0
 }
},
{
 "id": "panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.26,
  "pitch": 5.1
 }
},
{
 "id": "camera_EAB37806_E46A_822F_41E0_59F728F7E247",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.21,
  "pitch": 0
 }
},
{
 "id": "camera_EADB4B74_E46A_86E3_41CD_1DF2DD92464A",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -152.11,
  "pitch": 0
 }
},
{
 "id": "camera_E93915BF_E46A_825D_41D1_1534BEAFEB73",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.98,
  "pitch": 0
 }
},
{
 "id": "panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -15.74,
   "distance": 1,
   "panorama": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
   "backwardYaw": -89.41
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 147.83,
   "distance": 1,
   "panorama": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
   "backwardYaw": 88.95
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -69.35,
   "distance": 1,
   "panorama": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
   "backwardYaw": 19.32
  }
 ],
 "class": "Panorama",
 "label": "3d-13_25_22",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F610CEB6_DCDC_6B1C_41E8_A359129394BC",
  "this.overlay_F6CB96EF_DCD5_DB0C_41E4_DFFD50D9AD45",
  "this.overlay_8AADA53A_DB34_5914_41C7_C37D932D358D",
  "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_t.jpg",
 "mapLocations": [
  {
   "x": 1030.37,
   "angle": -152.24,
   "y": 1180.44,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E8D038A3_E46A_8265_41E1_3577F94AB1B3",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -119.47,
  "pitch": 0
 }
},
{
 "id": "panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 62.58,
   "distance": 1,
   "panorama": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
   "backwardYaw": 8.37
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -144.89,
   "distance": 1,
   "panorama": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
   "backwardYaw": 42.02
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 108.69,
   "distance": 1,
   "panorama": "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7",
   "backwardYaw": -109.14
  }
 ],
 "class": "Panorama",
 "label": "3d-13_51_34",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E37F2C5B_DD5D_AF14_41E8_F5A5D4559BE9",
  "this.overlay_E3551545_DD54_597C_41E3_F16D9D976741",
  "this.overlay_E3128B30_DD54_6914_41DB_3250C26A37F5",
  "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_t.jpg",
 "mapLocations": [
  {
   "x": 531.7,
   "angle": -156.7,
   "y": 1423.76,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 151.4,
  "pitch": -7.36
 }
},
{
 "id": "camera_E9E73615_E46A_8E2D_41E4_A914A85C55E8",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -70.21,
  "pitch": 0
 }
},
{
 "id": "panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -27.71,
   "distance": 1,
   "panorama": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
   "backwardYaw": -103.62
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 148.25,
   "distance": 1,
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "backwardYaw": 21.79
  }
 ],
 "class": "Panorama",
 "label": "3d-13_47_43",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EBFDBC34_C7D4_AF1C_41B5_9E6B9D81C4D2",
  "this.overlay_878C3B1E_DB3C_A90C_41E9_40AB17E397B4",
  "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_t.jpg",
 "mapLocations": [
  {
   "x": 804.2,
   "angle": 84.61,
   "y": 1280.8,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 170.98,
   "distance": 1,
   "panorama": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
   "backwardYaw": 13.13
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -51.79,
   "distance": 1,
   "panorama": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
   "backwardYaw": 135.03
  }
 ],
 "class": "Panorama",
 "label": "3d-13_18_05",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8D3CE9EE_DB4F_E90C_41C9_9576EFB634D8",
  "this.overlay_8DB93129_DB4C_5934_41C8_B0AA961BBFD7",
  "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_t.jpg",
 "mapLocations": [
  {
   "x": 884.93,
   "angle": 303.19,
   "y": 1365.42,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_B08CB062_BB4C_B734_41C7_F08141F48814_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 64.49,
  "pitch": -1.06
 }
},
{
 "id": "camera_EAA5C7F5_E46A_8DED_4184_5E7A373B12D8",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143.23,
  "pitch": 0
 }
},
{
 "id": "camera_EA221AC5_E46A_862D_41E3_EE3EE6C44E4F",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.29,
  "pitch": 0
 }
},
{
 "id": "panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -89.41,
   "distance": 1,
   "panorama": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
   "backwardYaw": -15.74
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -65.58,
   "distance": 1,
   "panorama": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
   "backwardYaw": -65.76
  }
 ],
 "class": "Panorama",
 "label": "3d-13_23_24",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F4C6E88F_DB35_B70C_41A6_E5B7540A978D",
  "this.overlay_F379F50A_DB34_DEF5_41E7_624647E26E55",
  "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_t.jpg",
 "mapLocations": [
  {
   "x": 975.6,
   "angle": 126.75,
   "y": 1277.73,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E8A218C3_E46A_8225_41C2_0D7D55BF4CD2",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.54,
  "pitch": 0
 }
},
{
 "id": "camera_E9DF4659_E46A_8E25_41E2_49D5C3C37ECE",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -160.68,
  "pitch": 0
 }
},
{
 "id": "panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 129.91,
   "distance": 1,
   "panorama": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
   "backwardYaw": -39.97
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -60.26,
   "distance": 1,
   "panorama": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
   "backwardYaw": 165.35
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 177.18,
   "distance": 1,
   "panorama": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
   "backwardYaw": 155.81
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_00_34_20190813103031",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A72C4631_BB53_BB14_41DB_74016C593F0A",
  "this.overlay_F1159DB4_DB77_A91C_41D1_9ED637865B45",
  "this.overlay_8E9E27BA_DB55_B914_41E0_8510B76576EB",
  "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_t.jpg",
 "mapLocations": [
  {
   "x": 781.49,
   "angle": 206.26,
   "y": 671.37,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -145.45,
  "pitch": -7
 }
},
{
 "id": "camera_EA018AF2_E46A_87E7_41E9_EA355A94D88A",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -50.09,
  "pitch": 0
 }
},
{
 "id": "panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "id": "map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF",
 "width": 1350,
 "height": 1604,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 1350,
    "height": 1604,
    "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF.jpeg"
   },
   {
    "class": "ImageResourceLevel",
    "width": 234,
    "height": 279,
    "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_lq.jpeg",
    "tags": "preload"
   }
  ]
 },
 "initialZoomFactor": 1,
 "label": "BTC_ReferenceMap",
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideColor": "#CC0000",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_BAAC161D_ABA0_2C94_41E0_7D1F3B335827",
  "this.overlay_BAACE61D_ABA0_2C94_41E2_3AABEDEB8946",
  "this.overlay_BAACF61D_ABA0_2C97_41DE_E840601F8009",
  "this.overlay_BAACE61E_ABA0_2C94_4174_57C93DEB6516",
  "this.overlay_BAACF61E_ABA0_2C94_41D4_FD2239E17158",
  "this.overlay_BAACC61E_ABA0_2C94_41DE_B87116947DD4",
  "this.overlay_BAACD61E_ABA0_2C94_41E2_08339D404948",
  "this.overlay_BAACA61E_ABA0_2C94_41BE_DC7F0327E450",
  "this.overlay_BAACB61E_ABA0_2C94_41B0_442F5B971978",
  "this.overlay_BAAC861E_ABA0_2C94_41E4_E5933D9496E0",
  "this.overlay_BAD6CE91_ABE0_3C6C_41E4_7978DC74D3A1",
  "this.overlay_B90C45E7_ABE0_EFB4_41DE_4A54C5B39F27",
  "this.overlay_BFA3E90E_ABE0_6474_41E4_997674AEAE74",
  "this.overlay_BF9DE7D3_ABA0_6BEC_41A8_B829F98CE962",
  "this.overlay_B894419E_ABA0_27A3_41D2_1E377213CB44",
  "this.overlay_B8A7E06C_ABA0_24B4_41D6_55B06BFFCCCA",
  "this.overlay_BF01B3EB_ABA0_2BBC_41E3_956E103AF495",
  "this.overlay_A47560B6_ABF9_DABD_41DD_2D0C0924596A",
  "this.overlay_BAB1F8E2_ABF9_CAD5_41A2_8EE4FE8AAA41",
  "this.overlay_BB64108C_ABEF_F96D_41B2_BEAF0EF18985",
  "this.overlay_A2CE0BCB_BCE8_CEFB_41E3_862D6281510A",
  "this.overlay_A389B1C1_B4AF_DAD7_41C5_947F63A91024",
  "this.overlay_B461ADDE_BAA7_EBC6_41C1_202025AB3165",
  "this.overlay_B4791A54_BAA9_A8DA_41C7_B7E23EB688DD",
  "this.overlay_B57DE6F9_BAA8_99CA_41C9_4213AF977D65",
  "this.overlay_B5A0DA01_BAAB_A83A_41C6_840BAC2DEB23",
  "this.overlay_B49C43CD_BAC2_4260_41DA_C65981F80FB3",
  "this.overlay_B4755088_BACE_7EE0_41B4_6629D9A3FD46",
  "this.overlay_B5453DE1_BB74_6934_41BD_2C5617B96D61",
  "this.overlay_B6F14996_BB74_691C_416B_14A27C42A08B",
  "this.overlay_B51FFE06_BB74_AAFC_41CC_1F9CC1EED789",
  "this.overlay_B6F4F60D_BB75_FB0C_41D7_C9CC3E2B7182",
  "this.overlay_B51335D2_BB74_D914_41CD_159B140B8F24",
  "this.overlay_B6FEB85C_BB73_B70C_41B1_107FD237D5E8",
  "this.overlay_B51E6811_BB7C_B714_41E5_94B47309257C",
  "this.overlay_86E157C1_C5F5_D974_41C0_CAE9BC647EB7"
 ],
 "fieldOfViewOverlayRadiusScale": 0.3,
 "scaleMode": "fit_to_height",
 "thumbnailUrl": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_t.jpg",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayInsideOpacity": 0.1,
 "fieldOfViewOverlayOutsideColor": "#000000"
},
{
 "id": "camera_EACAFB5D_E46A_86DD_41E9_2B663A4EA66A",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.74,
  "pitch": 0
 }
},
{
 "id": "panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.57,
  "pitch": 0.33
 }
},
{
 "id": "panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 34.39,
   "distance": 1,
   "panorama": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
   "backwardYaw": 88.53
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 162.98,
   "distance": 1,
   "panorama": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
   "backwardYaw": -60.93
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -32.33,
   "distance": 1,
   "panorama": "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2",
   "backwardYaw": 151.69
  }
 ],
 "class": "Panorama",
 "label": "PIC_2019_07_26_12_59_08_20190813103036",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E67D1710_C7FC_5914_41E3_355C4A5B07F5",
  "this.overlay_8CC93C58_DB55_AF14_41E6_1271C30D079D",
  "this.overlay_9AFD85F4_C4CC_591C_41D0_6F625183D969",
  "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_t.jpg",
 "mapLocations": [
  {
   "x": 980.5,
   "angle": 74.57,
   "y": 324.66,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E9488947_E46A_822D_41E3_355088655F02",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 39.77,
  "pitch": 0
 }
},
{
 "id": "camera_EAD5E7E4_E46A_8DE3_41DD_B6AF7BEA57C2",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 114.42,
  "pitch": 0
 }
},
{
 "id": "camera_E8C6F87E_E46A_82DF_41C1_1A8BB37F26FA",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -44.97,
  "pitch": 0
 }
},
{
 "id": "panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 157.9,
   "distance": 1,
   "panorama": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
   "backwardYaw": -20.36
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 37.97,
   "distance": 1,
   "panorama": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
   "backwardYaw": 32.25
  }
 ],
 "class": "Panorama",
 "label": "3d-13_27_36",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "colCount": 60,
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/0/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "colCount": 36,
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/1/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "colCount": 24,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/2/{row}_{column}.jpg",
      "tags": "ondemand"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "colCount": 12,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_t.jpg"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8FA69E67_CD4C_AB3C_41D9_CB991DE56E91",
  "this.overlay_811457F6_CD54_591C_41A0_89496D53657A",
  "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_tcap0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_t.jpg",
 "mapLocations": [
  {
   "x": 939.98,
   "angle": 162.37,
   "y": 1100.09,
   "class": "PanoramaMapLocation",
   "map": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_E99DFA62_E46A_86E7_41C1_1DE0B7D74E1D",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.01,
  "pitch": 0
 }
},
{
 "id": "panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.9,
  "pitch": -0.57
 }
},
{
 "id": "camera_E951096C_E46A_82E3_41E2_2C465DAA8451",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -31.75,
  "pitch": 0
 }
},
{
 "id": "camera_E9CF6A02_E46A_8627_41BD_5D7FFBCC1E47",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.03,
  "pitch": 0
 }
},
{
 "id": "camera_E9DB7A12_E46A_8627_41DC_22053063D572",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.65,
  "pitch": 0
 }
},
{
 "id": "camera_EA1F9B0E_E46A_863F_41A9_1789D1AC2A7A",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -13.2,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  "this.PanoramaPlayListItem_E8867506_E46A_822F_41D9_45D00E97FE2F",
  "this.PanoramaPlayListItem_E89A2510_E46A_8223_41BB_D1EEBABFEFF1",
  "this.PanoramaPlayListItem_E89DC511_E46A_8225_41E8_14676933A3FA",
  "this.PanoramaPlayListItem_E89D7511_E46A_8225_41B7_7B625F0706AC",
  "this.PanoramaPlayListItem_E89D1512_E46A_8227_41D0_F7B0446F8497",
  "this.PanoramaPlayListItem_E89CB512_E46A_8227_41D2_306614141804",
  "this.PanoramaPlayListItem_E89DE513_E46A_8225_41E1_3EED44941912",
  "this.PanoramaPlayListItem_E89D9513_E46A_8225_41DB_F19B742F2147",
  "this.PanoramaPlayListItem_E89D4514_E46A_8223_41E6_4E7C5DEDDF43",
  "this.PanoramaPlayListItem_E89CF515_E46A_822D_41E2_B5283F274794",
  "this.PanoramaPlayListItem_E89CA515_E46A_822D_41C6_ACA9823BC77F",
  "this.PanoramaPlayListItem_E89C4516_E46A_822F_41BE_9FD970DB9C26",
  "this.PanoramaPlayListItem_E89FF516_E46A_822F_41CC_2CC2DDE94008",
  "this.PanoramaPlayListItem_E89F9517_E46A_822D_41D0_41E7285932A0",
  "this.PanoramaPlayListItem_E89F5517_E46A_822D_41C2_E935ECE64DEF",
  "this.PanoramaPlayListItem_E89EE518_E46A_8223_41D9_180F2AF2EF46",
  "this.PanoramaPlayListItem_E89E9518_E46A_8223_41CB_802501FBF92D",
  "this.PanoramaPlayListItem_E89E4519_E46A_8225_41D2_EB417A0E846F",
  "this.PanoramaPlayListItem_E891E519_E46A_8225_41D1_3AF7F1C37DB6",
  "this.PanoramaPlayListItem_E891951A_E46A_8227_41E6_0AEDDC3AE7E2",
  "this.PanoramaPlayListItem_E891451A_E46A_8227_41EB_0633595C8256",
  "this.PanoramaPlayListItem_E891051B_E46A_8225_41C7_0E0C97FA95F8",
  "this.PanoramaPlayListItem_E890A51B_E46A_8225_41EA_CA7841D29F3E",
  "this.PanoramaPlayListItem_E890451C_E46A_8223_41D9_AF21AB1A955D",
  "this.PanoramaPlayListItem_E893E51C_E46A_8223_41C6_6F70C6927B79",
  "this.PanoramaPlayListItem_E893851D_E46A_825D_41DF_4885ECBBF6D9",
  "this.PanoramaPlayListItem_E893251D_E46A_825D_41CE_2EC82D3341A4",
  "this.PanoramaPlayListItem_E892C51E_E46A_825F_41E7_768467F4E816",
  "this.PanoramaPlayListItem_E892751E_E46A_825F_41BD_B7DAA3B09896",
  "this.PanoramaPlayListItem_E893B51F_E46A_825D_41E5_07B9D2C4C48D",
  "this.PanoramaPlayListItem_E8935520_E46A_8263_41EA_1714C602D0FD",
  "this.PanoramaPlayListItem_E8930520_E46A_8263_41E9_C4849791123B",
  "this.PanoramaPlayListItem_E892B521_E46A_8265_41C7_E218DF37FA45",
  "this.PanoramaPlayListItem_E8925521_E46A_8265_41C0_B49BBE617D59",
  "this.PanoramaPlayListItem_E895E522_E46A_8267_41D0_2F2331059F44",
  "this.PanoramaPlayListItem_E895A522_E46A_8267_41C7_5A399C50C889"
 ]
},
{
 "id": "camera_E94CE57D_E46A_82DD_418B_481B912E4547",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -75.57,
  "pitch": 0
 }
},
{
 "id": "panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_camera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.96,
  "pitch": -2.68
 }
},
{
 "minHeight": 1,
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "pagePaddingBottom": 0,
 "minWidth": 1,
 "shadowVerticalLength": 0,
 "pagePaddingLeft": 0,
 "paddingRight": 0,
 "tabsPosition": "top",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "tabsSize": 35,
 "tabsFontStyle": "italic",
 "class": "TabPanel",
 "tabsBackgroundColor": [
  "#999999"
 ],
 "shadowBlurRadius": 6,
 "pagePaddingTop": 0,
 "tabsFontFamily": "Arial",
 "shadowOpacity": 0.5,
 "borderSize": 0,
 "overflow": "visible",
 "borderRadius": 2,
 "bottom": "0%",
 "selectedTabFontColor": "#000000",
 "shadow": true,
 "tabsTextDecoration": "none",
 "selectedTabBackgroundOpacity": 1,
 "selectedTabFontStyle": "normal",
 "tabsBackgroundColorRatios": [
  1
 ],
 "shadowColor": "#000000",
 "selectedTabBackgroundColor": [
  "#FFFFFF"
 ],
 "tabsRollOverBackgroundOpacity": 0.78,
 "paddingTop": 0,
 "pages": [
  {
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarOpacity": 0.5,
   "scrollBarVisible": "rollOver",
   "minWidth": 20,
   "paddingTop": 0,
   "borderColor": "#000000",
   "paddingRight": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "width": "100%",
   "propagateClick": false,
   "gap": 10,
   "children": [
    "this.MainViewer",
    "this.Container_BCD7E33B_AAA0_E49C_41B3_F1D3FB8D53F8",
    "this.Image_BCE3DF2D_AA60_3CB4_41E4_D6BF81545F14"
   ],
   "backgroundColor": [
    "#FFFFFF"
   ],
   "class": "TabPanelPage",
   "label": "Bergstrom Tech Center (August 2019)",
   "scrollBarColor": "#000000",
   "height": "100%",
   "scrollBarWidth": 10,
   "layout": "absolute",
   "horizontalAlign": "left",
   "paddingBottom": 0,
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "verticalAlign": "top",
   "data": {
    "name": "TabPanelPage943"
   },
   "overflow": "scroll",
   "backgroundOpacity": 1,
   "borderSize": 1,
   "backgroundColorRatios": [
    0
   ],
   "shadow": false
  },
  {
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "scrollBarOpacity": 0.5,
   "scrollBarVisible": "rollOver",
   "minWidth": 20,
   "paddingTop": 0,
   "borderColor": "#000000",
   "paddingRight": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "width": "100%",
   "propagateClick": false,
   "gap": 10,
   "children": [
    "this.HTMLText_ABA45580_BAC3_C6E0_41E5_82221B46EF3C"
   ],
   "backgroundColor": [
    "#FFFFFF"
   ],
   "class": "TabPanelPage",
   "label": "About",
   "scrollBarColor": "#000000",
   "height": "100%",
   "scrollBarWidth": 10,
   "layout": "absolute",
   "horizontalAlign": "left",
   "paddingBottom": 0,
   "scrollBarMargin": 2,
   "borderRadius": 2,
   "verticalAlign": "top",
   "data": {
    "name": "TabPanelPage1538"
   },
   "overflow": "scroll",
   "backgroundOpacity": 1,
   "borderSize": 1,
   "backgroundColorRatios": [
    0
   ],
   "shadow": false
  }
 ],
 "selectedTabBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "tabsFontWeight": "bold",
 "propagateClick": false,
 "tabsFontColor": "#333333",
 "tabsAlign": "normal",
 "id": "TabPanel_BC5A99EF_ACB8_4AAB_41CD_5A2CED1E3183",
 "width": "100%",
 "height": "100%",
 "selectedTabFontSize": "14px",
 "tabsBackgroundOpacity": 0.65,
 "shadowHorizontalLength": 3,
 "selectedTabFontWeight": "bold",
 "scrollBarWidth": 10,
 "tabsRollOverFontColor": "#000000",
 "tabsRollOverBackgroundColorRatios": [
  1
 ],
 "paddingBottom": 0,
 "tabsRollOverFontWeight": "bold",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "tabsRollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "pagePaddingRight": 0,
 "shadowSpread": 1,
 "tabsFontSize": "14px",
 "data": {
  "name": "TabPanel942"
 }
},
{
 "id": "overlay_FEDEE52C_DD33_D90C_41E5_666F5F809E06",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.65,
   "hfov": 21.82,
   "pitch": -28.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_E99DFA62_E46A_86E7_41C1_1DE0B7D74E1D); this.mainPlayList.set('selectedIndex', 31)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -28.22,
   "yaw": 96.65,
   "hfov": 21.82,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B08CB062_BB4C_B734_41C7_F08141F48814_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E882BDFA_C7CC_A914_41DC_C0410EAD7A4A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.79,
   "hfov": 19.27,
   "pitch": -6.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_4_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "CTM Hall Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171, this.camera_E951096C_E46A_82E3_41E2_2C465DAA8451); this.mainPlayList.set('selectedIndex', 21)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -6.33,
   "yaw": 21.79,
   "hfov": 19.27,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_4_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F1A8E335_DB55_B91C_41D4_7CD2755F4ECE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.8,
   "hfov": 9.61,
   "pitch": -35.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_5_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Main Staircase Landing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A, this.camera_E9488947_E46A_822D_41E3_355088655F02); this.mainPlayList.set('selectedIndex', 2)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -35.87,
   "yaw": 166.8,
   "hfov": 9.61,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_5_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F01DF6C1_DB54_7B74_41DF_57239795EA8F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22,
   "hfov": 11.45,
   "pitch": 3.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_6_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Gym Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88, this.camera_E927398F_E46A_823D_41D9_F48A7626C081); this.mainPlayList.set('selectedIndex', 4)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 3.92,
   "yaw": -22,
   "hfov": 11.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 244,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_6_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F05F8202_DB55_FAF4_41E0_20B535048178",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.45,
   "hfov": 11.47,
   "pitch": 1.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_7_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C, this.camera_E92AC97E_E46A_82DF_41A9_F08F8294D72E); this.mainPlayList.set('selectedIndex', 11)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 1.63,
   "yaw": 38.45,
   "hfov": 11.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 244,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_7_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8F37E14C_DB5C_D90C_41E2_B08694E2A623",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.63,
   "hfov": 11.48,
   "pitch": 0.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_8_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Public Works South Wing Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B76768D0_BB4D_F714_41E6_F60680726080, this.camera_E944B959_E46A_8225_41D0_8C415751BAD9); this.mainPlayList.set('selectedIndex', 28)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 0.48,
   "yaw": -91.63,
   "hfov": 11.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 244,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_8_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_8E296643_DB5C_DB74_41E1_7878A960835E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.59,
   "hfov": 11.46,
   "pitch": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Foyer",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_EA555AB4_E46A_8663_41D3_107E2CC3DCAB); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 3.54,
   "yaw": -26.59,
   "hfov": 11.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 244,
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0_HS_1_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_F6445E04_DCCC_EAFC_41BA_78BB478CEB52",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.52,
   "hfov": 21.29,
   "pitch": -6.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856, this.camera_EAA92B90_E46A_8623_41CE_6E7B38ADF4FA); this.mainPlayList.set('selectedIndex', 13)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -6.77,
   "yaw": -69.52,
   "hfov": 21.29,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8B2F4EBE_DB4C_AB0C_41D8_07ADF5B89A0D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 36.77,
   "hfov": 14.46,
   "pitch": -4.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB, this.camera_EAB92BA7_E46A_866D_41E5_4E46BD468018); this.mainPlayList.set('selectedIndex', 17)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -4.42,
   "yaw": 36.77,
   "hfov": 14.46,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_8D960CF1_DB57_EF14_41B8_A520AA01C5E1",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.69,
   "hfov": 11.46,
   "pitch": 3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Enter North Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_E8DA8890_E46A_8223_41D7_D17A1D6F9D81); this.mainPlayList.set('selectedIndex', 10)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 3.54,
   "yaw": 151.69,
   "hfov": 11.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 244,
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0_HS_1_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_F7374049_DCD7_D774_41C8_6DC50A6B6F08",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.55,
   "hfov": 19.54,
   "pitch": -15.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532, this.camera_EAA5C7F5_E46A_8DED_4184_5E7A373B12D8); this.mainPlayList.set('selectedIndex', 14)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -15.71,
   "yaw": -135.55,
   "hfov": 19.54,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F70B2EF3_DCD5_AB14_41D7_9E19EC513E31",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.76,
   "hfov": 19.85,
   "pitch": -7.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Breakroom Kitchenette",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA, this.camera_EAD5E7E4_E46A_8DE3_41DD_B6AF7BEA57C2); this.mainPlayList.set('selectedIndex', 15)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -7.23,
   "yaw": -65.76,
   "hfov": 19.85,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8965EAFF_DB34_6B0C_41E0_71785A11683F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 19.32,
   "hfov": 14.85,
   "pitch": -5.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A, this.camera_EAC447D4_E46A_8E23_41E4_F81AEE155306); this.mainPlayList.set('selectedIndex', 16)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.29,
   "yaw": 19.32,
   "hfov": 14.85,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E13CF3B8_DD34_5914_41CA_3EE5B25399B6",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -145.73,
   "hfov": 20.42,
   "pitch": -35.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_E9E73615_E46A_8E2D_41E4_A914A85C55E8); this.mainPlayList.set('selectedIndex', 31)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -35.05,
   "yaw": -145.73,
   "hfov": 20.42,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_8359CFB3_CCD4_E914_41E3_C722AAA8076C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.36,
   "hfov": 16.99,
   "pitch": -7.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F, this.camera_EA3A176F_E46A_8EFD_41D3_DD9A084617AF); this.mainPlayList.set('selectedIndex', 26)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -7.01,
   "yaw": -20.36,
   "hfov": 16.99,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8BE39F15_CCDC_691C_41CD_16F218EB105F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.85,
   "hfov": 21.65,
   "pitch": -12.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_EA2FD75E_E46A_8EDF_41E5_1CA6A33806CD); this.mainPlayList.set('selectedIndex', 23)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -12.91,
   "yaw": 152.85,
   "hfov": 21.65,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_83E7977F_CD73_B90C_41D8_752493A076BC",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.43,
   "hfov": 16.97,
   "pitch": -3.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_EA5EC74D_E46A_8E3D_41DA_8893C63134DC); this.mainPlayList.set('selectedIndex', 27)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.53,
   "yaw": 104.43,
   "hfov": 16.97,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_9EFFE8D6_CBFC_D71C_41CB_AD532CDE8F8E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.66,
   "hfov": 15.49,
   "pitch": -7.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Hallway Courtyard View",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -7.77,
   "yaw": -53.66,
   "hfov": 15.49,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_9EF0F62B_CBF5_BB34_41CE_CD3D767BFDFB",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.8,
   "hfov": 18.28,
   "pitch": -2.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_E8BC88D4_E46A_8223_41EB_6DFC54158CF5); this.mainPlayList.set('selectedIndex', 22)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -2.72,
   "yaw": 150.8,
   "hfov": 18.28,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_9DFC42FD_CBF4_7B0C_41EA_2E47922618D2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.33,
   "hfov": 18.09,
   "pitch": -3.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.06,
   "yaw": -120.33,
   "hfov": 18.09,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "minHeight": 1,
 "left": "1.25%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": 42,
 "propagateClick": false,
 "id": "IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2",
 "mode": "push",
 "height": 43,
 "class": "IconButton",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2.png",
 "maxWidth": 42,
 "paddingBottom": 0,
 "maxHeight": 43,
 "transparencyActive": false,
 "borderSize": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "bottom": "7.57%",
 "cursor": "hand",
 "shadow": false,
 "data": {
  "name": "IconButton13821"
 }
},
{
 "minHeight": 50,
 "left": 0,
 "toolTipShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarLeft": 0,
 "toolTipFontFamily": "Arial",
 "minWidth": 100,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderRadius": 3,
 "progressBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingRight": 6,
 "transitionDuration": 500,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "progressBarBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 6,
 "toolTipShadowBlurRadius": 3,
 "firstTransitionDuration": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 0,
 "top": 0,
 "borderRadius": 0,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "progressHeight": 10,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#000000",
 "toolTipPaddingTop": 4,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": "11px",
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingTop": 15,
 "toolTipOpacity": 1,
 "paddingLeft": 15,
 "width": "70%",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "playbackBarProgressOpacity": 1,
 "id": "MainViewer",
 "progressLeft": 0,
 "toolTipFontWeight": "bold",
 "playbackBarHeight": 10,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadWidth": 6,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressRight": 0,
 "paddingBottom": 15,
 "toolTipTextShadowBlurRadius": 3,
 "progressOpacity": 1,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "transitionMode": "blending",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadow": true
},
{
 "id": "overlay_FBC5763E_DCCD_FB0C_41D6_66D33197C836",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.7,
   "hfov": 22.76,
   "pitch": -15.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Public Works North Wing Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_E997D6DE_E46A_8FDF_41DE_0291E42BA5B4); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -15.61,
   "yaw": -25.7,
   "hfov": 22.76,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8D5BFB54_DB4C_691C_41D4_796EDB8312A3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.03,
   "hfov": 16.74,
   "pitch": -9.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67, this.camera_E98706C3_E46A_8E25_41D7_86904F6C42DA); this.mainPlayList.set('selectedIndex', 12)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -9.65,
   "yaw": 135.03,
   "hfov": 16.74,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E15B9392_C5CD_B914_41D6_CAB9EC8C6109",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89,
   "hfov": 19.87,
   "pitch": -13.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Main Lobby",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_EA1617A2_E46A_8E67_41A8_4E54144FB473); this.mainPlayList.set('selectedIndex', 5)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -13.83,
   "yaw": 89,
   "hfov": 19.87,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E15C91A5_C5CC_593C_41D4_49A13336AF4D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.64,
   "hfov": 20.33,
   "pitch": -16.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Jump to Outdoor Lounge",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819, this.camera_EAF457C4_E46A_8E23_41E0_0E80A4E2668E); this.mainPlayList.set('selectedIndex', 8)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -16.67,
   "yaw": -161.64,
   "hfov": 20.33,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E158F60A_C5CF_BAF4_41C4_E8E7A2A81B35",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.79,
   "hfov": 20.61,
   "pitch": -32.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Jump to Courtyard",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16, this.camera_EAE407B3_E46A_8E65_41E9_8252B02D3F58); this.mainPlayList.set('selectedIndex', 7)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -32.26,
   "yaw": -25.79,
   "hfov": 20.61,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E26707FE_C5D4_D90C_41C7_D02D347E4F6D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.3,
   "hfov": 21.78,
   "pitch": -12.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Jump to Coffee Kiosk",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_EAB37806_E46A_822F_41E0_59F728F7E247); this.mainPlayList.set('selectedIndex', 35)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.7,
   "yaw": -78.3,
   "hfov": 21.78,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E38E4D16_C5D7_E91C_41E1_3EF9446C5F30",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.93,
   "hfov": 21.38,
   "pitch": -12.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Jump to North Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_E8C94848_E46A_8223_41E6_31238D7ED83B); this.mainPlayList.set('selectedIndex', 10)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.61,
   "yaw": -60.93,
   "hfov": 21.38,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_FE908CF2_DD3C_AF14_41C5_F36416163C88",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.04,
   "hfov": 23.01,
   "pitch": -25.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Foyer",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_E91739D2_E46A_8227_41E5_BBE56823ECD1); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -25.17,
   "yaw": -47.04,
   "hfov": 23.01,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_FF8B7DD4_DD3C_E91C_41DD_FDF28BC23C2C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.59,
   "hfov": 21.89,
   "pitch": -22.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF, this.camera_E91B69C2_E46A_8227_41D0_8D0EEAE6D1E4); this.mainPlayList.set('selectedIndex', 29)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -22.82,
   "yaw": 150.59,
   "hfov": 21.89,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B76768D0_BB4D_F714_41E6_F60680726080_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_FF8997DC_DD3C_D90C_41E2_8D239539FB89",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.21,
   "hfov": 22.25,
   "pitch": -26.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B76768D0_BB4D_F714_41E6_F60680726080, this.camera_E88998E5_E46A_83ED_41D5_3A7C8D33AB41); this.mainPlayList.set('selectedIndex', 28)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -26.24,
   "yaw": -98.21,
   "hfov": 22.25,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_FF0CD69D_DD34_DB0C_41E7_135D4B7B9070",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 42.02,
   "hfov": 24.16,
   "pitch": -9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_E885F8F5_E46A_83ED_41B6_D517AE602C84); this.mainPlayList.set('selectedIndex', 30)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -9,
   "yaw": 42.02,
   "hfov": 24.16,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "minHeight": 1,
 "left": "0%",
 "toolTipShadowVerticalLength": 0,
 "progressBackgroundOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarOpacity": 1,
 "playbackBarHeadBorderRadius": 0,
 "toolTipTextShadowColor": "#000000",
 "playbackBarLeft": 0,
 "toolTipFontFamily": "Arial",
 "minWidth": 1,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "toolTipBorderRadius": 3,
 "progressBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingRight": 6,
 "transitionDuration": 500,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "progressBarBorderColor": "#000000",
 "toolTipFontColor": "#606060",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingLeft": 6,
 "toolTipShadowBlurRadius": 3,
 "firstTransitionDuration": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 2,
 "top": 0,
 "borderRadius": 0,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "progressHeight": 10,
 "shadow": false,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#000000",
 "toolTipPaddingTop": 4,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": "11px",
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "paddingLeft": 0,
 "width": "100%",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "propagateClick": false,
 "playbackBarProgressOpacity": 1,
 "id": "MapViewer",
 "progressLeft": 0,
 "toolTipFontWeight": "bold",
 "playbackBarHeight": 10,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadWidth": 6,
 "playbackBarBorderSize": 0,
 "height": "80%",
 "toolTipBorderColor": "#767676",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressRight": 0,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressOpacity": 1,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "transitionMode": "blending",
 "data": {
  "name": "MapViewer"
 },
 "playbackBarHeadShadow": true
},
{
 "id": "overlay_E0BA82D0_C5F3_DB14_41DF_FD2457E25DE9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.64,
   "hfov": 18.72,
   "pitch": -12.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Shared Building Meeting Room (1 of 3)",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07, this.camera_EA6286FA_E46A_8FE7_41E8_B89F710C0230); this.mainPlayList.set('selectedIndex', 6)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.53,
   "yaw": -41.64,
   "hfov": 18.72,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E0DAC8C9_C5FC_7774_41BE_CA759112717F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.44,
   "hfov": 18.2,
   "pitch": -11.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Coffee Kiosk",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_EA41D732_E46A_8E67_41E8_9B397501E824); this.mainPlayList.set('selectedIndex', 35)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -11.51,
   "yaw": -3.44,
   "hfov": 18.2,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E023939C_C5FC_590C_41B0_53B98B7CE40E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.81,
   "hfov": 16.97,
   "pitch": -17.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Main Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_EA736716_E46A_8E2F_41CE_FF9CCDF7489B); this.mainPlayList.set('selectedIndex', 1)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -17.27,
   "yaw": 155.81,
   "hfov": 16.97,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_8744D04C_CCF4_570C_41CA_541F08C256CA",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.81,
   "hfov": 17.46,
   "pitch": -8.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_E8D038A3_E46A_8265_41E1_3577F94AB1B3); this.mainPlayList.set('selectedIndex', 27)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -8.29,
   "yaw": -120.81,
   "hfov": 17.46,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_85885EC9_CCF3_EB74_41E3_FA5DED0A80D9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.58,
   "hfov": 17.94,
   "pitch": -8.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_E8A218C3_E46A_8225_41C2_0D7D55BF4CD2); this.mainPlayList.set('selectedIndex', 19)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -8.03,
   "yaw": -163.58,
   "hfov": 17.94,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8508E24C_C5DC_7B0C_41D9_1DA426602696",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.01,
   "hfov": 15.63,
   "pitch": -3.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C, this.camera_E8A8B8B3_E46A_8265_41DC_40DE59939285); this.mainPlayList.set('selectedIndex', 20)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.18,
   "yaw": -20.01,
   "hfov": 15.63,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E47BAC2A_C5DC_AF34_4175_139F9A9ED1FE",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.51,
   "hfov": 23.16,
   "pitch": -17.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Main Lobby",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_EA6ADA72_E46A_86E7_41D8_1C8A2D6B69CF); this.mainPlayList.set('selectedIndex', 5)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -17.71,
   "yaw": -11.51,
   "hfov": 23.16,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_8B4159AC_DB34_690C_41E3_CDE222A725F5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.95,
   "hfov": 8.84,
   "pitch": -2.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing  Staircase Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A, this.camera_E89FD905_E46A_822D_4188_4662CB1CE8AE); this.mainPlayList.set('selectedIndex', 16)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -2.03,
   "yaw": 88.95,
   "hfov": 8.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 188,
      "height": 188,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_1_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_87B3BE15_DB4C_EB1C_41D7_C141EDFA2B7E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.99,
   "hfov": 15.45,
   "pitch": -12.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Hallway Courtyard View",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -12.38,
   "yaw": 146.99,
   "hfov": 15.45,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_874CC225_DB3C_5B3C_41DD_4B12D212E31D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.53,
   "hfov": 20.03,
   "pitch": -10.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Head down North Staircase",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_E9684915_E46A_822D_41EA_B0FA0EFD6A84); this.mainPlayList.set('selectedIndex', 10)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -10.75,
   "yaw": 88.53,
   "hfov": 20.03,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_A78C603F_BB33_B70C_41D1_992C2A832A0D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.53,
   "hfov": 18.79,
   "pitch": -6.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Jump to Outdoor Lounge",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819, this.camera_EADB4B74_E46A_86E3_41CD_1DF2DD92464A); this.mainPlayList.set('selectedIndex', 8)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -6.79,
   "yaw": 104.53,
   "hfov": 18.79,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 1110,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8EECC05D_DB53_D70C_41E7_B9BA69E1FC5B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.35,
   "hfov": 9.74,
   "pitch": 4.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_4_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Enter Main Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_EACAFB5D_E46A_86DD_41E9_2B663A4EA66A); this.mainPlayList.set('selectedIndex', 1)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 4.18,
   "yaw": 165.35,
   "hfov": 9.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 208,
      "height": 201,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_4_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_9C9A0F5F_CBCC_E90C_41DD_2736FD05FF6C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -31.18,
   "hfov": 18.01,
   "pitch": -3.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_EA795A83_E46A_8625_41E4_3AB8BE5CDE31); this.mainPlayList.set('selectedIndex', 27)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.8,
   "yaw": -31.18,
   "hfov": 18.01,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_81BDF5FD_CBCC_590C_41AD_C9081E514F86",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.46,
   "hfov": 17.73,
   "pitch": -1.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_EA472AA4_E46A_8663_41D6_669951AF6ABD); this.mainPlayList.set('selectedIndex', 22)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -1.43,
   "yaw": 21.46,
   "hfov": 17.73,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_9D62C916_CBCC_691D_41E7_61C409C0A16D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.04,
   "hfov": 17.39,
   "pitch": -3.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_EA767A93_E46A_8625_41E2_ECA9ACBC11CF); this.mainPlayList.set('selectedIndex', 23)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.26,
   "yaw": -84.04,
   "hfov": 17.39,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_867809AB_CCCC_6934_41D4_DBCB2B60CE9E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.24,
   "hfov": 17.16,
   "pitch": -0.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_E9B02A41_E46A_8625_41CD_39D6F4E6466D); this.mainPlayList.set('selectedIndex', 25)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -0.51,
   "yaw": -32.24,
   "hfov": 17.16,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_86477B04_CCCC_AAFC_41E5_1958E260784A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.04,
   "hfov": 17.72,
   "pitch": -5.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_E9A45A31_E46A_8665_41E9_FCEA2C0C0349); this.mainPlayList.set('selectedIndex', 27)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.65,
   "yaw": 55.04,
   "hfov": 17.72,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_80BA5B74_CCD5_A91C_41E9_B0B180FEDDB7",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.99,
   "hfov": 17.07,
   "pitch": -5.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_E98E7A51_E46A_8625_41BF_96792BF4A343); this.mainPlayList.set('selectedIndex', 19)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.68,
   "yaw": 93.99,
   "hfov": 17.07,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_F7780DCF_DCF5_A90C_41DE_66EF2B03F993",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.13,
   "hfov": 20.96,
   "pitch": -12.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67, this.camera_EA0A8780_E46A_8E23_41EC_1D63C5ABB53E); this.mainPlayList.set('selectedIndex', 12)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.12,
   "yaw": 13.13,
   "hfov": 20.96,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F95FE6EB_DCF3_DB34_41E1_F617D3342B9C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 120.16,
   "hfov": 20.43,
   "pitch": -10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532, this.camera_EA191791_E46A_8E25_41BD_9E5B17D2CEEF); this.mainPlayList.set('selectedIndex', 14)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -10.84,
   "yaw": 120.16,
   "hfov": 20.43,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E062B18B_DD4C_79F4_41D5_6AD5BA90FA4B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.99,
   "hfov": 22.61,
   "pitch": -16.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Office",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814, this.camera_E9BBB690_E46A_8E23_41DE_546AF6FD7176); this.mainPlayList.set('selectedIndex', 32)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -16.81,
   "yaw": -103.99,
   "hfov": 22.61,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E1E82C4B_DD4C_AF74_41E0_85735B7227DC",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.79,
   "hfov": 24,
   "pitch": -14.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Office",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265, this.camera_E9AAD675_E46A_8EED_41E3_8F5403B530F8); this.mainPlayList.set('selectedIndex', 33)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -14.67,
   "yaw": 109.79,
   "hfov": 24,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E0092DC0_DD4C_A974_41B8_8EA6C384ED7D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.37,
   "hfov": 22.8,
   "pitch": -9.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_E98896A7_E46A_8E68_41EA_4FA70114BFD1); this.mainPlayList.set('selectedIndex', 30)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -9.52,
   "yaw": 8.37,
   "hfov": 22.8,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_DE0C8EF2_C5D3_AB14_41E0_7A476A034643",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.23,
   "hfov": 20.69,
   "pitch": 14.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Foyer",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_EA1F9B0E_E46A_863F_41A9_1789D1AC2A7A); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 14.67,
   "yaw": -140.23,
   "hfov": 20.69,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F1A1F414_DB4F_BF1C_41DD_6699285A7ECD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.97,
   "hfov": 13.78,
   "pitch": -23.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_EA018AF2_E46A_87E7_41E9_EA355A94D88A); this.mainPlayList.set('selectedIndex', 1)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -23.31,
   "yaw": -39.97,
   "hfov": 13.78,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E060FE33_DD54_EB14_41D6_17DE8E550ED3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.14,
   "hfov": 24.5,
   "pitch": -20.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_E8CAC85A_E46A_8227_4190_936B48D56FCD); this.mainPlayList.set('selectedIndex', 30)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -20.13,
   "yaw": -109.14,
   "hfov": 24.5,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_8D3BCBB5_CD54_A91C_41CF_5755E33BD1A3",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.26,
   "hfov": 17.74,
   "pitch": -7.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_E953159E_E46A_825F_41C7_8BF69A40D8B8); this.mainPlayList.set('selectedIndex', 19)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -7.58,
   "yaw": 158.26,
   "hfov": 17.74,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8F522B1B_CD54_6914_41E2_67366406B83A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -115.25,
   "hfov": 17.02,
   "pitch": -5.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_E946B58E_E46A_823F_41D5_089220258636); this.mainPlayList.set('selectedIndex', 23)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.09,
   "yaw": -115.25,
   "hfov": 17.02,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8E1D4AB2_CD5C_6B14_41E9_9C05C7FE03F1",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.46,
   "hfov": 15.57,
   "pitch": -1.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_E94CE57D_E46A_82DD_418B_481B912E4547); this.mainPlayList.set('selectedIndex', 25)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -1.96,
   "yaw": -78.46,
   "hfov": 15.57,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_828B816F_CD5F_D90C_41E9_9C3319952191",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.53,
   "hfov": 17.34,
   "pitch": -3.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_E971056C_E46A_82E3_41D6_FAD7055EA6A7); this.mainPlayList.set('selectedIndex', 22)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.63,
   "yaw": 60.53,
   "hfov": 17.34,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_9EBF5847_CBDC_F77C_41BF_44C89D9CD85E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.71,
   "hfov": 16.15,
   "pitch": -4.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -4.47,
   "yaw": -45.71,
   "hfov": 16.15,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_9FDE0217_CBDC_BB1C_41D5_7827D4680D8D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.25,
   "hfov": 15,
   "pitch": -1.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F, this.camera_EA30BAD6_E46A_862F_41E8_E00A95D7F60A); this.mainPlayList.set('selectedIndex', 26)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -1.1,
   "yaw": 32.25,
   "hfov": 15,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_9D07DBDE_CBF4_690C_41E8_C8BD6208D196",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.62,
   "hfov": 18.71,
   "pitch": -12.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor CTM Area Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171, this.camera_EA221AC5_E46A_862D_41E3_EE3EE6C44E4F); this.mainPlayList.set('selectedIndex', 21)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.01,
   "yaw": -103.62,
   "hfov": 18.71,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E610FD14_C7F7_E91C_41B2_18D312A5996B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 27.89,
   "hfov": 13.21,
   "pitch": -9.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Jump to Main Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD, this.camera_E9E589E2_E46A_85E7_41D0_BBE3C383419A); this.mainPlayList.set('selectedIndex', 0)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -9.23,
   "yaw": 27.89,
   "hfov": 13.21,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E9D227A9_C7F4_5934_4191_7DF57E605884",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.28,
   "hfov": 12.35,
   "pitch": -4.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Jump to Coffee Kiosk",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_E9F169F2_E46A_85E7_41CE_82C76AB32661); this.mainPlayList.set('selectedIndex', 35)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -4.43,
   "yaw": -80.28,
   "hfov": 12.35,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 1110,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_F610CEB6_DCDC_6B1C_41E8_A359129394BC",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.83,
   "hfov": 18.8,
   "pitch": -31.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "North Staircase",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB, this.camera_E9C11637_E46A_8E6D_41D9_872C85AECA19); this.mainPlayList.set('selectedIndex', 18)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -31.85,
   "yaw": 147.83,
   "hfov": 18.8,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F6CB96EF_DCD5_DB0C_41E4_DFFD50D9AD45",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.74,
   "hfov": 21.77,
   "pitch": -4.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Breakroom Kitchenette",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA, this.camera_E9F57627_E46A_8E6D_41CD_4168FB088608); this.mainPlayList.set('selectedIndex', 15)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -4.94,
   "yaw": -15.74,
   "hfov": 21.77,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8AADA53A_DB34_5914_41C7_C37D932D358D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.35,
   "hfov": 14.49,
   "pitch": -5.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB, this.camera_E9DF4659_E46A_8E25_41E2_49D5C3C37ECE); this.mainPlayList.set('selectedIndex', 17)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.58,
   "yaw": -69.35,
   "hfov": 14.49,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_E37F2C5B_DD5D_AF14_41E8_F5A5D4559BE9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 108.69,
   "hfov": 23.85,
   "pitch": -10.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Breakroom Kitchenette",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7, this.camera_E93545CF_E46A_823D_41E9_B8A5D8CCD19F); this.mainPlayList.set('selectedIndex', 34)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -10.96,
   "yaw": 108.69,
   "hfov": 23.85,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E3551545_DD54_597C_41E3_F16D9D976741",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.89,
   "hfov": 23.28,
   "pitch": -13.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF, this.camera_E93915BF_E46A_825D_41D1_1534BEAFEB73); this.mainPlayList.set('selectedIndex', 29)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -13.69,
   "yaw": -144.89,
   "hfov": 23.28,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_E3128B30_DD54_6914_41DB_3250C26A37F5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.58,
   "hfov": 23.81,
   "pitch": -8.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works South Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_E92F75AE_E46A_827F_41DA_0B67EC689817); this.mainPlayList.set('selectedIndex', 31)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -8.93,
   "yaw": 62.58,
   "hfov": 23.81,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_EBFDBC34_C7D4_AF1C_41B5_9E6B9D81C4D2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.71,
   "hfov": 21.3,
   "pitch": -14.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Hallway Courtyard View",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237, this.camera_E9621925_E46A_826D_41E2_ABC54FFD8D08); this.mainPlayList.set('selectedIndex', 24)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -14.54,
   "yaw": -27.71,
   "hfov": 21.3,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_878C3B1E_DB3C_A90C_41E9_40AB17E397B4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.25,
   "hfov": 11.48,
   "pitch": -1.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Foyer",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_E97E9936_E46A_826F_41D6_3F8E16A87425); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -1.05,
   "yaw": 148.25,
   "hfov": 11.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 244,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_2_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_8D3CE9EE_DB4F_E90C_41C9_9576EFB634D8",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.79,
   "hfov": 16.42,
   "pitch": -4.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C, this.camera_E8C6F87E_E46A_82DF_41C1_1A8BB37F26FA); this.mainPlayList.set('selectedIndex', 11)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -4.54,
   "yaw": -51.79,
   "hfov": 16.42,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8DB93129_DB4C_5934_41C8_B0AA961BBFD7",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.98,
   "hfov": 14.58,
   "pitch": -5.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856, this.camera_E8C0F86C_E46A_82E3_41A2_61EEB33C0C4C); this.mainPlayList.set('selectedIndex', 13)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.99,
   "yaw": 170.98,
   "hfov": 14.58,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_F4C6E88F_DB35_B70C_41A6_E5B7540A978D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.41,
   "hfov": 18.76,
   "pitch": -20.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A, this.camera_EAEC3B25_E46A_866D_41B2_930BC114A46C); this.mainPlayList.set('selectedIndex', 16)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -20.63,
   "yaw": -89.41,
   "hfov": 18.76,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F379F50A_DB34_DEF5_41E7_624647E26E55",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.58,
   "hfov": 19.22,
   "pitch": -18.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works North Wing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB, this.camera_EAFCEB41_E46A_8625_41CD_82AA769FD8BC); this.mainPlayList.set('selectedIndex', 17)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -18.77,
   "yaw": -65.58,
   "hfov": 19.22,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_A72C4631_BB53_BB14_41DB_74016C593F0A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.91,
   "hfov": 18.91,
   "pitch": 5.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Main Staircase Landing",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A, this.camera_E9CF6A02_E46A_8627_41BD_5D7FFBCC1E47); this.mainPlayList.set('selectedIndex', 2)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": 5.17,
   "yaw": 129.91,
   "hfov": 18.91,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_2_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_F1159DB4_DB77_A91C_41D1_9ED637865B45",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.18,
   "hfov": 14.93,
   "pitch": -8.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Main Lobby",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_E9A9DA22_E46A_8667_41E3_D7CAFC5C8DF0); this.mainPlayList.set('selectedIndex', 5)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -8.4,
   "yaw": 177.18,
   "hfov": 14.93,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8E9E27BA_DB55_B914_41E0_8510B76576EB",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.26,
   "hfov": 11.48,
   "pitch": 0.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_5_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Exit Main Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD, this.camera_E9DB7A12_E46A_8627_41DC_22053063D572); this.mainPlayList.set('selectedIndex', 0)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 0.48,
   "yaw": -60.26,
   "hfov": 11.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 244,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_5_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_BAAC161D_ABA0_2C94_41E0_7D1F3B335827",
 "map": {
  "width": 228.49,
  "height": 43.24,
  "y": 721.05,
  "class": "HotspotMapOverlayMap",
  "x": 638.82,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 115,
     "height": 22,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_0_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "Main Entrance"
  }
 ],
 "data": {
  "label": "Main Entrance"
 },
 "useHandCursor": true,
 "image": {
  "width": 228.49,
  "height": 43.24,
  "y": 720.58,
  "class": "HotspotMapOverlayImage",
  "x": 638.53,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 230,
     "height": 45,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_0.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAACE61D_ABA0_2C94_41E2_3AABEDEB8946",
 "map": {
  "width": 115.11,
  "height": 71.14,
  "y": 266.88,
  "class": "HotspotMapOverlayMap",
  "x": 1053.76,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 58,
     "height": 36,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_1_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "toolTip": "North Entrance"
  }
 ],
 "data": {
  "label": "North Entrance"
 },
 "useHandCursor": true,
 "image": {
  "width": 115.11,
  "height": 71.14,
  "y": 260.37,
  "class": "HotspotMapOverlayImage",
  "x": 1047.54,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 117,
     "height": 73,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_1.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAACF61D_ABA0_2C97_41DE_E840601F8009",
 "map": {
  "width": 47,
  "height": 43.5,
  "y": 568.19,
  "class": "HotspotMapOverlayMap",
  "x": 718.08,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 22,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_2_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "toolTip": "Shared building 1st Floor Meeting Room (1 of 3)"
  }
 ],
 "data": {
  "label": "1st Floor Meeting Room"
 },
 "useHandCursor": true,
 "image": {
  "width": 47,
  "height": 43.5,
  "y": 567.91,
  "class": "HotspotMapOverlayImage",
  "x": 717.73,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 49,
     "height": 45,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_2.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAACE61E_ABA0_2C94_4174_57C93DEB6516",
 "map": {
  "width": 20,
  "height": 17,
  "y": 600.58,
  "class": "HotspotMapOverlayMap",
  "x": 774.57,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 11,
     "height": 9,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_3_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "Hall Lobby"
  }
 ],
 "data": {
  "label": "Hall Lobby"
 },
 "useHandCursor": true,
 "image": {
  "width": 20,
  "height": 17,
  "y": 596.95,
  "class": "HotspotMapOverlayImage",
  "x": 770.82,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 22,
     "height": 19,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_3.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAACF61E_ABA0_2C94_41D4_FD2239E17158",
 "map": {
  "width": 30.5,
  "height": 21.5,
  "y": 637.92,
  "class": "HotspotMapOverlayMap",
  "x": 730.89,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 11,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_4_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "Main Staircase"
  }
 ],
 "data": {
  "label": "Main Staircase"
 },
 "useHandCursor": true,
 "image": {
  "width": 30.5,
  "height": 21.5,
  "y": 637.69,
  "class": "HotspotMapOverlayImage",
  "x": 730.52,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 32,
     "height": 23,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_4.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAACC61E_ABA0_2C94_41DE_B87116947DD4",
 "map": {
  "width": 100.78,
  "height": 100.88,
  "y": 407.27,
  "class": "HotspotMapOverlayMap",
  "x": 854.93,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 51,
     "height": 51,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_5_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "toolTip": "Courtyard (Ping Pong, Corn Hole, putting green)"
  }
 ],
 "data": {
  "label": "Courtyard"
 },
 "useHandCursor": true,
 "image": {
  "width": 100.78,
  "height": 100.88,
  "y": 407.03,
  "class": "HotspotMapOverlayImage",
  "x": 854.44,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 102,
     "height": 102,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_5.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAACD61E_ABA0_2C94_41E2_08339D404948",
 "map": {
  "width": 79.41,
  "height": 55.59,
  "y": 515.26,
  "class": "HotspotMapOverlayMap",
  "x": 267.87,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 40,
     "height": 28,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_6_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "toolTip": "Outdoor Lounge"
  }
 ],
 "data": {
  "label": "Outdoor Lounge"
 },
 "useHandCursor": true,
 "image": {
  "width": 79.41,
  "height": 55.59,
  "y": 514.97,
  "class": "HotspotMapOverlayImage",
  "x": 267.57,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 81,
     "height": 57,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_6.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAACA61E_ABA0_2C94_41BE_DC7F0327E450",
 "map": {
  "width": 26.42,
  "height": 23.86,
  "y": 664.5,
  "class": "HotspotMapOverlayMap",
  "x": 762.88,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 14,
     "height": 12,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_7_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Staircase Lobby"
  }
 ],
 "data": {
  "label": "Staircase Lobby"
 },
 "useHandCursor": true,
 "image": {
  "width": 26.42,
  "height": 23.86,
  "y": 664.23,
  "class": "HotspotMapOverlayImage",
  "x": 762.52,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 28,
     "height": 25,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_7.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAACB61E_ABA0_2C94_41B0_442F5B971978",
 "map": {
  "width": 86.61,
  "height": 39.47,
  "y": 1364.96,
  "class": "HotspotMapOverlayMap",
  "x": 717.14,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 44,
     "height": 20,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_8_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "2nd Floor Foyer"
  }
 ],
 "data": {
  "label": "2nd Floor Foyer"
 },
 "useHandCursor": true,
 "image": {
  "width": 86.61,
  "height": 39.47,
  "y": 1364.75,
  "class": "HotspotMapOverlayImage",
  "x": 716.83,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 88,
     "height": 41,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_8.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAAC861E_ABA0_2C94_41E4_E5933D9496E0",
 "map": {
  "width": 65.78,
  "height": 38.37,
  "y": 1308.62,
  "class": "HotspotMapOverlayMap",
  "x": 726.86,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 33,
     "height": 20,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_9_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Building Gym"
  }
 ],
 "data": {
  "label": "Gym"
 },
 "useHandCursor": true,
 "image": {
  "width": 65.78,
  "height": 38.37,
  "y": 1308.37,
  "class": "HotspotMapOverlayImage",
  "x": 726.57,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 67,
     "height": 40,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_9.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAD6CE91_ABE0_3C6C_41E4_7978DC74D3A1",
 "map": {
  "width": 26,
  "height": 24.21,
  "y": 1370.88,
  "class": "HotspotMapOverlayMap",
  "x": 827.66,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 14,
     "height": 13,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_10_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "toolTip": "Public Works North Wing"
  }
 ],
 "data": {
  "label": "PW North Wing 1"
 },
 "useHandCursor": true,
 "image": {
  "width": 26,
  "height": 24.21,
  "y": 1370.58,
  "class": "HotspotMapOverlayImage",
  "x": 827.42,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 28,
     "height": 26,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_10.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B90C45E7_ABE0_EFB4_41DE_4A54C5B39F27",
 "map": {
  "width": 25.47,
  "height": 21.37,
  "y": 1355.05,
  "class": "HotspotMapOverlayMap",
  "x": 872.5,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 13,
     "height": 11,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_11_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "toolTip": "Public Works North Wing"
  }
 ],
 "data": {
  "label": "PW North Wing 2"
 },
 "useHandCursor": true,
 "image": {
  "width": 25.47,
  "height": 21.37,
  "y": 1354.74,
  "class": "HotspotMapOverlayImage",
  "x": 872.19,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 27,
     "height": 23,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_11.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BFA3E90E_ABE0_6474_41E4_997674AEAE74",
 "map": {
  "width": 30.87,
  "height": 23.74,
  "y": 1419.66,
  "class": "HotspotMapOverlayMap",
  "x": 975.65,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 12,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_12_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "toolTip": "Public Works North Wing"
  }
 ],
 "data": {
  "label": "PW North Wing 3"
 },
 "useHandCursor": true,
 "image": {
  "width": 30.87,
  "height": 23.74,
  "y": 1413.56,
  "class": "HotspotMapOverlayImage",
  "x": 970.18,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 32,
     "height": 25,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_12.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BF9DE7D3_ABA0_6BEC_41A8_B829F98CE962",
 "map": {
  "width": 28.49,
  "height": 28.49,
  "y": 1321.29,
  "class": "HotspotMapOverlayMap",
  "x": 1088.64,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 15,
     "height": 15,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_13_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "toolTip": "Public Works North Wing"
  }
 ],
 "data": {
  "label": "PW North Wing 4"
 },
 "useHandCursor": true,
 "image": {
  "width": 28.49,
  "height": 28.49,
  "y": 1315.42,
  "class": "HotspotMapOverlayImage",
  "x": 1082.14,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 30,
     "height": 30,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_13.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B894419E_ABA0_27A3_41D2_1E377213CB44",
 "map": {
  "width": 28.49,
  "height": 28.49,
  "y": 1216.67,
  "class": "HotspotMapOverlayMap",
  "x": 1075.4,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 15,
     "height": 15,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_14_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "toolTip": "Public Works North Wing"
  }
 ],
 "data": {
  "label": "PW North Wing 5"
 },
 "useHandCursor": true,
 "image": {
  "width": 28.49,
  "height": 28.49,
  "y": 1210.5,
  "class": "HotspotMapOverlayImage",
  "x": 1069.2,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 30,
     "height": 30,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_14.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B8A7E06C_ABA0_24B4_41D6_55B06BFFCCCA",
 "map": {
  "width": 30.87,
  "height": 27.31,
  "y": 1270.11,
  "class": "HotspotMapOverlayMap",
  "x": 966.12,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 14,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_15_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "toolTip": "Public Works North Wing Breakroom Kitchenette"
  }
 ],
 "data": {
  "label": "PW North Wing 6"
 },
 "useHandCursor": true,
 "image": {
  "width": 30.87,
  "height": 27.31,
  "y": 1264.07,
  "class": "HotspotMapOverlayImage",
  "x": 960.17,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 32,
     "height": 29,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_15.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BF01B3EB_ABA0_2BBC_41E3_956E103AF495",
 "map": {
  "width": 29.68,
  "height": 24.93,
  "y": 1173.59,
  "class": "HotspotMapOverlayMap",
  "x": 1021.91,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 15,
     "height": 13,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_16_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "toolTip": "Public Works North Wing"
  }
 ],
 "data": {
  "label": "PW North Wing 7"
 },
 "useHandCursor": true,
 "image": {
  "width": 29.68,
  "height": 24.93,
  "y": 1167.98,
  "class": "HotspotMapOverlayImage",
  "x": 1015.53,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 31,
     "height": 26,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_16.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_A47560B6_ABF9_DABD_41DD_2D0C0924596A",
 "map": {
  "width": 25.43,
  "height": 22.38,
  "y": 1066.47,
  "class": "HotspotMapOverlayMap",
  "x": 1039.26,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 13,
     "height": 12,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_17_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "2nd Floor North Stairwell"
 },
 "useHandCursor": true,
 "image": {
  "width": 25.43,
  "height": 22.38,
  "y": 1064.97,
  "class": "HotspotMapOverlayImage",
  "x": 1037.98,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 27,
     "height": 24,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_17.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BAB1F8E2_ABF9_CAD5_41A2_8EE4FE8AAA41",
 "map": {
  "width": 33,
  "height": 34.34,
  "y": 1173.61,
  "class": "HotspotMapOverlayMap",
  "x": 831.67,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 17,
     "height": 18,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_18_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "toolTip": "CTM Area"
  }
 ],
 "data": {
  "label": "CTM Area 2"
 },
 "useHandCursor": true,
 "image": {
  "width": 33,
  "height": 34.34,
  "y": 1173.28,
  "class": "HotspotMapOverlayImage",
  "x": 831.19,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 35,
     "height": 36,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_18.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_BB64108C_ABEF_F96D_41B2_BEAF0EF18985",
 "map": {
  "width": 22.38,
  "height": 21.48,
  "y": 1270.43,
  "class": "HotspotMapOverlayMap",
  "x": 793.26,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 12,
     "height": 11,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_19_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "toolTip": "CTM Area Entrance"
  }
 ],
 "data": {
  "label": "CTM Entrance 1"
 },
 "useHandCursor": true,
 "image": {
  "width": 22.38,
  "height": 21.48,
  "y": 1270.06,
  "class": "HotspotMapOverlayImage",
  "x": 793.01,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 24,
     "height": 23,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_19.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_A2CE0BCB_BCE8_CEFB_41E3_862D6281510A",
 "map": {
  "width": 21,
  "height": 19.21,
  "y": 318.95,
  "class": "HotspotMapOverlayMap",
  "x": 973.72,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 11,
     "height": 10,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_20_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "toolTip": "North Staircase"
  }
 ],
 "data": {
  "label": "North Staircase"
 },
 "useHandCursor": true,
 "image": {
  "width": 21,
  "height": 19.21,
  "y": 315.05,
  "class": "HotspotMapOverlayImage",
  "x": 970,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 23,
     "height": 21,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_20.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_A389B1C1_B4AF_DAD7_41C5_947F63A91024",
 "map": {
  "width": 33.14,
  "height": 33.14,
  "y": 989.93,
  "class": "HotspotMapOverlayMap",
  "x": 736.56,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 17,
     "height": 17,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_21_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "toolTip": "CTM Area"
  }
 ],
 "data": {
  "label": "CTM Area 5"
 },
 "useHandCursor": true,
 "image": {
  "width": 33.14,
  "height": 33.14,
  "y": 989.47,
  "class": "HotspotMapOverlayImage",
  "x": 736.33,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 35,
     "height": 35,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_21.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B461ADDE_BAA7_EBC6_41C1_202025AB3165",
 "map": {
  "width": 34.06,
  "height": 34.06,
  "y": 1083.15,
  "class": "HotspotMapOverlayMap",
  "x": 743.44,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 18,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_22_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "toolTip": "CTM Area"
  }
 ],
 "data": {
  "label": "CTM Area 4"
 },
 "useHandCursor": true,
 "image": {
  "width": 34.06,
  "height": 34.06,
  "y": 1083.15,
  "class": "HotspotMapOverlayImage",
  "x": 743.44,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 36,
     "height": 36,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_22.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B4791A54_BAA9_A8DA_41C7_B7E23EB688DD",
 "map": {
  "width": 33.21,
  "height": 33.39,
  "y": 1043.37,
  "class": "HotspotMapOverlayMap",
  "x": 880.04,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 17,
     "height": 17,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_23_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "toolTip": "Public Works Area"
  }
 ],
 "data": {
  "label": "Public Works 2"
 },
 "useHandCursor": true,
 "image": {
  "width": 33.21,
  "height": 33.39,
  "y": 1043.19,
  "class": "HotspotMapOverlayImage",
  "x": 879.56,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 35,
     "height": 35,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_23.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B57DE6F9_BAA8_99CA_41C9_4213AF977D65",
 "map": {
  "width": 32.05,
  "height": 33.39,
  "y": 997.99,
  "class": "HotspotMapOverlayMap",
  "x": 837.92,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 17,
     "height": 17,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_24_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "toolTip": "Public Works Area"
  }
 ],
 "data": {
  "label": "Public Works 3"
 },
 "useHandCursor": true,
 "image": {
  "width": 32.05,
  "height": 33.39,
  "y": 997.5,
  "class": "HotspotMapOverlayImage",
  "x": 837.55,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 34,
     "height": 35,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_24.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B5A0DA01_BAAB_A83A_41C6_840BAC2DEB23",
 "map": {
  "width": 36.39,
  "height": 36.39,
  "y": 1169.17,
  "class": "HotspotMapOverlayMap",
  "x": 881.44,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 19,
     "height": 19,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_25_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "toolTip": "CTM Area"
  }
 ],
 "data": {
  "label": "CTM Area 1"
 },
 "useHandCursor": true,
 "image": {
  "width": 36.39,
  "height": 36.39,
  "y": 1168.87,
  "class": "HotspotMapOverlayImage",
  "x": 880.97,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 38,
     "height": 38,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_25.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B49C43CD_BAC2_4260_41DA_C65981F80FB3",
 "map": {
  "width": 30.16,
  "height": 30.16,
  "y": 1085.36,
  "class": "HotspotMapOverlayMap",
  "x": 925.2,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_26_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Public Works 1"
 },
 "useHandCursor": true,
 "image": {
  "width": 30.16,
  "height": 30.16,
  "y": 1085.01,
  "class": "HotspotMapOverlayImage",
  "x": 924.9,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 32,
     "height": 32,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_26.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B4755088_BACE_7EE0_41B4_6629D9A3FD46",
 "map": {
  "width": 30.52,
  "height": 30.52,
  "y": 1041.5,
  "class": "HotspotMapOverlayMap",
  "x": 791.64,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 16,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_27_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "toolTip": "CTM Area"
  }
 ],
 "data": {
  "label": "CTM Area 3"
 },
 "useHandCursor": true,
 "image": {
  "width": 30.52,
  "height": 30.52,
  "y": 1041.29,
  "class": "HotspotMapOverlayImage",
  "x": 791.19,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 32,
     "height": 32,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_27.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B5453DE1_BB74_6934_41BD_2C5617B96D61",
 "map": {
  "width": 25.47,
  "height": 20.54,
  "y": 1372.49,
  "class": "HotspotMapOverlayMap",
  "x": 679.8,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 13,
     "height": 11,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_28_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "toolTip": "PW South Wing"
  }
 ],
 "data": {
  "label": "PW South 1"
 },
 "useHandCursor": true,
 "image": {
  "width": 25.47,
  "height": 20.54,
  "y": 1372.3,
  "class": "HotspotMapOverlayImage",
  "x": 679.55,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 27,
     "height": 22,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_28.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B6F14996_BB74_691C_416B_14A27C42A08B",
 "map": {
  "width": 24.65,
  "height": 22.19,
  "y": 1372.56,
  "class": "HotspotMapOverlayMap",
  "x": 614.21,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 13,
     "height": 12,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_29_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "toolTip": "PW South Wing"
  }
 ],
 "data": {
  "label": "PW South 2"
 },
 "useHandCursor": true,
 "image": {
  "width": 24.65,
  "height": 22.19,
  "y": 1372.26,
  "class": "HotspotMapOverlayImage",
  "x": 613.72,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 26,
     "height": 24,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_29.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B51FFE06_BB74_AAFC_41CC_1F9CC1EED789",
 "map": {
  "width": 24.65,
  "height": 18.9,
  "y": 1414.6,
  "class": "HotspotMapOverlayMap",
  "x": 519.63,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 13,
     "height": 10,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_30_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "toolTip": "PW South Wing"
  }
 ],
 "data": {
  "label": "PW South 3"
 },
 "useHandCursor": true,
 "image": {
  "width": 24.65,
  "height": 18.9,
  "y": 1414.31,
  "class": "HotspotMapOverlayImage",
  "x": 519.37,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 26,
     "height": 20,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_30.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B6F4F60D_BB75_FB0C_41D7_C9CC3E2B7182",
 "map": {
  "width": 26.3,
  "height": 20.54,
  "y": 1379.02,
  "class": "HotspotMapOverlayMap",
  "x": 445.53,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 14,
     "height": 11,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_31_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "toolTip": "PW South Wing"
  }
 ],
 "data": {
  "label": "PW South 4"
 },
 "useHandCursor": true,
 "image": {
  "width": 26.3,
  "height": 20.54,
  "y": 1378.69,
  "class": "HotspotMapOverlayImage",
  "x": 445.04,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 28,
     "height": 22,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_31.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B51335D2_BB74_D914_41CD_159B140B8F24",
 "map": {
  "width": 37,
  "height": 37,
  "y": 1337.35,
  "class": "HotspotMapOverlayMap",
  "x": 493.02,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 19,
     "height": 19,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_32_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "toolTip": "Public Works South Wing Breakroom Kitchenette"
  }
 ],
 "data": {
  "label": "PW South Kitchen"
 },
 "useHandCursor": true,
 "image": {
  "width": 37,
  "height": 37,
  "y": 1337.11,
  "class": "HotspotMapOverlayImage",
  "x": 492.81,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 39,
     "height": 39,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_32.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B6FEB85C_BB73_B70C_41B1_107FD237D5E8",
 "map": {
  "width": 34.51,
  "height": 24.65,
  "y": 1312.13,
  "class": "HotspotMapOverlayMap",
  "x": 451.74,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 13,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_33_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "toolTip": "PW South Wing Office"
  }
 ],
 "data": {
  "label": "PW South Office"
 },
 "useHandCursor": true,
 "image": {
  "width": 34.51,
  "height": 24.65,
  "y": 1311.66,
  "class": "HotspotMapOverlayImage",
  "x": 451.25,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 36,
     "height": 26,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_33.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_B51E6811_BB7C_B714_41E5_94B47309257C",
 "map": {
  "width": 26.3,
  "height": 49.31,
  "y": 1362.02,
  "class": "HotspotMapOverlayMap",
  "x": 396.86,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 14,
     "height": 25,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_34_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "toolTip": "Public Works South Wing Meeting Room"
  }
 ],
 "data": {
  "label": "PW South Meeting Room"
 },
 "useHandCursor": true,
 "image": {
  "width": 26.3,
  "height": 49.31,
  "y": 1361.83,
  "class": "HotspotMapOverlayImage",
  "x": 396.66,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 28,
     "height": 51,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_34.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_86E157C1_C5F5_D974_41C0_CAE9BC647EB7",
 "map": {
  "width": 21.6,
  "height": 18.19,
  "y": 492.21,
  "class": "HotspotMapOverlayMap",
  "x": 781.6,
  "offsetY": 0,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 11,
     "height": 10,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_35_map.gif"
    }
   ]
  }
 },
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "toolTip": "Coffee Kiosk"
  }
 ],
 "data": {
  "label": "Coffee Kiosk"
 },
 "useHandCursor": true,
 "image": {
  "width": 21.6,
  "height": 18.19,
  "y": 492.07,
  "class": "HotspotMapOverlayImage",
  "x": 781.48,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "width": 23,
     "height": 20,
     "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_HS_35.png"
    }
   ]
  }
 }
},
{
 "id": "overlay_E67D1710_C7FC_5914_41E3_355C4A5B07F5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.98,
   "hfov": 19.11,
   "pitch": -19.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Jump to Courtyard",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16, this.camera_E91D85F1_E46A_8DE5_41D0_432CA4EE3E07); this.mainPlayList.set('selectedIndex', 7)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -19.53,
   "yaw": 162.98,
   "hfov": 19.11,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_8CC93C58_DB55_AF14_41E6_1271C30D079D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -32.33,
   "hfov": 11.48,
   "pitch": 0.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_2_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Exit North Entrance",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2, this.camera_E9E8E603_E46A_8E25_41DB_9E2954DE0190); this.mainPlayList.set('selectedIndex', 9)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 0.48,
   "yaw": -32.33,
   "hfov": 11.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 244,
      "height": 244,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_2_0.png"
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_9AFD85F4_C4CC_591C_41D0_6F625183D969",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.39,
   "hfov": 13.69,
   "pitch": 25.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 26,
      "height": 16,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_3_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Head up North Staircase",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB, this.camera_E90EA5DF_E46A_8DDD_41D3_B78EDC5C5A9D); this.mainPlayList.set('selectedIndex', 18)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": 25.71,
   "yaw": 34.39,
   "hfov": 13.69,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 1110,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_3_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "overlay_8FA69E67_CD4C_AB3C_41D9_CB991DE56E91",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.9,
   "hfov": 17.45,
   "pitch": -12.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 30,
      "height": 16,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_0_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Public Works Area",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_E930E9A1_E46A_8265_4193_209165F7F722); this.mainPlayList.set('selectedIndex', 25)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -12.17,
   "yaw": 157.9,
   "hfov": 17.45,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_0_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "overlay_811457F6_CD54_591C_41A0_89496D53657A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.97,
   "hfov": 19.62,
   "pitch": -10.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_1_0_0_map.gif"
     }
    ]
   }
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "2nd Floor Hallway Courtyard View",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237, this.camera_E90CC9B2_E46A_8267_41E0_7CD5499C4E78); this.mainPlayList.set('selectedIndex', 24)",
   "displayTooltipInTouchScreens": true
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -10.66,
   "yaw": 37.97,
   "hfov": 19.62,
   "image": {
    "frameDuration": 41,
    "colCount": 4,
    "class": "AnimatedImageResource",
    "rowCount": 6,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_1_0.png"
     }
    ],
    "frameCount": 24
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true
},
{
 "id": "panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_tcap0",
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "hfov": 30,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850,
    "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0.png"
   }
  ]
 }
},
{
 "id": "PanoramaPlayListItem_E8867506_E46A_822F_41D9_45D00E97FE2F",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E8867506_E46A_822F_41D9_45D00E97FE2F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "camera": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_camera",
 "media": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD"
},
{
 "id": "PanoramaPlayListItem_E89A2510_E46A_8223_41BB_D1EEBABFEFF1",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89A2510_E46A_8223_41BB_D1EEBABFEFF1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "camera": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_camera",
 "media": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570"
},
{
 "id": "PanoramaPlayListItem_E89DC511_E46A_8225_41E8_14676933A3FA",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89DC511_E46A_8225_41E8_14676933A3FA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "camera": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_camera",
 "media": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A"
},
{
 "id": "PanoramaPlayListItem_E89D7511_E46A_8225_41B7_7B625F0706AC",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89D7511_E46A_8225_41B7_7B625F0706AC, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "camera": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_camera",
 "media": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5"
},
{
 "id": "PanoramaPlayListItem_E89D1512_E46A_8227_41D0_F7B0446F8497",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89D1512_E46A_8227_41D0_F7B0446F8497, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "camera": "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_camera",
 "media": "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88"
},
{
 "id": "PanoramaPlayListItem_E89CB512_E46A_8227_41D2_306614141804",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89CB512_E46A_8227_41D2_306614141804, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "camera": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_camera",
 "media": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91"
},
{
 "id": "PanoramaPlayListItem_E89DE513_E46A_8225_41E1_3EED44941912",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89DE513_E46A_8225_41E1_3EED44941912, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "camera": "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_camera",
 "media": "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07"
},
{
 "id": "PanoramaPlayListItem_E89D9513_E46A_8225_41DB_F19B742F2147",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89D9513_E46A_8225_41DB_F19B742F2147, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "camera": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_camera",
 "media": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16"
},
{
 "id": "PanoramaPlayListItem_E89D4514_E46A_8223_41E6_4E7C5DEDDF43",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89D4514_E46A_8223_41E6_4E7C5DEDDF43, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "camera": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_camera",
 "media": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819"
},
{
 "id": "PanoramaPlayListItem_E89CF515_E46A_822D_41E2_B5283F274794",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89CF515_E46A_822D_41E2_B5283F274794, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "camera": "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_camera",
 "media": "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2"
},
{
 "id": "PanoramaPlayListItem_E89CA515_E46A_822D_41C6_ACA9823BC77F",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89CA515_E46A_822D_41C6_ACA9823BC77F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "camera": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_camera",
 "media": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3"
},
{
 "id": "PanoramaPlayListItem_E89C4516_E46A_822F_41BE_9FD970DB9C26",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89C4516_E46A_822F_41BE_9FD970DB9C26, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
 "camera": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_camera",
 "media": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C"
},
{
 "id": "PanoramaPlayListItem_E89FF516_E46A_822F_41CC_2CC2DDE94008",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89FF516_E46A_822F_41CC_2CC2DDE94008, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "camera": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_camera",
 "media": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67"
},
{
 "id": "PanoramaPlayListItem_E89F9517_E46A_822D_41D0_41E7285932A0",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89F9517_E46A_822D_41D0_41E7285932A0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
 "camera": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_camera",
 "media": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856"
},
{
 "id": "PanoramaPlayListItem_E89F5517_E46A_822D_41C2_E935ECE64DEF",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89F5517_E46A_822D_41C2_E935ECE64DEF, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "camera": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_camera",
 "media": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532"
},
{
 "id": "PanoramaPlayListItem_E89EE518_E46A_8223_41D9_180F2AF2EF46",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89EE518_E46A_8223_41D9_180F2AF2EF46, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
 "camera": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_camera",
 "media": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA"
},
{
 "id": "PanoramaPlayListItem_E89E9518_E46A_8223_41CB_802501FBF92D",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89E9518_E46A_8223_41CB_802501FBF92D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
 "camera": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_camera",
 "media": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A"
},
{
 "id": "PanoramaPlayListItem_E89E4519_E46A_8225_41D2_EB417A0E846F",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E89E4519_E46A_8225_41D2_EB417A0E846F, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
 "camera": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_camera",
 "media": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB"
},
{
 "id": "PanoramaPlayListItem_E891E519_E46A_8225_41D1_3AF7F1C37DB6",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E891E519_E46A_8225_41D1_3AF7F1C37DB6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
 "camera": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_camera",
 "media": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB"
},
{
 "id": "PanoramaPlayListItem_E891951A_E46A_8227_41E6_0AEDDC3AE7E2",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E891951A_E46A_8227_41E6_0AEDDC3AE7E2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
 "camera": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_camera",
 "media": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464"
},
{
 "id": "PanoramaPlayListItem_E891451A_E46A_8227_41EB_0633595C8256",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E891451A_E46A_8227_41EB_0633595C8256, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
 "camera": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_camera",
 "media": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C"
},
{
 "id": "PanoramaPlayListItem_E891051B_E46A_8225_41C7_0E0C97FA95F8",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E891051B_E46A_8225_41C7_0E0C97FA95F8, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
 "camera": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_camera",
 "media": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171"
},
{
 "id": "PanoramaPlayListItem_E890A51B_E46A_8225_41EA_CA7841D29F3E",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E890A51B_E46A_8225_41EA_CA7841D29F3E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 22, 23)",
 "camera": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_camera",
 "media": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383"
},
{
 "id": "PanoramaPlayListItem_E890451C_E46A_8223_41D9_AF21AB1A955D",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E890451C_E46A_8223_41D9_AF21AB1A955D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 23, 24)",
 "camera": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_camera",
 "media": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F"
},
{
 "id": "PanoramaPlayListItem_E893E51C_E46A_8223_41C6_6F70C6927B79",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E893E51C_E46A_8223_41C6_6F70C6927B79, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 24, 25)",
 "camera": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_camera",
 "media": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237"
},
{
 "id": "PanoramaPlayListItem_E893851D_E46A_825D_41DF_4885ECBBF6D9",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E893851D_E46A_825D_41DF_4885ECBBF6D9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26)",
 "camera": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_camera",
 "media": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB"
},
{
 "id": "PanoramaPlayListItem_E893251D_E46A_825D_41CE_2EC82D3341A4",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E893251D_E46A_825D_41CE_2EC82D3341A4, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27)",
 "camera": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_camera",
 "media": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F"
},
{
 "id": "PanoramaPlayListItem_E892C51E_E46A_825F_41E7_768467F4E816",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E892C51E_E46A_825F_41E7_768467F4E816, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 27, 28)",
 "camera": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_camera",
 "media": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E"
},
{
 "id": "PanoramaPlayListItem_E892751E_E46A_825F_41BD_B7DAA3B09896",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E892751E_E46A_825F_41BD_B7DAA3B09896, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 28, 29)",
 "camera": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080_camera",
 "media": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080"
},
{
 "id": "PanoramaPlayListItem_E893B51F_E46A_825D_41E5_07B9D2C4C48D",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E893B51F_E46A_825D_41E5_07B9D2C4C48D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 30)",
 "camera": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_camera",
 "media": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF"
},
{
 "id": "PanoramaPlayListItem_E8935520_E46A_8263_41EA_1714C602D0FD",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E8935520_E46A_8263_41EA_1714C602D0FD, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 30, 31)",
 "camera": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_camera",
 "media": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1"
},
{
 "id": "PanoramaPlayListItem_E8930520_E46A_8263_41E9_C4849791123B",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E8930520_E46A_8263_41E9_C4849791123B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 31, 32)",
 "camera": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_camera",
 "media": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D"
},
{
 "id": "PanoramaPlayListItem_E892B521_E46A_8265_41C7_E218DF37FA45",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E892B521_E46A_8265_41C7_E218DF37FA45, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 32, 33)",
 "camera": "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814_camera",
 "media": "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814"
},
{
 "id": "PanoramaPlayListItem_E8925521_E46A_8265_41C0_B49BBE617D59",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E8925521_E46A_8265_41C0_B49BBE617D59, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 33, 34)",
 "camera": "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_camera",
 "media": "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265"
},
{
 "id": "PanoramaPlayListItem_E895E522_E46A_8267_41D0_2F2331059F44",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E895E522_E46A_8267_41D0_2F2331059F44, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 34, 35)",
 "camera": "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_camera",
 "media": "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7"
},
{
 "id": "PanoramaPlayListItem_E895A522_E46A_8267_41C7_5A399C50C889",
 "end": "this.trigger('tourEnded')",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E895A522_E46A_8267_41C7_5A399C50C889, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 0)",
 "camera": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_camera",
 "media": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55"
},
{
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "right": "0%",
 "paddingTop": 0,
 "paddingRight": 15,
 "paddingLeft": 15,
 "contentOpaque": false,
 "width": "30%",
 "propagateClick": false,
 "gap": 10,
 "id": "Container_BCD7E33B_AAA0_E49C_41B3_F1D3FB8D53F8",
 "children": [
  "this.MapViewer",
  "this.Image_BC2E7D24_AAA0_1CB4_41A8_E768EFBF3347",
  "this.IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2"
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "scrollBarColor": "#000000",
 "height": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "verticalAlign": "top",
 "data": {
  "name": "Container16172"
 },
 "overflow": "scroll",
 "top": "0%",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadow": false
},
{
 "minHeight": 1,
 "left": "0%",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingRight": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "width": 115,
 "propagateClick": false,
 "id": "Image_BCE3DF2D_AA60_3CB4_41E4_D6BF81545F14",
 "height": 115,
 "class": "Image",
 "horizontalAlign": "center",
 "url": "skin/Image_BCE3DF2D_AA60_3CB4_41E4_D6BF81545F14.png",
 "maxWidth": 235,
 "paddingBottom": 0,
 "maxHeight": 235,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Image15591"
 },
 "top": "0%",
 "backgroundOpacity": 0,
 "borderSize": 0,
 "shadow": false
},
{
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>New Office Space at the</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:37px;\"><B>Bergstrom Technology Center</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:20px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Take a Virtual Reality tour of the Bergstrom Technology Center. Use your computer, smartphone, tablet, or virtual reality devices to explore the new space. For a more immersive experience, the tour is also viewable through Google Cardboard, Oculus Go, and most VR headsets by selecting the \"VR headset mode\" button which will display on compatible devices.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">In January 2020, CTM\u2019s Collaboration Services, Web Services, Design and Delivery, the Enterprise PMO and the Public Safety PMO will have a new home at the </SPAN><SPAN STYLE=\"color:#f3a22e;\"><A TARGET=\"_blank\" HREF=\"https://goo.gl/maps/UGe4oMGmYDKafajR9\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"font-size:15px;\"><U>Bergstrom Technology Center (6800 Burleson Road)</U></SPAN></A></SPAN><SPAN STYLE=\"color:#333333;font-size:15px;\">. The new space will be specifically designed to bring customers and teams together to collaborate on solution delivery.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Building ammenties include:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 Shared conference rooms on main floor</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 Coffee bar with barista</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 Ping pong tables, miniature putt-putt, Frisbee golf, a gym and walking trails</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 City of Austin employee childcare facility on-site</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\"> \u2022 While there is not a cafeteria, there are plans to have various food trucks available for meals </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">Other City of Austin departments moving to the same building include Public Works, Fleet and Austin Public Health.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">If you have questions about the space or to provide any preliminary requirements, please contact Terry Carroll (Project Manager) - Terry.Carroll@austintexas.gov or Whitney Sklar (Acting CTM Administrator) - Whitney.Sklar@ausps.org. For any questions regarding this </SPAN><SPAN STYLE=\"font-size:15px;\">360 </SPAN><SPAN STYLE=\"color:#333333;font-size:15px;\">VR Viewer, please contact Marbenn Cayetano - marbenn.cayetano@austintexas.gov.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:15px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:15px;\">*This product is for informational purposes only and does not guarantee the accuracy, relevance, timeliness, or completeness of information contained.</SPAN></SPAN></DIV></div>",
 "minHeight": 1,
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "minWidth": 1,
 "shadowVerticalLength": 2,
 "paddingTop": 20,
 "borderColor": "#000000",
 "paddingRight": 20,
 "paddingLeft": 20,
 "propagateClick": false,
 "width": "100%",
 "backgroundColor": [
  "#FFFFFF",
  "#CCCCCC"
 ],
 "id": "HTMLText_ABA45580_BAC3_C6E0_41E5_82221B46EF3C",
 "height": "100%",
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "scrollBarWidth": 10,
 "shadowBlurRadius": 7,
 "paddingBottom": 10,
 "shadowHorizontalLength": 2,
 "shadowOpacity": 0.19,
 "borderSize": 3,
 "top": "0%",
 "backgroundOpacity": 0.91,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0.73,
  1
 ],
 "backgroundColorDirection": "vertical",
 "borderRadius": 0,
 "shadow": true,
 "data": {
  "name": "HTMLText53815"
 }
},
{
 "minHeight": 1,
 "minWidth": 1,
 "right": "10%",
 "paddingTop": 0,
 "paddingRight": 0,
 "scaleMode": "fit_inside",
 "paddingLeft": 0,
 "width": "73.58%",
 "propagateClick": false,
 "id": "Image_BC2E7D24_AAA0_1CB4_41A8_E768EFBF3347",
 "height": "17.622%",
 "class": "Image",
 "horizontalAlign": "center",
 "url": "skin/Image_BC2E7D24_AAA0_1CB4_41A8_E768EFBF3347.jpeg",
 "maxWidth": 298,
 "paddingBottom": 0,
 "maxHeight": 169,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "data": {
  "name": "Image16532"
 },
 "backgroundOpacity": 0,
 "borderSize": 0,
 "bottom": "2%",
 "shadow": false
}],
 "scrollBarColor": "#000000",
 "height": "100%",
 "scrollBarWidth": 10,
 "layout": "absolute",
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "borderSize": 0,
 "shadow": false,
 "data": {
  "name": "Player496"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
