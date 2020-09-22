$(() => {

    $('.carousel').carousel({
        interval: 3000
    })



    $('.second-button').on('click', () =>  {

    $('.animated-icon2').toggleClass('open');
    });


//     next = () => {
//         $('.carousel').carousel('next')
//     }

//     previous = () => {
//         $('.carousel').carousel('prev')
//     }
} )