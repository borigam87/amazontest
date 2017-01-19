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
  "duration": 8812058758,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_click_Sign_in()"
});
formatter.result({
  "duration": 851147509,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.enter_valid_user_name_password()"
});
formatter.result({
  "duration": 3501294195,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.i_am_logged_in()"
});
formatter.result({
  "duration": 162852512,
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
  "duration": 10478593607,
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
  "duration": 1316590862,
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
  "duration": 2523512639,
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
  "duration": 10189964075,
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
  "duration": 11817071944,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".a-size-medium\"}\nCommand duration or timeout: 10.53 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Divyas-MBP\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d46.0, platform\u003dMAC, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b53b2d90-1299-8c4e-8da3-04eeffedada5\n*** Element info: {Using\u003dcss selector, value\u003d.a-size-medium}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\n\tat Pages.AmazonUserLoginPage.productaddbasket(AmazonUserLoginPage.java:31)\n\tat stepdef.StepDefs.iAddIphoneCaseToMyBasket(StepDefs.java:69)\n\tat ✽.And I add iphone 7 case to my basket(amazonpagetests.feature:19)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".a-size-medium\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Divyas-MBP\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_111\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/bc/xqxdv6kx4jqc7c2jht3vggww0000gn/T/anonymous1722430205581137646webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///var/folders/bc/xqxdv6kx4jqc7c2jht3vggww0000gn/T/anonymous1722430205581137646webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefs.iCheckMyBasketTotal()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
});