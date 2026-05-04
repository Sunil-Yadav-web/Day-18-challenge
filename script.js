const elementArrayInput = document.querySelector('.array-element')
const elementArrayOutput = document.querySelector('.array-element-output')
const sumElementArrayInput = document.querySelector('.sum-of-element')
const sumElementArrayOutput = document.querySelector('.sum-of-element-output')
const isSortAscendingArrayInput = document.querySelector('.isSort-ascending')
const isSortAscendingArrayOutput = document.querySelector(
  '.isSort-ascending-output',
)
const reverseStringArrayInput = document.querySelector('.reverse-string')
const reverseStringArrayOutput = document.querySelector(
  '.reverse-string-output',
)
const isPalindromeStringInput = document.querySelector('.isPalindrome-string')
const isPalindromeStringOutput = document.querySelector(
  '.isPalindrome-string-output',
)
const lengthOfStringInput = document.querySelector('.length-of-string')
const lengthOfStringOutput = document.querySelector('.length-of-string-output')
const countVowelsInput = document.querySelector('.count-vowels')
const countVowelsOutput = document.querySelector('.count-vowels-output')
const firstOccurrenceInput = document.querySelector('.first-occ')
const firstOccurrence2Input = document.querySelector('.first-occ-2')
const firstOccurrenceOutput = document.querySelector('.first-occ-output')
const lastOccurrenceInput = document.querySelector('.last-occ')
const lastOccurrence2Input = document.querySelector('.last-occ-2')
const lastOccurrenceOutput = document.querySelector('.last-occ-output')
const countCharStrInput = document.querySelector('.count-char-str')
const countCharStr2Input = document.querySelector('.count-char-str-2')
const countCharStrOutput = document.querySelector('.count-char-str-output')
const replaceAllOccurInput = document.querySelector('.replace-all-occur')
const replaceAllOccur2Input = document.querySelector('.replace-all-occur-2')
const replaceAllOccur3Input = document.querySelector('.replace-all-occur-3')
const replaceAllOccurOutput = document.querySelector(
  '.replace-all-occur-output',
)
const evenArrayInput = document.querySelector('.even-array')
const evenArrayOutput = document.querySelector('.even-array-output')
const maxElArrayInput = document.querySelector('.max-el-array')
const maxElArrayOutput = document.querySelector('.max-el-array-output')



function printAllArrayEl(input) {
  let arr
  try {
    arr = JSON.parse(input)
    if (!Array.isArray(arr)) {
      elementArrayOutput.innerHTML = 'Pass an Array'
      return
    }
  } catch (error) {
    elementArrayOutput.innerHTML = 'Pass an Array'
    return
  }
  if (arr.length === 0) {
   elementArrayOutput.innerHTML = 'Empty Array'
   return
 }

  let arr2 = ''
  function recursiveBuild(index = 0) {
    if (index === arr.length) return

    arr2 += arr[index] + ' '
    recursiveBuild(index + 1)
  }
  recursiveBuild()
  elementArrayOutput.innerHTML = arr2
}

elementArrayInput.addEventListener('input', (e) => {
  printAllArrayEl(e.target.value)
})

function printAllArrayElSum(input) {
  let arr
  try {
    arr = JSON.parse(input)
    if (!Array.isArray(arr)) {
      sumElementArrayOutput.innerHTML = 'Pass an Array'
      return
    }
  } catch (error) {
    sumElementArrayOutput.innerHTML = 'Pass an Array'
    return
  }

   if (arr.length === 0) {
    sumElementArrayOutput.innerHTML = 'Empty Array'
    return
  }

  let arr2 = 0
  function recursiveBuild(index = 0) {
    if (index === arr.length) return

    arr2 += arr[index]
    recursiveBuild(index + 1)
  }
  recursiveBuild()
  sumElementArrayOutput.innerHTML = arr2
}

sumElementArrayInput.addEventListener('input', (e) => {
  printAllArrayElSum(e.target.value)
})

