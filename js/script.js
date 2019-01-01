window.onload = function () {
    var menuIcon = document.getElementById('menu');
    var leftNav = document.getElementById('navigation');

    menuIcon.addEventListener('click', function () {
        console.log('sprawdzenie czy wchodzi ');
        //  console.log(menuIcon);
        toggleVisible();

    });

    function toggleVisible() {
        leftNav.classList.toggle('show');
    }

    function closeModal() {
        document.getElementById('overlay').classList.remove('show')
    }

    document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            closeModal()
        })
    })

    document.querySelector('#overlay').addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal()
        }
    })

    document.addEventListener('keyup', function (e) {
        if (e.keyCode === 27) {
            closeModal()
        }
    })

    function openModal(modal) {
        document.querySelectorAll('#overlay > *').forEach(function (modal) {
            modal.classList.remove('show')
        })
        document.querySelector('#overlay').classList.add('show')

        document.querySelector('#myModal').classList.add('show')
    }

    var modalBanner = document.getElementsByClassName('btnAddNewBanner');
    var myModal = document.querySelector('#myModal');

    modalBanner[0].addEventListener('click', function () {
        console.log('sprawdzenie czy wchodzi ');
        document.querySelector('#overlay').classList.add('show');
        openModal(myModal);
        // console.log(myModal);
        // myModal.classList.toggle('show');

    });


}