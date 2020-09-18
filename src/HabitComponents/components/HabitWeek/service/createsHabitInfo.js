import moment from 'moment'

function pastFutureOrPresent(date) {
  let tense = 'FUTURE'
  const today = moment().format('YYYY-MM-DD')
  const taskdateformat = moment(date)
  if (today === date) {
    tense = 'PRESENT'
  }
  if (moment(today).diff(taskdateformat, 'days') > 0) {
    tense = 'PAST'
  }
  return tense
}

function searchInDatabase(date, habitsData, id) {
  let DatabaseEntry = false
  const HabitDayList = habitsData[id].progress
  const SearchedHabitDate = HabitDayList.find((e) => e.timestamp.includes(date))
  if (SearchedHabitDate) DatabaseEntry = SearchedHabitDate.status
  return DatabaseEntry
}

function isTheHabitDayRequired(date, habitsData) {
  let isRequired = ''
  const taskdateformat = moment(date)
  // 0-1-2-3-4-5-6
  const dayOfTheWeekNumber = taskdateformat.day()

  // [0, 1, 1, 0, 1, 0, 0]
  const requiredArr = habitsData['1001'].pattern.required

  isRequired = requiredArr[dayOfTheWeekNumber] === 1 ? 'REQUIRED' : 'NOTREQUIRED'

  return isRequired
}

function setChangesInto(required, tense, status) {
  let next = 'COMPLETED'

  if (required === 'NOTREQUIRED') {
    if (status === 'NOTREQUIRED') next = 'COMPLETED'
    if (status === 'COMPLETED') next = 'MINI'
    if (status === 'MINI') next = 'NOTREQUIRED'
  }

  if (required === 'REQUIRED' && tense === 'PAST') {
    if (status === 'REQUIRED') next = 'COMPLETED'
    if (status === 'COMPLETED') next = 'MINI'
    if (status === 'MINI') next = 'SKIPPED'
    if (status === 'SKIPPED') next = 'FAILED'
    if (status === 'FAILED') next = 'REQUIRED'
  }

  if (required === 'REQUIRED' && tense === 'PRESENT') {
    if (status === 'NOTREQUIRED') next = 'COMPLETED'
    if (status === 'COMPLETED') next = 'MINI'
    if (status === 'MINI') next = 'NOTREQUIRED'
  }

  return next
}

export default function getHabitDayInfoAndSaveInState(date, habitsData, id) {
  const output = {
    status: 'FAILED',
    current: false,
    taskdate: date,
    dayoftheweek: 'mon',
    tense: 'FUTURE',
    required: isTheHabitDayRequired(date, habitsData),
    changesinto: null,
  }
  // check the database for information on that habit day
  // else set status to required or not required
  output.tense = pastFutureOrPresent(date)

  if (searchInDatabase(date, habitsData, id)) {
    output.status = searchInDatabase(date, habitsData)
  } else {
    output.status = isTheHabitDayRequired(date, habitsData)

    if (output.tense === 'PAST' && output.status === 'REQUIRED') {
      output.status = 'FAILED'
    }
  }

  output.changesinto = setChangesInto(output.required, output.tense, output.status)
  output.dayoftheweek = moment(output.taskdate).format('dddd').slice(0, 3)
  return output
}