$(document).ready(function () {
    // Progress bar functionality
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height() - $(window).height();
        var scrollPercent = (scrollTop / docHeight) * 100;
        $('#progressBar').css('width', scrollPercent + '%');

        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["React Native Developer", "IT Consultant", "Business Strategist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["React Native Developer", "IT Consultant", "Business Strategist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Show video on button click for IoT-Based Flood Prediction System
    $('#showFloodVideoBtn').click(function () {
        // Lazy load the video
        var video = document.getElementById('floodVideo');
        var source = video.querySelector('source');
        if (!source.src) {
            source.src = source.getAttribute('data-src');
            video.load();
        }
        $('#floodVideoWrapper').slideDown();
        $(this).hide();
    });

    // Form validation and submission
    $('form').submit(function (e) {
        e.preventDefault();

        var name = $('input[type="text"]').val();
        var email = $('input[type="email"]').val();
        var subject = $('input[placeholder="Subject"]').val();
        var message = $('textarea').val();

        if (name && email && subject && message) {
            // Show success message
            $('#contact-success').fadeIn();
            // Reset form
            setTimeout(function () {
                $('form')[0].reset();
                $('#contact-success').fadeOut();
            }, 3000);
            $('.button-area button').text('Send message');
            $('.button-area button').css('background', 'crimson');
        } else {
            // Show error message
            $('.button-area button').text('Please fill all fields');
            $('.button-area button').css('background', '#dc3545');
            setTimeout(function () {
                $('.button-area button').text('Send message');
                $('.button-area button').css('background', 'crimson');
            }, 2000);
        }
    });
    // Hide success message on new input
    $('form input, form textarea').on('input', function () {
        $('#contact-success').fadeOut(200);
    });

    // Dark mode toggle
    function setDarkMode(enabled) {
        if (enabled) {
            $('body').addClass('dark-mode');
            $('#darkModeToggle i').removeClass('fa-moon').addClass('fa-sun');
        } else {
            $('body').removeClass('dark-mode');
            $('#darkModeToggle i').removeClass('fa-sun').addClass('fa-moon');
        }
    }
    // Load preference: default to sun (light) mode if not set
    var darkPref = localStorage.getItem('darkMode');
    if (darkPref === null) {
        setDarkMode(false); // default to sun mode
        localStorage.setItem('darkMode', false);
    } else {
        setDarkMode(darkPref === 'true');
    }
    $('#darkModeToggle').click(function () {
        var enabled = !$('body').hasClass('dark-mode');
        setDarkMode(enabled);
        localStorage.setItem('darkMode', enabled);
    });
});