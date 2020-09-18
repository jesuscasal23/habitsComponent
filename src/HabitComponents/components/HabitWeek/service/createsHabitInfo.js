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
  const {
    required
  } = habitsData['1001'].pattern

  const dayOfWeek = moment(date).day()

  const isRequired = required[dayOfWeek]

  if (isRequired) {
    return 'REQUIRED'
  }
  return 'NOTREQUIRED'
}


function setChangesInto(required, tense, status) {

  if (required === 'NOTREQUIRED') {
    if (status === 'NOTREQUIRED') return 'COMPLETED'
    if (status === 'COMPLETED') return 'MINI'
    if (status === 'MINI') return 'NOTREQUIRED'
  }

  if (required === 'REQUIRED' && tense === 'PAST') {
    if (status === 'REQUIRED') return 'COMPLETED'
    if (status === 'COMPLETED') return 'MINI'
    if (status === 'MINI') return 'SKIPPED'
    if (status === 'SKIPPED') return 'FAILED'
    if (status === 'FAILED') return 'REQUIRED'
  }

  if (required === 'REQUIRED' && tense === 'PRESENT') {
    if (status === 'NOTREQUIRED') return 'COMPLETED'
    if (status === 'COMPLETED') return 'MINI'
    if (status === 'MINI') return 'NOTREQUIRED'
  }
}

export default function getHabitDayInfoAndSaveInState(date, habitsData, id) {
  const output = {
    status: 'FAILED',
    current: false,
    taskDate: date,
    dayoftheweek: 'mon',
    tense: 'FUTURE',
    required: isTheHabitDayRequired(date, habitsData),
    changesinto: null,
  }
  // check the database for information on that habit day
  // else set status to required or not required
  output.tense = pastFutureOrPresent(date)

  const foundEntry = searchInDatabase(date, habitsData, id);

  if (foundEntry) {
    output.status = foundEntry
  } else {
    output.status = isTheHabitDayRequired(date, habitsData)

    if (output.tense === 'PAST' && output.status === 'REQUIRED') {
      output.status = 'FAILED'
    }
  }

  output.changesinto = setChangesInto(output.required, output.tense, output.status)
  output.dayoftheweek = moment(output.taskDate).format('dddd').slice(0, 3)
  return output
}