function isSortAscending(input) {
  let arr
  try {
    arr = JSON.parse(input)
    if (!Array.isArray(arr)) {
      isSortAscendingArrayOutput.innerHTML = 'Pass an Array'
      return
    }
  } catch (error) {
    isSortAscendingArrayOutput.innerHTML = 'Pass an Array'
    return
  }

   if (arr.length === 0) {
    isSortAscendingArrayOutput.innerHTML = 'Empty Array'
    return
  }

  let isAscending = true
  function recursiveBuild(index = 0) {
    if (index === arr.length) return

    if (arr[index] > arr[index + 1]) {
      isAscending = false
    }
    recursiveBuild(index + 1)
  }
  recursiveBuild()
  isSortAscendingArrayOutput.innerHTML = isAscending

  console.log(isAscending)
}

isSortAscendingArrayInput.addEventListener('input', (e) => {
  isSortAscending(e.target.value)
})

function reverseString(input) {
  let str = input.split('')

  let str2 = ''
  function recursiveBuild(index = str.length - 1) {
    if( index === -1) return
    str2 += str[index]
if (index === 0) return
    recursiveBuild(index - 1)
  }
  recursiveBuild()
  reverseStringArrayOutput.innerHTML = str2
}

reverseStringArrayInput.addEventListener('input', (e) => {
  reverseString(e.target.value)
})

function isPalindromeString(input) {
  let str = input
  if (!str) {
    isPalindromeStringOutput.innerHTML = ''
    return
  }

  let isPalindrome = true

  function recursiveBuild(str) {
    if (str.length <= 1) return

    if (str[0] !== str[str.length - 1]) {
      isPalindrome = false
      return
    }

    recursiveBuild(str.slice(1, -1))
  }

  recursiveBuild(str)

  isPalindromeStringOutput.innerHTML = isPalindrome
}

isPalindromeStringInput.addEventListener('input', (e) => {
  isPalindromeString(e.target.value)
})

function lengthOfString(input) {
  let str = input
  if (!str) {
    lengthOfStringOutput.innerHTML = ''
    return
  }

  function recursiveBuild(str) {
    if (str === '') return 0

    return 1 + recursiveBuild(str.slice(1))
  }

  const result = recursiveBuild(input)

  lengthOfStringOutput.innerHTML = result
}

lengthOfStringInput.addEventListener('input', (e) => {
  lengthOfString(e.target.value)
})

function countVowels(input) {
  let str = input
  if (!str) {
    countVowelsOutput.innerHTML = ''
    return
  }

  let vowelCount = 0
  function recursiveBuild(index = 0) {
    if (str === '' || str.length === index) return

    const vowels = 'aeiou'
    vowelCount += vowels.includes(str[index].toLowerCase()) ? 1 : 0

    recursiveBuild(index + 1)
  }

  recursiveBuild()

  countVowelsOutput.innerHTML = vowelCount
}

countVowelsInput.addEventListener('input', (e) => {
  countVowels(e.target.value)
})

function firstOccurrence(input, value) {
  let arr
  if (value === undefined || value === null || value === '') {
    firstOccurrenceOutput.innerHTML = ''
    return
  }
  try {
    arr = JSON.parse(input)
    if (!Array.isArray(arr)) {
      firstOccurrenceOutput.innerHTML = 'Pass an Array'
      return
    }
  } catch (error) {
    firstOccurrenceOutput.innerHTML = 'Pass an Array'
    return
  }

   if (arr.length === 0) {
    firstOccurrenceOutput.innerHTML = 'Empty Array'
    return
  }

  let findIndex = -1
  function recursiveBuild(index = 0) {
    if (index === arr.length) return

    if (arr[index] == value) {
      findIndex = index
      return
    }
    recursiveBuild(index + 1)
  }
  recursiveBuild()
  firstOccurrenceOutput.innerHTML = findIndex
}

firstOccurrenceInput.addEventListener('input', () => {
  firstOccurrence(firstOccurrenceInput.value, firstOccurrence2Input.value)
})
firstOccurrence2Input.addEventListener('input', () => {
  firstOccurrence(firstOccurrenceInput.value, firstOccurrence2Input.value)
})

function lastOccurrence(input, value) {
  let arr
  if (value === undefined || value === null || value === '') {
    lastOccurrenceOutput.innerHTML = ''
    return
  }
  try {
    arr = JSON.parse(input)
    if (!Array.isArray(arr)) {
      lastOccurrenceOutput.innerHTML = 'Pass an Array'
      return
    }
  } catch (error) {
    lastOccurrenceOutput.innerHTML = 'Pass an Array'
    return
  }

   if (arr.length === 0) {
    lastOccurrenceOutput.innerHTML = 'Empty Array'
    return
  }

  let findIndex = -1
  function recursiveBuild(index = 0) {
    if (index === arr.length) return

    if (arr[index] == value) {
      findIndex = index
      // return
    }
    recursiveBuild(index + 1)
  }
  recursiveBuild()
  lastOccurrenceOutput.innerHTML = findIndex
}

