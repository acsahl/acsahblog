// The Thinkbox page: ideas that haven't turned into anything yet.
// To add one, copy an entry, change the text and save. The newest date
// shows first, so the order here doesn't matter.
//
//   idea     The thought, in a sentence.
//   date     The day you added it, as 'YYYY-MM-DD'.
//   notes    Optional. Anything you want to remember about it. One string
//            per paragraph.
//   sources  Optional. Links that go with it. Use an address starting with
//            / for a page on this blog.
//   color    Optional. 'pink', 'blue', 'green' or 'butter'. Leave it out
//            and the page picks one.

const entries = [
  {
    idea: 'Obama and Bill Gates both believe AI empowers more people to do harm.',
    date: '2026-10-07',
    notes: [
      'In his conversation at Colgate University, which aired on C-SPAN, Obama warned about what happens when this technology ends up in the hands of "bad humans." Gates has a section in his AI essay titled "AI will empower people (and perhaps AIs) to do more harm."',
      'It also means that AI can help immensely. The power that lets more people do harm is the same power that lets more people do good.',
    ],
    sources: [
      {
        label: 'Obama on C-SPAN',
        href: 'https://www.c-span.org/program/public-affairs-event/president-barack-obama-on-ai-and-engaging-in-democracy/685433',
      },
      {
        label: "Gates's essay",
        href: 'https://www.gatesnotes.com/work/make-ai-work-for-everyone/reader/a-turbulent-ai-era-and-critical-choices-to-make',
      },
      { label: "My post on Obama's talk", href: '/posts/obama-ai-regulation' },
    ],
  },
]

const colors = ['pink', 'blue', 'green', 'butter']

function parseDate(value) {
  const [year, month, day] = String(value).split('-').map(Number)
  return new Date(year, (month || 1) - 1, day || 1)
}

export const thoughts = entries
  .map((entry, index) => {
    const date = parseDate(entry.date)
    return {
      ...entry,
      color: entry.color ?? colors[index % colors.length],
      date,
      dateLabel: date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    }
  })
  .sort((a, b) => b.date - a.date)
