package stepdef;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;



import java.net.InetAddress;

import static driver.DriverFactory.getDriver;
import static driver.DriverFactory.quit;

/**
 * Created by Divya on 15/01/2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false, strict = true, features = "src/test/java/features/", tags = {"*.*"}, monochrome = true, format = {
        "pretty", "html:target/cucumber-htmlreport/amazontest",
})
public class TestRunner {

    @Before
    public static void setUp(){
        try {
            System.out.println(" **********Calling set up in runner");
            System.out.println("Running on machine : "
                    + InetAddress.getLocalHost().getHostName());

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

   @After
    public static void tearDown() {
        quit();

    }
}
