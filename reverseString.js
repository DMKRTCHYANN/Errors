function reverseString(str = '') {
    try {
        return str.split('').reverse().join('')
    }catch (e) {
        console.log('Error:', e.message)
    }
}

console.log(reverseString(7))