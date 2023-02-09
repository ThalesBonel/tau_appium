const dialog = require('../pageObjects/dialog.page');
const expect = require('chai').expect;
const data = require('../../data/data');
const { getDialogModalTitle } = require('../pageObjects/dialog.page');

describe('Cancel Dialogs', () => {

    before(() => {
        dialog.appBtn.click();
        dialog.alertDialogsBtn.click();
    });

    it('Verify that the cancel dialog short message is correct and displays', () => {
        dialog.okCancelDialogWithMsgBtn.click();
        //console.log(`SHORT MSG ${dialog.getDialogModalTitle()}`)
        expect(dialog.getDialogModalTitle()).equal(data.textOkCancelDialogWithMsg.title);
        dialog.dialogOkBtn.click();
    })

    it('Verify that the cancel dialog long msg is correct and displays', () => {
        dialog.okCancelDialogLongMsgBtn.click();
        //console.log(`LONG MSG ${dialog.getDialogModalTitle()}`)
        expect(dialog.getDialogModalTitle()).equal(data.longCancelDialog.title);
        expect(dialog.getDialogMsg()).equal(data.longCancelDialog.msg);
        dialog.dialogOkBtn.click();
    })

    it('Verify that the cancel dialog ultra long msg is correct and displays', () => {
        dialog.okCancelDialogUltraLongMsgBtn.click();
        expect(dialog.getDialogModalTitle()).equal(data.ultraLongCancelDialog.title);
        expect(dialog.getDialogMsg()).equal(data.ultraLongCancelDialog.msg);
        dialog.dialogOkBtn.click();
    })


})