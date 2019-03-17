/*global angular,jsPDF*/
(function () {
  'use strict';

  angular.module('greyForms.serviceSaveFile', [])
    .factory('saveFile', function () {
      var pdf = null;
      // Letter paper size in points: 612x792
      var page = {
        font: 'helvetica',
        fullWidth: 612,
        fullHeight: 792,
        axisXMin: 40,
        axisXData: 200,
        axisY: 0,
        axisYInitial: 55,
        axisYDefaultHeight: 17,
        axisYNewPage: 40,
        axisYHeight: 0
      };
      var newLine = function () {
        // When reach the end of the page
        if (page.axisY >= page.axisYMax) {
          pdf.addPage();
          // Reset the Y cursor to the beginning of the page
          page.axisY = page.axisYNewPage;
        } else {
          page.axisY = page.axisY + page.axisYHeight;
        }
      };
      var drawLine = function (offsetFix) {
        // This offset is for drawing the line upper if need it
        page.axisY = page.axisY - (offsetFix || 0);
        pdf.setDrawColor(150, 150, 150);
        pdf.line(page.axisXMin, page.axisY, page.axisXMax, page.axisY);
        pdf.setDrawColor(0, 0, 0);
        newLine();
      };
      var dataLine = function (label, text) {
        pdf.setFontSize(8.5);
        pdf.setFontStyle('normal');
        pdf.text(page.axisXMin, page.axisY, label);
        pdf.text(page.axisXData, page.axisY, pdf.splitTextToSize(text, page.axisXMax - page.axisXData));
        newLine();
      };
      var footLine = function (text) {
        pdf.setFontSize(8);
        pdf.setFontStyle('normal');
        pdf.text(page.axisXMin, page.axisY, pdf.splitTextToSize(text, page.contentWidth));
        newLine();
      };
      var headLine = function (label) {
        pdf.setFontSize(11);
        pdf.setFontStyle('bold');
        newLine();
        pdf.text(page.axisXMin, page.axisY, label);
        newLine();
      };
      var drawExtraInfo = function (labels, extraInfo) {
        var width = page.contentWidth / 7;
        pdf.setFontSize(8);
        newLine();
        pdf.text(page.axisXMin, page.axisY, labels.office); // column 1
        pdf.text(page.axisXMin + width, page.axisY, labels.gl); // column 2
        pdf.text(page.axisXMin + (width * 2), page.axisY, labels.job); // column 3
        pdf.text(page.axisXMin + (width * 3), page.axisY, labels.workCode); // column 4
        pdf.text(page.axisXMin + (width * 4), page.axisY, labels.amount); // column 5
        pdf.text(page.axisXMin + (width * 5), page.axisY, labels.invoice); // column 6
        pdf.text(page.axisXMin + (width * 6), page.axisY, labels.po); // column 7
        angular.forEach(extraInfo, function (value) {
          newLine();
          pdf.text(page.axisXMin, page.axisY, pdf.splitTextToSize(value.office, width));
          pdf.text(page.axisXMin + width, page.axisY, pdf.splitTextToSize(value.gl, width));
          pdf.text(page.axisXMin + (width * 2), page.axisY, pdf.splitTextToSize(value.job, width));
          pdf.text(page.axisXMin + (width * 3), page.axisY, pdf.splitTextToSize(value.workCode, width));
          pdf.text(page.axisXMin + (width * 4), page.axisY, pdf.splitTextToSize(value.amount, width));
          pdf.text(page.axisXMin + (width * 5), page.axisY, pdf.splitTextToSize(value.invoice, width));
          pdf.text(page.axisXMin + (width * 6), page.axisY, pdf.splitTextToSize(value.po, width));
        });
        newLine();
      };
      var drawSignatures = function (authOne, authTwo) {
        // A 3-column grid for signatures
        var width = page.contentWidth / 3;
        pdf.setDrawColor(150, 150, 150);
        pdf.line(page.axisXMin, page.axisY, page.axisXMin + width, page.axisY);
        pdf.line(page.axisXMax - width, page.axisY, page.axisXMax, page.axisY);
        pdf.setDrawColor(0, 0, 0);
        newLine();
        // The '44' is an approximate width of a date field
        pdf.text(page.axisXMin, page.axisY, authOne.label);
        pdf.text(page.axisXMin + width - 44, page.axisY, authOne.string);
        pdf.text(page.axisXMax - width, page.axisY, authTwo.label);
        pdf.text(page.axisXMax - 44, page.axisY, authTwo.string);
        newLine();
      };
      var drawFooter = function (foot) {
        // Very fixed drawing
        pdf.setDrawColor(150, 150, 150);
        pdf.text(page.axisXMin, page.axisY, foot.usd);
        pdf.line(page.axisXMin + 50, page.axisY, page.axisXMax, page.axisY);
        newLine();
        pdf.text(page.axisXMin, page.axisY, foot.rate);
        pdf.line(page.axisXMin + 20, page.axisY, page.axisXMin + 110, page.axisY);
        pdf.text(page.axisXMin + 120, page.axisY, foot.date);
        pdf.line(page.axisXMin + 165, page.axisY, page.axisXMax, page.axisY);
        newLine();
        pdf.text(page.axisXMin, page.axisY, foot.tradeId);
        pdf.line(page.axisXMin + 80, page.axisY, page.axisXMax, page.axisY);
        pdf.setDrawColor(0, 0, 0);
        newLine();
      };
      var toPdf = function (model) {
        // shorcut
        var data = model.data;
        pdf = new jsPDF('p', 'pt', 'letter');
        page.contentWidth = page.fullWidth - (2 * page.axisXMin);
        page.axisXMax = page.fullWidth - page.axisXMin;
        page.axisYMax = page.fullHeight - page.axisXMin;
        // Reset the axisY in case of user re-print the doc
        page.axisY = page.axisYInitial;
        page.axisYHeight = page.axisYDefaultHeight;
        // Logo
        pdf.setFont(page.font);
        pdf.addImage(model.logo.datauri, model.logo.datauritype, page.axisXMin, 30, model.logo.width, model.logo.height);
        // Title
        pdf.setFontSize(15);
        pdf.text(120, 48, data.title);
        // Data
        drawLine();
        dataLine(data.requestId.label, data.requestId.value);
        dataLine(data.requestDate.label, data.requestDate.string);
        headLine(model.headlines.prepared);
        dataLine(data.name.label, data.name.value);
        dataLine(data.signature.label, data.signature.value);
        dataLine(data.telephone.label, data.telephone.value);
        dataLine(data.reasonforPayment.label, data.reasonforPayment.value);
        headLine(model.headlines.debit);
        dataLine(data.debitBank.label, data.debitBank.value);
        dataLine(data.debitCompany.label, data.debitCompany.value);
        dataLine(data.debitAccount.label, data.debitAccount.value);
        dataLine(data.amount.label, data.amount.value);
        if (!data.usWired) {
          dataLine(data.currency.label, data.currency.value);
        }
        dataLine(data.amountWords.label, data.amountWords.value);
        headLine(model.headlines.bank);
        dataLine(data.accountName.label, data.accountName.value);
        dataLine(data.accountNumber.label, data.accountNumber.value);
        dataLine(data.bankName.label, data.bankName.value);
        dataLine(data.address.label, data.address.value);
        dataLine(data.cityAndCountry.label, data.cityAndCountry.value);
        if (data.usWired) {
          dataLine(data.aba.label, data.aba.value);
        }
        dataLine(data.swiftCode.label, data.swiftCode.value);
        dataLine(data.iban.label, data.iban.value);
        dataLine(data.otherInformation.label, data.otherInformation.value);
        drawExtraInfo(model.extrainfolabels, model.data.extraInfo);
        newLine();
        drawSignatures(data.authOne, data.authTwo);
        page.axisYHeight = 15;
        newLine();
        footLine(model.footnotes.below);
        drawLine(7);
        footLine(model.footnotes.trade);
        drawFooter(model.footnotes);
        footLine(model.footnotes.supply);
        pdf.save(model.file.name);
      };
      return {
        toPdf: toPdf
      };
    });
}());