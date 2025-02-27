
const checkboxes = document.querySelectorAll('.custom-checkbox')

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkboxes.forEach((otherCheckbox) => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false
                }
            })
        }
    })
})
