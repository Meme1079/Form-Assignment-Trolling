// background-color: aliceblue; width: fit-content; padding: 14px; margin-left: -14px;
// console.log(document.hasFocus())

document.getElementsByTagName('form')[0].addEventListener("submit", function() {
     const shortName = (tag, num = 0) => { return document.getElementsByName(tag)[num].value }
     const alertArrayString = [
          `Full Name: ${shortName('full_name')} ${shortName('full_name', 1)} ${shortName('full_name', 2)}` + '\n',
          `Birthday: ${shortName('full_birth')} ${shortName('full_birth', 1)} ${shortName('full_birth', 2)}` + '\n',
          `Gender: ${shortName('full_birth', 3)}` + '\n',
          `Address: 
          - Street Address 2: ${shortName('full_address')}
          - Street Address 1: ${shortName('full_address', 1)}
          - City: ${shortName('full_address', 2)}
          - State/Province/Region: ${shortName('full_address', 3)}
          - Country: ${shortName('full_address', 4)}` + '\n',
          `Email: ${shortName('full_other')}` + '\n',
          `Phone Number: ${shortName('full_other', 1)}` + '\n'
     ]

     let alertString = ''
     for (let values of alertArrayString) {
          alertString += values
     }
     alert(alertString)
})

for (let allInput = 0; allInput < document.getElementsByTagName('input').length; allInput++) {
     if (document.getElementsByTagName('input')[allInput].getAttribute('type') != 'submit') {33
          document.getElementsByTagName('input')[allInput].setAttribute('type', 'text')
     }
}

let contentOption1 = ''
for (let day = 1; day <= 31; day++) {
     contentOption1 += `<option>${day}</option>`
}
document.getElementById('homo').innerHTML = contentOption1

let contentOption2 = ''
let currentDate = new Date().getFullYear()
for (let year = currentDate; year >= 1930; year--) {
     contentOption2 += `<option>${year}</option>`
}
document.getElementById('bi').innerHTML = contentOption2

let contentOption3 = ''
let monthNames = [
     'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
     'October', 'November', 'December'
]
for (let month of monthNames) {
     contentOption3 += `<option>${month}</option>`
}
document.getElementById('hetero').innerHTML = contentOption3