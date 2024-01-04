# Extra Validation for screen flow
We can have the input validation for the input fields such as 
- Text
- Number
- Date
- Date & Time
- etc.,
- but not for the picklist or any additional condition that we generate from the same screen

## Here how we can have that extra set of validation to validate the input from the current screen
- Connect To Element
![image](https://github.com/Collabalist/Extra-Validation/assets/31879436/87f698ab-29f1-45d8-9af0-025658941520)
- we should use this only when we have to connect the forward progressing element - not the previous screen or previouse element. Connect to the previous element in the flow will re-create the whole element as on the next step
![image](https://github.com/Collabalist/Extra-Validation/assets/31879436/1ab68eab-33f9-4b84-8063-2d84c34c2a41)
- and that creates a stack of element so if we go previous on the screen, it will fetch the same set of elements again.

- Extra-Validation
-- this custom LWC component is only for the screen flow - and it is a blank empty field which can have the validation using the same screen elements or the elements which state hold the the value for the current screen
![image](https://github.com/Collabalist/Extra-Validation/assets/31879436/c3cfeb1a-4aed-427a-bcc0-8a733e9c3189)

-- we can also give the custom error message to show if not validated


# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
