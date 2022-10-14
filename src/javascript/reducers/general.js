import {
  PAINT,
  SELL,
  STUDIOUPDATE,
  HIRING,
  AUTOSELL,
  CHANGEBLOCK,
  GALLERYWORKING,
  CHANGEPAGE,
  GETORIGINAL,
  CHANGEPHASE,
  GETPHRASE,
  SAVE,
  LOAD,
  RESET,
  STUDY,
  BUYUPGRADE,
  AUTOSALESSWITCH
} from '../constants/ActionTypes'
import { intFormat } from '../actions/intFormat.jsx'

import { characters, phases } from '../data/phases.jsx'
import { baseState } from '../data/initialState.jsx'
import colors from '../../stylesheets/colors.scss'

const studioSize = 100

const randn_bm = (min, max) => {
  let u = 0,
    v = 0
  while (u === 0) u = Math.random() //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random()
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)

  num = num / 10.0 + 0.5 // Translate to 0 -> 1
  if (num > 1 || num < 0)
    // num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range
    num = randn_bm(min, max)
  // resample between 0 and 1 if out of range
  else {
    // num = Math.pow(num, skew) // Skew
    num *= max - min // Stretch to fill range
    num += min // offset to min
  }
  return num
  // return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
}

const getPictureCost = (state, quality, refCost, study) => {
  let factor = 0
  const studioUpdate = state.studioUpdate

  let cost = 0
  if (refCost == 1) {
    cost = (1 + factor) * quality
  } else {
    cost = Math.max(refCost * study * (1 + factor) * quality * 0.1, 1)
  }
  cost *= state.factor + cost
  return cost
}

const paint = (ref, skill, luck) => {
  const refQ = ref.quality ? ref.quality : 1
  let qual = 0
  //Чем больше скилл, тем меньше качество...(
  if (!ref.referense) {
    qual = Math.min(1, Math.random() * refQ) //(Math.floor(Math.random() * refQ * 1000) / 100) * skill
  } else {
    // const max = 0.3 - 0.25 * luck
    // qual = randn_bm(skill, max)
    // // console.log(qual)
    //
    // qual = refQ * Math.abs(qual)
    qual = Math.min(refQ - 0.001, Math.random() * refQ + skill / 10)
    // console.log(refQ, skill, qual)
  }

  return {
    status: 11,
    quality: Math.min(1, Math.max(1e-2, qual)),
    referense: ref.referense ? ref.referense : ref
  }
}

