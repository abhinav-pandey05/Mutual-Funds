var showBenchmarkData = false; //showBenchmarkData flag to check if the benchmark data is hidden or not. false means hidden
 var i =0 ;        
 counter =1 ;   
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
                // $('.refresh').on('click',function(){
                //     arr.length = 0;
                //     $.mutualFundOperations.filterData(arr);
                //     console.log("arr is ::", arr);
                //     $('.buttonsContainer').children().css({"background-color":" rgb(91, 103, 111)","color":"white"});
                    
                // })
                    var sticky = $('.headerContainer').offset().top;
                    window.onscroll = function() {
                        if (window.pageYOffset >= sticky) {
                            $('.headerContainer').addClass('stickyClass');
                        } else {
                            $('.headerContainer').removeClass('stickyClass');
                        }
                    };
                $('.hideFilter').on('click',function(){
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
                var htmlData = Handlebars.templates["preHeadingTemplate"](rowData.data);
                $("#preHeadingTemplate").append(htmlData);
                $.mutualFundOperations.loadTimeData(rowData, "tableDataRows");     
                $('.monthly').on('click', function() {
                    $("#dataRowTemplate").html("");  
                    $('.monthly').addClass('templateActive');  
                    $('.yearly').removeClass('templateActive');  
                    $.mutualFundOperations.loadTimeData(rowData, "tableDataRows");
                    $(".tabDescription").children("span").html(rowData.data.AsOfDateMonthly);                  
                });
                $('.quarterly').on('click', function() {
                    $("#dataRowTemplate").html(""); 
                    $('.yearly').addClass('templateActive');  
                    $('.monthly').removeClass('templateActive');    
                    $.mutualFundOperations.loadTimeData(rowData, "quarterlyData"); 
                    $(".tabDescription").children("span").html(rowData.data.AsOfDateQuarterly);
                });
                
                $('.benchmarkButton').on('click', function() {   
                    // $.mutualFundOperations.showFunBenchmarkData(); 
                });

                $('.sortable').on('click',function() {
                    var column = $(this).attr("data-column-number");                  
                    $.mutualFundOperations.sortingData(this,column);
                })
                $.mutualFundOperations.searchData();
                $('.buttonsContainer').children().on('click',function() {
                    var filterButton = $(this).attr('class'); 
                    if(jQuery.inArray( filterButton, arr)===-1){
                        arr.push(filterButton); 
                        $(this).attr("data-activeButton","buttonActive");
                    }
                    else{
                    var itemtoRemove = filterButton;
                    arr.splice($.inArray(itemtoRemove, arr),1);
                    $(this).attr("data-activeButton","buttonInactive");
                    }                          
                    $.mutualFundOperations.filterData(arr);
                })
            });
        },
        loadTimeData: function(rowData, x) {
            var html = Handlebars.templates[x](rowData.data);
            $("#dataRowTemplate").append(html);
            showBenchmarkData = false;
            // if (showBenchmarkData){
            //     $(".benchmarkData").show();
            // } else {
            //     $(".benchmarkData").hide();
            // }
            $.mutualFundOperations.showFunBenchmarkData();
        },
        showFunBenchmarkData: function() {
            if (showBenchmarkData === true) {
            $(".benchmarkData").show();
            $('.benchmarkButton').attr("value","Hide Benchmark");
            showBenchmarkData = false;
            } else {
                $(".benchmarkData").hide();
                showBenchmarkData = true;
            }
        },
        sortingData: function(columnName,column) {
            var findSortKey = function($cell) {
                return $cell.text().toUpperCase();
            };
            var sortDirection = $(columnName).hasClass('.sorted-asc') ? -1 : 1;
            var $rows = $(columnName).parent().parent().parent().parent().find(' .dataRowContainer').get();
            
            $.each($rows, function(index, row) {
            row.sortKey = findSortKey($(row).find('.cell').eq(column));
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
            $(columnName).toggleClass('.sorted-asc');
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
                if (event.keyCode == 27 || $(this).val() == '') {
                    $(this).val('');
                    // console.log("event is :", this);
                    $('.dropDownContainer').empty();
                    $('.imgSearchBox').attr('src','assets/searchIcon.jpg'); 
                    $('.dataRowContainer').removeClass('visible').show().addClass('visible');
                }
                else {
                    searchQuery('.dataRowContainer', $(this).val());
                }
            })
        },
        filterData: function(filterArray) { 
            function checkFilterPass(filterArray, rowAttr) {
                return rowAttr.some(function(v) {
                    return filterArray.includes(v);
                });
            }          
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