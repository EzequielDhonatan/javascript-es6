// ES5
var ezequiel = {
    name: 'Ezequiel',
    lastName: 'Dhonatan',

    fullName: function () {
        return this.name + " " + this.lastName
    },

    showMe: function () {
        var cont = this
        setTimeout(function () {
            console.log(cont.fullName())
        },
        3000)
    },
}

// ezequiel.showMe()

// ES6
let company = {
    name: 'EZE',
    lastName: 'DHON ',

    fullName () {
        return this.name + " " + this.lastName
    },

    showMe () {
        setTimeout(() => console.log(this.fullName()), 3000)
    }
}

company.showMe()