(function () {
    "use strict";
    var messageBanner;
    
    Office.initialize = function (reason) {
        $(document).ready(function () {
            // Initialize the FabricUI notification mechanism and hide it
            var element = document.querySelector('.ms-MessageBanner');
            messageBanner = new fabric.MessageBanner(element);
            messageBanner.hideBanner();

            // If not using Excel 2016, use fallback logic.
            if (!Office.context.requirements.isSetSupported('ExcelApi', '1.1')) {
                $("#template-description").text("This sample will display the value of the cells that you have selected in the spreadsheet.");
                $('#button-text').text("Display!");
                $('#button-desc').text("Display the selection");

                $('#highlight-button').click(displaySelectedCells);
                return;
            }

            $('#highlight-button').click(buttonHandler);

            //dragula([document.getElementById('sortable')]);
        });
    };

    function buttonHandler() {
        Excel.run(function (ctx) {
            var sourceRange = ctx.workbook.getSelectedRange().load("values, rowCount, columnCount, address, addressLocal");
            var currentWorkSheet = ctx.workbook.worksheets.getActiveWorksheet();
            return ctx.sync()
                .then(function () {
                    var reg = /(.*)!([A-Z][0-9]+)(:([A-Z][0-9]+))?/g;
                    var matches = reg.exec(sourceRange.address);

                    var firstCell = getExcelCell(matches[2]);
                    var arr = sourceRange.values;

                    for (var col = 0; col < arr.length; col++) {
                        for (var row = 0; row < arr[col].length; row++) {
                            var cep = arr[col][row].toString();
                            setCepData(ctx, currentWorkSheet, cep, firstCell.row + col, firstCell.column + row);
                        }
                    }
                }).then(ctx.sync);
        }).catch(errorHandler);
    }

    function setCepData(ctx, worksheet, cep, row, col) {
        getCep(cep).then(function (data) {
            var arr = [];
            arr.push(data.logradouro);
            arr.push(data.bairro);
            arr.push(data.localidade);
            arr.push(data.uf);

            for (var i = 0; i < arr.length; i++) {
                var index = i + 1;
                var currentCell = worksheet.getCell(row, parseInt(col + index));
                currentCell.values = [[arr[i]]];
                ctx.sync();
            }
        }).catch(function (x) { });
    }

  

    function displaySelectedCells() {
        Office.context.document.getSelectedDataAsync(Office.CoercionType.Text,
            function (result) {
                if (result.status === Office.AsyncResultStatus.Succeeded) {
                    showNotification('The selected text is:', '"' + result.value + '"');
                } else {
                    showNotification('Error', result.error.message);
                }
            });
    }
    
    function errorHandler(error) {
        // Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
        showNotification("Error", error);
        console.log("Error: " + error);
        if (error instanceof OfficeExtension.Error) {
            console.log("Debug info: " + JSON.stringify(error.debugInfo));
        }
    }
    
    function showNotification(header, content) {
        $("#notification-header").text(header);
        $("#notification-body").text(content);
        messageBanner.showBanner();
        messageBanner.toggleExpansion();
    }
})();
