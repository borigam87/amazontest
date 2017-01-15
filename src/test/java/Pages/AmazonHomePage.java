package Pages;

import driver.DriverFactory;
import org.openqa.selenium.WebElement;

/**
 * Created by Divya on 15/01/2017.
 */
public class AmazonHomePage extends DriverFactory {
    public static String url = "http://www.amazon.co.uk";
    public static String homeTitle = "Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more";
    public static String llink = "a#nav-link-yourAccount";

    public AmazonHomePage getAmazonHomePage(){
        getDriver().get(url);
        waitForPageLoad();
        return new AmazonHomePage();
    }

    public AmazonLoginPage goToAmazonLoginPage(){
        WebElement loginlink = driver.findElementByCssSelector(llink);
        loginlink.click();
        return new AmazonLoginPage();
    }

}

