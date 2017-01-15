package stepdef;

import Pages.AmazonHomePage;
import Pages.AmazonLoginPage;
import Pages.AmazonUserLoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

/**
 * Created by Divya on 15/01/2017.
 */
public class StepDefs  {

    AmazonHomePage amazonHomePage = new AmazonHomePage();
    AmazonLoginPage amazonLoginPage = new AmazonLoginPage();
    AmazonUserLoginPage amazonUserLoginPage = new AmazonUserLoginPage();

    @Given("^am on Amazon HomePage$")
    public void amazon_co_uk_is_open() throws Throwable {
        amazonHomePage.getAmazonHomePage();
        Assert.assertEquals(amazonHomePage.homeTitle, amazonHomePage.getTitle());
    }

    @Given("^am on Amazon HomePage and loggedin$")
    public void amazon_co_uk_is_open_and_iam_loggdin() throws Throwable {
        amazonHomePage.getAmazonHomePage();
        Assert.assertEquals(amazonHomePage.homeTitle, amazonHomePage.getTitle());
        amazonHomePage.goToAmazonLoginPage();
        amazonUserLoginPage.Login("divya.gade10@gmail.com","Harshith123");
    }

    @When("^I click Sign-in$")
    public void i_click_Sign_in() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        amazonHomePage.goToAmazonLoginPage();
        Assert.assertEquals(amazonLoginPage.sintitle,amazonLoginPage.getTitle());
    }

    @When("^enter valid user name password$")
    public void enter_valid_user_name_password() throws Throwable {
        amazonUserLoginPage.Login("divya.gade10@gmail.com","Harshith123");
    }

    @Then("^I am logged in$")
    public void i_am_logged_in() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(amazonLoginPage.verifyWelcomeText().contains("Hello, divya"));

    }

    @When("^I search for iphone (\\d+) case$")
    public void iSearchForIphoneCase(int arg0) throws Throwable {
        amazonUserLoginPage.usersearchProduct();
    }

    @Then("^the first result has the word  iphone (\\d+) in it$")
    public void theFirstResultHasTheWordIphoneInIt(int arg0) throws Throwable {
        Assert.assertTrue(amazonUserLoginPage.itemText().contains("iPhone 7"));

    }

    @And("^I add iphone (\\d+) case to my basket$")
    public void iAddIphoneCaseToMyBasket(int arg0) throws Throwable {
        amazonUserLoginPage.usersearchProduct();
        amazonUserLoginPage.productaddbasket();
    }

    @When("^I check my basket total$")
    public void iCheckMyBasketTotal() throws Throwable {
      amazonUserLoginPage.getCart().click();
    }

    @Then("^it should match the price of iphone (\\d+) case$")
    public void itShouldMatchThePriceOfIphoneCase(int arg0) throws Throwable {
        Assert.assertEquals(amazonUserLoginPage.getCartPrice().contains(amazonUserLoginPage.getItemPrice()), "prices are equal");
       amazonUserLoginPage.deleteCartItem();
    }
}
