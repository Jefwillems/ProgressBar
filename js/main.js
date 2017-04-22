$('.point').on('click', function (e) {
    exec(this);
});

var exec = function (value) {
    var getTotalPoints = $('.point').length,
        getIndex = $(value).index(),
        getCompleteIndex = $('.point__doing').index();

    TweenMax.to($('.bar__fill'), 0.6, {
        width: (getIndex - 1) / (getTotalPoints - 1) * 100 + '%'
    });

    if (getIndex => getCompleteIndex) {
        $('.point__doing').addClass('point__done').removeClass('point__doing');
        $(value).addClass('point__doing');
        $(value).prevAll().addClass('point__done');
        $(value).nextAll().removeClass('point__done');
    }
};

$(function () {
    exec($('.point__doing'));
});