package Pages;

import org.openqa.selenium.WebElement;

/**
 * Created by Divya on 15/01/2017.
 */
public class AmazonLoginPage extends AmazonHomePage {

    public static String umail = "input#ap_email";
    public static String upass = "input#ap_password";
    public static String sbotton = "input#signInSubmit";
    public static String sintitle = "Amazon Sign In";
    public static String title = "a[data-nav-ref*=nav_ya_signin]";

    public AmazonUserLoginPage Login(String username,String password){
        WebElement uname = driver.findElementByCssSelector(umail);
        uname.sendKeys(username);
        WebElement pwd = driver.findElementByCssSelector(upass);
        pwd.sendKeys(password);
        WebElement signin = driver.findElementByCssSelector(sbotton);
        signin.click();
        return new AmazonUserLoginPage();
    }
    public String verifyWelcomeText(){
        return driver.findElementByCssSelector(title).getText();
    }

}
