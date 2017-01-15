package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Created by Divya on 15/01/2017.
 */
public class AmazonUserLoginPage extends AmazonLoginPage {
    public static String search = "input#twotabsearchtextbox";
    public static String sbttn = "input.nav-input";
    public static String link = "a.a-link-normal.s-access-detail-page.a-text-normal";
    public static String add = "input#add-to-cart-button";
    public static String itemcss = ".a-size-medium";
    public static String cart = "nav-cart";
    public static String cartPrice = "span.sc-price";
    public static String itemPrice = "span.a-size-medium";
    public static String deleteItem = "input[value=Delete]";

    public void usersearchProduct() {
        WebElement searchbox = driver.findElementByCssSelector(search);
        searchbox.sendKeys("iphone 7 case");
        WebElement searchbotton = driver.findElementByCssSelector(sbttn);
        searchbotton.click();
    }
    public static String itemText(){
        return driver.findElementByCssSelector(itemcss).getText();
    }

        public void productaddbasket(){
        WebElement firstlink = driver.findElementByCssSelector(itemcss);
        firstlink.click();

        WebElement addtobasket = driver.findElementByCssSelector(add);
        addtobasket.click();
    }

    public WebElement getCart(){
           return  driver.findElement(By.id(cart));
    }

    public String getCartPrice(){
        return driver.findElementByCssSelector(cartPrice).getText();
    }

    public String getItemPrice(){
        return driver.findElementByCssSelector(itemPrice).getText();
    }

    public void deleteCartItem(){
        driver.findElementByCssSelector(deleteItem).click();
    }

}
