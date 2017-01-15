$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("amazonpagetests.feature");
formatter.feature({
  "line": 1,
  "name": "Shop online at Amazon",
  "description": "",
  "id": "shop-online-at-amazon",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Sign into Amazon",
  "description": "",
  "id": "shop-online-at-amazon;sign-into-amazon",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@AmazonProductSearch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "am on Amazon HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click Sign-in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enter valid user name password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.amazon_co_uk_is_open()"
});
formatter.result({
  "duration": 7905302186,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_click_Sign_in()"
});
formatter.result({
  "duration": 997605574,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.enter_valid_user_name_password()"
});
formatter.result({
  "duration": 3509638485,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_am_logged_in()"
});
formatter.result({
  "duration": 189427247,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search for product and verify the first result is related to your product",
  "description": "",
  "id": "shop-online-at-amazon;search-for-product-and-verify-the-first-result-is-related-to-your-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@AmazonProductSearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "am on Amazon HomePage and loggedin",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I search for iphone 7 case",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the first result has the word  iphone 7 in it",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.amazon_co_uk_is_open_and_iam_loggdin()"
});
formatter.result({
  "duration": 11905094320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    }
  ],
  "location": "StepDefs.iSearchForIphoneCase(int)"
});
formatter.result({
  "duration": 925221559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 38
    }
  ],
  "location": "StepDefs.theFirstResultHasTheWordIphoneInIt(int)"
});
formatter.result({
  "duration": 2246620593,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verify that the original price of the product matches the price seen in the basket",
  "description": "",
  "id": "shop-online-at-amazon;verify-that-the-original-price-of-the-product-matches-the-price-seen-in-the-basket",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@AmazonProductSearch"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "am on Amazon HomePage and loggedin",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I add iphone 7 case to my basket",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I check my basket total",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "it should match the price of iphone 7 case",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.amazon_co_uk_is_open_and_iam_loggdin()"
});
formatter.result({
  "duration": 11601492391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 13
    }
  ],
  "location": "StepDefs.iAddIphoneCaseToMyBasket(int)"
});
formatter.result({
  "duration": 7597754485,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.iCheckMyBasketTotal()"
});
formatter.result({
  "duration": 1998954050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 36
    }
  ],
  "location": "StepDefs.itShouldMatchThePriceOfIphoneCase(int)"
});
formatter.result({
  "duration": 110569,
  "status": "passed"
});
});