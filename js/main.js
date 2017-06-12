
$(document).ready(function() {
    
    $('.filters select').on('change', function(e) {
        console.log(e.target.value);
        var filterName = $(e.target).data('filtername');
        var filterValue = $(e.target).val();
        $('.item').each(function(items, item) {            
            if ($(item).data(filterName) === filterValue) {
                $(item).show();
            } else {
                $(item).hide();
            }
        });
    });
    
});
