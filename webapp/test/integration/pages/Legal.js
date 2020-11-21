sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "Legal";
	Opa5.createPageObjects({
		onTheHomePage: {

			assertions: {
				iShouldSeeTheHomeView: function () {
					return this.waitFor({
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(sViewName,"The Legal view was displayed");
						},
						errorMessage: "The Legal view was not displayed"
					});
				}
			}
		}
	});
});