const measurement_id = 'G-NNC7JH0EBQ'
const api_secret = 'DZwUEUINTaWU-GkAO7MgSw'
const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`

const track = (name, clientId) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      client_id: clientId,
      events: [
        {
          name: name,
          params: {}
        }
      ]
    })
  })
}

const initialState = {}

export default function general(state = initialState, action) {
  switch (action.type) {
    case PAINT: {
      const newState = Object.assign({}, state)
      const paintings = newState.paintings[0]
      const references = newState.paintings[1]
      let ref = action.ref
      let picture = {}
      let click = 0

      if (newState.clicksDone == 0) {
        if (!ref) {
          //картина при обычнойм рисовании
          if (references.length == 0) {
            ref = Object.assign({}, newState.originals[0])
            ref.type = Math.floor(Math.random() * 3 + 1)
            newState.clicksToPainting = 1
          } else {
            const ref_id = Math.floor(Math.random() * references.length)
            ref = references[ref_id]
            newState.clicksToPainting = Math.floor(ref.quality * 200)
          }
        } else {
          //картина при обучении
          newState.clicksToPainting = Math.floor(500 * newState.study.skill)
        }

        picture = paint(ref, newState.study.skill, newState.luck)
        paintings.unshift(picture)
      }

      if (action.sourse == 0) {
        newState.statistics.totalClick += 1
        click = 1
      } else {
        click = newState.units[0].level * newState.units[0].pps
        newState.statistics.totalAutoClick += click
      }

      newState.clicksDone += click

      if (
        newState.clicksDone >= newState.clicksToPainting &&
        paintings.length < studioSize
      ) {
        newState.statistics.totalPainting += 1
        newState.clicksDone = 0

        picture = paintings[0]
        picture.status = 0

        newState.paintings[0].forEach((pic, i) => {
          if (pic.status == 11) {
            newState.paintings[0].splice(i, 1)
          }
        })

        track('painting_created', newState.clientId)
      }

      return newState
    }

    case SELL: {
      const newState = Object.assign({}, state)
      let dealers = newState.units[1]
      let paint = newState.paintings[0][action.id]
      if (paint.status == 0) {
        paint.status = 10
        paint.timeToSale = newState.speedOfSale
        paint.timeFraction = paint.timeToSale / newState.speedOfSale
      } else {
        let money = getPictureCost(
          newState,
          paint.quality,
          paint.referense.cost,
          newState.study.skill
        )
        newState.moneyGained += money

        if (paint.autoSell) {
          dealers.working -= 1
          newState.statistics.totalAutoSales += 1
          delete paint.autoSell
        }

        newState.paintings[0].splice([action.id], 1)
        newState.statistics.totalSales += 1
        newState.statistics.totalMoneys += money
      }
      return newState
    }

    case STUDIOUPDATE: {
      const newState = Object.assign({}, state)
      const studioUpdate = newState.studioUpdate[action.id]

      if (newState.moneyGained >= studioUpdate.cost) {
        newState.moneyGained -= studioUpdate.cost
        studioUpdate.level += 1
      } else {
        console.log('error', newState.moneyGained, studioUpdate.cost)
      }
      studioUpdate.cost = Math.floor(
        studioUpdate.baseCost * 1.15 ** studioUpdate.level
      )
      return newState
    }

    case HIRING: {
      const newState = Object.assign({}, state)
      const unit = newState.units[action.id]
      let isActive = unit.isActive
      isActive = action.id == 0 && unit.size <= unit.level ? false : isActive
      if (isActive) {
        if (newState.moneyGained >= unit.cost) {
          newState.moneyGained -= unit.cost
          unit.level += 1
        } else {
          console.log('error', newState.moneyGained, unit.cost)
        }
        const modif = action.id == 0 ? 8.15 : 1.15
        unit.cost = Math.floor(unit.baseCost * modif ** unit.level)
      } else {
        console.log(unit, 'не доступен')
      }
      return newState
    }

    case BUYUPGRADE: {
      const newState = Object.assign({}, state)
      const upg = newState.upgrade[action.id]
      let obj = {}
      let mod = 0
      if (upg.cost <= newState.moneyGained) {
        newState.moneyGained -= upg.cost
        newState.upgrade[action.id].itPurchased = true
        if (upg.prop == 'luck') {
          newState.luck *= upg.modifier
        } else if (upg.prop == 'students') {
          newState.units[0].size += upg.modifier
        } else if (upg.prop == 'dealer') {
          newState.units[1].speed *= upg.modifier
        } else if (upg.prop == 'offline') {
          newState.offlineSpeed *= upg.modifier
        } else if (upg.prop == 'gallery') {
          newState.paintings[2].push({ size: 3, pictures: [] })
        }
      }
      return newState
    }

    case AUTOSELL: {
      const newState = Object.assign({}, state)
      let dealers = newState.units[1]
      let pictures = newState.paintings[0]
      let picture = {}
      if (dealers.working < dealers.level) {
        for (let i = 0; i < pictures.length; i++) {
          const j = pictures.length - i - 1
          if (pictures[j].status == 0) {
            dealers.working += 1
            pictures[j].status = 10
            pictures[j].timeToSale = dealers.speed
            pictures[j].autoSell = true
            break
          }
        }
      }
      return newState
    }

    case AUTOSALESSWITCH: {
      const newState = Object.assign({}, state)
      newState.autoSale = !newState.autoSale
      newState.paintings[0].forEach((paint, i) => {
        if (paint.autoSell) {
          newState.units[1].working -= 1
          paint.status = 0
          delete paint.autoSell
          delete paint.timeFraction
        }
      })
      return newState
    }

    case CHANGEBLOCK: {
      const newState = Object.assign({}, state)
      const fullId = action.id.split('/')

      const id = Number(fullId[fullId.length - 1])
      const oldBlockId = fullId[0] == 'r' ? 1 : fullId[0] == 's' ? 0 : 2
      const newBlockId =
        action.newBlock == 'r' ? 1 : action.newBlock == 's' ? 0 : 2

      let oldBlock = {}
      let newBlock = {}

      if (oldBlockId != 2) {
        oldBlock = newState.paintings[oldBlockId]
      } else {
        oldBlock =
          newState.paintings[oldBlockId][action.id.split('/')[1]].pictures
      }
      if (newBlockId != 2) {
        newBlock = newState.paintings[newBlockId]
      } else {
        newBlock = newState.paintings[2][action.newBlock.split('/')[1]].pictures
      }

      newBlock.unshift(oldBlock[id])
      oldBlock.splice(id, 1)

      if (oldBlockId != 2) {
        newState.paintings[oldBlockId] = oldBlock
      } else {
        newState.paintings[oldBlockId][
          action.id.split('/')[1]
        ].pictures = oldBlock
      }
      if (newBlockId != 2) {
        newState.paintings[newBlockId] = newBlock
      } else {
        newState.paintings[2][action.newBlock.split('/')[1]].pictures = newBlock
      }

      return newState
    }

    case STUDY: {
      let newState = Object.assign({}, state)
      let study = newState.study
      const cost = (action.picture.cost * 1.5 ** study.studyCount) / 200

      if (newState.moneyGained >= cost) {
        newState.moneyGained -= cost
        if (!(study.skill >= 1)) {
          study.skill += 0.05 * 0.5 ** study.studyCount
        }
        study.studyCount += 1

        newState.paintings[0].forEach((item, i) => {
          if (item.status == 11) {
            newState.paintings[0].splice(i, 1)
          }
        })
        newState.clicksDone = 0
        const ref = {
          status: 11,
          quality: Math.min(1, Math.random() * study.skill),
          referense: action.picture
        }
        newState = general(newState, {
          type: PAINT,
          ref: ref,
          sourse: 0
        })
      }
      return newState
    }

    case GETORIGINAL: {
      let newState = Object.assign({}, state)
      const original = newState.originals[action.id + 1]
      if (newState.moneyGained >= original.cost * 100) {
        const picture = { status: 1, quality: 1, referense: original }
        newState.paintings[1].unshift(picture)
        newState.originals[action.id + 1].isSoldOut = true
        newState.moneyGained -= original.cost
        newState.statistics.totalOriginals += 1
      } else {
        console.log('ERROR')
      }
      return newState
    }

    case GALLERYWORKING: {
      const newState = Object.assign({}, state)
      const galleries = newState.paintings[2]

      const totalStyles = newState.statistics.totalStyles
      const totalAuthors = newState.statistics.totalAuthors
      const totalY = newState.statistics.totalYears

      let c = 0

      galleries.forEach((gallery, i) => {
        const picturesInGallery = gallery.pictures.length
        let galleryCost = 0
        let styles = {}
        let style_entropy = 0
        let authors = {}
        let author_entropy = 0
        let years = {}
        let year_entropy = 0

        gallery.pictures.forEach((picture, i) => {
          galleryCost += getPictureCost(
            newState,
            picture.quality,
            picture.referense.cost,
            newState.study.skill
          )

          if (styles[picture.referense.style]) {
            styles[picture.referense.style] += 1
          } else {
            styles[picture.referense.style] = 1
          }
          if (authors[picture.referense.author]) {
            authors[picture.referense.author] += 1
          } else {
            authors[picture.referense.author] = 1
          }
          if (years[picture.referense.year]) {
            years[picture.referense.year] += 1
          } else {
            years[picture.referense.year] = 1
          }
        })

        for (let key in styles) {
          let style_i = styles[key] / picturesInGallery
          style_entropy += style_i * Math.log(style_i)
        }
        for (let key in authors) {
          let style_i = authors[key] / picturesInGallery
          author_entropy += style_i * Math.log(style_i)
        }
        for (let key in years) {
          let style_i = years[key] / picturesInGallery
          year_entropy += style_i * Math.log(style_i)
        }

        style_entropy = 1 + style_entropy / 2 / Math.log(totalStyles)
        author_entropy = 1 + author_entropy / 2 / Math.log(totalAuthors)
        year_entropy = 1 + year_entropy / 2 / Math.log(totalY)

        const m =
          ((0.01 *
            (0.6 * style_entropy + 0.3 * author_entropy + 0.1 * year_entropy)) /
            360) *
          galleryCost
        gallery.money = gallery.money == m ? gallery.money : m
        c += m
      })

      newState.moneyGained += c
      newState.statistics.totalMoneys += c
      newState.statistics.totalGalleryEarned += c
      return newState
    }

    case CHANGEPAGE: {
      const newState = Object.assign({}, state)
      if (action.page_id == newState.pageid) {
        newState.pageid = 0
      } else {
        newState.pageid = action.page_id
        newState.openGalleryId = action.page_id ? action.galleryId : null
      }
      return newState
    }

    case CHANGEPHASE: {
      const newState = Object.assign({}, state)
      const phase = newState.phase
      const statistics = newState.statistics
      const skill = newState.study.skill

      if (statistics.totalPainting > 20 && skill == 0.01 && phase == 'start') {
        newState.phase = Object.keys(phases)[1]
        phases[newState.phase].text.forEach((p, i) => {
          newState.phrases.push(p)
        })
        if (phases[newState.phase].story) {
          newState.story = true
          newState.phrase = phases[newState.phase].story[0]
        }
      } else if (
        newState.paintings[1].length >= 1 &&
        newState.units[0].level == 0 &&
        phase == 'study'
      ) {
        newState.units[0].isActive = true
        newState.phase = Object.keys(phases)[2]
        phases[newState.phase].text.forEach((p, i) => {
          newState.phrases.push(p)
        })
        if (phases[newState.phase].story) {
          newState.story = true
          newState.phrase = phases[newState.phase].story[0]
        }
      } else if (
        statistics.totalSales > 250 &&
        newState.units[1].level == 0 &&
        phase == 'students'
      ) {
        newState.units[1].isActive = true
        newState.phase = Object.keys(phases)[3]
        phases[newState.phase].text.forEach((p, i) => {
          newState.phrases.push(p)
        })
        if (phases[newState.phase].story) {
          newState.story = true
          newState.phrase = phases[newState.phase].story[0]
        }
      } else if (newState.units[1].level > 0 && phase == 'dealers') {
        newState.phase = Object.keys(phases)[4]
        phases[newState.phase].text.forEach((p, i) => {
          newState.phrases.push(p)
        })
        if (phases[newState.phase].story) {
          newState.story = true
          newState.phrase = phases[newState.phase].story[0]
        }
      } else if (
        statistics.totalOriginals > 0 &&
        !newState.galleriesIsActive &&
        phase == 'predG'
      ) {
        newState.galleriesIsActive = true
        newState.phase = Object.keys(phases)[5]
        phases[newState.phase].text.forEach((p, i) => {
          newState.phrases.push(p)
        })
        if (phases[newState.phase].story) {
          newState.story = true
          newState.phrase = phases[newState.phase].story[0]
        }
      }
      return newState
    }

    case GETPHRASE: {
      const newState = Object.assign({}, state)
      const st = phases[newState.phase].story
      if (newState.story && st) {
        if (action.sourse) {
          if (st) {
            for (let i = 0; st.length > i; i++) {
              if (newState.phrase == st[i]) {
                if (st[i + 1]) {
                  newState.phrase = st[i + 1]
                } else {
                  newState.story = false
                  newState.phrase =
                    newState.phrases[
                      Math.floor(Math.random() * newState.phrases.length)
                    ]
                  newState.phraseCounter = 0
                }

                break
              }
            }
          }
        }
      } else if (newState.phraseCounter < 10 && !action.sourse) {
        newState.phraseCounter += 1
        newState.story = false
      } else {
        newState.phrase =
          newState.phrases[Math.floor(Math.random() * newState.phrases.length)]
        newState.phraseCounter = 0
        newState.story = false
      }

      return newState
    }

    case SAVE: {
      const newState = Object.assign({}, state)

      const f = () => {
        newState.saveCounter = 0
        newState.saveTime = new Date().getTime()
        localStorage.setItem('save', JSON.stringify(newState))
        newState.phraseCounter = 8
        if (!newState.story) {
          newState.phrase = { character: characters[2], text: 'Сохранение' }
        }
      }

      if (action.isHandle) {
        f()
      } else if (newState.saveCounter == 60) {
        f()
      } else {
        newState.saveCounter += 1
        general(newState, { type: GETPHRASE })
      }

      const statistic = newState.statistics

      newState.upgrade.forEach((upg, i) => {
        if (statistic[upg.requirement[0]] >= upg.requirement[1]) {
          upg.isOpen = true
        }
      })

      return newState
    }

    case LOAD: {
      let newState = Object.assign({}, state)

      if (localStorage.save) {
        newState = JSON.parse(localStorage.save)
        newState.clientId = state.clientId
      }

      const colors = ['green', 'yellow', 'ping', 'blue']
      const color = colors[Math.floor(Math.random() * colors.length)]
      const game = document.getElementsByClassName('Game')[0]
      game.classList.add(color)

      const offlineSpeed = newState.offlineSpeed
      // const offlineSpeed = 1

      console.log('...')

      const seconds = Math.floor(
        (new Date().getTime() - newState.saveTime) * 0.001 * offlineSpeed
      )

      if (seconds > 0) {
        let ref = newState.originals[0]
        // ref.referense = ref
        // ref.quality = 1
        const salesSpped = newState.units[1].speed * newState.units[1].level
        const paintinsSales =
          salesSpped > 0 ? Math.floor(seconds / salesSpped) : 0
        const secondsForNewSale = seconds - paintinsSales * salesSpped

        const paintSpeed = newState.units[0].level * newState.units[0].pps
        const clicks = paintSpeed > 0 ? Math.floor(seconds / paintSpeed) : 0

        let picCkick = 0
        const references = newState.paintings[1]

        references.map((paint) => {
          picCkick += Math.floor(1 * paint.quality * 100)
        })

        picCkick = picCkick / references.length //средне количество кликов на картину

        const painting =
          picCkick > 0 ? Math.floor((seconds * paintSpeed) / picCkick) : 0

        const clickNewPicture = clicks > 0 ? clicks - painting * picCkick : 0

        let money = 0

        for (let i = 0; i < paintinsSales && paintinsSales > 0; i++) {
          ref =
            references.length > 0
              ? references[Math.floor(Math.random() * references.length)]
              : ref
          const pic = paint(ref, newState.study.skill, newState.luck)

          money += Math.floor(
            getPictureCost(
              newState,
              pic.quality,
              pic.referense.cost,
              newState.study.skill
            )
          )
        }

        if (
          newState.clicksDone + clickNewPicture >= newState.clicksToPainting &&
          newState.paintings[0].length < studioSize
        ) {
          for (let i = 0; newState.paintings[0][i].status == 11; i++) {
            newState.paintings[0][i].status = 0
          }
          newState.clicksDone =
            newState.clicksDone + clickNewPicture - newState.clicksToPainting

          ref =
            references.length > 0
              ? references[Math.floor(Math.random() * references.length)]
              : ref
          newState.paintings[0].unshift(
            paint(ref, newState.study.skill, newState.luck)
          )

          newState.statistics.totalPainting += 1
        } else if (
          newState.clicksDone + clickNewPicture <=
          newState.clicksToPainting
        ) {
          newState.clicksDone = newState.clicksDone + clickNewPicture
        }

        let paints = []

        for (
          let i = 0;
          i < painting - paintinsSales &&
          newState.paintings[0].length + paints.length < studioSize;
          i++
        ) {
          ref =
            references.length > 0
              ? references[Math.floor(Math.random() * references.length)]
              : ref
          paints.push(paint(ref, newState.study.skill, newState.luck))
        }

        paints = paints.map((p) => {
          p.status = 0
          newState.paintings[0].unshift(p)
        })

        //галерея

        if (clicks > 0 && !newState.story) {
          newState.phrase = {
            character: characters[2],
            text:
              'Вы отсутствовали ' +
              intFormat(seconds / offlineSpeed) +
              'сек. Пока вас не было ученики нарисовали ' +
              painting +
              ' картин, а диллеры заработали F$' +
              intFormat(money)
          }
        }

        newState.phraseCounter = 5

        newState.moneyGained += money
        newState.statistics.totalClick += clicks
        newState.statistics.totalMoneys += money
        newState.statistics.totalSales += paintinsSales
        newState.statistics.totalPainting += paints.length
      }

      if (!newState.phase) {
        newState.phase = Object.keys(phases)[0]
        console.log('...')

        phases[newState.phase].text.forEach((p, i) => {
          newState.phrases.push(p)
        })

        newState.phrase = phases[newState.phase].story[0]
        newState.story = true
        newState.phraseCounter = 0
      }
      newState.loading = false
      return newState
    }

    case RESET: {
      const newState = Object.assign({}, baseState)
      localStorage.clear()
      localStorage.setItem('save', JSON.stringify(newState))
      return newState
    }

    default:
      return state
  }
}
