import * as types from '../constants/ActionTypes'

export const paint = (sourse, ref = null) => ({
  type: types.PAINT,
  sourse: sourse,
  ref: ref
})
export const sell = (id) => ({ type: types.SELL, id: id })
export const studioUpdate = (id) => ({ type: types.STUDIOUPDATE, id: id })
export const hiring = (id) => ({ type: types.HIRING, id: id })
export const autoSell = () => ({ type: types.AUTOSELL })
export const changeblock = (id, newBlock) => ({
  type: types.CHANGEBLOCK,
  id: id,
  newBlock: newBlock
})

export const galleryWorking = () => ({ type: types.GALLERYWORKING })
export const study = (picture) => ({ type: types.STUDY, picture: picture })
export const getOriginal = (id) => ({ type: types.GETORIGINAL, id: id })
export const buyUpgrade = (id) => ({ type: types.BUYUPGRADE, id: id })
export const chandePage = (pageId, gId = null) => ({
  type: types.CHANGEPAGE,
  page_id: pageId,
  galleryId: gId
})
export const autoSalesSwitch = () => ({
  type: types.AUTOSALESSWITCH
})
export const chandePhase = () => ({
  type: types.CHANGEPHASE
})
export const getPhrase = (sourse = null) => ({
  type: types.GETPHRASE,
  sourse: sourse
})
export const save = (isHandle = false) => ({
  type: types.SAVE,
  isHandle: isHandle
})
export const load = () => ({
  type: types.LOAD
})
export const reset = () => ({
  type: types.RESET
})
