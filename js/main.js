
$(document).ready(function() {
    
    $('.filters select').on('change', function(e) {
        $('.item').show();
        $('.filter').each(function(filters, filter) {
            var filterName = $(filter).data('filtername');
            var filterValue = $(filter).val();
            if (filterValue !== 'all') {
                hideItems(filterName, filterValue);   
            }
        });
        
        
    });
    
    function hideItems(filterName, filterValue) {
        $('.item').each(function(items, item) {            
            if ($(item).data(filterName).indexOf(filterValue) === -1) {
                $(item).hide();
            }
        });
    }
    
});
