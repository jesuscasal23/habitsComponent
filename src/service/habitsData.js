export default {
  1001: {
    name: 'Meditate',
    id: '1001',
    parent_id: null,
    description: 'some description here, how can we support markdown? Or some other text with more features?',
    resources: [{
      label: 'Some Label',
      url: 'https://google.com',
    }, ],
    date: {
      start: '2020-01-01T12:00:00+0000',
      end: '2020-12-31T12:00:00+0000',
    },
    pattern: {
      type: 'FIXED',
      week_format: 'MoTuWeThFr',
      required: [0, 1, 1, 0, 1, 0, 0],

    },
    progress: [{
        timestamp: '2020-07-04',
        status: 'FAILED'
      },
      {
        timestamp: '2020-07-05',
        status: 'SKIPPED'
      },
      {
        timestamp: '2020-07-06',
        status: 'MINI'
      },
      {
        timestamp: '2020-07-07',
        status: 'OPTIONAL'
      },
    ],
  },
}