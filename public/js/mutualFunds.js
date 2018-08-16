var arr = [];
var showButtons = true;
$.mutualFundOperations = (function () {
    return {   
        init: function() {
            $.ajax({
                type: "GET",
                url: "./data/tableData.json",
                dataType: "json",
                success: function(rowData) {
                    console.log("Data Retreival Success");
                },
                failure: function() {
                    alert("There is some problem fetching the data");
                }
            }).then(function(rowData) {
                $('.imgSearchBox').on('click',function(){
                    if($(this).attr('src')==="assets/closeIcon.png") {
                        $('.dropDownContainer').empty();
                        $('#searchBox').val("");
                        $(this).attr('src','assets/searchIcon.jpg');
                    }
                })
                var sticky = $('.headerContainer').offset().top;
                    window.onscroll = function() { // module to make table header sticky
                        if (window.pageYOffset > sticky) {
                            $('.headerContainer').addClass('stickyClass');
                        } 
                        else {
                            $('.headerContainer').removeClass('stickyClass');
                        }
                    };
                $('.hideFilter').on('click',function(){ //module to hide and show the filters section
                    if(showButtons==true) {
                        $('.filter').hide();
                        $('.hideFilter').children().html("SHOW FILTERS");
                        showButtons = false;
                    }
                    else {
                        $('.filter').show();
                        $('.hideFilter').children().html("HIDE FILTERS");
                        showButtons = true;
                    }
                })
                var headerHtml = Handlebars.templates["preHeadingTemplate"](rowData.data);//module to load table header via handlebar file
                $("#preHeadingTemplate").append(headerHtml);
                $.mutualFundOperations.loadTimeData(rowData, "tableDataRows");
                
                //switching between monthly and Quarterly data via 2 different handlebar files
                function switchPeriodData(period) {
                    switch(period) {
                        case '.monthly': 
                            var altPeriod = ".quarterly"; 
                            var loadTimeData = "tableDataRows";
                            var tabDescValue = "AsOfDateMonthly";
                            break;
                        case '.quarterly':
                            var altPeriod = ".monthly";                         
                            var loadTimeData = "quarterlyData";
                            var tabDescValue = "AsOfDateQuarterly";
                            break;
                        default:
                            var altPeriod = ".quarterly"; 
                            var loadTimeData = "tableDataRows";
                            var tabDescValue = "AsOfDateMonthly";
                    }
                    $("#dataRowTemplate").html("");  
                    $(period).attr("data-templatestate","active");
                    $(altPeriod).attr("data-templatestate","inactive");
                    $.mutualFundOperations.loadTimeData(rowData, loadTimeData);
                    $(".tabDescription").children("span").html(rowData.data[tabDescValue]);
                }
                $('.monthly').on('click', function() {
                    switchPeriodData('.monthly');
                });
                $('.quarterly').on('click',function() {
                    switchPeriodData('.quarterly');
                });
                $('.sortable').on('click',function() { //event that takes place when user clicks on table headers for sorting
                    var column = $(this).attr("data-column-number");                  
                    $.mutualFundOperations.sortingData(this,column);
                })
                $.mutualFundOperations.searchData();

                $('.buttonsContainer').children().on('click',function() { //psuhing and popping respective classes of filter buttons clicked into an array
                    var filterButton = $(this).attr('class'); 
                    if(jQuery.inArray( filterButton, arr)===-1){
                        arr.push(filterButton); 
                        $(this).attr("data-activeButton","buttonActive");
                    }
                    else {
                    arr.splice($.inArray(filterButton, arr),1);
                    $(this).attr("data-activeButton","buttonInactive");
                    }                          
                    $.mutualFundOperations.filterData(arr); // function call for filtering the data
                })
            });
        },
        loadTimeData: function(rowData, x) { //loading handlebar templates
            var html = Handlebars.templates[x](rowData.data);
            $("#dataRowTemplate").append(html);
        },
        sortingData: function(columnName,column) { // function to sort data
            var findSortKey = function($cell) { // function to find key on basis of which sorting will take place
                return $cell.text().toUpperCase();
            };
            var sortDirection = $(columnName).hasClass('.sortedAsc') ? -1 : 1;
            var $rows = $(columnName).parent().parent().parent().parent().find(' .dataRowContainer').get();
            $.each($rows, function(index, row) {
            row.sortKey = findSortKey($(row).find('.cell').eq(column));
            console.log(row.sortKey);
            });
            $rows.sort(function(a, b) {
                if (a.sortKey < b.sortKey) 
                    return -sortDirection;
                if (a.sortKey > b.sortKey) 
                    return sortDirection;
                return 0;
            });
            $('.data-container').empty();
            $.each($rows, function(index, row) {
                $('.data-container').append(row);
                    row.sortKey = null;
            });
            $(columnName).toggleClass('.sortedAsc');
        },
        searchData: function() {
            $('#searchBox').keyup(function(event) {
                function searchQuery(selector , query){
                    $('.dropDownContainer').empty();
                    $('.imgSearchBox').attr('src','assets/searchIcon.jpg');
                    query =   $.trim(query); //trim white space
                    query = query.replace(/ /gi, '|');
                    $(selector).each(function() {
                        if ($(this).text().search(new RegExp(query, "i")) < 0) {
                            $(this).hide().removeClass('visible');
                        } 
                        else {
                            $(this).show().addClass('visible');
                            $('.dropDownContainer').show();
                            $('.imgSearchBox').attr('src','assets/closeIcon.png');
                            $('.dropDownContainer').append($(this).find('.portfolioName:first').html());
                        }
                    });
                }
                $('.dataRowContainer').addClass('visible');
                console.log("this is :", $(this).val());
                if (event.keyCode == 27 || $(this).val() == '') { // if user presses esc key or removes all characters from search box , clear the drop-down area
                    $(this).val('');
                    $('.dropDownContainer').empty();
                    $('.imgSearchBox').attr('src','assets/searchIcon.jpg'); 
                    $('.dataRowContainer').removeClass('visible').show().addClass('visible');
                }
                else {
                    searchQuery('.dataRowContainer', $(this).val());
                }
            })
        },
        filterData: function(filterArray) { //filterArray is array of classes of filter buttons clicked
            function checkFilterPass(filterArray, rowAttr) {
                return rowAttr.some(function(v) {
                    return filterArray.includes(v);
                });
            }          
            /* As per our json data, the classes for a particular filter button is like "Fixed Income". 
            To compare the data class with classes in array, the white space should be replaced with "," .
            The array earlier looked like {"Fixed Income"} .Now it looks like {"Fixed", "Income"}. */ 
            $('.dataRowContainer').each(function() { 
                var rowAttr = $(this).attr('class').split(" ");
                var newFilterArray = filterArray.join(" ").split(" ");                
                if (checkFilterPass(newFilterArray, rowAttr)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    }
})();

$.mutualFundOperations.init();