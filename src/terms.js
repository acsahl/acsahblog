// The Terms page. Each entry below is one term.
// To add a term, copy an entry, change the text and save. The page sorts
// them A to Z by itself, so the order here doesn't matter.
//
//   term     The word or phrase.
//   tag      A short label for the subject, like 'AI' or 'Economics'.
//   color    The label's color: 'pink', 'blue', 'green' or 'butter'.
//   short    The definition in one sentence.
//   details  The longer explanation. One string per paragraph.

const entries = [
  {
    term: 'Jevons paradox',
    tag: 'Economics',
    color: 'green',
    short:
      'When a resource gets more efficient to use, people often end up using more of it in total, not less.',
    details: [
      'Efficiency makes each use cheaper. Cheaper use means people do more of it and find new things to do with it. If demand grows enough, it wipes out the savings.',
      "It is named after the economist William Stanley Jevons. In 1865 he noticed that as steam engines burned coal more efficiently, Britain's coal use went up, because coal power now made sense for far more industries.",
      "The same argument comes up with AI: cheaper models may mean more total computing, not less. It isn't guaranteed, though. It only happens when demand grows faster than efficiency improves.",
    ],
  },
  {
    term: 'Recursive self-improvement',
    tag: 'AI',
    color: 'blue',
    short:
      'An AI system improving its own abilities, including its ability to improve itself, so that each round of gains speeds up the next.',
    details: [
      'Progress in AI normally depends on human researchers. The idea here is a loop: a system that is good enough at AI research helps build a better version of itself, which is better still at AI research, and so on.',
      'The worry is speed. If the loop feeds on itself, capabilities could grow faster than people can understand or oversee them. The mathematician I. J. Good called this an "intelligence explosion" in 1965.',
      'How far a loop like this could really run is debated. It could be slowed by limits on computing power, on data and on how hard each next improvement is to find.',
    ],
  },
]

// The part of the address after the #, so /terms#jevons-paradox jumps
// straight to that term.
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export const terms = entries
  .map((entry) => ({ ...entry, slug: slugify(entry.term) }))
  .sort((a, b) => a.term.localeCompare(b.term))