lastOccurrenceInput.addEventListener('input', () => {
  lastOccurrence(lastOccurrenceInput.value, lastOccurrence2Input.value)
})
lastOccurrence2Input.addEventListener('input', () => {
  lastOccurrence(lastOccurrenceInput.value, lastOccurrence2Input.value)
})

function countCharStr(input, value) {
  if (value === undefined || value === null || value === '') {
    countCharStrOutput.innerHTML = ''
    return
  }

  let countChar = 0
  function recursiveBuild(index = 0) {
    if (!input[index]) return

    if (input[index] == value) {
      countChar++
    }
    recursiveBuild(index + 1)
  }
  recursiveBuild()
  countCharStrOutput.innerHTML = countChar
}

countCharStrInput.addEventListener('input', () => {
  countCharStr(countCharStrInput.value, countCharStr2Input.value)
})
countCharStr2Input.addEventListener('input', () => {
  countCharStr(countCharStrInput.value, countCharStr2Input.value)
})

function replaceCharStr(input, value, replace) {
  if (!input || !value || !replace) {
    replaceAllOccurOutput.innerHTML = ''
    return
  }

  let newVAlue = ''
  function recursiveBuild(index = 0) {
    if (!input[index]) return

    if (input[index] == value) {
      newVAlue += replace
    } else {
      newVAlue += input[index]
    }
    recursiveBuild(index + 1)
  }
  recursiveBuild()
  replaceAllOccurOutput.innerHTML = newVAlue
}

replaceAllOccurInput.addEventListener('input', () => {
  replaceCharStr(
    replaceAllOccurInput.value,
    replaceAllOccur2Input.value,
    replaceAllOccur3Input.value,
  )
})
replaceAllOccur2Input.addEventListener('input', () => {
  replaceCharStr(
    replaceAllOccurInput.value,
    replaceAllOccur2Input.value,
    replaceAllOccur3Input.value,
  )
})
replaceAllOccur3Input.addEventListener('input', () => {
  replaceCharStr(
    replaceAllOccurInput.value,
    replaceAllOccur2Input.value,
    replaceAllOccur3Input.value,
  )
})

function evenArray(input) {
  let arr

  try {
    arr = JSON.parse(input)
    if (!Array.isArray(arr)) {
      evenArrayOutput.innerHTML = 'Pass an Array'
      return
    }
  } catch (error) {
    evenArrayOutput.innerHTML = 'Pass an Array'
    return
  }

   if (arr.length === 0) {
    evenArrayOutput.innerHTML = 'Empty Array'
    return
  }

  let isBoolean = ''
  function recursiveBuild(index = 0) {
    if (!arr[index]) return

    if (arr[index] % 2 !== 0) {
      isBoolean = false
      return
    } else {
      isBoolean = true
    }
    recursiveBuild(index + 1)
  }
  recursiveBuild()
  evenArrayOutput.innerHTML = isBoolean
}

evenArrayInput.addEventListener('input', (e) => {
  evenArray(e.target.value)
})



function maxElArray(input) {
  let arr

  try {
    arr = JSON.parse(input)
    if (!Array.isArray(arr)) {
      maxElArrayOutput.innerHTML = 'Pass an Array'
      return
    }
  } catch (error) {
    maxElArrayOutput.innerHTML = 'Pass an Array'
    return
  }

  if (arr.length === 0) {
    maxElArrayOutput.innerHTML = 'Empty Array'
    return
  }

 function recursiveBuild(index = 0) {
    if (index === arr.length - 1) {
      return arr[index]
    }

    let maxOfRest = recursiveBuild(index + 1);

    return arr[index] > maxOfRest ? arr[index] : maxOfRest
  }

  let maxNum = recursiveBuild()
  maxElArrayOutput.innerHTML = maxNum
}

maxElArrayInput.addEventListener('input', (e) => {
  maxElArray(e.target.value)
})
