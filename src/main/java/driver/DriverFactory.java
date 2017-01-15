package driver;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import java.util.concurrent.TimeUnit;

/**
 * Created by Divya on 15/01/2017.
 */
public class DriverFactory {
    protected static FirefoxDriver driver;

   @BeforeMethod
   public static FirefoxDriver getDriver() {
       driver = new FirefoxDriver();
       driver.manage().window().maximize();
       return driver;
   }

    public void waitForPageLoad(){
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    public String getTitle(){
        return driver.getTitle();
    }
    @AfterMethod
    public static void quit(){
        driver.quit();
    }

}
