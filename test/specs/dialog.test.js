const dialog = require('../pageObjects/dialog.page');
const expect = require('chai').expect;


describe('Dialog', ()=> {

    beforeEach(() =>{

    });


    it('Verify that the text entry dialog username & password fields are editable', () => {
        dialog.appBtn.click();
        dialog.alertDialogsBtn.click();
        dialog.textEntryDialogBtn.click();

        dialog.nameField.addValue("TESTING CLEAR VALUE");
        dialog.nameField.clearValue();
        dialog.nameField.addValue("Teste Thales");

        dialog.passwordField.clearValue();
        dialog.passwordField.addValue("TestePassword");

        let text = dialog.nameField.getText();
        console.log(text)

        expect(text).equal("Teste Thales");

        dialog.okBtn.click();
    })



    it('Verify that the app adjust when orientation is switched', () => {
        console.log(driver.getOrientation());

        driver.setOrientation('LANDSCAPE');

        driver.saveScreenshot('./screenshots/landscape.png')
        dialog.appBtn.click(); 
        driver.setOrientation('PORTRAIT');
        driver.back();
        driver.saveScreenshot('./screenshots/portrait.png')

    })

    it('Verify Timeouts', () => {
        // driver.setImplicitTimeout(10000);
        // driver.setTimeouts(10000);
        driver.pause(10000);

        dialog.viewBtn.click;
        dialog.textEntryDialogBtn.click();

    })

    it('Verify the repeat alarm options has attribute checked set to true when selected', () => {
        let isChecked, text;

        dialog.appBtn.click();
        dialog.alertDialogsBtn.click();
        dialog.repeatAlarmBtn.click();

        text = dialog.weekdayCheckbox(0).getText();
        expect(text).equal('Every Monday')

        isChecked = dialog.weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('false')

        dialog.weekdayCheckbox(0).click();
        isChecked = dialog.weekdayCheckbox(0).getAttribute('checked');
        expect(isChecked).equal('true')
    })


    it('Verify isEnabled, isSelected, isDisplayed', () => {
        dialog.viewBtn.click();
        driver.touchAction([
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release',
            { action: 'press', x: 500, y: 1400 },
            { action: 'moveTo', x: 500, y: 300 },
            'release'
        ])

        dialog.tabsBtn.click();
        dialog.contentById.click();

        let isEnabled, isSelected, isDisplayed

        for(i = 0; i < 3; i++) {

            isEnabled = dialog.tabs[i].isEnabled();
            isSelected = dialog.tabs[i].isSelected();
            isDisplayed = dialog.tabs[i].isDisplayed();

            console.log(`Tab ${i+1}`)
            console.log('isEnabled', isEnabled)
            console.log('isSelected', isSelected)
            console.log('isDisplayed', isDisplayed)

            if (isEnabled && isSelected){
                console.log("Tab Details 1:", dialog.tab1Details.isDisplayed());
                console.log("Tab Details 2:", dialog.tab2Details.isDisplayed());
                console.log("Tab Details 3:", dialog.tab3Details.isDisplayed());
            }
        }
        
    })

    afterEach(() =>{
        driver.reset();
    });

})

