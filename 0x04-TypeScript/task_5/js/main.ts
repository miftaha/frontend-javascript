interface MajorCredits {
  credits: number
  name: string
}
interface MinorCredits {
  name: string
  credits: number
}

function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { name: 'major', credits: subject1.credits + subject2.credits }
}
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { name: 'minor', credits: subject1.credits + subject2.credits }
}

// Examples

console.log(
  'Total Major',
  sumMajorCredits(
    { credits: 100, name: 'major' },
    { credits: 50, name: 'major' }
  )
) //output :Total Major {name: 'major', credits: 150}
console.log(
  'Total Minor',
  sumMinorCredits(
    { credits: 50, name: 'minor' },
    { credits: 20, name: 'minor' }
  )
) //output: Total Minor {name: 'minor', credits: 70}
