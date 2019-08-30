(function(){
    var script = {
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2], 'cardboardAvailable'); this.mainPlayList.set('selectedIndex', 0); this.playList_F7278CC4_E30D_CDC3_41CF_FF71A3294A9C.set('selectedIndex', 0)",
 "minWidth": 20,
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "paddingRight": 0,
 "scripts": {
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && ((window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0))) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } }
 },
 "contentOpaque": false,
 "paddingLeft": 0,
 "width": "100%",
 "layout": "absolute",
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
 "class": "PlayList",
 "id": "playList_F7278CC4_E30D_CDC3_41CF_FF71A3294A9C",
 "items": [
  {
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_07_56_20190813103016",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E0BA82D0_C5F3_DB14_41DF_FD2457E25DE9",
  "this.overlay_E0DAC8C9_C5FC_7774_41BE_CA759112717F",
  "this.overlay_E023939C_C5FC_590C_41B0_53B98B7CE40E",
  "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07",
   "yaw": -41.64,
   "distance": 1,
   "backwardYaw": -11.51
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
   "yaw": 155.81,
   "distance": 1,
   "backwardYaw": 177.18
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
   "yaw": -3.44,
   "distance": 1,
   "backwardYaw": 89
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F07DE2E5_E30D_F5CD_41EB_A8D62AE07BAD",
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
 "id": "panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_01_18_20190813103029",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A78C603F_BB33_B70C_41D1_992C2A832A0D",
  "this.overlay_8EECC05D_DB53_D70C_41E7_B9BA69E1FC5B",
  "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
   "yaw": 104.53,
   "distance": 1,
   "backwardYaw": 27.89
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
   "yaw": 165.35,
   "distance": 1,
   "backwardYaw": -60.26
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F66E2EC9_E30D_CDC5_41C0_71710438AED3",
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
 "id": "panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88",
 "class": "Panorama",
 "label": "3d-13_15_06",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8E296643_DB5C_DB74_41E1_7878A960835E",
  "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "yaw": -26.59,
   "distance": 1,
   "backwardYaw": -22
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_B08CB062_BB4C_B734_41C7_F08141F48814",
 "class": "Panorama",
 "label": "3d-13_53_23",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FEDEE52C_DD33_D90C_41E5_666F5F809E06",
  "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
   "yaw": 96.65,
   "distance": 1,
   "backwardYaw": -103.99
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F6E47DEC_E30D_CFC3_41C8_F30BCEA9200D",
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
 "id": "panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
 "class": "Panorama",
 "label": "3d-13_16_54",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FBC5763E_DCCD_FB0C_41D6_66D33197C836",
  "this.overlay_8D5BFB54_DB4C_691C_41D4_796EDB8312A3",
  "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
   "yaw": 135.03,
   "distance": 1,
   "backwardYaw": -51.79
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "yaw": -25.7,
   "distance": 1,
   "backwardYaw": 38.45
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F486F0A6_E30D_F44F_41E3_F27A5EE90CED",
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
 "id": "camera_F6C6FE0D_E30D_CC5D_41B6_18B22830882E",
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
 "id": "panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
 "class": "Panorama",
 "label": "3d-13_51_34",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E37F2C5B_DD5D_AF14_41E8_F5A5D4559BE9",
  "this.overlay_E3551545_DD54_597C_41E3_F16D9D976741",
  "this.overlay_E3128B30_DD54_6914_41DB_3250C26A37F5",
  "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7",
   "yaw": 108.69,
   "distance": 1,
   "backwardYaw": -109.14
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
   "yaw": 62.58,
   "distance": 1,
   "backwardYaw": 8.37
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
   "yaw": -144.89,
   "distance": 1,
   "backwardYaw": 42.02
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F7416D5B_E30D_CCC5_41C5_81324BF8CDE9",
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
 "id": "camera_F5866F7D_E30D_CCBD_41CD_B732D0EED6B5",
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
 "id": "panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_58_47_20190813102957",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E610FD14_C7F7_E91C_41B2_18D312A5996B",
  "this.overlay_E9D227A9_C7F4_5934_4191_7DF57E605884",
  "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
   "yaw": -80.28,
   "distance": 1,
   "backwardYaw": -161.64
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
   "yaw": 27.89,
   "distance": 1,
   "backwardYaw": 104.53
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_01_52_20190813103026",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DE0C8EF2_C5D3_AB14_41E0_7A476A034643",
  "this.overlay_F1A1F414_DB4F_BF1C_41DD_6699285A7ECD",
  "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "yaw": -140.23,
   "distance": 1,
   "backwardYaw": 166.8
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
   "yaw": -39.97,
   "distance": 1,
   "backwardYaw": 129.91
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F0388223_E30D_F445_41DB_2D5322A57BE2",
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
 "id": "camera_F5235FED_E30D_CBDD_41E9_28FE611AA2CB",
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
 "id": "camera_F6D0CE1C_E30D_CC43_41D8_25F8F8C27057",
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
 "id": "panorama_B76768D0_BB4D_F714_41E6_F60680726080",
 "class": "Panorama",
 "label": "3d-13_49_13",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FE908CF2_DD3C_AF14_41C5_F36416163C88",
  "this.overlay_FF8B7DD4_DD3C_E91C_41DD_FDF28BC23C2C",
  "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
   "yaw": 150.59,
   "distance": 1,
   "backwardYaw": -98.21
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "yaw": -47.04,
   "distance": 1,
   "backwardYaw": -91.63
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
 "class": "Panorama",
 "label": "3d-13_25_22",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F610CEB6_DCDC_6B1C_41E8_A359129394BC",
  "this.overlay_F6CB96EF_DCD5_DB0C_41E4_DFFD50D9AD45",
  "this.overlay_8AADA53A_DB34_5914_41C7_C37D932D358D",
  "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
   "yaw": 147.83,
   "distance": 1,
   "backwardYaw": 88.95
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
   "yaw": -69.35,
   "distance": 1,
   "backwardYaw": 19.32
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
   "yaw": -15.74,
   "distance": 1,
   "backwardYaw": -89.41
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F03C8233_E30D_F445_41CE_C4DAE889D372",
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
 "id": "camera_F579B053_E30D_F4C5_41EA_A04412547A57",
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
 "id": "camera_F7650D2B_E30D_CC45_41D4_03DD42ADC422",
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
 "id": "camera_F04FB306_E30D_F44F_41DB_7E5025EBD517",
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
 "id": "camera_F50FF01D_E30D_F47D_41D6_55868721F303",
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
 "id": "panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
 "class": "Panorama",
 "label": "3d-13_23_24",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F4C6E88F_DB35_B70C_41A6_E5B7540A978D",
  "this.overlay_F379F50A_DB34_DEF5_41E7_624647E26E55",
  "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
   "yaw": -89.41,
   "distance": 1,
   "backwardYaw": -15.74
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
   "yaw": -65.58,
   "distance": 1,
   "backwardYaw": -65.76
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F4B60095_E30D_F44D_41DC_C49337BEBB76",
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
 "id": "panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
 "class": "Panorama",
 "label": "3d-13_18_05",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8D3CE9EE_DB4F_E90C_41C9_9576EFB634D8",
  "this.overlay_8DB93129_DB4C_5934_41C8_B0AA961BBFD7",
  "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
   "yaw": 170.98,
   "distance": 1,
   "backwardYaw": 13.13
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
   "yaw": -51.79,
   "distance": 1,
   "backwardYaw": 135.03
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F0071244_E30D_F4C3_41EB_B993C588D470",
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
 "id": "camera_F47A4177_E30D_F4CD_41B1_CF62B35A79E7",
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
 "id": "camera_F6215E2D_E30D_CC5D_41E3_CA8296AC7757",
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
 "id": "camera_F5C15FCB_E30D_CBC5_41D6_2DAF32D88D46",
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
 "id": "panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
 "class": "Panorama",
 "label": "3d-13_52_46",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E062B18B_DD4C_79F4_41D5_6AD5BA90FA4B",
  "this.overlay_E1E82C4B_DD4C_AF74_41E0_85735B7227DC",
  "this.overlay_E0092DC0_DD4C_A974_41B8_8EA6C384ED7D",
  "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
   "yaw": 8.37,
   "distance": 1,
   "backwardYaw": 62.58
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265",
   "yaw": 109.79,
   "distance": 1,
   "backwardYaw": -145.73
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814",
   "yaw": -103.99,
   "distance": 1,
   "backwardYaw": 96.65
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F7B1A345_E30D_F4CD_41E6_3A73F4266148",
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
 "id": "panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
 "class": "Panorama",
 "label": "3d-13_31_54",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_867809AB_CCCC_6934_41D4_DBCB2B60CE9E",
  "this.overlay_86477B04_CCCC_AAFC_41E5_1958E260784A",
  "this.overlay_80BA5B74_CCD5_A91C_41E9_B0B180FEDDB7",
  "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
   "yaw": 55.04,
   "distance": 1,
   "backwardYaw": -115.25
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
   "yaw": -32.24,
   "distance": 1,
   "backwardYaw": 152.85
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
   "yaw": 93.99,
   "distance": 1,
   "backwardYaw": -84.04
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F066A2A5_E30D_F44D_41CF_D3BA08FE7A29",
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
 "id": "camera_F6A27D8B_E30D_CC45_41E0_516661B8C794",
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
 "id": "camera_F53D900C_E30D_F443_41C3_D12DE945B304",
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
 "id": "camera_F49750B6_E30D_F44F_41C1_A5E41D631FAB",
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
 "id": "camera_F41FC155_E30D_F4CD_41E4_FFF6A3B11C52",
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
 "id": "camera_F5545074_E30D_F4C3_41E7_883FF75AF22A",
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
 "id": "camera_F75B1D7A_E30D_CCC7_41E6_5C05E4CE4520",
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
 "id": "panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
 "class": "Panorama",
 "label": "3d-13_22_13",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F7374049_DCD7_D774_41C8_6DC50A6B6F08",
  "this.overlay_F70B2EF3_DCD5_AB14_41D7_9E19EC513E31",
  "this.overlay_8965EAFF_DB34_6B0C_41E0_71785A11683F",
  "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA",
   "yaw": -65.76,
   "distance": 1,
   "backwardYaw": -65.58
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
   "yaw": 19.32,
   "distance": 1,
   "backwardYaw": -69.35
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
   "yaw": -135.55,
   "distance": 1,
   "backwardYaw": 36.77
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
 "class": "Panorama",
 "label": "3d-13_47_43",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_EBFDBC34_C7D4_AF1C_41B5_9E6B9D81C4D2",
  "this.overlay_878C3B1E_DB3C_A90C_41E9_40AB17E397B4",
  "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
   "yaw": -27.71,
   "distance": 1,
   "backwardYaw": -103.62
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
   "yaw": 148.25,
   "distance": 1,
   "backwardYaw": 21.79
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F4E090C6_E30D_F5CF_41EB_F4A11290B910",
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
 "id": "panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF",
 "class": "Panorama",
 "label": "3d-13_50_22",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_FF8997DC_DD3C_D90C_41E2_8D239539FB89",
  "this.overlay_FF0CD69D_DD34_DB0C_41E7_135D4B7B9070",
  "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
   "yaw": 42.02,
   "distance": 1,
   "backwardYaw": -144.89
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080",
   "yaw": -98.21,
   "distance": 1,
   "backwardYaw": 150.59
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "class": "PlayList",
 "id": "playList_F7206CC4_E30D_CDC3_41E9_7A737F2FF78B",
 "items": [
  {
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF"
  }
 ]
},
{
 "id": "camera_F00A9254_E30D_F4C3_41E2_72731DCECFB8",
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
 "id": "panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
 "class": "Panorama",
 "label": "3d-13_47_05",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9EBF5847_CBDC_F77C_41BF_44C89D9CD85E",
  "this.overlay_9FDE0217_CBDC_BB1C_41D5_7827D4680D8D",
  "this.overlay_9D07DBDE_CBF4_690C_41E8_C8BD6208D196",
  "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
   "yaw": -103.62,
   "distance": 1,
   "backwardYaw": -27.71
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
   "yaw": 32.25,
   "distance": 1,
   "backwardYaw": 37.97
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F5ABEF41_E30D_CCC5_41E3_1823471006A0",
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
 "id": "camera_F024D1E2_E30D_F7C7_41E1_EC79A1E7C6A6",
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
 "id": "camera_F68FBDCC_E30D_CFC3_41C5_375EF9FC9406",
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
 "id": "camera_F5D37FDC_E30D_CBC3_41EB_134D8A89441C",
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
 "id": "camera_F5F08FBB_E30D_CC45_41CD_C6CA9F6D9E9E",
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
 "id": "camera_F76CBD3B_E30D_CC45_41E8_F58F3F832AD9",
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
 "id": "camera_F71EDD1B_E30D_CC45_419C_14FB1C73D5A4",
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
 "id": "camera_F423D10E_E30D_F45F_41D4_5016A997702B",
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
 "id": "camera_F77A4D4B_E30D_CCC5_41CB_9C106650FF7E",
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
 "id": "camera_F019B284_E30D_F443_41D4_439905B9C966",
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
 "id": "camera_F068E2B5_E30D_F44D_41C9_3D31674DD9DF",
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
 "id": "camera_F04722F5_E30D_F5CD_41C2_7CF63D574322",
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
 "id": "camera_F6785EEA_E30D_CDC7_41E4_31EB98B9F1DC",
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
 "id": "panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
 "class": "Panorama",
 "label": "3d-13_31_14",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9C9A0F5F_CBCC_E90C_41DD_2736FD05FF6C",
  "this.overlay_81BDF5FD_CBCC_590C_41AD_C9081E514F86",
  "this.overlay_9D62C916_CBCC_691D_41E7_61C409C0A16D",
  "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
   "yaw": -84.04,
   "distance": 1,
   "backwardYaw": 93.99
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
   "yaw": -31.18,
   "distance": 1,
   "backwardYaw": 158.26
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
   "yaw": 21.46,
   "distance": 1,
   "backwardYaw": -163.58
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F07542D5_E30D_F5CD_41D3_DBB29665337D",
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
 "id": "camera_F61E7EAD_E30D_CC5D_41E9_07020227712B",
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
 "id": "panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265",
 "class": "Panorama",
 "label": "3d-13_53_57",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E13CF3B8_DD34_5914_41CA_3EE5B25399B6",
  "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D",
   "yaw": -145.73,
   "distance": 1,
   "backwardYaw": 109.79
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F7158D0B_E30D_CC45_41C0_0E6E41BD7368",
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
 "id": "panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C",
 "class": "Panorama",
 "label": "3d-13_37_30",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_9EFFE8D6_CBFC_D71C_41CB_AD532CDE8F8E",
  "this.overlay_9EF0F62B_CBF5_BB34_41CE_CD3D767BFDFB",
  "this.overlay_9DFC42FD_CBF4_7B0C_41EA_2E47922618D2",
  "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
   "yaw": 150.8,
   "distance": 1,
   "backwardYaw": -20.01
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
 "class": "Panorama",
 "label": "3d-13_36_26",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8359CFB3_CCD4_E914_41E3_C722AAA8076C",
  "this.overlay_8BE39F15_CCDC_691C_41CD_16F218EB105F",
  "this.overlay_83E7977F_CD73_B90C_41D8_752493A076BC",
  "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
   "yaw": 152.85,
   "distance": 1,
   "backwardYaw": -32.24
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
   "yaw": 104.43,
   "distance": 1,
   "backwardYaw": -78.46
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
   "yaw": -20.36,
   "distance": 1,
   "backwardYaw": 157.9
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F051D316_E30D_F44F_41D6_EC6890589B3E",
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
 "id": "camera_F4A40084_E30D_F443_41EB_883BE21C3604",
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
 "id": "camera_F063E294_E30D_F443_41DC_EB0D826BB392",
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
 "id": "camera_F02F71F3_E30D_F7C5_41CF_FD350518E9A1",
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
 "id": "camera_F6495F05_E30D_CC4D_41D8_FF4EB5679AF8",
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
 "id": "camera_F5686043_E30D_F4C5_41B2_9AB4221BA670",
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
 "id": "panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07",
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_04_58_20190813103018",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E47BAC2A_C5DC_AF34_4175_139F9A9ED1FE",
  "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
   "yaw": -11.51,
   "distance": 1,
   "backwardYaw": -41.64
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
 "class": "Panorama",
 "label": "3d-13_26_03",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8B4159AC_DB34_690C_41E3_CDE222A725F5",
  "this.overlay_87B3BE15_DB4C_EB1C_41D7_C141EDFA2B7E",
  "this.overlay_874CC225_DB3C_5B3C_41DD_4B12D212E31D",
  "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
   "yaw": 88.53,
   "distance": 1,
   "backwardYaw": 34.39
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A",
   "yaw": 88.95,
   "distance": 1,
   "backwardYaw": 147.83
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F5961F99_E30D_CC45_41C8_175990C927C8",
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
 "id": "camera_F659AF26_E30D_CC4F_41DE_516B3C888270",
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
 "id": "camera_F42D6120_E30D_F443_41DA_967CC4E3898F",
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
 "id": "panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
 "class": "Panorama",
 "label": "PIC_2019_07_26_12_59_08_20190813103036",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E67D1710_C7FC_5914_41E3_355C4A5B07F5",
  "this.overlay_8CC93C58_DB55_AF14_41E6_1271C30D079D",
  "this.overlay_9AFD85F4_C4CC_591C_41D0_6F625183D969",
  "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB",
   "yaw": 34.39,
   "distance": 1,
   "backwardYaw": 88.53
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2",
   "yaw": -32.33,
   "distance": 1,
   "backwardYaw": 151.69
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
   "yaw": 162.98,
   "distance": 1,
   "backwardYaw": -60.93
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F5E04FAA_E30D_CC47_41E8_D4D8E35EB1E6",
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
 "id": "panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7",
 "class": "Panorama",
 "label": "3d-13_54_53",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E060FE33_DD54_EB14_41D6_17DE8E550ED3",
  "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1",
   "yaw": -109.14,
   "distance": 1,
   "backwardYaw": 108.69
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F681BDBC_E30D_CC43_41BD_EFBBD05188D7",
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
 "id": "camera_F40F1145_E30D_F4CD_41EB_B35FBEECB4B7",
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
 "id": "panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2",
 "class": "Panorama",
 "label": "PIC_2019_07_26_12_57_52_20190813103040",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8D960CF1_DB57_EF14_41B8_A520AA01C5E1",
  "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
   "yaw": 151.69,
   "distance": 1,
   "backwardYaw": -32.33
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
 "class": "Panorama",
 "label": "3d-13_19_18",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F7780DCF_DCF5_A90C_41DE_66EF2B03F993",
  "this.overlay_F95FE6EB_DCF3_DB34_41E1_F617D3342B9C",
  "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67",
   "yaw": 13.13,
   "distance": 1,
   "backwardYaw": 170.98
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
   "yaw": 120.16,
   "distance": 1,
   "backwardYaw": -69.52
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer"
},
{
 "id": "camera_F469F167_E30D_F4CD_41E8_7976AAE7179E",
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
 "id": "camera_F603BE71_E30D_CCC5_41DE_637531297736",
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
 "id": "panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_02_57_20190813103023",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E26707FE_C5D4_D90C_41C7_D02D347E4F6D",
  "this.overlay_E38E4D16_C5D7_E91C_41E1_3EF9446C5F30",
  "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3",
   "yaw": -60.93,
   "distance": 1,
   "backwardYaw": 162.98
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
   "yaw": -78.3,
   "distance": 1,
   "backwardYaw": -25.79
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5",
 "class": "Panorama",
 "label": "3d-13_13_46",
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
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171",
   "yaw": 21.79,
   "distance": 1,
   "backwardYaw": 148.25
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
   "yaw": 166.8,
   "distance": 1,
   "backwardYaw": -140.23
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88",
   "yaw": -22,
   "distance": 1,
   "backwardYaw": -26.59
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080",
   "yaw": -91.63,
   "distance": 1,
   "backwardYaw": -47.04
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C",
   "yaw": 38.45,
   "distance": 1,
   "backwardYaw": -25.7
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F6AF7D9B_E30D_CC45_41E2_480E093C85B6",
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
 "id": "camera_F74E3D6B_E30D_CCC5_41D8_923A8E694805",
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
 "id": "panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
 "class": "Panorama",
 "label": "3d-13_29_17",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8744D04C_CCF4_570C_41CA_541F08C256CA",
  "this.overlay_85885EC9_CCF3_EB74_41E3_FA5DED0A80D9",
  "this.overlay_8508E24C_C5DC_7B0C_41D9_1DA426602696",
  "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
   "yaw": -120.81,
   "distance": 1,
   "backwardYaw": 60.53
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C",
   "yaw": -20.01,
   "distance": 1,
   "backwardYaw": 150.8
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
   "yaw": -163.58,
   "distance": 1,
   "backwardYaw": 21.46
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_B61A3A44_BAC5_C260_41D3_E257A294512E",
 "class": "Panorama",
 "label": "3d-13_30_39",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8D3BCBB5_CD54_A91C_41CF_5755E33BD1A3",
  "this.overlay_8F522B1B_CD54_6914_41E2_67366406B83A",
  "this.overlay_8E1D4AB2_CD5C_6B14_41E9_9C05C7FE03F1",
  "this.overlay_828B816F_CD5F_D90C_41E9_9C3319952191",
  "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F",
   "yaw": -115.25,
   "distance": 1,
   "backwardYaw": 55.04
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383",
   "yaw": 60.53,
   "distance": 1,
   "backwardYaw": -120.81
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
   "yaw": -78.46,
   "distance": 1,
   "backwardYaw": 104.43
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464",
   "yaw": 158.26,
   "distance": 1,
   "backwardYaw": -31.18
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F4D360F9_E30D_F5C5_41E2_D7D79ECCFD8A",
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
 "id": "camera_F0162274_E30D_F4C3_41E4_0F71ADC58E9D",
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
 "id": "camera_F06C42C5_E30D_F5CD_41EB_F013D3AF15CA",
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
 "id": "camera_F60C2E92_E30D_CC47_41BE_458D549C7409",
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
 "id": "camera_F6B55DAB_E30D_CC45_41E9_3A378E497FA0",
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
 "id": "camera_F69B4DDC_E30D_CFC3_41E1_D77A528822F9",
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
 "id": "map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF",
 "width": 1350,
 "height": 1604,
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "label": "BTC_ReferenceMap",
 "fieldOfViewOverlayInsideColor": "#CC0000",
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
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayInsideOpacity": 0.1,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "thumbnailUrl": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_t.jpg",
 "scaleMode": "fit_to_height",
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
    "tags": "preload",
    "height": 279,
    "url": "media/map_BAAC061D_ABA0_2C94_41DE_D17FF6B7E4FF_lq.jpeg"
   }
  ]
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
 "id": "camera_F7A52335_E30D_F44D_41E3_17D4BE878EBD",
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
 "id": "camera_F52D3FFC_E30D_CBC3_41E6_9D59FD5BCFD4",
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
 "id": "camera_F5B47F62_E30D_CCC7_41D4_B817CB552ED3",
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
 "id": "camera_F4F0A0D6_E30D_F5CF_41E9_57FB22DC2474",
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
 "id": "camera_F05F3325_E30D_F44D_41DF_3FF0CA676C45",
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
 "id": "camera_F631BE54_E30D_CCC3_41D5_69C5D44F8422",
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
 "id": "camera_F51F8032_E30D_F447_41E3_5DC171DEC544",
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
 "id": "camera_F4C2E0E6_E30D_F5CF_41BE_A9AB9C3B269F",
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
 "id": "camera_F00CF264_E30D_F4C3_41E4_CF0889CA503C",
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
 "id": "panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F",
 "class": "Panorama",
 "label": "3d-13_27_36",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_8FA69E67_CD4C_AB3C_41D9_CB991DE56E91",
  "this.overlay_811457F6_CD54_591C_41A0_89496D53657A",
  "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237",
   "yaw": 37.97,
   "distance": 1,
   "backwardYaw": 32.25
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB",
   "yaw": 157.9,
   "distance": 1,
   "backwardYaw": -20.36
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F43D2133_E30D_F445_41B2_A6DF4E39B677",
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
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  "this.PanoramaPlayListItem_F7276CC5_E30D_CDCD_41DB_65F51887759D",
  "this.PanoramaPlayListItem_F7261CC6_E30D_CDCF_4182_37907DAE2F6D",
  "this.PanoramaPlayListItem_F7267CC6_E30D_CDCF_41BC_22D96876D15A",
  "this.PanoramaPlayListItem_F725FCC7_E30D_CDCD_41D8_9625B36BC5BB",
  "this.PanoramaPlayListItem_F7254CC7_E30D_CDCD_41D3_9B7137C81131",
  "this.PanoramaPlayListItem_F724CCC8_E30D_CDC3_41D4_A8C321F47863",
  "this.PanoramaPlayListItem_F7244CC8_E30D_CDC3_41D0_984C881FBDD3",
  "this.PanoramaPlayListItem_F72BCCC9_E30D_CDC5_41E2_0D3999704D86",
  "this.PanoramaPlayListItem_F72B3CC9_E30D_CDC5_41DB_A174C75FBEE6",
  "this.PanoramaPlayListItem_F72ABCCA_E30D_CDC7_41E3_37BF4685E5F2",
  "this.PanoramaPlayListItem_F72A0CCA_E30D_CDC7_41D4_E31DE7331737",
  "this.PanoramaPlayListItem_F7298CCB_E30D_CDC5_41D5_46DFB76986C3",
  "this.PanoramaPlayListItem_F7291CCB_E30D_CDC5_41EA_E3C4DB51F48E",
  "this.PanoramaPlayListItem_F7289CCC_E30D_CDC3_4199_5C860BF26060",
  "this.PanoramaPlayListItem_F728ECCC_E30D_CDC3_41C0_01F14D56A20E",
  "this.PanoramaPlayListItem_F7284CCD_E30D_CDDD_41E1_24E0CA98C5EE",
  "this.PanoramaPlayListItem_F72FCCCE_E30D_CDDF_41B7_356F4AB31598",
  "this.PanoramaPlayListItem_F72F5CCE_E30D_CDDF_41EA_72A3E65592B2",
  "this.PanoramaPlayListItem_F72EDCCF_E30D_CDDD_41C0_8B7CA3FDE4EB",
  "this.PanoramaPlayListItem_F72E2CCF_E30D_CDDD_41C9_0C37A4EFD1A0",
  "this.PanoramaPlayListItem_F72DACD0_E30D_CDC3_41CB_E7A30A37D011",
  "this.PanoramaPlayListItem_F72D3CD0_E30D_CDC3_41D7_A5F4A0BC4462",
  "this.PanoramaPlayListItem_F72CACD1_E30D_CDC5_41E8_FC56175AEB16",
  "this.PanoramaPlayListItem_F72C3CD2_E30D_CDC7_41C9_C1BC71175E46",
  "this.PanoramaPlayListItem_F72D3CD2_E30D_CDC7_41C6_B804922A09D7",
  "this.PanoramaPlayListItem_F72C9CD3_E30D_CDC5_41A4_2DE07591A5B7",
  "this.PanoramaPlayListItem_F72C0CD3_E30D_CDC5_41DA_6E1AF0EF6DA0",
  "this.PanoramaPlayListItem_F7338CD4_E30D_CDC3_41DC_623776F6B76C",
  "this.PanoramaPlayListItem_F7330CD4_E30D_CDC3_41E2_813D2949DE6D",
  "this.PanoramaPlayListItem_F7329CD5_E30D_CDCD_4196_0B419BF40BEE",
  "this.PanoramaPlayListItem_F7321CD5_E30D_CDCD_41EA_F80AB42BEFA7",
  "this.PanoramaPlayListItem_F7326CD6_E30D_CDCF_41DA_6C30C1000801",
  "this.PanoramaPlayListItem_F731ECD6_E30D_CDCF_41EB_77D136331624",
  "this.PanoramaPlayListItem_F7316CD7_E30D_CDCD_41E5_20C01DE73648",
  "this.PanoramaPlayListItem_F730ECD7_E30D_CDCD_41E1_89158D2E5C41",
  "this.PanoramaPlayListItem_F7307CD8_E30D_CDC3_41AE_C189B229E59D"
 ]
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
 "id": "camera_F0367213_E30D_F445_41EA_4756076C7B7C",
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
 "id": "camera_F54A3063_E30D_F4C5_41D0_B0F8A3F06E01",
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
 "id": "panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532",
 "class": "Panorama",
 "label": "3d-13_21_05",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_F6445E04_DCCC_EAFC_41BA_78BB478CEB52",
  "this.overlay_8B2F4EBE_DB4C_AB0C_41D8_07ADF5B89A0D",
  "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856",
   "yaw": -69.52,
   "distance": 1,
   "backwardYaw": 120.16
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB",
   "yaw": 36.77,
   "distance": 1,
   "backwardYaw": -135.55
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55",
 "class": "Panorama",
 "label": "PIC_2019_07_26_12_59_53_20190813103033",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_E15B9392_C5CD_B914_41D6_CAB9EC8C6109",
  "this.overlay_E15C91A5_C5CC_593C_41D4_49A13336AF4D",
  "this.overlay_E158F60A_C5CF_BAF4_41C4_E8E7A2A81B35",
  "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819",
   "yaw": -161.64,
   "distance": 1,
   "backwardYaw": -80.28
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
   "yaw": 89,
   "distance": 1,
   "backwardYaw": -3.44
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16",
   "yaw": -25.79,
   "distance": 1,
   "backwardYaw": -78.3
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570",
 "class": "Panorama",
 "label": "PIC_2019_07_26_13_00_34_20190813103031",
 "pitch": 0,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_A72C4631_BB53_BB14_41DB_74016C593F0A",
  "this.overlay_F1159DB4_DB77_A91C_41D1_9ED637865B45",
  "this.overlay_8E9E27BA_DB55_B914_41E0_8510B76576EB",
  "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_tcap0"
 ],
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A",
   "yaw": 129.91,
   "distance": 1,
   "backwardYaw": -39.97
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91",
   "yaw": 177.18,
   "distance": 1,
   "backwardYaw": 155.81
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD",
   "yaw": -60.26,
   "distance": 1,
   "backwardYaw": 165.35
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_t.jpg",
   "stereoCube": {
    "class": "ImageResource",
    "levels": [
     {
      "rowCount": 5,
      "width": 30720,
      "tags": "ondemand",
      "height": 2560,
      "class": "TiledImageResourceLevel",
      "colCount": 60,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/0/{row}_{column}.jpg"
     },
     {
      "rowCount": 3,
      "width": 18432,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "colCount": 36,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/1/{row}_{column}.jpg"
     },
     {
      "rowCount": 2,
      "width": 12288,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "colCount": 24,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/2/{row}_{column}.jpg"
     },
     {
      "rowCount": 1,
      "width": 6144,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "colCount": 12,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0/3/{row}_{column}.jpg"
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "partial": false,
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
 "id": "camera_F6F63DFD_E30D_CFBD_41C3_6BA884530400",
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
 "id": "camera_F031A202_E30D_F447_41DE_2E6F46BF083D",
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
 "minHeight": 1,
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "pagePaddingBottom": 0,
 "minWidth": 1,
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
 "shadowHorizontalLength": 3,
 "pagePaddingTop": 0,
 "shadowOpacity": 0.5,
 "borderRadius": 2,
 "tabsFontFamily": "Arial",
 "overflow": "visible",
 "borderSize": 0,
 "shadow": true,
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
   "contentOpaque": false,
   "paddingLeft": 0,
   "width": "100%",
   "layout": "absolute",
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
   "horizontalAlign": "left",
   "paddingBottom": 0,
   "scrollBarMargin": 2,
   "borderSize": 1,
   "verticalAlign": "top",
   "data": {
    "name": "TabPanelPage943"
   },
   "overflow": "scroll",
   "backgroundOpacity": 1,
   "borderRadius": 0,
   "shadow": false,
   "backgroundColorRatios": [
    0
   ]
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
   "contentOpaque": false,
   "paddingLeft": 0,
   "width": "100%",
   "layout": "absolute",
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
   "horizontalAlign": "left",
   "paddingBottom": 0,
   "scrollBarMargin": 2,
   "borderSize": 1,
   "verticalAlign": "top",
   "data": {
    "name": "TabPanelPage1538"
   },
   "overflow": "scroll",
   "backgroundOpacity": 1,
   "borderRadius": 2,
   "shadow": false,
   "backgroundColorRatios": [
    0
   ]
  }
 ],
 "bottom": "0%",
 "tabsTextDecoration": "none",
 "selectedTabFontColor": "#000000",
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
 "selectedTabBackgroundColorRatios": [
  0
 ],
 "tabsFontWeight": "bold",
 "paddingLeft": 0,
 "propagateClick": false,
 "tabsFontColor": "#333333",
 "tabsAlign": "normal",
 "id": "TabPanel_BC5A99EF_ACB8_4AAB_41CD_5A2CED1E3183",
 "width": "100%",
 "height": "100%",
 "selectedTabFontSize": "14px",
 "tabsBackgroundOpacity": 0.65,
 "scrollBarWidth": 10,
 "selectedTabFontWeight": "bold",
 "shadowVerticalLength": 0,
 "tabsRollOverFontColor": "#000000",
 "tabsRollOverBackgroundColorRatios": [
  1
 ],
 "paddingBottom": 0,
 "tabsRollOverFontWeight": "bold",
 "pagePaddingRight": 0,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "tabsRollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "tabsFontSize": "14px",
 "data": {
  "name": "TabPanel942"
 }
},
{
 "id": "overlay_E0BA82D0_C5F3_DB14_41DF_FD2457E25DE9",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -41.64,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.53,
   "hfov": 18.72
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07, this.camera_F0162274_E30D_F4C3_41E4_0F71ADC58E9D); this.mainPlayList.set('selectedIndex', 6)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Shared Building Meeting Room (1 of 3)"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E0DAC8C9_C5FC_7774_41BE_CA759112717F",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -3.44,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -11.51,
   "hfov": 18.2
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_F063E294_E30D_F443_41DC_EB0D826BB392); this.mainPlayList.set('selectedIndex', 35)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Coffee Kiosk"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E023939C_C5FC_590C_41B0_53B98B7CE40E",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 155.81,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -17.27,
   "hfov": 16.97
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_F019B284_E30D_F443_41D4_439905B9C966); this.mainPlayList.set('selectedIndex', 1)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Main Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 104.53,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 1110,
      "url": "media/panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -6.79,
   "hfov": 18.79
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819, this.camera_F5D37FDC_E30D_CBC3_41EB_134D8A89441C); this.mainPlayList.set('selectedIndex', 8)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Jump to Outdoor Lounge"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8EECC05D_DB53_D70C_41E7_B9BA69E1FC5B",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 165.35,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 4.18,
   "hfov": 9.74
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_F5235FED_E30D_CBDD_41E9_28FE611AA2CB); this.mainPlayList.set('selectedIndex', 1)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Enter Main Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -26.59,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 3.54,
   "hfov": 11.46
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_F6E47DEC_E30D_CFC3_41C8_F30BCEA9200D); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Foyer"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "id": "overlay_FEDEE52C_DD33_D90C_41E5_666F5F809E06",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 96.65,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B08CB062_BB4C_B734_41C7_F08141F48814_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -28.22,
   "hfov": 21.82
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_F7650D2B_E30D_CC45_41D4_03DD42ADC422); this.mainPlayList.set('selectedIndex', 31)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B08CB062_BB4C_B734_41C7_F08141F48814_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "id": "overlay_FBC5763E_DCCD_FB0C_41D6_66D33197C836",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -25.7,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -15.61,
   "hfov": 22.76
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_F41FC155_E30D_F4CD_41E4_FFF6A3B11C52); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Public Works North Wing Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8D5BFB54_DB4C_691C_41D4_796EDB8312A3",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 135.03,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -9.65,
   "hfov": 16.74
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67, this.camera_F40F1145_E30D_F4CD_41EB_B35FBEECB4B7); this.mainPlayList.set('selectedIndex', 12)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 108.69,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -10.96,
   "hfov": 23.85
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7, this.camera_F6D0CE1C_E30D_CC43_41D8_25F8F8C27057); this.mainPlayList.set('selectedIndex', 34)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Breakroom Kitchenette"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E3551545_DD54_597C_41E3_F16D9D976741",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -144.89,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -13.69,
   "hfov": 23.28
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF, this.camera_F631BE54_E30D_CCC3_41D5_69C5D44F8422); this.mainPlayList.set('selectedIndex', 29)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E3128B30_DD54_6914_41DB_3250C26A37F5",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 62.58,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -8.93,
   "hfov": 23.81
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_F6215E2D_E30D_CC5D_41E3_CA8296AC7757); this.mainPlayList.set('selectedIndex', 31)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 27.89,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -9.23,
   "hfov": 13.21
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD, this.camera_F51F8032_E30D_F447_41E3_5DC171DEC544); this.mainPlayList.set('selectedIndex', 0)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Jump to Main Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E9D227A9_C7F4_5934_4191_7DF57E605884",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -80.28,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 1110,
      "url": "media/panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -4.43,
   "hfov": 12.35
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_F50FF01D_E30D_F47D_41D6_55868721F303); this.mainPlayList.set('selectedIndex', 35)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Jump to Coffee Kiosk"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -140.23,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 14.67,
   "hfov": 20.69
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_F603BE71_E30D_CCC5_41DE_637531297736); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Foyer"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F1A1F414_DB4F_BF1C_41DD_6699285A7ECD",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -39.97,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -23.31,
   "hfov": 13.78
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570, this.camera_F60C2E92_E30D_CC47_41BE_458D549C7409); this.mainPlayList.set('selectedIndex', 1)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -47.04,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -25.17,
   "hfov": 23.01
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_F579B053_E30D_F4C5_41EA_A04412547A57); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Foyer"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_FF8B7DD4_DD3C_E91C_41DD_FDF28BC23C2C",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 150.59,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B76768D0_BB4D_F714_41E6_F60680726080_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -22.82,
   "hfov": 21.89
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF, this.camera_F5686043_E30D_F4C5_41B2_9AB4221BA670); this.mainPlayList.set('selectedIndex', 29)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B76768D0_BB4D_F714_41E6_F60680726080_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 147.83,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -31.85,
   "hfov": 18.8
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB, this.camera_F469F167_E30D_F4CD_41E8_7976AAE7179E); this.mainPlayList.set('selectedIndex', 18)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "North Staircase"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F6CB96EF_DCD5_DB0C_41E4_DFFD50D9AD45",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -15.74,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -4.94,
   "hfov": 21.77
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA, this.camera_F024D1E2_E30D_F7C7_41E1_EC79A1E7C6A6); this.mainPlayList.set('selectedIndex', 15)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Breakroom Kitchenette"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8AADA53A_DB34_5914_41C7_C37D932D358D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -69.35,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.58,
   "hfov": 14.49
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB, this.camera_F47A4177_E30D_F4CD_41B1_CF62B35A79E7); this.mainPlayList.set('selectedIndex', 17)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -89.41,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -20.63,
   "hfov": 18.76
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A, this.camera_F52D3FFC_E30D_CBC3_41E6_9D59FD5BCFD4); this.mainPlayList.set('selectedIndex', 16)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F379F50A_DB34_DEF5_41E7_624647E26E55",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -65.58,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -18.77,
   "hfov": 19.22
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB, this.camera_F53D900C_E30D_F443_41C3_D12DE945B304); this.mainPlayList.set('selectedIndex', 17)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -51.79,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -4.54,
   "hfov": 16.42
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C, this.camera_F07DE2E5_E30D_F5CD_41EB_A8D62AE07BAD); this.mainPlayList.set('selectedIndex', 11)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8DB93129_DB4C_5934_41C8_B0AA961BBFD7",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 170.98,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.99,
   "hfov": 14.58
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856, this.camera_F07542D5_E30D_F5CD_41D3_DBB29665337D); this.mainPlayList.set('selectedIndex', 13)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -103.99,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -16.81,
   "hfov": 22.61
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814, this.camera_F681BDBC_E30D_CC43_41BD_EFBBD05188D7); this.mainPlayList.set('selectedIndex', 32)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Office"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E1E82C4B_DD4C_AF74_41E0_85735B7227DC",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 109.79,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -14.67,
   "hfov": 24
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265, this.camera_F6B55DAB_E30D_CC45_41E9_3A378E497FA0); this.mainPlayList.set('selectedIndex', 33)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Office"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E0092DC0_DD4C_A974_41B8_8EA6C384ED7D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 8.37,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -9.52,
   "hfov": 22.8
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_F6AF7D9B_E30D_CC45_41E2_480E093C85B6); this.mainPlayList.set('selectedIndex', 30)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -32.24,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -0.51,
   "hfov": 17.16
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_F0367213_E30D_F445_41EA_4756076C7B7C); this.mainPlayList.set('selectedIndex', 25)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_86477B04_CCCC_AAFC_41E5_1958E260784A",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 55.04,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.65,
   "hfov": 17.72
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_F031A202_E30D_F447_41DE_2E6F46BF083D); this.mainPlayList.set('selectedIndex', 27)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_80BA5B74_CCD5_A91C_41E9_B0B180FEDDB7",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 93.99,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.68,
   "hfov": 17.07
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_F0388223_E30D_F445_41DB_2D5322A57BE2); this.mainPlayList.set('selectedIndex', 19)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -135.55,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -15.71,
   "hfov": 19.54
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532, this.camera_F7B1A345_E30D_F4CD_41E6_3A73F4266148); this.mainPlayList.set('selectedIndex', 14)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F70B2EF3_DCD5_AB14_41D7_9E19EC513E31",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -65.76,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -7.23,
   "hfov": 19.85
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA, this.camera_F05F3325_E30D_F44D_41DF_3FF0CA676C45); this.mainPlayList.set('selectedIndex', 15)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Breakroom Kitchenette"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8965EAFF_DB34_6B0C_41E0_71785A11683F",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 19.32,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.29,
   "hfov": 14.85
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A, this.camera_F7A52335_E30D_F44D_41E3_17D4BE878EBD); this.mainPlayList.set('selectedIndex', 16)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -27.71,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -14.54,
   "hfov": 21.3
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237, this.camera_F04722F5_E30D_F5CD_41C2_7CF63D574322); this.mainPlayList.set('selectedIndex', 24)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Hallway Courtyard View"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_878C3B1E_DB3C_A90C_41E9_40AB17E397B4",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 148.25,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -1.05,
   "hfov": 11.48
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5, this.camera_F04FB306_E30D_F44F_41DB_7E5025EBD517); this.mainPlayList.set('selectedIndex', 3)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Foyer"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -98.21,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -26.24,
   "hfov": 22.25
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B76768D0_BB4D_F714_41E6_F60680726080, this.camera_F5545074_E30D_F4C3_41E7_883FF75AF22A); this.mainPlayList.set('selectedIndex', 28)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_FF0CD69D_DD34_DB0C_41E7_135D4B7B9070",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 42.02,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -9,
   "hfov": 24.16
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_F54A3063_E30D_F4C5_41D0_B0F8A3F06E01); this.mainPlayList.set('selectedIndex', 30)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -45.71,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -4.47,
   "hfov": 16.15
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_9FDE0217_CBDC_BB1C_41D5_7827D4680D8D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 32.25,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -1.1,
   "hfov": 15
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F, this.camera_F69B4DDC_E30D_CFC3_41E1_D77A528822F9); this.mainPlayList.set('selectedIndex', 26)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_9D07DBDE_CBF4_690C_41E8_C8BD6208D196",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -103.62,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.01,
   "hfov": 18.71
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171, this.camera_F68FBDCC_E30D_CFC3_41C5_375EF9FC9406); this.mainPlayList.set('selectedIndex', 21)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -31.18,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.8,
   "hfov": 18.01
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_F5B47F62_E30D_CCC7_41D4_B817CB552ED3); this.mainPlayList.set('selectedIndex', 27)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_81BDF5FD_CBCC_590C_41AD_C9081E514F86",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 21.46,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -1.43,
   "hfov": 17.73
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_F5866F7D_E30D_CCBD_41CD_B732D0EED6B5); this.mainPlayList.set('selectedIndex', 22)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_9D62C916_CBCC_691D_41E7_61C409C0A16D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -84.04,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.26,
   "hfov": 17.39
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_F5ABEF41_E30D_CCC5_41E3_1823471006A0); this.mainPlayList.set('selectedIndex', 23)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -145.73,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -35.05,
   "hfov": 20.42
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D, this.camera_F02F71F3_E30D_F7C5_41CF_FD350518E9A1); this.mainPlayList.set('selectedIndex', 31)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -53.66,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -7.77,
   "hfov": 15.49
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Hallway Courtyard View",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_9EF0F62B_CBF5_BB34_41CE_CD3D767BFDFB",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 150.8,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -2.72,
   "hfov": 18.28
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_F051D316_E30D_F44F_41D6_EC6890589B3E); this.mainPlayList.set('selectedIndex', 22)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_9DFC42FD_CBF4_7B0C_41EA_2E47922618D2",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -120.33,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.06,
   "hfov": 18.09
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -20.36,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -7.01,
   "hfov": 16.99
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F, this.camera_F06C42C5_E30D_F5CD_41EB_F013D3AF15CA); this.mainPlayList.set('selectedIndex', 26)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8BE39F15_CCDC_691C_41CD_16F218EB105F",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 152.85,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -12.91,
   "hfov": 21.65
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_F066A2A5_E30D_F44D_41CF_D3BA08FE7A29); this.mainPlayList.set('selectedIndex', 23)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_83E7977F_CD73_B90C_41D8_752493A076BC",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 104.43,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.53,
   "hfov": 16.97
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_F068E2B5_E30D_F44D_41C9_3D31674DD9DF); this.mainPlayList.set('selectedIndex', 27)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -11.51,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -17.71,
   "hfov": 23.16
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_F6F63DFD_E30D_CFBD_41C3_6BA884530400); this.mainPlayList.set('selectedIndex', 5)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Main Lobby"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 88.95,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -2.03,
   "hfov": 8.84
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A, this.camera_F71EDD1B_E30D_CC45_419C_14FB1C73D5A4); this.mainPlayList.set('selectedIndex', 16)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing  Staircase Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_87B3BE15_DB4C_EB1C_41D7_C141EDFA2B7E",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 146.99,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -12.38,
   "hfov": 15.45
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Hallway Courtyard View"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_874CC225_DB3C_5B3C_41DD_4B12D212E31D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 88.53,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -10.75,
   "hfov": 20.03
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_F7158D0B_E30D_CC45_41C0_0E6E41BD7368); this.mainPlayList.set('selectedIndex', 10)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Head down North Staircase"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "id": "overlay_E67D1710_C7FC_5914_41E3_355C4A5B07F5",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 162.98,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -19.53,
   "hfov": 19.11
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16, this.camera_F43D2133_E30D_F445_41B2_A6DF4E39B677); this.mainPlayList.set('selectedIndex', 7)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Jump to Courtyard"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8CC93C58_DB55_AF14_41E6_1271C30D079D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -32.33,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 0.48,
   "hfov": 11.48
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2, this.camera_F42D6120_E30D_F443_41DA_967CC4E3898F); this.mainPlayList.set('selectedIndex', 9)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Exit North Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_9AFD85F4_C4CC_591C_41D0_6F625183D969",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 34.39,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 1110,
      "url": "media/panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": 25.71,
   "hfov": 13.69
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB, this.camera_F423D10E_E30D_F45F_41D4_5016A997702B); this.mainPlayList.set('selectedIndex', 18)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Head up North Staircase"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -109.14,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -20.13,
   "hfov": 24.5
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1, this.camera_F6C6FE0D_E30D_CC5D_41B6_18B22830882E); this.mainPlayList.set('selectedIndex', 30)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works South Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 151.69,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 3.54,
   "hfov": 11.46
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_F03C8233_E30D_F445_41CE_C4DAE889D372); this.mainPlayList.set('selectedIndex', 10)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Enter North Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 13.13,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.12,
   "hfov": 20.96
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67, this.camera_F5F08FBB_E30D_CC45_41CD_C6CA9F6D9E9E); this.mainPlayList.set('selectedIndex', 12)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F95FE6EB_DCF3_DB34_41E1_F617D3342B9C",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 120.16,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -10.84,
   "hfov": 20.43
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532, this.camera_F5C15FCB_E30D_CBC5_41D6_2DAF32D88D46); this.mainPlayList.set('selectedIndex', 14)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "playbackBarHeadShadowVerticalLength": 0,
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
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontColor": "#606060",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingLeft": 6,
 "toolTipShadowBlurRadius": 3,
 "firstTransitionDuration": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 2,
 "top": 0,
 "borderRadius": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#000000",
 "toolTipPaddingTop": 4,
 "toolTipFontStyle": "normal",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": "11px",
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "data": {
  "name": "MapViewer"
 },
 "playbackBarHeadShadow": true,
 "transitionMode": "blending"
},
{
 "id": "overlay_E26707FE_C5D4_D90C_41C7_D02D347E4F6D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -78.3,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.7,
   "hfov": 21.78
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55, this.camera_F4D360F9_E30D_F5C5_41E2_D7D79ECCFD8A); this.mainPlayList.set('selectedIndex', 35)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Jump to Coffee Kiosk"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E38E4D16_C5D7_E91C_41E1_3EF9446C5F30",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -60.93,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -12.61,
   "hfov": 21.38
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3, this.camera_F4C2E0E6_E30D_F5CF_41BE_A9AB9C3B269F); this.mainPlayList.set('selectedIndex', 10)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Jump to North Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 21.79,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_4_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -6.33,
   "hfov": 19.27
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171, this.camera_F61E7EAD_E30D_CC5D_41E9_07020227712B); this.mainPlayList.set('selectedIndex', 21)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "CTM Hall Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F1A8E335_DB55_B91C_41D4_7CD2755F4ECE",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 166.8,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_0_HS_5_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -35.87,
   "hfov": 9.61
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A, this.camera_F66E2EC9_E30D_CDC5_41C0_71710438AED3); this.mainPlayList.set('selectedIndex', 2)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Main Staircase Landing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F01DF6C1_DB54_7B74_41DF_57239795EA8F",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -22,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 3.92,
   "hfov": 11.45
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88, this.camera_F6785EEA_E30D_CDC7_41E4_31EB98B9F1DC); this.mainPlayList.set('selectedIndex', 4)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Gym Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F05F8202_DB55_FAF4_41E0_20B535048178",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 38.45,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 1.63,
   "hfov": 11.47
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C, this.camera_F659AF26_E30D_CC4F_41DE_516B3C888270); this.mainPlayList.set('selectedIndex', 11)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8F37E14C_DB5C_D90C_41E2_B08694E2A623",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -91.63,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 0.48,
   "hfov": 11.48
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B76768D0_BB4D_F714_41E6_F60680726080, this.camera_F6495F05_E30D_CC4D_41D8_FF4EB5679AF8); this.mainPlayList.set('selectedIndex', 28)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Public Works South Wing Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -120.81,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -8.29,
   "hfov": 17.46
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E, this.camera_F74E3D6B_E30D_CCC5_41D8_923A8E694805); this.mainPlayList.set('selectedIndex', 27)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_85885EC9_CCF3_EB74_41E3_FA5DED0A80D9",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -163.58,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -8.03,
   "hfov": 17.94
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_F6A27D8B_E30D_CC45_41E0_516661B8C794); this.mainPlayList.set('selectedIndex', 19)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8508E24C_C5DC_7B0C_41D9_1DA426602696",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -20.01,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.18,
   "hfov": 15.63
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C, this.camera_F75B1D7A_E30D_CCC7_41E6_5C05E4CE4520); this.mainPlayList.set('selectedIndex', 20)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 158.26,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -7.58,
   "hfov": 17.74
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464, this.camera_F49750B6_E30D_F44F_41C1_A5E41D631FAB); this.mainPlayList.set('selectedIndex', 19)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8F522B1B_CD54_6914_41E2_67366406B83A",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -115.25,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -5.09,
   "hfov": 17.02
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F, this.camera_F4A40084_E30D_F443_41EB_883BE21C3604); this.mainPlayList.set('selectedIndex', 23)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8E1D4AB2_CD5C_6B14_41E9_9C05C7FE03F1",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -78.46,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -1.96,
   "hfov": 15.57
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_F486F0A6_E30D_F44F_41E3_F27A5EE90CED); this.mainPlayList.set('selectedIndex', 25)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_828B816F_CD5F_D90C_41E9_9C3319952191",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 60.53,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -3.63,
   "hfov": 17.34
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383, this.camera_F4B60095_E30D_F44D_41DC_C49337BEBB76); this.mainPlayList.set('selectedIndex', 22)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor CTM Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "data": {
  "label": "Main Entrance"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "Main Entrance",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "North Entrance"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "toolTip": "North Entrance",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "1st Floor Meeting Room"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "toolTip": "Shared building 1st Floor Meeting Room (1 of 3)",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Hall Lobby"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "Hall Lobby",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Main Staircase"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "Main Staircase",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Courtyard"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "toolTip": "Courtyard (Ping Pong, Corn Hole, putting green)",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Outdoor Lounge"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "toolTip": "Outdoor Lounge",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Staircase Lobby"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Staircase Lobby",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "2nd Floor Foyer"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "2nd Floor Foyer",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Gym"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Building Gym",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW North Wing 1"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "toolTip": "Public Works North Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW North Wing 2"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "toolTip": "Public Works North Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW North Wing 3"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "toolTip": "Public Works North Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW North Wing 4"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "toolTip": "Public Works North Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW North Wing 5"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "toolTip": "Public Works North Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW North Wing 6"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "toolTip": "Public Works North Wing Breakroom Kitchenette",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW North Wing 7"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "toolTip": "Public Works North Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "2nd Floor North Stairwell"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "CTM Area 2"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "toolTip": "CTM Area",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "CTM Entrance 1"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "toolTip": "CTM Area Entrance",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "North Staircase"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "toolTip": "North Staircase",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "CTM Area 5"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "toolTip": "CTM Area",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "CTM Area 4"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "toolTip": "CTM Area",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Public Works 2"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "toolTip": "Public Works Area",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Public Works 3"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "toolTip": "Public Works Area",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "CTM Area 1"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "toolTip": "CTM Area",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Public Works 1"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "CTM Area 3"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "toolTip": "CTM Area",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW South 1"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "toolTip": "PW South Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW South 2"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "toolTip": "PW South Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW South 3"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "toolTip": "PW South Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW South 4"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "toolTip": "PW South Wing",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW South Kitchen"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 34)",
   "toolTip": "Public Works South Wing Breakroom Kitchenette",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW South Office"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "toolTip": "PW South Wing Office",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "PW South Meeting Room"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "toolTip": "Public Works South Wing Meeting Room",
   "mapColor": "#FF0000"
  }
 ],
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
 "data": {
  "label": "Coffee Kiosk"
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "toolTip": "Coffee Kiosk",
   "mapColor": "#FF0000"
  }
 ],
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
 "id": "overlay_8FA69E67_CD4C_AB3C_41D9_CB991DE56E91",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 157.9,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -12.17,
   "hfov": 17.45
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB, this.camera_F5E04FAA_E30D_CC47_41E8_D4D8E35EB1E6); this.mainPlayList.set('selectedIndex', 25)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works Area"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_811457F6_CD54_591C_41A0_89496D53657A",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 37.97,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_0_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -10.66,
   "hfov": 19.62
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237, this.camera_F5961F99_E30D_CC45_41C8_175990C927C8); this.mainPlayList.set('selectedIndex', 24)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Hallway Courtyard View"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "id": "PanoramaPlayListItem_F7276CC5_E30D_CDCD_41DB_65F51887759D",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7276CC5_E30D_CDCD_41DB_65F51887759D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "media": "this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD"
},
{
 "id": "PanoramaPlayListItem_F7261CC6_E30D_CDCF_4182_37907DAE2F6D",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7261CC6_E30D_CDCF_4182_37907DAE2F6D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "media": "this.panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570"
},
{
 "id": "PanoramaPlayListItem_F7267CC6_E30D_CDCF_41BC_22D96876D15A",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7267CC6_E30D_CDCF_41BC_22D96876D15A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "media": "this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A"
},
{
 "id": "PanoramaPlayListItem_F725FCC7_E30D_CDCD_41D8_9625B36BC5BB",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F725FCC7_E30D_CDCD_41D8_9625B36BC5BB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "media": "this.panorama_96664FE3_9C2E_99D9_41AA_BB032EC3A7B5"
},
{
 "id": "PanoramaPlayListItem_F7254CC7_E30D_CDCD_41D3_9B7137C81131",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7254CC7_E30D_CDCD_41D3_9B7137C81131, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_968305F3_9C2E_E9B9_41C4_1F6980051A88"
},
{
 "id": "PanoramaPlayListItem_F724CCC8_E30D_CDC3_41D4_A8C321F47863",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F724CCC8_E30D_CDC3_41D4_A8C321F47863, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "media": "this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91"
},
{
 "id": "PanoramaPlayListItem_F7244CC8_E30D_CDC3_41D0_984C881FBDD3",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7244CC8_E30D_CDC3_41D0_984C881FBDD3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 6, 7)",
 "media": "this.panorama_96A899E5_9C39_99D9_41D7_6793EF2AFC07"
},
{
 "id": "PanoramaPlayListItem_F72BCCC9_E30D_CDC5_41E2_0D3999704D86",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72BCCC9_E30D_CDC5_41E2_0D3999704D86, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 7, 8)",
 "media": "this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16"
},
{
 "id": "PanoramaPlayListItem_F72B3CC9_E30D_CDC5_41DB_A174C75FBEE6",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72B3CC9_E30D_CDC5_41DB_A174C75FBEE6, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
 "media": "this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819"
},
{
 "id": "PanoramaPlayListItem_F72ABCCA_E30D_CDC7_41E3_37BF4685E5F2",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72ABCCA_E30D_CDC7_41E3_37BF4685E5F2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
 "media": "this.panorama_967B251B_9C3A_6E69_41CD_DCB8A74F4EC2"
},
{
 "id": "PanoramaPlayListItem_F72A0CCA_E30D_CDC7_41D4_E31DE7331737",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72A0CCA_E30D_CDC7_41D4_E31DE7331737, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
 "media": "this.panorama_B910D55D_ABA0_2C94_41CF_ABD22ED88EC3"
},
{
 "id": "PanoramaPlayListItem_F7298CCB_E30D_CDC5_41D5_46DFB76986C3",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7298CCB_E30D_CDC5_41D5_46DFB76986C3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
 "media": "this.panorama_B9BDE1DB_ABA0_279C_41E2_D8569406F74C"
},
{
 "id": "PanoramaPlayListItem_F7291CCB_E30D_CDC5_41EA_E3C4DB51F48E",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7291CCB_E30D_CDC5_41EA_E3C4DB51F48E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
 "media": "this.panorama_B832600E_ABE0_2474_41D9_8CBA44AB1C67"
},
{
 "id": "PanoramaPlayListItem_F7289CCC_E30D_CDC3_4199_5C860BF26060",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7289CCC_E30D_CDC3_4199_5C860BF26060, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
 "media": "this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856"
},
{
 "id": "PanoramaPlayListItem_F728ECCC_E30D_CDC3_41C0_01F14D56A20E",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F728ECCC_E30D_CDC3_41C0_01F14D56A20E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
 "media": "this.panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532"
},
{
 "id": "PanoramaPlayListItem_F7284CCD_E30D_CDDD_41E1_24E0CA98C5EE",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7284CCD_E30D_CDDD_41E1_24E0CA98C5EE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
 "media": "this.panorama_B878721A_ABA0_249C_41E5_42DC63EE7FFA"
},
{
 "id": "PanoramaPlayListItem_F72FCCCE_E30D_CDDF_41B7_356F4AB31598",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72FCCCE_E30D_CDDF_41B7_356F4AB31598, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
 "media": "this.panorama_B8677365_ABA0_E4B4_41D3_61A91EB0503A"
},
{
 "id": "PanoramaPlayListItem_F72F5CCE_E30D_CDDF_41EA_72A3E65592B2",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72F5CCE_E30D_CDDF_41EA_72A3E65592B2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
 "media": "this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB"
},
{
 "id": "PanoramaPlayListItem_F72EDCCF_E30D_CDDD_41C0_8B7CA3FDE4EB",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72EDCCF_E30D_CDDD_41C0_8B7CA3FDE4EB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
 "media": "this.panorama_A6D44F1F_ABF8_476B_41D8_B3CF98A887AB"
},
{
 "id": "PanoramaPlayListItem_F72E2CCF_E30D_CDDD_41C9_0C37A4EFD1A0",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72E2CCF_E30D_CDDD_41C9_0C37A4EFD1A0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
 "media": "this.panorama_A72CAC1C_ABFB_C96D_41C2_A819E7FD0464"
},
{
 "id": "PanoramaPlayListItem_F72DACD0_E30D_CDC3_41CB_E7A30A37D011",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72DACD0_E30D_CDC3_41CB_E7A30A37D011, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
 "media": "this.panorama_A72C9124_ABFB_DB5D_41D8_F87A81A5416C"
},
{
 "id": "PanoramaPlayListItem_F72D3CD0_E30D_CDC3_41D7_A5F4A0BC4462",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72D3CD0_E30D_CDC3_41D7_A5F4A0BC4462, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
 "media": "this.panorama_A72F62B4_ABF8_5EBD_41E4_10ECF8208171"
},
{
 "id": "PanoramaPlayListItem_F72CACD1_E30D_CDC5_41E8_FC56175AEB16",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72CACD1_E30D_CDC5_41E8_FC56175AEB16, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 22, 23)",
 "media": "this.panorama_B48F5FCA_BAA8_67CE_41D2_5124BA259383"
},
{
 "id": "PanoramaPlayListItem_F72C3CD2_E30D_CDC7_41C9_C1BC71175E46",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72C3CD2_E30D_CDC7_41C9_C1BC71175E46, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 23, 24)",
 "media": "this.panorama_B4B23379_BAAB_98CA_41BC_156570C4070F"
},
{
 "id": "PanoramaPlayListItem_F72D3CD2_E30D_CDC7_41C6_B804922A09D7",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72D3CD2_E30D_CDC7_41C6_B804922A09D7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 24, 25)",
 "media": "this.panorama_B4B40C5B_BAAB_A8CE_41D9_44F52B8C8237"
},
{
 "id": "PanoramaPlayListItem_F72C9CD3_E30D_CDC5_41A4_2DE07591A5B7",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72C9CD3_E30D_CDC5_41A4_2DE07591A5B7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 25, 26)",
 "media": "this.panorama_ABA13DEA_BAB8_ABCE_41D6_F5C0AED187AB"
},
{
 "id": "PanoramaPlayListItem_F72C0CD3_E30D_CDC5_41DA_6E1AF0EF6DA0",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F72C0CD3_E30D_CDC5_41DA_6E1AF0EF6DA0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 26, 27)",
 "media": "this.panorama_B7E2F709_BAC5_C3E0_41E2_1F47A7DD363F"
},
{
 "id": "PanoramaPlayListItem_F7338CD4_E30D_CDC3_41DC_623776F6B76C",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7338CD4_E30D_CDC3_41DC_623776F6B76C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 27, 28)",
 "media": "this.panorama_B61A3A44_BAC5_C260_41D3_E257A294512E"
},
{
 "id": "PanoramaPlayListItem_F7330CD4_E30D_CDC3_41E2_813D2949DE6D",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7330CD4_E30D_CDC3_41E2_813D2949DE6D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 28, 29)",
 "media": "this.panorama_B76768D0_BB4D_F714_41E6_F60680726080"
},
{
 "id": "PanoramaPlayListItem_F7329CD5_E30D_CDCD_4196_0B419BF40BEE",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7329CD5_E30D_CDCD_4196_0B419BF40BEE, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 29, 30)",
 "media": "this.panorama_B0B73FED_BB4D_A90C_41DD_5BAF1B584DAF"
},
{
 "id": "PanoramaPlayListItem_F7321CD5_E30D_CDCD_41EA_F80AB42BEFA7",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7321CD5_E30D_CDCD_41EA_F80AB42BEFA7, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 30, 31)",
 "media": "this.panorama_B0B33678_BB4C_5B14_41CE_244F1BC1C9B1"
},
{
 "id": "PanoramaPlayListItem_F7326CD6_E30D_CDCF_41DA_6C30C1000801",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7326CD6_E30D_CDCF_41DA_6C30C1000801, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 31, 32)",
 "media": "this.panorama_B7166B48_BB4C_E974_41B3_7A08EB06AF3D"
},
{
 "id": "PanoramaPlayListItem_F731ECD6_E30D_CDCF_41EB_77D136331624",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F731ECD6_E30D_CDCF_41EB_77D136331624, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 32, 33)",
 "media": "this.panorama_B08CB062_BB4C_B734_41C7_F08141F48814"
},
{
 "id": "PanoramaPlayListItem_F7316CD7_E30D_CDCD_41E5_20C01DE73648",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7316CD7_E30D_CDCD_41E5_20C01DE73648, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 33, 34)",
 "media": "this.panorama_B7658EF3_BB4C_6B14_41D6_29278CD75265"
},
{
 "id": "PanoramaPlayListItem_F730ECD7_E30D_CDCD_41E1_89158D2E5C41",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F730ECD7_E30D_CDCD_41E1_89158D2E5C41, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 34, 35)",
 "media": "this.panorama_B08C7101_BB73_B6F4_41E1_D402A928E1A7"
},
{
 "id": "PanoramaPlayListItem_F7307CD8_E30D_CDC3_41AE_C189B229E59D",
 "end": "this.trigger('tourEnded')",
 "player": "this.MainViewerPanoramaPlayer",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_F7307CD8_E30D_CDC3_41AE_C189B229E59D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 0)",
 "media": "this.panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55"
},
{
 "id": "overlay_F6445E04_DCCC_EAFC_41BA_78BB478CEB52",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -69.52,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -6.77,
   "hfov": 21.29
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B83EF5EA_ABA0_2FBC_41D9_81CCFB639856, this.camera_F4E090C6_E30D_F5CF_41EB_F4A11290B910); this.mainPlayList.set('selectedIndex', 13)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8B2F4EBE_DB4C_AB0C_41D8_07ADF5B89A0D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 36.77,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -4.42,
   "hfov": 14.46
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_BE8D46B9_ABA0_2D9C_41DB_43A4034EACAB, this.camera_F4F0A0D6_E30D_F5CF_41E9_57FB22DC2474); this.mainPlayList.set('selectedIndex', 17)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "2nd Floor Public Works North Wing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_B80FC0F1_ABA0_65AC_41E4_2EFB7F0BA532_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 89,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_0_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -13.83,
   "hfov": 19.87
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_F00A9254_E30D_F4C3_41E2_72731DCECFB8); this.mainPlayList.set('selectedIndex', 5)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Main Lobby"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E15C91A5_C5CC_593C_41D4_49A13336AF4D",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -161.64,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_1_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": -16.67,
   "hfov": 20.33
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_854F7B62_9C6B_9ADB_41B8_AB2EEF6E9819, this.camera_F0071244_E30D_F4C3_41EB_B993C588D470); this.mainPlayList.set('selectedIndex', 8)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Jump to Outdoor Lounge"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_E158F60A_C5CF_BAF4_41C4_E8E7A2A81B35",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -25.79,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_1_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -32.26,
   "hfov": 20.61
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9694797E_9C3A_66AB_41D7_6E57BF0DEE16, this.camera_F00CF264_E30D_F4C3_41E4_CF0889CA503C); this.mainPlayList.set('selectedIndex', 7)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Jump to Courtyard"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_E343CEF6_C5F3_AB19_41E1_3B0215A65E55_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "maxWidth": 42,
 "iconURL": "skin/IconButton_DF564DB0_C5F5_A914_41B7_BD300C9A8FA2.png",
 "paddingBottom": 0,
 "maxHeight": 43,
 "borderSize": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": false,
 "bottom": "7.57%",
 "data": {
  "name": "IconButton13821"
 }
},
{
 "playbackBarHeadShadowVerticalLength": 0,
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
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontColor": "#606060",
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingLeft": 6,
 "toolTipShadowBlurRadius": 3,
 "firstTransitionDuration": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "borderSize": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBottom": 0,
 "top": 0,
 "borderRadius": 0,
 "shadow": false,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#000000",
 "toolTipPaddingTop": 4,
 "toolTipFontStyle": "normal",
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontSize": "11px",
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingTop": 15,
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
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
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadow": true,
 "transitionMode": "blending"
},
{
 "id": "overlay_A72C4631_BB53_BB14_41DB_74016C593F0A",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 129.91,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1220,
      "height": 780,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_2_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": 5.17,
   "hfov": 18.91
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_967AB3E5_9C3A_A9D9_41D0_15D921A0234A, this.camera_F76CBD3B_E30D_CC45_41E8_F58F3F832AD9); this.mainPlayList.set('selectedIndex', 2)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Main Staircase Landing"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_F1159DB4_DB77_A91C_41D1_9ED637865B45",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": 177.18,
   "image": {
    "rowCount": 6,
    "frameCount": 24,
    "levels": [
     {
      "class": "ImageResourceLevel",
      "width": 1200,
      "height": 930,
      "url": "media/panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_0_HS_3_0.png"
     }
    ],
    "colCount": 4,
    "class": "AnimatedImageResource",
    "frameDuration": 41
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "pitch": -8.4,
   "hfov": 14.93
  }
 ],
 "data": {
  "label": "Circle Point 02b"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9679DB4D_9C39_9AE9_41E1_72F2B7C76F91, this.camera_F77A4D4B_E30D_CCC5_41CB_9C106650FF7E); this.mainPlayList.set('selectedIndex', 5)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Main Lobby"
  }
 ],
 "useHandCursor": true
},
{
 "id": "overlay_8E9E27BA_DB55_B914_41E0_8510B76576EB",
 "enabledInCardboard": true,
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
 "items": [
  {
   "yaw": -60.26,
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
   },
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "pitch": 0.48,
   "hfov": 11.48
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96957FF3_9C3A_99B9_41D1_57EB666BD4DD, this.camera_F7416D5B_E30D_CCC5_41C5_81324BF8CDE9); this.mainPlayList.set('selectedIndex', 0)",
   "displayTooltipInTouchScreens": true,
   "toolTip": "Exit Main Entrance"
  }
 ],
 "useHandCursor": true
},
{
 "id": "panorama_967ACBFE_9C3A_99AB_41B9_298ECC17B570_tcap0",
 "rotate": true,
 "angle": 0,
 "distance": 50,
 "class": "TripodCapPanoramaOverlay",
 "inertia": false,
 "hfov": 30,
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
 "backgroundColorDirection": "vertical",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "right": "0%",
 "paddingTop": 0,
 "paddingRight": 15,
 "contentOpaque": false,
 "paddingLeft": 15,
 "width": "30%",
 "layout": "absolute",
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
 "shadow": false,
 "backgroundColorRatios": [
  0,
  1
 ]
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
 "shadowVerticalLength": 2,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0.73,
  1
 ],
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
 "shadow": false,
 "bottom": "2%"
}],
 "scrollBarColor": "#000000",
 "height": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "borderRadius": 0,
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
