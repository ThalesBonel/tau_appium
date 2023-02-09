class Dialog {

    get appBtn() {return $('//android.widget.TextView[@content-desc="App"]')}
    get alertDialogsBtn() {return $('//android.widget.TextView[@content-desc="Alert Dialogs"]')}

    get okCancelDialogWithMsgBtn() {return $('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]')}

    get dialogModalTitle() {return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')}
    get dialogMsg() {return $('//android.widget.TextView[@resource-id="android:id/message"]')}
    get dialogOkBtn() {return $('//android.widget.Button[@resource-id="android:id/button1"]')}

    get okCancelDialogLongMsgBtn() {return $('//android.widget.Button[@content-desc="OK Cancel dialog with a long message"]')}
    get okCancelDialogUltraLongMsgBtn() {return $('//android.widget.Button[@content-desc="OK Cancel dialog with ultra long message"]')}

    get textEntryDialogBtn() {return $('//android.widget.Button[@content-desc="Text Entry dialog"]')}
    get nameField() {return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]')}
    get passwordField() {return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]')}

    get okBtn() {return $('//android.widget.Button[@resource-id="android:id/button1"]')}
    get cancelBtn() {return $('//android.widget.Button[@resource-id="android:id/button2"]')}

    get userNameField() {return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]')}
    get everyMondayBtn() {return $('//android.widget.CheckedTextView[@index=0]')}
    get days() {return $$('//android.widget.CheckedTextView')}

    get viewBtn() {return $('//android.widget.TextView[@content-desc="Views"]')}
    get repeatAlarmBtn() {return $('//android.widget.Button[@content-desc="Repeat alarm"]')}

    get tabsBtn() {return $('//android.widget.TextView[@content-desc="Tabs"]')}
    get contentById() {return $('//android.widget.TextView[@content-desc="1. Content By Id"]')}

    get tabs() {return $$('android.widget.LinearLayout')}
    get tab1Details() {return $('~tab1')}
    get tab2Details() {return $('~tab2')}
    get tab3Details() {return $('~tab3')}

    weekdayCheckbox(index) {
        return $(`//android.widget.CheckedTextView[@index=${index}]`)
    }

    getDialogModalTitle() {
        let title = this.dialogModalTitle.getText();
        return title;
    }

    getDialogMsg() {
        let msg = this.dialogMsg.getText();
        return msg;
    }

    
}

module.exports = new Dialog();