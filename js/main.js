$(window).scroll(function(){
    if($(this).scrollTop()>1000){
        $(".back-to-top").fadeIn();
    }else{
        $(".back-to-top").fadeOut();
    }
});
$(".back-to-top").click(function(){
    $("html, body").animate({scrollTop:0},1000)
})



document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const sections = document.querySelectorAll('.make, .bodytype, .pricerange');

            sections.forEach(section => {
                if (filter === 'all') {
                    section.classList.remove('hidden');
                } else if (!section.classList.contains(filter)) {
                    section.classList.add('hidden');
                } else {
                    section.classList.remove('hidden');
                }
            });
        });
    });
});
















