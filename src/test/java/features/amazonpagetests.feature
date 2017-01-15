Feature: Shop online at Amazon

  @AmazonProductSearch
  Scenario: Sign into Amazon
    Given am on Amazon HomePage
    When I click Sign-in
    And enter valid user name password
    Then I am logged in

  @AmazonProductSearch
  Scenario: Search for product and verify the first result is related to your product
    Given am on Amazon HomePage and loggedin
    When I search for iphone 7 case
    Then the first result has the word  iphone 7 in it

  @AmazonProductSearch
  Scenario: verify that the original price of the product matches the price seen in the basket
    Given am on Amazon HomePage and loggedin
    And I add iphone 7 case to my basket
    When I check my basket total
    Then it should match the price of iphone 7 case