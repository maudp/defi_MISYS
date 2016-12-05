# defi_MISYS

The input component will create a customize input text with a label that you can define with a attribute named 'key'.

Just use in your form this attribute and code:

<form ng-app="input-components" ng-controller="InputCtrl as ctrl" ng-submit="save()">
	<input-text key="..."></input-text>
	<input type="submit" value="Save" />
</form>

You can add as many input-text tags as you want in the form.
The value of input submit button can be changed by any word.

#Dependances

To load the file, you will add this script:

<script type="text/javascript" src="input.controller.js"></script>
<script type="text/javascript" src="input.component.js"></script>

JQuery and Angular (version 1.5.9) will be used in the scripts below.

## Authors
Nicolas RUBIO BELANDO
Alpha Diallo
Graziani Verberd
#ETNA