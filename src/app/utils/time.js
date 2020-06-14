export const timeUntil = futureTime => {
  const difference = new Date(futureTime) - new Date();
  const time = {
    day: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hr: Math.floor(difference / (1000 * 60 * 60) % 24),
    min: Math.floor((difference / 1000 / 60) % 60),
    sec: Math.floor((difference / 1000 ) % 60)
  }
  return time
}
// // MS to value
// const toSec = ms => Math.floor( ms / 1000 )
// const toMin = ms => Math.floor( ms / 1000 / 60 )
// const toHr = ms => Math.floor( ms / 1000 / 60 / 60 )
// const toDay = ms => Math.floor( ms / 1000 / 60 / 60 / 24 )
//
// // value to MS
// const secToMs = sec => sec * 1000
// const minToMs = min => min * 60 * 1000
// const hrToMs = hr => hr * 60 * 60 * 1000
// const dayToMs = day => day * 24 * 60 * 60 * 1000
//
// const convertMs = ms => ({
//   ms,
//   sec: toSec(ms),
//   min: toMin(ms),
//   hr: toHr(ms),
//   day: toDay(ms)
// })

// export const timeUntil2 = futureTime => {
//   if (!futureTime && typeof futureTime !== Date) {
//     return 'you a dummy'
//   }
//   const future = new Date(futureTime);
//   const now = new Date();
//
//   const msDiff = future - now;
//   const times = convertMs(msDiff)
//
//   const {
//     ms,
//     sec,
//     min,
//     day
//   } = times
//
//   const remHr = toHr(msDiff - dayToMs(day))
//   const remMin = toMin(msDiff-dayToMs(day)-hrToMs(remHr))
//   const remSec = toSec(msDiff-dayToMs(day)-hrToMs(remHr)-minToMs(remMin))
//
//   const d = {
//     day
//   }
//
//   const dh = {
//     day,
//     hr: remHr
//   }
//
//   const dhm = {
//     day,
//     hr: remHr,
//     min: remMin
//   }
//
//   const dhms = {
//     day,
//     hr: remHr,
//     min: remMin,
//     sec: remSec
//   }
//
//   const full = {
//     ...times,
//     d,
//     dh,
//     dhm,
//     dhms
//   }
//
//   const time = dhms
//
//   return {
//     full,
//     time
//   }
// }
