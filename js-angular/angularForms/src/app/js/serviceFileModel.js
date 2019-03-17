/*global angular*/
(function () {
  'use strict';

  /* The model contains all the information, needed both in the web and the pdf
  in this way the values and also the labels are in one place */
  angular.module('greyForms.serviceFileModel', [])
    .factory('fileModel', function () {
      var model = {
        file: {
          name: ''
        },
        logo: {
          datauri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAeCAYAAADaW7vzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUExMzY5MUY4REMzMTFFM0IzRURCMjI5NDAxOEQxRDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUExMzY5MjA4REMzMTFFM0IzRURCMjI5NDAxOEQxRDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQTEzNjkxRDhEQzMxMUUzQjNFREIyMjk0MDE4RDFENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTEzNjkxRThEQzMxMUUzQjNFREIyMjk0MDE4RDFENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po2Qk1AAAApVSURBVHja7FoNUFTX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',
          datauritype: 'PNG',
          url: 'logo-grey.png',
          width: 67,
          height: 20
        },
        footnotes: {
          below: 'Do not write below this line. For accounting use only',
          trade: 'Trade information (To be completed by Treasury Department)',
          usd: 'USD Amount',
          rate: 'Rate',
          date: 'Value Date',
          tradeId: 'Trade Confirmation #',
          supply: '*Please supply all original supporting documentation related to this wire request. Insufficient documentation will result in the return of this wire request to the requestor.'
        },
        headlines: {
          prepared: 'Prepared by',
          debit: 'Debit Account',
          bank: 'Bank Information'
        },
        dateOptions: {
          formatInput: 'MM/dd/yyyy',
          formatFile: 'yyyymmdd',
          showWeeks: false
        },
        extrainfolabels: {
          office: 'Office',
          gl: 'GL #',
          job: 'Job #',
          workCode: 'Work Code',
          amount: 'Amount',
          invoice: 'Invoice #',
          po: 'P.O. (If Applicable)'
        },
        data: {
          usWired: null,
          title: '',
          requestId: {
            label: 'Wire Request #',
            value: ''
          },
          requestDate: {
            label: 'Date of request',
            value: null,
            string: ''
          },
          name: {
            label: 'Name',
            value: ''
          },
          signature: {
            label: 'Signature',
            value: ''
          },
          telephone: {
            label: 'Telephone',
            value: ''
          },
          reasonforPayment: {
            label: 'Reason for payment',
            value: '',
            help: 'Max characters: 256',
            max: 256
          },
          debitBank: {
            label: 'Bank Name',
            value: 'HSBC Bank USA'
          },
          debitCompany: {
            label: 'Company Name',
            value: 'Global Group, Inc'
          },
          debitAccount: {
            label: 'Account Name',
            value: 'Master Account'
          },
          currency: {
            label: 'Currency',
            value: ''
          },
          amount: {
            label: 'Amount',
            value: 0
          },
          amountWords: {
            label: 'Amount in words',
            value: ''
          },
          accountName: {
            label: 'Account Name',
            value: ''
          },
          accountNumber: {
            label: 'Account Number',
            value: ''
          },
          bankName: {
            label: 'Bank Name',
            value: ''
          },
          address: {
            label: 'Address',
            value: ''
          },
          cityAndCountry: {
            label: 'City and Country',
            value: ''
          },
          aba: {
            label: 'ABA #',
            value: ''
          },
          swiftCode: {
            label: 'Swift Code',
            value: ''
          },
          iban: {
            label: 'IBAN',
            value: ''
          },
          otherInformation: {
            label: 'Other Information',
            value: ''
          },
          authOne: {
            label: 'Authorized Signature #1',
            value: null,
            string: ''
          },
          authTwo: {
            label: 'Authorized Signature #2',
            value: null,
            string: ''
          },
          extraInfo: []
        }
      };
      var errorMessages = null;
      var addExtraInfoLine = function () {
        var extraInfo = {
          office : '',
          gl : '',
          job : '',
          workCode : '',
          amount : '',
          invoice : '',
          po : ''
        };
        model.data.extraInfo.push(extraInfo);
      };
      /* Set final values when printing the document */
      var setFinalValues = function () {
        var today = new Date().format(model.dateOptions.formatFile);
        model.file.name = model.data.name.value.replace(/\s/g, '') + '_' + today + '.pdf';
        // var 'today' reused
        today = model.dateOptions.formatInput.toLowerCase();
        model.data.requestDate.string = model.data.requestDate.value.format(today);
        model.data.authOne.string = model.data.authOne.value.format(today);
        model.data.authTwo.string = model.data.authTwo.value.format(today);
      };
      var validateAmounts = function () {
        var amountSum = 0;
        angular.forEach(model.data.extraInfo, function (info) {
          amountSum = amountSum + info.amount.toNumber();
        });
        if (model.data.amount.value.toNumber() === amountSum) {
          return true;
        }
        errorMessages.push('Please, check Amount column. The sum of this column must be equal to Debit amount field');
        return false;
      };
      var valid = function () {
        setFinalValues();
        errorMessages = [];
        return (validateAmounts()) ? true : false;
      };
      var getErrorMessages = function () {
        return errorMessages;
      };
      var init = function (data) {
        // Set some vars with the info coming from the server
        var now = new Date();
        model.data.requestDate.value = now;
        model.data.authOne.value = now;
        model.data.authTwo.value = now;
        model.data.usWired = data.values.usWired;
        model.data.title = data.values.title;
        model.data.requestId.value = data.values.requestId;
        // Adds at least one row
        addExtraInfoLine();
        return model;
      };
      return {
        init: init,
        valid: valid,
        getErrorMessages: getErrorMessages,
        addExtraInfoLine: addExtraInfoLine
      };
    });
}());